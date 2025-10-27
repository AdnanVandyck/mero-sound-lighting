// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// /** -------------------------------------------------------
//  *  0) CONFIG
//  * ------------------------------------------------------*/
// const THUMB_VERSION = "v1";      // bump to invalidate all cached thumbs
// const SEEK_TIME = 0.3;           // seconds to skip past black frames
// const JPEG_QUALITY = 0.75;       // 0..1
// const CACHE_PREFIX = "thumb:";   // localStorage key prefix

// /** -------------------------------------------------------
//  *  1) YOUR VIDEOS
//  * ------------------------------------------------------*/
// const videos = [
//   { id: "vid1", src: "/gallery/mero-snl-mov-1.mov" },
//   { id: "vid3", src: "/gallery/mero-snl-mov-3.mov" },
// ];

// /** -------------------------------------------------------
//  *  2) THUMBNAIL GENERATION (canvas) → dataURL
//  *     Note: works for same-origin files (public/…)
//  * ------------------------------------------------------*/
// function generateThumbDataURL(src, seekTo = SEEK_TIME) {
//   return new Promise((resolve, reject) => {
//     const video = document.createElement("video");
//     video.src = src;
//     video.muted = true;
//     video.playsInline = true;
//     video.preload = "auto";

//     const onError = () => reject(new Error("Failed to load " + src));

//     const onLoaded = () => {
//       const t = Math.min(Math.max(0.1, seekTo), Math.max(0, video.duration - 0.1));
//       try {
//         video.currentTime = t;
//       } catch {
//         // Safari sometimes throws on immediate seek—retry shortly
//         setTimeout(() => {
//           try { video.currentTime = t; } catch (e) { reject(e); }
//         }, 60);
//       }
//     };

//     const onSeeked = () => {
//       try {
//         const canvas = document.createElement("canvas");
//         const w = video.videoWidth || 1280;
//         const h = video.videoHeight || 720;
//         // downscale a bit for smaller dataURLs
//         const targetW = 960;
//         const scale = Math.min(1, targetW / w);
//         canvas.width = Math.round(w * scale);
//         canvas.height = Math.round(h * scale);
//         const ctx = canvas.getContext("2d");
//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
//         const dataURL = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
//         resolve(dataURL);
//       } catch (e) {
//         reject(e);
//       }
//     };

//     video.addEventListener("error", onError);
//     video.addEventListener("loadedmetadata", onLoaded);
//     video.addEventListener("seeked", onSeeked);
//   });
// }

// /** -------------------------------------------------------
//  *  3) LOCAL STORAGE CACHE HELPERS
//  * ------------------------------------------------------*/
// const keyFor = (src, seekTo = SEEK_TIME) => `${CACHE_PREFIX}${THUMB_VERSION}:${src}@${seekTo}`;

// function saveThumbToCache(key, dataURL) {
//   try {
//     localStorage.setItem(key, JSON.stringify({ dataURL, ts: Date.now() }));
//     return true;
//   } catch {
//     // If quota exceeded, do a simple LRU-ish cleanup: remove oldest N thumbs
//     try {
//       const entries = Object.entries(localStorage)
//         .filter(([k]) => k.startsWith(CACHE_PREFIX))
//         .map(([k, v]) => {
//           try { return { k, ts: JSON.parse(v)?.ts ?? 0 }; } catch { return { k, ts: 0 }; }
//         })
//         .sort((a, b) => a.ts - b.ts);
//       const toRemove = entries.slice(0, Math.ceil(entries.length * 0.3)); // drop oldest 30%
//       toRemove.forEach(({ k }) => localStorage.removeItem(k));
//       localStorage.setItem(key, JSON.stringify({ dataURL, ts: Date.now() }));
//       return true;
//     } catch {
//       return false;
//     }
//   }
// }

// function getThumbFromCache(key) {
//   try {
//     const raw = localStorage.getItem(key);
//     if (!raw) return null;
//     const parsed = JSON.parse(raw);
//     return parsed?.dataURL || null;
//   } catch {
//     return null;
//   }
// }

