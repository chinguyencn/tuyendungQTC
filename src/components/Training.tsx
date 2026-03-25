import { motion } from "motion/react";
import { Calendar, Monitor, MapPin, CheckCircle2, ArrowRight } from "lucide-react";

export default function Training() {
  const steps = [
    { title: "Học", desc: "Kiến thức nền tảng & Dự án" },
    { title: "Làm", desc: "Thực hành thực tế" },
    { title: "Sửa", desc: "Leader chỉnh sửa lỗi" },
    { title: "Kết quả", desc: "Ra lead & Chốt deal" }
  ];

  return (
    <section className="py-24 px-4 bg-slate-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Lộ trình đào tạo thần tốc</h2>
          <p className="text-slate-400 text-lg">Xóa bỏ mọi nỗi sợ, bắt đầu kiếm tiền sau 7 ngày.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Online Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                <Monitor className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Đào tạo Online</h3>
                <p className="text-amber-500 font-medium flex items-center gap-2">
                  <Calendar className="w-4 h-4" /> 02 – 03/04/2026
                </p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Tổng quan thị trường BĐS 2026",
                "Chi tiết dự án Vinhomes Hạ Long Xanh",
                "Kỹ năng tìm kiếm khách hàng đa kênh",
                "Kịch bản tư vấn & xử lý từ chối"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Offline Training */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-500/20 rounded-2xl flex items-center justify-center">
                <MapPin className="w-7 h-7 text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Trải nghiệm Thực địa</h3>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Tham quan thực tế công trường dự án",
                "Cảm nhận vị trí & tiềm năng sinh lời",
                "Thực hành tư vấn trực tiếp tại dự án",
                "Giao lưu cùng các Top Sales xuất sắc"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Flow Diagram */}
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-amber-500 text-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 font-black text-xl shadow-lg shadow-amber-500/20">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-slate-400 text-sm">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="md:hidden mt-4 flex justify-center">
                    <ArrowRight className="w-6 h-6 text-amber-500 rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
