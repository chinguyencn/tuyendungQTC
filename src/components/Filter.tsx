import { motion } from "motion/react";
import { AlertCircle, CheckCircle, XCircle } from "lucide-react";

export default function Filter() {
  return (
    <section className="py-24 px-4 bg-slate-900 text-white overflow-hidden relative">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent opacity-30" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Không phải ai cũng phù hợp</h2>
          <p className="text-slate-200 max-w-2xl mx-auto text-lg">
            Chúng tôi tìm kiếm những cộng sự nghiêm túc. Hãy xem bạn có thuộc về đội ngũ này không?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dành cho bạn */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <CheckCircle className="w-24 h-24 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold text-emerald-400 mb-8 flex items-center gap-3">
              <CheckCircle className="w-6 h-6" /> Cơ hội này dành cho bạn nếu:
            </h3>
            <ul className="space-y-6">
              {[
                "Bạn thực sự muốn kiếm tiền và thay đổi thu nhập",
                "Bạn sẵn sàng học hỏi những kiến thức mới từ đầu",
                "Bạn kiên trì, không bỏ cuộc sau vài ngày thử thách",
                "Bạn có tinh thần làm việc nhóm và hỗ trợ đồng đội"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-2.5 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Không phù hợp */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-red-500/5 border border-red-500/20 relative group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <XCircle className="w-24 h-24 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
              <XCircle className="w-6 h-6" /> KHÔNG phù hợp nếu:
            </h3>
            <ul className="space-y-6">
              {[
                "Muốn kiếm tiền nhanh nhưng không muốn bỏ công sức",
                "Đợi có sẵn khách hàng mới bắt đầu làm việc",
                "Không chịu học hỏi, bảo thủ với kiến thức cũ",
                "Thái độ tiêu cực, hay than vãn về khó khăn"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-white font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2.5 shrink-0" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-xl italic text-slate-200">
            "Người nghiêm túc sẽ thấy đây là cơ hội, người ảo tưởng sẽ thấy đây là rào cản."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