// /** Removes cache entries from older versions or for videos not in current list */
// function cleanupCache(validKeys) {
//   try {
//     const valid = new Set(validKeys);
//     const all = Object.keys(localStorage).filter((k) => k.startsWith(CACHE_PREFIX));
//     for (const k of all) {
//       if (!valid.has(k)) localStorage.removeItem(k);
//     }
//   } catch { /* ignore */ }
// }

// /** -------------------------------------------------------
//  *  4) GALLERY COMPONENT
//  * ------------------------------------------------------*/
// export default function Gallery() {
//   const [thumbs, setThumbs] = useState({});          // { id: dataURL }
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Build the list of cache keys to keep
//   const validKeys = videos.map((v) => keyFor(v.src, SEEK_TIME));

//   // On mount: load cached thumbs or generate+cache them; then cleanup old keys
//   useEffect(() => {
//     let cancelled = false;

//     const run = async () => {
//       const next = {};
//       // Try cache first
//       for (const v of videos) {
//         const k = keyFor(v.src, SEEK_TIME);
//         const cached = getThumbFromCache(k);
//         if (cached) next[v.id] = cached;
//       }
//       if (!cancelled) setThumbs((p) => ({ ...p, ...next }));

//       // Generate missing
//       for (const v of videos) {
//         const k = keyFor(v.src, SEEK_TIME);
//         if (next[v.id]) continue; // already cached
//         try {
//           const dataURL = await generateThumbDataURL(v.src, SEEK_TIME);
//           if (cancelled) return;
//           saveThumbToCache(k, dataURL);
//           setThumbs((p) => ({ ...p, [v.id]: dataURL }));
//         } catch {
//           // leave null; UI will show "Loading..." fallback
//         }
//       }

//       // Cleanup old/other-version keys
//       cleanupCache(validKeys);
//     };

//     run();
//     return () => { cancelled = true; };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []); // run once

//   const handleClose = () => setActiveIndex(null);
//   const handlePrev = () => setActiveIndex((i) => (i > 0 ? i - 1 : videos.length - 1));
//   const handleNext = () => setActiveIndex((i) => (i < videos.length - 1 ? i + 1 : 0));

//   return (
//     <section id="gallery" className="py-24 lg:py-32">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
//         <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">Gallery</h2>
//         <div className="w-16 h-px bg-mero-white mx-auto mb-12" />
//         <p className="text-mero-white/70 text-base md:text-lg font-extralight mb-12">
//           A look behind the lens — our work in motion.
//         </p>

//         {/* Grid */}
//         <motion.div
//           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.2 }}
//         >
//           {videos.map((vid, index) => (
//             <motion.button
//               key={vid.id}
//               type="button"
//               className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black aspect-video"
//               initial={{ opacity: 0, y: 18 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.08, duration: 0.3 }}
//               onClick={() => setActiveIndex(index)}
//               aria-label={`Open ${vid.id}`}
//             >
//               {thumbs[vid.id] ? (
//                 <img
//                   src={thumbs[vid.id]}
//                   alt={`Thumbnail for ${vid.id}`}
//                   className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
//                 />
//               ) : (
//                 <div className="flex items-center justify-center h-full w-full text-white/50">
//                   Loading…
//                 </div>
//               )}

//               {/* Hover Play Icon */}
//               <div className="pointer-events-none absolute inset-0 grid place-items-center">
//                 <div className="p-3 rounded-full bg-black/50 backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition">
//                   <Play />
//                 </div>
//               </div>
//             </motion.button>
//           ))}
//         </motion.div>
//       </div>

//       {/* Lightbox */}
//       <AnimatePresence>
//         {activeIndex !== null && (
//           <motion.div
//             className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={handleClose}
//           >
//             <div
//               className="relative w-full max-w-5xl px-4"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={handleClose}
//                 className="absolute -top-12 right-4 text-white hover:text-mero-gold transition"
//                 aria-label="Close"
//               >
//                 <X size={28} />
//               </button>

