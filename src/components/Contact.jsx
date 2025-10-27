// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useScrollAnimation } from "../hooks/useScrollAnimation";
// import { Mail, Phone, MapPin } from "lucide-react";

// const Contact = () => {
//   const [ref, controls] = useScrollAnimation();
//   const [sending, setSending] = useState(false);
//   const [ok, setOk] = useState(false);
//   const [err, setErr] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSending(true);
//     setOk(false);
//     setErr("");

//     const formData = new FormData(e.currentTarget);
//     formData.append("access_key", "3cd39aa5-14e6-4299-98d1-28e817929f0c"); // Replace with your key

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setOk(true);
//         e.currentTarget.reset();
//       } else {
//         setErr(data.message || "Something went wrong. Please try again.");
//       }
//     } catch (error) {
//       setErr("Something went wrong. Please try again.");
//       console.error(error);
//     } finally {
//       setSending(false);
//     }
//   };

//   return (
//     <section id="contact" className="py-24 lg:py-32 bg-mero-black/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
//         >
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
//               GET IN TOUCH
//             </h2>
//             <div className="w-16 h-px bg-mero-white mx-auto" />
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
//             <div className="text-center">
//               <Mail className="text-mero-white mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">merosoundandlighting1@gmail.com</p>
//             </div>
//             <div className="text-center">
//               <Phone className="text-mero-white mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">+1 (646) 243-3398</p>
//             </div>
//             <div className="text-center">
//               <MapPin className="text-mero-white mx-auto mb-4" size={24} />
//               <p className="text-sm font-light tracking-wider">New York, NY</p>
//             </div>
//           </div>

//           <div className="max-w-2xl mx-auto">
//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Web3Forms configuration */}
//               <input type="hidden" name="subject" value="New Contact from Mero Sound & Lighting Website" />
//               <input type="hidden" name="from_name" value="Mero Website" />
//               <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   name="name"
//                   type="text"
//                   placeholder="NAME"
//                   required
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//                 />
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="EMAIL"
//                   required
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//                 />
//               </div>

//               <input
//                 name="phone"
//                 type="tel"
//                 inputMode="tel"
//                 placeholder="PHONE"
//                 pattern="^[0-9()+\-.\s]{7,}$"
//                 title="Enter a valid phone number"
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//               />

//               <input
//                 name="custom_subject"
//                 type="text"
//                 placeholder="SUBJECT"
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//               />

//               <textarea
//                 name="message"
//                 placeholder="MESSAGE"
//                 rows={4}
//                 required
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors resize-none"
//               />

//               <button
//                 type="submit"
//                 disabled={sending}
//                 className="w-full md:w-auto px-12 py-4 bg-mero-white text-mero-black font-light tracking-wider hover:bg-mero-white/90 transition-colors duration-300 disabled:opacity-70"
//               >
//                 {sending ? "SENDING..." : "SEND MESSAGE"}
//               </button>

//               {ok && (
//                 <p className="mt-3 text-sm text-emerald-300">
//                   Thanks! We'll be in touch shortly.
//                 </p>
//               )}
//               {err && (
//                 <p className="mt-3 text-sm text-red-300">
//                   {err}
//                 </p>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [ref, controls] = useScrollAnimation();
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setOk(false);
    setErr("");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "3cd39aa5-14e6-4299-98d1-28e817929f0c"); // Replace with your key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setOk(true);
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setErr(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setErr("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-mero-black/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extralight tracking-wider mb-4">
              GET IN TOUCH
            </h2>
            <div className="w-16 h-px bg-mero-white mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="text-center">
              <Mail className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">merosoundandlighting1@gmail.com</p>
            </div>
            <div className="text-center">
              <Phone className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">+1 (646) 243-3398</p>
            </div>
            <div className="text-center">
              <MapPin className="text-mero-white mx-auto mb-4" size={24} />
              <p className="text-sm font-light tracking-wider">New York, NY</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              {/* Web3Forms configuration */}
              <input type="hidden" name="subject" value="New Contact from Mero Sound & Lighting Website" />
              <input type="hidden" name="from_name" value="Mero Website" />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="name"
                  type="text"
                  placeholder="NAME"
                  required
                  className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="EMAIL"
                  required
                  className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
                />
              </div>

              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="PHONE"
                pattern="[0-9()+\-. ]{7,}"
                title="Enter a valid phone number"
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
              />

              <input
                name="custom_subject"
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={4}
                required
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors resize-none"
              />

              <button
                type="submit"
                disabled={sending}
                className="w-full md:w-auto px-12 py-4 bg-mero-white text-mero-black font-light tracking-wider hover:bg-mero-white/90 transition-colors duration-300 disabled:opacity-70"
              >
                {sending ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {ok && (
                <p className="mt-3 text-sm text-emerald-300">
                  Thanks! We'll be in touch shortly.
                </p>
              )}
              {err && (
                <p className="mt-3 text-sm text-red-300">
                  {err}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;