import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function ZaloFloatButton() {
  return (
    <motion.a
      href="https://zalo.me/0785867676"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 bg-[#0068ff] text-white rounded-full shadow-lg hover:bg-[#0056d2] transition-colors group"
    >
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </motion.div>
      <span className="font-bold text-sm whitespace-nowrap">Nhắn Zalo ngay</span>
      
      {/* Pulse ring effect */}
      <motion.div
        animate={{
          scale: [1, 1.4],
          opacity: [0.5, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeOut",
        }}
        className="absolute inset-0 rounded-full bg-[#0068ff] -z-10"
      />
    </motion.a>
  );
}