//               <video
//                 src={videos[activeIndex].src}
//                 controls
//                 autoPlay
//                 playsInline
//                 className="w-full rounded-xl border border-white/20 shadow-xl bg-black"
//               />

//               {/* Nav */}
//               <button
//                 onClick={handlePrev}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-mero-gold transition"
//                 aria-label="Previous"
//               >
//                 <ChevronLeft size={32} />
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-mero-gold transition"
//                 aria-label="Next"
//               >
//                 <ChevronRight size={32} />
//               </button>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </section>
//   );
// }

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

/** -------------------------------------------------------
 *  0) CONFIG
 * ------------------------------------------------------*/
const THUMB_VERSION = "v1";      // bump to invalidate all cached thumbs
const SEEK_TIME = 0.3;           // seconds to skip past black frames
const JPEG_QUALITY = 0.75;       // 0..1
const CACHE_PREFIX = "thumb:";   // localStorage key prefix

/** -------------------------------------------------------
 *  1) YOUR VIDEOS (two items)
 * ------------------------------------------------------*/
const videos = [
  { id: "vid1", src: "/gallery/mero-snl-mov-1.mov" },
  { id: "vid3", src: "/gallery/mero-snl-mov-3.mov" },
];

/** -------------------------------------------------------
 *  2) THUMBNAIL GENERATION (canvas) → dataURL
 *     Note: works for same-origin files (public/…)
 * ------------------------------------------------------*/
function generateThumbDataURL(src, seekTo = SEEK_TIME) {
  return new Promise((resolve, reject) => {
    const video = document.createElement("video");
    video.src = src;
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";

    const onError = () => reject(new Error("Failed to load " + src));

    const onLoaded = () => {
      const t = Math.min(Math.max(0.1, seekTo), Math.max(0, video.duration - 0.1));
      try {
        video.currentTime = t;
      } catch {
        // Safari sometimes throws on immediate seek—retry shortly
        setTimeout(() => {
          try { video.currentTime = t; } catch (e) { reject(e); }
        }, 60);
      }
    };

    const onSeeked = () => {
      try {
        const canvas = document.createElement("canvas");
        const w = video.videoWidth || 1280;
        const h = video.videoHeight || 720;
        // downscale a bit for smaller dataURLs
        const targetW = 960;
        const scale = Math.min(1, targetW / w);
        canvas.width = Math.round(w * scale);
        canvas.height = Math.round(h * scale);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const dataURL = canvas.toDataURL("image/jpeg", JPEG_QUALITY);
        resolve(dataURL);
      } catch (e) {
        reject(e);
      }
    };

    video.addEventListener("error", onError);
    video.addEventListener("loadedmetadata", onLoaded);
    video.addEventListener("seeked", onSeeked);
  });
}

/** -------------------------------------------------------
 *  3) LOCAL STORAGE CACHE HELPERS
 * ------------------------------------------------------*/
const keyFor = (src, seekTo = SEEK_TIME) => `${CACHE_PREFIX}${THUMB_VERSION}:${src}@${seekTo}`;

function saveThumbToCache(key, dataURL) {
  try {
    localStorage.setItem(key, JSON.stringify({ dataURL, ts: Date.now() }));
    return true;
  } catch {
    // If quota exceeded, do a simple LRU-ish cleanup: remove oldest N thumbs
    try {
      const entries = Object.entries(localStorage)
        .filter(([k]) => k.startsWith(CACHE_PREFIX))
        .map(([k, v]) => {
          try { return { k, ts: JSON.parse(v)?.ts ?? 0 }; } catch { return { k, ts: 0 }; }
        })
        .sort((a, b) => a.ts - b.ts);
      const toRemove = entries.slice(0, Math.ceil(entries.length * 0.3)); // drop oldest 30%
      toRemove.forEach(({ k }) => localStorage.removeItem(k));
      localStorage.setItem(key, JSON.stringify({ dataURL, ts: Date.now() }));
      return true;
    } catch {
      return false;
    }
  }
}

