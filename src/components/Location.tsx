import { motion } from "motion/react";
import { Globe, Map, CheckCircle } from "lucide-react";

export default function Location() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-sm"
        >
          <div className="w-20 h-20 bg-slate-900 text-amber-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <Globe className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-bold mb-6">Khu vực tuyển dụng</h2>
          <p className="text-2xl text-slate-700 mb-8 font-medium">
            Tuyển TOÀN QUỐC & QUỐC TẾ
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {["Hà Nội", "Quảng Ninh", "TP. HCM", "Hải Phòng", "Đà Nẵng", "Kiều bào nước ngoài"].map((city, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span className="font-medium text-slate-600">{city}</span>
              </div>
            ))}
          </div>
          <p className="text-xl text-amber-500 font-bold uppercase tracking-widest">
            Chỉ cần bạn nghiêm túc - Khoảng cách không là vấn đề
          </p>
        </motion.div>
      </div>
    </section>
  );
}
