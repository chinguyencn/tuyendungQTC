import { motion } from "motion/react";
import { Timer, Users, TrendingUp, AlertTriangle } from "lucide-react";

export default function Fomo() {
  return (
    <section className="py-20 px-4 bg-amber-500 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-16 shadow-2xl flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 mb-6 border border-red-500/30">
              <Timer className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-widest">Cơ hội có hạn</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Mỗi đợt chỉ nhận số lượng <span className="text-amber-500">GIỚI HẠN</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8">
              Team đang mở rộng cực nhanh để kịp tiến độ ra hàng dự án vào tháng 04/2026. Chúng tôi ưu tiên chất lượng hơn số lượng.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <Users className="w-6 h-6 text-amber-500" />
                </div>
                <p className="font-bold">Chỉ còn 15 slot cuối cùng</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-6 h-6 text-amber-500" />
                </div>
                <p className="font-bold">Người vào sớm → Có lợi thế</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 w-full">
            <div className="bg-amber-500 p-8 rounded-3xl text-slate-900 text-center shadow-xl">
              <AlertTriangle className="w-12 h-12 mx-auto mb-4 animate-pulse" />
              <p className="text-sm font-bold uppercase tracking-widest mb-2">Đừng để lỡ</p>
              <h3 className="text-3xl font-black mb-4">CƠ HỘI VÀNG</h3>
              <p className="text-sm font-medium opacity-80 mb-6">Đăng ký ngay trước khi danh sách đóng lại.</p>
              <button 
                onClick={() => document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors"
              >
                GIỮ CHỖ NGAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