function getThumbFromCache(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.dataURL || null;
  } catch {
    return null;
  }
}

/** Removes cache entries from older versions or for videos not in current list */
function cleanupCache(validKeys) {
  try {
    const valid = new Set(validKeys);
    const all = Object.keys(localStorage).filter((k) => k.startsWith(CACHE_PREFIX));
    for (const k of all) {
      if (!valid.has(k)) localStorage.removeItem(k);
    }
  } catch { /* ignore */ }
}

/** -------------------------------------------------------
 *  4) GALLERY COMPONENT (centered for 2 videos)
 * ------------------------------------------------------*/
export default function Gallery() {
  const [thumbs, setThumbs] = useState({});          // { id: dataURL }
  const [activeIndex, setActiveIndex] = useState(null);

  // Build the list of cache keys to keep
  const validKeys = videos.map((v) => keyFor(v.src, SEEK_TIME));

  // On mount: load cached thumbs or generate+cache them; then cleanup old keys
  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const next = {};
      // Try cache first
      for (const v of videos) {
        const k = keyFor(v.src, SEEK_TIME);
        const cached = getThumbFromCache(k);
        if (cached) next[v.id] = cached;
      }
      if (!cancelled) setThumbs((p) => ({ ...p, ...next }));

      // Generate missing
      for (const v of videos) {
        const k = keyFor(v.src, SEEK_TIME);
        if (next[v.id]) continue; // already cached
        try {
          const dataURL = await generateThumbDataURL(v.src, SEEK_TIME);
          if (cancelled) return;
          saveThumbToCache(k, dataURL);
          setThumbs((p) => ({ ...p, [v.id]: dataURL }));
        } catch {
          // leave null; UI will show "Loading..." fallback
        }
      }

      // Cleanup old/other-version keys
      cleanupCache(validKeys);
    };

    run();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // run once

  const handleClose = () => setActiveIndex(null);
  const handlePrev = () => setActiveIndex((i) => (i > 0 ? i - 1 : videos.length - 1));
  const handleNext = () => setActiveIndex((i) => (i < videos.length - 1 ? i + 1 : 0));

  return (
    <section id="gallery" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">Gallery</h2>
        <div className="w-16 h-px bg-mero-white mx-auto mb-12" />
        <p className="text-mero-white/70 text-base md:text-lg font-extralight mb-12">
          A look behind the lens — our work in motion.
        </p>

        {/* Centered, two-up grid */}
        <motion.div
          className="mx-auto max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {videos.map((vid, index) => (
            <motion.button
              key={vid.id}
              type="button"
              className="relative group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-black aspect-video"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
              onClick={() => setActiveIndex(index)}
              aria-label={`Open ${vid.id}`}
            >
              {thumbs[vid.id] ? (
                <img
                  src={thumbs[vid.id]}
                  alt={`Thumbnail for ${vid.id}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              ) : (
                <div className="flex items-center justify-center h-full w-full text-white/50">
                  Loading…
                </div>
              )}

              {/* Hover Play Icon */}
              <div className="pointer-events-none absolute inset-0 grid place-items-center">
                <div className="p-3 rounded-full bg-black/50 backdrop-blur border border-white/20 opacity-0 group-hover:opacity-100 transition">
                  <Play />
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-5xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={handleClose}
                className="absolute -top-12 right-4 text-white hover:text-mero-gold transition"
                aria-label="Close"
              >
                <X size={28} />
              </button>

              <video
                src={videos[activeIndex].src}
                controls
                autoPlay
                playsInline
                className="w-full rounded-xl border border-white/20 shadow-xl bg-black"
              />

              {/* Nav */}
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-mero-gold transition"
                aria-label="Previous"
              >
                <ChevronLeft size={32} />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-mero-gold transition"
                aria-label="Next"
              >
                <ChevronRight size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
