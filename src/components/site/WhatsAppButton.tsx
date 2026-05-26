import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 18 }}
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full grid place-items-center text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform"
      style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
    >
      <FaWhatsapp size={26} />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </motion.a>
  );
}
