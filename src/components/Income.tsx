import { motion } from "motion/react";
import { DollarSign, TrendingUp, Target, BarChart3 } from "lucide-react";

export default function Income() {
  return (
    <section className="py-24 px-4 bg-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Thực tế kiếm tiền</h2>
          <p className="text-slate-600 text-lg">Chúng tôi không nói mơ hồ, đây là những con số thực tế.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: <BarChart3 className="w-8 h-8 text-amber-500" />,
              label: "Thu nhập trung bình",
              value: "10 - 50tr+",
              unit: "/tháng",
              desc: "Dành cho những người làm việc nghiêm túc"
            },
            {
              icon: <TrendingUp className="w-8 h-8 text-amber-500" />,
              label: "Không giới hạn",
              value: "100tr+++",
              unit: "/tháng",
              desc: "Nếu bạn có kỹ năng và nỗ lực vượt trội"
            },
            {
              icon: <Target className="w-8 h-8 text-amber-500" />,
              label: "Tỉ lệ chốt",
              value: "Cao nhất",
              unit: "Thị trường",
              desc: "Nhờ sức hút cực lớn từ thương hiệu Vinhomes"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 text-center hover:shadow-xl transition-all group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-500/10 transition-colors">
                {item.icon}
              </div>
              <p className="text-slate-500 font-medium mb-2 uppercase tracking-widest text-xs">{item.label}</p>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-4xl font-black text-slate-900">{item.value}</span>
                <span className="text-slate-400 font-medium">{item.unit}</span>
              </div>
              <p className="text-slate-500 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 text-white p-10 rounded-[2rem] text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Đây không phải công việc "nhàn"
            </h3>
            <p className="text-amber-500 text-xl md:text-2xl font-bold mb-6">
              NHƯNG LÀ CƠ HỘI THẬT
            </p>
            <p className="text-slate-400 max-w-2xl mx-auto italic">
              "Thu nhập của bạn phụ thuộc hoàn toàn vào hành động của bạn. Chúng tôi cung cấp công cụ, bạn là người vận hành."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
