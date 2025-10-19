// const Footer = () => {
//   return (
//     <footer className="py-8 border-t border-mero-white/10">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="text-sm font-extralight text-mero-white/40 mb-4 md:mb-0">
//             © 2024 MERO SOUND & LIGHTING. ALL RIGHTS RESERVED.
//           </div>
//           <div className="flex space-x-6">
//             <a href="#" className="text-sm font-extralight text-mero-white/40 hover:text-mero-gold transition-colors">
//               PRIVACY
//             </a>
//             <a href="#" className="text-sm font-extralight text-mero-white/40 hover:text-mero-gold transition-colors">
//               TERMS
//             </a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

const Footer = () => {
  return (
    <footer className="py-8 border-t border-mero-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm font-extralight text-mero-white/40 mb-4 md:mb-0">
            © 2024 MERO SOUND & LIGHTING. ALL RIGHTS RESERVED.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-sm font-extralight text-mero-white/40 hover:text-mero-white transition-colors">
              PRIVACY
            </a>
            <a href="#" className="text-sm font-extralight text-mero-white/40 hover:text-mero-white transition-colors">
              TERMS
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;