import { motion } from "motion/react";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-4 relative overflow-hidden">
      {/* Subtle decorative element */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-2xl font-bold mb-6 text-amber-500">VINHOMES <br />HẠ LONG XANH</h3>
            <p className="text-slate-400 mb-8">
              Đơn vị phân phối chiến lược dự án Vinhomes Hạ Long Xanh. Chúng tôi xây dựng đội ngũ chuyên nghiệp, tận tâm và bứt phá.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-amber-500 hover:text-slate-900 transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liên kết nhanh</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Về chúng tôi</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Dự án Vinhomes</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Chính sách hoa hồng</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Đào tạo Sales</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hỗ trợ</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-amber-500 transition-colors">Câu hỏi thường gặp</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Điều khoản tham gia</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-amber-500 transition-colors">Liên hệ Leader</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Thông tin liên hệ</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 shrink-0" />
                <span>Văn phòng Hạ Long, Quảng Ninh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 shrink-0" />
                <span>09xx xxx xxx</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-500 shrink-0" />
                <span>contact@halongxanh.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 text-center text-slate-500 text-sm">
          <p>© 2026 Vinhomes Hạ Long Xanh Team. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
