// import { motion } from 'framer-motion';
// import { useScrollAnimation } from '../hooks/useScrollAnimation';
// import { Mail, Phone, MapPin } from 'lucide-react';

// const Contact = () => {
//   const [ref, controls] = useScrollAnimation();

//   return (
//     <section id="contact" className="py-24 lg:py-32 bg-mero-black/50">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <motion.div
//           ref={ref}
//           animate={controls}
//           initial="hidden"
//           variants={{
//             hidden: { opacity: 0 },
//             visible: { opacity: 1 },
//           }}
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
//             <form className="space-y-6">
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 <input
//                   type="text"
//                   placeholder="NAME"
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//                 />
//                 <input
//                   type="email"
//                   placeholder="EMAIL"
//                   className="bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="SUBJECT"
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
//               />
//               <textarea
//                 placeholder="MESSAGE"
//                 rows={4}
//                 className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors resize-none"
//               />
//               <button
//                 type="submit"
//                 className="w-full md:w-auto px-12 py-4 bg-mero-white text-mero-black font-light tracking-wider hover:bg-mero-white/90 transition-colors duration-300"
//               >
//                 SEND MESSAGE
//               </button>
//             </form>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Mail, Phone, MapPin } from "lucide-react";

const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/d/e/1FAIpQLScCItUTra9CbaVbRPFPQhTFyQ7mRvxdpUjOQo2WJIAf3uOjdA/viewform"; // <- REPLACE
// Map your Google Form field ENTRY IDs here (see step 2 below)
const FIELDS = {
  name:   "entry.1111111111", // REPLACE
  email:  "entry.2222222222", // REPLACE
  phone:  "entry.3333333333", // REPLACE
  subject:"entry.4444444444", // REPLACE
  message:"entry.5555555555", // REPLACE
};

const Contact = () => {
  const [ref, controls] = useScrollAnimation();
  const [sending, setSending] = useState(false);
  const [ok, setOk] = useState(false);
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setOk(false);
    setErr("");

    const form = new FormData(e.currentTarget);

    // Build URL-encoded payload for Google Forms
    const payload = new URLSearchParams();
    payload.append(FIELDS.name,    form.get("name")    || "");
    payload.append(FIELDS.email,   form.get("email")   || "");
    payload.append(FIELDS.phone,   form.get("phone")   || "");
    payload.append(FIELDS.subject, form.get("subject") || "");
    payload.append(FIELDS.message, form.get("message") || "");

    try {
      // Important: Google Forms requires no-cors POST
      await fetch(GOOGLE_FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8" },
        body: payload.toString(),
      });

      setOk(true);
      e.currentTarget.reset();
    } catch (error) {
      setErr("Something went wrong sending your message. Please try again.");
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
            <form className="space-y-6" onSubmit={handleSubmit}>
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

              {/* NEW: Phone field */}
              <input
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="PHONE"
                pattern="^[0-9()+\-.\s]{7,}$"
                title="Enter a valid phone number"
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
              />

              <input
                name="subject"
                type="text"
                placeholder="SUBJECT"
                className="w-full bg-transparent border-b border-mero-white/20 py-4 text-sm font-light tracking-wider placeholder-mero-white/40 focus:border-mero-white focus:outline-none transition-colors"
              />

              <textarea
                name="message"
                placeholder="MESSAGE"
                rows={4}
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
                  Thanks! We’ll be in touch shortly.
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
