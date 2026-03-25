import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12 px-4">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1598964340675-94ed88ae0b97?auto=format&fit=crop&q=80&w=2000"
          alt="Vinhomes Ha Long Xanh Aerial View"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />
      </div>

      <div className="container mx-auto relative z-10 text-center text-white max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider uppercase bg-amber-500/20 border border-amber-500/30 rounded-full text-amber-500">
            Dự án Vinhomes Hạ Long Xanh - Ra hàng 04/2026
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            BẮT ĐẦU KIẾM TIỀN TỪ <br />
            <span className="text-amber-500">BẤT ĐỘNG SẢN</span>
          </h1>

          <p className="text-lg md:text-xl font-bold text-amber-400 mb-4 tracking-wide uppercase">
            Dành cho người đang muốn kiếm thêm thu nhập nhưng chưa biết bắt đầu từ đâu
          </p>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light">
            Ngay cả khi bạn chưa có bất kỳ kinh nghiệm nào
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              "Không biết gì → Được hướng dẫn từ đầu",
              "Không có khách → Có team hỗ trợ",
              "Không giỏi sale → Vẫn có thể làm",
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center justify-center space-x-2 text-slate-200"
              >
                <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                <span className="text-sm md:text-base">{item}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-500/20"
            >
              ĐĂNG KÝ THAM GIA <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.a
              href="https://zalo.me/0785867676"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" /> Nhắn Zalo để được hướng dẫn ngay
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
