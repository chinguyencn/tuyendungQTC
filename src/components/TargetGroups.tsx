import { motion } from "motion/react";
import { UserPlus, TrendingUp, ShieldCheck, Zap } from "lucide-react";

export default function TargetGroups() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Bạn đang ở đâu?</h2>
          <p className="text-slate-600 text-lg">Dù bạn là ai, chúng tôi đều có lộ trình tối ưu cho bạn.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Nhóm Người Mới */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="bg-emerald-50/50 p-8 rounded-3xl border border-slate-900/10 flex-1 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-slate-900/10 rounded-2xl flex items-center justify-center mb-6">
                <UserPlus className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">Dành cho NGƯỜI MỚI</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Chưa từng làm Bất động sản",
                  "Không biết bắt đầu từ đâu",
                  "Đang làm công việc khác, muốn kiếm thêm thu nhập"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <ShieldCheck className="w-5 h-5 text-slate-900 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-slate-900/10">
                <p className="font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">Bạn sẽ nhận được:</p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Lộ trình rõ ràng", desc: "Từng bước từ A-Z cho người mới" },
                    { title: "Hướng dẫn 1-1", desc: "Leader kèm cặp sát sao mỗi ngày" },
                    { title: "Team hỗ trợ", desc: "Không bao giờ phải đi một mình" }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white rounded-xl border border-slate-900/5">
                      <div className="w-10 h-10 rounded-full bg-slate-900/5 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-slate-900" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{benefit.title}</h4>
                        <p className="text-sm text-slate-500">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Nhóm Sale Chuyên Nghiệp */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col h-full"
          >
            <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800/30 flex-1 shadow-xl text-white">
              <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-6">Dành cho SALE CHUYÊN NGHIỆP</h3>
              <ul className="space-y-4 mb-8">
                {[
                  "Đã có kinh nghiệm nhưng thiếu sản phẩm tốt",
                  "Muốn bứt phá thu nhập lên con số hàng trăm triệu",
                  "Muốn xây dựng đội ngũ, trở thành Leader"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-100 font-medium">
                    <ShieldCheck className="w-5 h-5 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-6 border-t border-white/10">
                <p className="font-bold text-amber-500 mb-4 uppercase tracking-wider text-sm">Bạn sẽ nhận được:</p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { title: "Dự án 'Siêu Hot'", desc: "Vinhomes Hạ Long Xanh - Dễ bán, hoa hồng cao" },
                    { title: "Hệ thống sẵn có", desc: "Quy trình chốt khách, marketing chuyên nghiệp" },
                    { title: "Cơ hội thăng tiến", desc: "Lên Leader/Manager chỉ sau 3-6 tháng" }
                  ].map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-4 bg-white/10 rounded-xl border border-white/10 backdrop-blur-sm">
                      <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white">{benefit.title}</h4>
                        <p className="text-sm text-slate-200">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
