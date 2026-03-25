import { motion } from "motion/react";
import { Send, User, Phone, MapPin, CheckCircle } from "lucide-react";
import { useState, FormEvent } from "react";

export default function RegistrationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, you'd send data to a server here
  };

  return (
    <section id="registration-form" className="py-24 px-4 bg-slate-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Nếu bạn đang đọc đến đây, <br />
              <span className="text-amber-500">có nghĩa là bạn đang tìm cơ hội</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Đừng bỏ lỡ lần này. Chỉ mất 30 giây để bắt đầu hành trình thay đổi thu nhập của bạn.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-lg font-medium">Thông tin của bạn được bảo mật tuyệt đối</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <p className="text-lg font-medium">Chúng tôi sẽ liên hệ lại trong vòng 24h</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-slate-100"
            >
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <User className="w-4 h-4 text-amber-500" /> Họ và tên
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Nguyễn Văn A"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <Phone className="w-4 h-4 text-amber-500" /> Số điện thoại
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="0901 234 567"
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-amber-500" /> Khu vực sinh sống
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Hà Nội, Quảng Ninh..."
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/20"
                  >
                    ĐĂNG KÝ NGAY <Send className="w-5 h-5" />
                  </button>
                  
                  <p className="text-center text-slate-400 text-sm">
                    Hoặc <a href="https://zalo.me/0785867676" target="_blank" className="text-amber-500 hover:underline">nhắn Zalo</a> để giữ slot trước
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Đăng ký thành công!</h3>
                  <p className="text-slate-600 mb-8">
                    Chào bạn, mình đã nhận thông tin của bạn 👍 <br />
                    Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
                  </p>
                  <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 text-left">
                    <p className="text-sm font-bold text-slate-400 uppercase mb-2">Tin nhắn từ Leader:</p>
                    <p className="text-slate-700 italic">
                      "Trước khi bắt đầu, mình muốn hỏi nhanh: Bạn đang muốn kiếm thêm thu nhập hay làm nghiêm túc lâu dài?"
                    </p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
