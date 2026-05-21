import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
// @ts-ignore
import dashboardMockup from "./assets/images/dashboard_mockup_1779293825123.png";
import { 
  Bolt, 
  ArrowRight, 
  PlayCircle, 
  TrendingUp, 
  Video, 
  TrendingDown, 
  SearchX, 
  Network, 
  Ban, 
  CalendarClock, 
  Cpu, 
  Smartphone, 
  Sparkles, 
  MessagesSquare, 
  Rocket, 
  Check,
  X,
  User,
  Star,
  Copy
} from "lucide-react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line,
  Area,
  AreaChart
} from "recharts";

const chartData = [
  { name: "Day 1", traffic: 20, revenue: 10 },
  { name: "Day 5", traffic: 45, revenue: 25 },
  { name: "Day 10", traffic: 35, revenue: 20 },
  { name: "Day 15", traffic: 65, revenue: 45 },
  { name: "Day 20", traffic: 80, revenue: 60 },
  { name: "Day 25", traffic: 95, revenue: 85 },
  { name: "Day 30", traffic: 120, revenue: 110 },
];

const CTAModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const copyNumber = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("0559360374");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-md"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 30 }}
            className="relative w-full max-w-[950px] bg-white rounded-[32px] shadow-2xl flex flex-col md:flex-row z-10 overflow-hidden text-left"
          >
            {/* Close Button Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 hover:bg-black/60 md:hidden"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Left Side: Brilliant Red Branding */}
            <div className="w-full md:w-[48%] bg-[#E52E20] p-8 md:p-10 text-white flex flex-col relative justify-between">
              <div>
                <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-tighter mb-8 leading-tight">
                  ĐỪNG BỎ LỠ!
                </h2>

                <div className="space-y-5 mb-8">
                  {[
                    { text: <>Hỗ trợ 24/7, hướng dẫn <span className="text-[#25F4EE] font-bold">TẬN TÌNH</span> đến khi bạn thành thạo sử dụng công cụ</> },
                    { text: <>Huấn luyện <span className="text-[#25F4EE] font-bold">tư duy chiến lược</span> với đội ngũ chuyên gia <span className="text-[#25F4EE] font-bold">&gt;10 năm kinh nghiệm</span></> },
                    { text: <>Bảo trì và cập nhật phần mềm <span className="text-white font-extrabold underline decoration-[#25F4EE] decoration-2">trọn đời miễn phí</span></> }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3 items-start">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center shadow-lg">
                        <Check className="w-3.5 h-3.5 text-white stroke-[3.5]" />
                      </div>
                      <p className="font-sans text-[13px] md:text-[14px] leading-relaxed font-medium">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Physical boutique showroom photo */}
                <div className="mb-6 rounded-2xl overflow-hidden border-[3px] border-[#1877F2]/40 shadow-lg relative aspect-[1.8/1]">
                  <img 
                    src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=600" 
                    alt="Clothing Boutique Showroom"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent pointer-events-none" />
                </div>

                {/* Customer Count tag */}
                <div className="bg-[#FF6A00] rounded-full px-5 py-2.5 inline-flex items-center gap-2 mb-6 shadow-md border border-[#FF6A00]/20">
                  <span className="font-sans font-extrabold text-[11px] uppercase tracking-wider text-white">
                    +600.000 Khách hàng đã phục vụ
                  </span>
                </div>
              </div>

              {/* Bottom badge brands */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10 md:mt-auto">
                {['AGENCY', 'ACAC ACADEMY', 'ASANA'].map(tag => (
                  <span key={tag} className="px-3.5 py-1.5 bg-white rounded-full text-[#E52E20] font-display font-black text-[9px] tracking-widest shadow-sm border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Info */}
            <div className="w-full md:w-[52%] bg-white relative flex flex-col justify-center overflow-hidden p-8 md:p-12">
              {/* Close Button Desktop */}
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 hidden md:block group transition-all duration-300 hover:rotate-90 p-2.5 rounded-full hover:bg-gray-50 border border-transparent hover:border-gray-100"
              >
                <X className="w-6 h-6 text-gray-400 group-hover:text-gray-800" />
              </button>

              <div className="relative z-10 w-full flex flex-col items-center">
                <div className="font-mono text-[10px] md:text-xs uppercase font-extrabold tracking-[0.25em] text-gray-400 mb-4 text-center leading-none">
                  Hỗ trợ & tư vấn nhanh chóng
                </div>
                
                {/* Giant italic typography */}
                <h3 className="font-display text-[44px] md:text-[60px] font-black italic text-[#0F172A] mb-8 md:mb-12 uppercase tracking-tighter text-center leading-[0.9]">
                  LIÊN HỆ <br />
                  <span className="text-black relative inline-block">
                    NGAY
                    <span className="absolute bottom-1.5 left-0 right-0 h-1.5 bg-[#1877F2]/20 rounded-full" />
                  </span>
                </h3>

                {/* Beautiful custom Zalo layout pill */}
                <a 
                  href="https://zalo.me/0559360374"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full max-w-[360px] border border-[#1877F2]/30 rounded-[28px] p-4 flex items-center justify-between transition-all duration-300 hover:scale-[1.03] hover:border-[#1877F2] shadow-[0_15px_30px_rgba(24,119,242,0.08)] bg-gradient-to-r from-white to-[#F5F9FF] group"
                >
                  <div className="flex items-center gap-3.5">
                    {/* Circle Zalo logo resembling screen */}
                    <div className="w-12 h-12 bg-[#1877F2] rounded-[18px] flex items-center justify-center shrink-0 shadow-md border-2 border-white">
                      <span className="text-white font-[1000] text-xs font-sans tracking-tighter">Zalo</span>
                    </div>
                    <div className="text-left">
                      <div className="font-mono text-[9px] uppercase font-bold tracking-widest text-[#1877F2]">
                        ZALO CONTACT:
                      </div>
                      <div className="font-display text-lg md:text-xl font-black tracking-tight text-gray-900 leading-none mt-1">
                        0559.360.374
                      </div>
                    </div>
                  </div>
                  
                  {/* Interactive Copy Phone Button */}
                  <button 
                    onClick={copyNumber}
                    className="p-2.5 rounded-xl hover:bg-white text-gray-400 hover:text-[#1877F2] transition-colors border border-transparent hover:border-[#1877F2]/15 shadow-sm shrink-0 flex items-center justify-center relative active:scale-95"
                    title="Sao chép số điện thoại"
                  >
                    <AnimatePresence mode="wait">
                      {copied ? (
                        <motion.span 
                          initial={{ scale: 0.7, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0.7, opacity: 0 }}
                          className="font-mono text-[8px] sm:text-[9px] uppercase font-bold text-emerald-600 tracking-wider whitespace-nowrap bg-emerald-50 px-2 py-1 rounded"
                        >
                          Đã copy
                        </motion.span>
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </AnimatePresence>
                  </button>
                </a>
                
                {/* 5 Overlapping Support Headset Avatars */}
                <div className="mt-10 flex flex-col items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center shadow-md overflow-hidden shrink-0 z-10"
                      >
                        <div className="w-full h-full bg-[#F0F5FF] flex items-center justify-center">
                          <svg className="w-5 h-5 text-[#1877F2]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 18V14C4 11.2386 6.23858 9 9 9H15C17.7614 9 20 11.2386 20 14V18" />
                            <circle cx="12" cy="5" r="3" />
                            <path d="M21 14C21 14.5 20.5 15 20 15H18" />
                            <path d="M3 14C3 14.5 3.5 15 4 15H6" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-[12px] text-gray-500 font-bold text-center mt-4 max-w-[270px] leading-relaxed">
                    Đội ngũ chuyên gia và hàng trăm khách hàng đang được kết nối.
                  </div>
                  
                  <div className="text-[10px] font-mono text-gray-400 mt-1 select-none animate-pulse tracking-wide font-bold">
                    Ready...
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PainPointCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-lg group hover:border-primary-container/50 transition-colors"
  >
    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-6 border border-on-surface/5">
      <Icon className="w-6 h-6 text-on-surface-variant group-hover:text-primary-container transition-colors" />
    </div>
    <h3 className="font-display text-xl font-semibold text-on-surface mb-2">{title}</h3>
    <p className="font-sans text-on-surface-variant leading-relaxed">{description}</p>
  </motion.div>
);

const StepCard = ({ number, icon: Icon, title, description, colorClass }: { number: string, icon: any, title: string, description: string, colorClass: string }) => (
  <div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/5 group">
    <motion.div 
      whileHover={{ y: -8, rotate: 2 }}
      className={`w-24 h-24 rounded-2xl glass-card flex items-center justify-center mb-6 transition-all duration-300 border-${colorClass}/30 shadow-lg`}
    >
      <Icon className={`w-10 h-10 text-${colorClass}`} />
    </motion.div>
    <div className={`font-mono text-xs text-${colorClass} mb-2 tracking-widest`}>BƯỚC {number}</div>
    <h4 className="font-display font-bold text-on-surface mb-2 text-lg">{title}</h4>
    <p className="font-sans text-sm text-on-surface-variant">{description}</p>
  </div>
);

const PricingCard = ({ type, price, features, recommended = false, recommendedText = "Khuyên dùng", priceSuffix = "/tháng", buttonText, onClick }: { type: string, price: string, features: { text: string, included: boolean }[], recommended?: boolean, recommendedText?: string, priceSuffix?: string, buttonText: string, onClick: () => void }) => (
  <motion.div 
    whileHover={{ y: recommended ? -15 : -8 }}
    className={`glass-card p-8 rounded-2xl border-on-surface/10 ${recommended ? 'border-primary-container shadow-[0_0_40px_rgba(255,106,0,0.15)] md:-translate-y-4 scale-105 z-10' : ''}`}
  >
    {recommended && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-white px-4 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest shadow-xl whitespace-nowrap">
        {recommendedText}
      </div>
    )}
    <div className={`font-mono text-xs uppercase mb-2 ${recommended ? 'text-primary-container' : 'text-on-surface-variant'}`}>{type}</div>
    <div className="mb-6">
      <div className="font-display text-3xl sm:text-4xl md:text-[36px] font-black text-on-surface tracking-tight leading-none">
        {price}
      </div>
      {priceSuffix && (
        <div className="font-mono text-xs text-on-surface-variant/80 font-bold uppercase tracking-wider mt-2.5">
          {priceSuffix}
        </div>
      )}
    </div>
    <ul className="space-y-4 mb-8">
      {features.map((f, i) => (
        <li key={i} className={`flex items-center gap-3 font-sans text-sm ${f.included ? 'text-on-surface' : 'text-on-surface-variant/50'}`}>
          {f.included ? <Check className="w-4 h-4 text-secondary-container" /> : <X className="w-4 h-4 text-error" />}
          {f.text}
        </li>
      ))}
    </ul>
    <button 
      onClick={onClick}
      className={`w-full py-4 rounded-lg font-mono text-xs uppercase font-bold tracking-widest transition-all ${recommended ? 'glow-button-primary' : 'border border-on-surface/15 hover:bg-on-surface/5 text-on-surface'}`}
    >
      {buttonText}
    </button>
  </motion.div>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { label: "Nỗi đau khách hàng", id: "pain-points" },
    { label: "Tính năng", id: "ecosystem" },
    { label: "Video tổng quan", id: "video-overview" },
    { label: "Giải pháp", id: "solutions" },
    { label: "Bảng giá", id: "pricing" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-white scroll-smooth">
      {/* CTA Modal */}
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-on-surface/8">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex justify-between items-center h-20">
          <div className="font-display text-xl font-black tracking-tighter text-on-surface flex items-center gap-2">
            <Bolt className="w-6 h-6 text-primary-container fill-primary-container" />
            AI AFFILIATE
          </div>
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a 
                key={item.id} 
                href={`#${item.id}`} 
                onClick={(e) => handleScrollTo(e, item.id)}
                className="text-on-surface-variant hover:text-on-surface transition-colors font-mono text-[11px] uppercase tracking-wider font-bold whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="glow-button-primary"
            >
              Bắt đầu
            </button>
          </div>
        </div>
      </nav>
 
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 px-6 md:px-16 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Ambient light glow to highlight the main heading area */}
          <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[90%] max-w-[650px] h-[280px] bg-gradient-to-tr from-primary-container/20 via-secondary-container/25 to-tertiary-container/15 rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse" style={{ animationDuration: '6s' }} />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-container/30 bg-secondary-container/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_#0284c7] animate-pulse" />
            <span className="font-mono text-[10px] text-secondary-container uppercase tracking-widest font-bold">HỆ SINH THÁI TỰ ĐỘNG HÓA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-[1.1] tracking-tight"
          >
            XÂY HỆ THỐNG KÊNH <br className="hidden md:block" />
            TIẾP THỊ LIÊN KẾT AI <span className="text-primary-container">SHOPEE</span> & <span className="text-secondary-container glow-text-secondary">TIKTOK</span>
          </motion.h1>
 
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Quy trình tự động hóa hoàn toàn từ tạo Video AI, Đăng bài đa nền tảng đến Seeding. Thống trị tiếp thị liên kết với tốc độ và quy mô không tưởng.
          </motion.p>
 
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <button 
              onClick={() => setIsModalOpen(true)}
              className="glow-button-primary px-10 py-5 text-lg flex items-center gap-3"
            >
              TRẢI NGHIỆM DEMO TRỰC TIẾP
              <ArrowRight className="w-5 h-5" />
            </button>
            <motion.a 
              href="https://www.youtube.com/@Ho%C3%A0ngTool-AffiliateMarketing"
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 rounded-md font-display font-bold uppercase tracking-wider border border-on-surface/15 hover:bg-on-surface/5 transition-colors flex items-center gap-3 text-on-surface"
            >
              <PlayCircle className="w-6 h-6" />
              Xem demo ngay
            </motion.a>
          </motion.div>
 
          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-20 border-t border-on-surface/10 pt-10">
            {[
              { val: '10.000+', lbl: 'Video/Ngày', color: 'text-primary-container' },
              { val: '5.000+', lbl: 'Thành viên hoạt động', color: 'text-secondary-container' },
              { val: '60 Tỷ+', lbl: 'Hoa hồng tạo ra', color: 'text-on-surface' }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`font-display text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>{stat.val}</div>
                <div className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">{stat.lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Dashboard Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-5xl mx-auto mt-24 relative z-10 glass-card rounded-2xl p-2 shadow-2xl"
        >
          <img 
            alt="AI Dashboard Interface" 
            referrerPolicy="no-referrer"
            className="w-full h-auto rounded-xl object-cover opacity-90 border border-on-surface/10" 
            src={dashboardMockup} 
          />
          <div className="absolute -right-8 top-1/4 bg-surface-container-high/90 backdrop-blur-xl p-5 rounded-lg border border-secondary-container/30 shadow-[0_4px_24px_rgba(2,132,199,0.1)] hidden lg:flex items-center gap-4">
            <div className="p-3 bg-secondary-container/10 rounded-full">
              <TrendingUp className="w-6 h-6 text-secondary-container" />
            </div>
            <div>
              <div className="font-mono text-[10px] text-on-surface-variant uppercase mb-1">Doanh thu hôm nay</div>
              <div className="font-display text-2xl font-bold text-secondary-container">$1,245.50</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pain Points */}
      <section id="pain-points" className="py-32 px-6 md:px-16 max-w-container-max mx-auto scroll-mt-24">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">BẠN ĐANG LÀM TIẾP THỊ LIÊN KẾT THỦ CÔNG?</h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">Và đang vật lộn với những rào cản này mỗi ngày?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PainPointCard icon={Video} title="Chỉnh Sửa Video Mất Thời Gian" description="Tốn hàng giờ để cắt ghép, chỉnh sửa một video ngắn mà chưa chắc đã cắn đề xuất." />
          <PainPointCard icon={TrendingDown} title="Khát Lượt Xem, Đói Lượt Truy Cập" description="Kênh mãi không lên xu hướng, đăng video chỉ có lác đác vài lượt xem từ người quen." />
          <PainPointCard icon={SearchX} title="Khó Tìm Sản Phẩm Đắt Khách" description="Không biết tìm kiếm và theo dõi đối thủ, chọn bừa sản phẩm dẫn đến làm mãi không có chuyển đổi." />
          <PainPointCard icon={Network} title="Không Thể Mở Rộng Quy Mô" description="Làm tay chỉ duy trì được 1-2 kênh, không thể nhân bản hệ thống để bùng nổ doanh thu." />
          <PainPointCard icon={Ban} title="Khóa Kênh Liên Tục" description="Đăng tay dễ dính bản quyền, đăng lại bị quét thuật toán, mất bao công sức xây lại từ đầu." />
          <PainPointCard icon={CalendarClock} title="Canh Giờ Đăng Bài" description="Phải trực tuyến liên tục để canh khung giờ vàng, không có thời gian tối ưu chiến lược." />
        </div>
      </section>

      {/* Ecosystem Bento */}
      <section id="ecosystem" className="py-32 px-6 md:px-16 max-w-container-max mx-auto relative scroll-mt-24">
        <div className="absolute inset-0 bg-secondary-container/5 blur-[150px] pointer-events-none" />
        <div className="mb-20 text-center">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6 tracking-tight">TẤT CẢ TRONG 1 HỆ SINH THÁI AI</h2>
          <p className="font-display text-2xl text-secondary-container font-semibold uppercase tracking-widest">Sức mạnh công nghệ giúp bạn đi tắt đón đầu.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
          <motion.div 
            whileHover={{ scale: 1.01 }}
            className="md:col-span-2 md:row-span-2 glass-card rounded-2xl p-8 border-secondary-container/30 flex flex-col justify-between group overflow-hidden"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-secondary-container/20 rounded-full blur-[60px] group-hover:bg-secondary-container/30 transition-all" />
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary-container/10 border border-secondary-container/20 mb-6 font-mono text-[10px] text-secondary-container tracking-widest uppercase font-bold">
                <Cpu className="w-4 h-4" />
                CÔNG NGHỆ LÕI
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface mb-4">Trình Tạo Video Tự Động AI</h3>
              <p className="font-sans text-lg text-on-surface-variant max-w-md leading-relaxed">Tự động crawl sản phẩm hot, sinh kịch bản và dựng video hàng loạt với giọng nói AI và hiệu ứng thịnh hành chỉ trong vài phút.</p>
            </div>
            <div className="mt-10 flex gap-3 h-10 w-full">
              <div className="flex-1 bg-on-surface/5 rounded-md border border-on-surface/10 overflow-hidden"><motion.div animate={{ width: ['40%', '80%', '60%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-secondary-container/50" /></div>
              <div className="flex-1 bg-on-surface/5 rounded-md border border-on-surface/10 overflow-hidden"><motion.div animate={{ width: ['20%', '90%', '40%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-primary-container/50" /></div>
            </div>
          </motion.div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-on-surface/20 transition-colors">
            <Smartphone className="w-12 h-12 text-on-surface opacity-50" />
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Đăng Bài Tự Động</h3>
              <p className="font-sans text-xs text-on-surface-variant">Lên lịch đăng đa nền tảng TikTok, Shopee Video tự động.</p>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-on-surface/20 transition-colors">
            <Sparkles className="w-12 h-12 text-on-surface opacity-50" />
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Sáng Tạo Nội Dung</h3>
              <p className="font-sans text-xs text-on-surface-variant">Tự động sinh tiêu đề, hashtag chuẩn SEO ăn đề xuất.</p>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex items-center gap-8 hover:border-primary-container/30 transition-all">
            <div className="w-20 h-20 rounded-2xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 flex-shrink-0">
              <MessagesSquare className="w-10 h-10 text-primary-container" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-2">Tương Tác Mồi Tự Động</h3>
              <p className="font-sans text-on-surface-variant">Hệ thống tài khoản AI tự động thả tim, bình luận mồi để kéo traffic thật trong 30p đầu.</p>
            </div>
          </div>
        </div>

        {/* Three equal height/width cards in a balanced grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="glass-card rounded-[24px] p-8 md:p-10 border-[#1877F2]/30 flex flex-col justify-between hover:scale-[1.03] hover:border-[#1877F2]/60 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#1877F2] shadow-[0_0_12px_#1877F2]" />
                <span className="font-mono text-xs text-[#1877F2] font-bold uppercase tracking-widest">TIẾP THỊ FACEBOOK</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-6 uppercase italic tracking-tighter group-hover:text-[#1877F2] group-hover:scale-[1.03] origin-left transition-all duration-300">MKT PAGE</h3>
              <ul className="space-y-4">
                {[
                  "Quản lý hàng trăm trang tự động",
                  "Nuôi trang chuẩn tệp cắn xu hướng dễ dàng",
                  "Lên lịch đăng Video từng trang thuận tiện",
                  "Rải liên kết tiếp thị tự động các hội nhóm"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#1877F2]/50 shrink-0" />
                    <span className="font-sans text-sm md:text-base leading-relaxed text-on-surface-variant font-semibold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-[24px] p-8 md:p-10 border-[#FF6A00]/30 flex flex-col justify-between hover:scale-[1.03] hover:border-[#FF6A00]/60 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF6A00] shadow-[0_0_12px_#FF6A00]" />
                <span className="font-mono text-xs text-[#FF6A00] font-bold uppercase tracking-widest">SẢN XUẤT VIDEO AI</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-6 uppercase italic tracking-tighter group-hover:text-[#FF6A00] group-hover:scale-[1.03] origin-left transition-all duration-300 font-bold">VIDEO AI</h3>
              <ul className="space-y-4">
                {[
                  "Tích hợp AI Grok sản xuất video hàng loạt",
                  "Đồng nhất nhân vật & giọng nói tự động",
                  "Tạo video từ liên kết Shopee nhanh chóng",
                  "Tự động sinh mô tả & hashtag xu hướng",
                  "Tối ưu video theo từng nền tảng"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FF6A00]/50 shrink-0" />
                    <span className="font-sans text-sm md:text-base leading-relaxed text-on-surface-variant font-semibold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-[24px] p-8 md:p-10 border-[#FE2C55]/30 flex flex-col justify-between hover:scale-[1.03] hover:border-[#FE2C55]/60 transition-all duration-300 group">
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex -space-x-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25F4EE] shadow-[0_0_12px_#25F4EE]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FE2C55] shadow-[0_0_12px_#FE2C55]" />
                </div>
                <span className="font-mono text-xs text-[#FE2C55] font-bold uppercase tracking-widest">TIẾP THỊ TIKTOK</span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-on-surface mb-6 uppercase italic tracking-tighter group-hover:text-[#FE2C55] group-hover:scale-[1.03] origin-left transition-all duration-300">MKT TIKPRO</h3>
              <ul className="space-y-4">
                {[
                  "Nuôi hàng nghìn tài khoản Tiktok chuẩn tệp",
                  "Tự động đăng bài gắn giỏ hàng từng kênh",
                  "Seeding đẩy đề xuất kênh tự động chuẩn tệp",
                  "Seeding livestream đẩy xu hướng bùng nổ đơn"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-[#FE2C55]/50 shrink-0" />
                    <span className="font-sans text-sm md:text-base leading-relaxed text-on-surface-variant font-semibold">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Overview Section */}
      <section id="video-overview" className="py-24 px-6 md:px-16 max-w-container-max mx-auto border-t border-on-surface/5 scroll-mt-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-on-surface mb-4 tracking-tight uppercase">
            VIDEO TỔNG QUAN TÍNH NĂNG
          </h2>
          <p className="font-sans text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto">
            Xem ngay video demo thực tế sức mạnh hoạt động của bộ ba giải pháp MKT hàng đầu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: MKT Page */}
          <div className="glass-card rounded-[24px] p-5 border-[#1877F2]/20 flex flex-col h-full hover:scale-[1.02] hover:border-[#1877F2]/40 transition-all duration-300 group">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-[#1877F2]/10 mb-4 shadow-md relative">
              <iframe
                id="yt-video-mktpage"
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/F5hwdxyVl2s"
                title="Giới thiệu tính năng phần mềm MKT Page"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#1877F2] shadow-[0_0_8px_#1877F2]" />
                  <span className="font-mono text-[9px] text-[#1877F2] font-bold uppercase tracking-widest">TỔNG QUAN HỆ THỐNG</span>
                </div>
                <h3 className="font-display text-lg font-black text-on-surface mb-2.5 group-hover:text-[#1877F2] transition-colors">PHẦN MỀM MKT PAGE</h3>
                
                {/* Note box */}
                <div className="p-3.5 bg-surface-container-low/40 rounded-xl border border-on-surface/5 font-sans text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface block mb-1">📌 Ghi chú nội dung:</span>
                  Tự động hóa quản lý không giới hạn số lượng Fanpage Facebook. Quy trình thiết lập hệ thống nuôi trang tự động, tự đăng thước phim Reels và tự chia sẻ link tiếp thị liên kết bền bỉ vào hội nhóm mục tiêu.
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: MKT TikPro */}
          <div className="glass-card rounded-[24px] p-5 border-[#FE2C55]/20 flex flex-col h-full hover:scale-[1.02] hover:border-[#FE2C55]/40 transition-all duration-300 group">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-[#FE2C55]/10 mb-4 shadow-md relative">
              <iframe
                id="yt-video-tikpro"
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/yYAaxmbgItA"
                title="Giới thiệu tính năng phần mềm MKT TikPro"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex -space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#25F4EE] shadow-[0_0_8px_#25F4EE]" />
                    <span className="w-2 h-2 rounded-full bg-[#FE2C55] shadow-[0_0_8px_#FE2C55]" />
                  </div>
                  <span className="font-mono text-[9px] text-[#FE2C55] font-bold uppercase tracking-widest">BÙNG NỔ DOANH SỐ</span>
                </div>
                <h3 className="font-display text-lg font-black text-on-surface mb-2.5 group-hover:text-[#FE2C55] transition-colors">PHẦN MỀM MKT TIKPRO</h3>
                
                {/* Note box */}
                <div className="p-3.5 bg-surface-container-low/40 rounded-xl border border-on-surface/5 font-sans text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface block mb-1">📌 Ghi chú nội dung:</span>
                  Xây dựng & nuôi dưỡng trang trại hàng nghìn tài khoản TikTok Trust cực nhanh. Tự đăng video gắn giỏ hàng mượt mà, seeding đẩy tương tác tự động kéo triệu mắt xem đẩy doanh số vượt trội.
                </div>
              </div>
            </div>
          </div>

          {/* Card 3: Video AI */}
          <div className="glass-card rounded-[24px] p-5 border-[#FF6A00]/20 flex flex-col h-full hover:scale-[1.02] hover:border-[#FF6A00]/40 transition-all duration-300 group">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-[#FF6A00]/10 mb-4 shadow-md relative">
              <iframe
                id="yt-video-videoai"
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/WIZxVxFVdyw"
                title="Giới thiệu tính năng phần mềm VIDEO AI"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
                  <span className="font-mono text-[9px] text-[#FF6A00] font-bold uppercase tracking-widest">SẢN XUẤT HÀNG LOẠT</span>
                </div>
                <h3 className="font-display text-lg font-black text-on-surface mb-2.5 group-hover:text-[#FF6A00] transition-colors">PHẦN MỀM VIDEO AI</h3>
                
                {/* Note box */}
                <div className="p-3.5 bg-surface-container-low/40 rounded-xl border border-on-surface/5 font-sans text-xs text-on-surface-variant leading-relaxed">
                  <span className="font-bold text-on-surface block mb-1">📌 Ghi chú nội dung:</span>
                  Ứng dụng AI thông minh giúp render & sản xuất hàng loạt video ngắn tiếp thị từ nguồn Shopee, TikTok, YouTube. Tự chuyển đổi văn bản thành giọng nói lôi cuốn cùng phụ đề chuyên nghiệp tự động.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation Timeline */}
      <section id="solutions" className="py-32 bg-surface-container-lowest/50 border-y border-on-surface/5 overflow-hidden scroll-mt-24">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">QUY TRÌNH 5 BƯỚC TỰ ĐỘNG</h2>
            <p className="font-sans text-lg text-on-surface-variant">Setup 1 lần, hệ thống cày cuốc 24/7.</p>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-0.5 bg-on-surface/10 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-container via-secondary-container to-primary-container shadow-[0_2px_8px_rgba(2,132,199,0.15)]"
              />
            </div>
            
            <StepCard number="01" icon={SearchX} title="Chọn Sản Phẩm" description="Crawl trending Shopee/TikTok." colorClass="primary-container" />
            <StepCard number="02" icon={Cpu} title="AI Tạo Video" description="Tự động sinh kịch bản & render." colorClass="secondary-container" />
            <StepCard number="03" icon={Rocket} title="Đăng TikTok/Shopee" description="Lên lịch đa nền tảng." colorClass="secondary-container" />
            <StepCard number="04" icon={User} title="Seeding mồi" description="Clone vào tương tác mồi." colorClass="tertiary" />
            <StepCard number="05" icon={TrendingUp} title="Nhận Hoa Hồng" description="Tiền về tài khoản thụ động." colorClass="primary-container" />
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 px-6 md:px-16 max-w-container-max mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-8 leading-[1.2]">KẾT QUẢ THỰC TẾ <br /> TỪ NGƯỜI DÙNG</h2>
          <p className="font-sans text-lg text-on-surface-variant mb-12">Hơn 5000+ nhà sáng tạo đã x3 thu nhập sau 1 tháng sử dụng hệ thống AI Automation.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="glass-card p-8 rounded-2xl border-l-[6px] border-l-secondary-container relative text-left"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-full bg-surface-bright flex items-center justify-center border border-on-surface/10">
                  <User className="w-8 h-8 text-on-surface-variant" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-on-surface">Hoàng Minhh</div>
                  <div className="flex text-primary-container">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary-container" />)}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-mono text-[10px] text-on-surface-variant uppercase mb-1">Doanh thu/Tháng</div>
                  <div className="font-display text-2xl font-black text-secondary-container">45Tr+ VNĐ</div>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant italic leading-relaxed">"Chưa bao giờ làm tiếp thị liên kết lại nhàn như vậy. Cắm máy chạy 50 video mỗi ngày trên 3 kênh TikTok, tiền về đều như vắt chanh."</p>
            </motion.div>

            <div className="glass-card p-8 rounded-2xl border-l-[6px] border-l-primary-container relative text-left">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-full bg-surface-bright flex items-center justify-center border border-on-surface/10">
                  <User className="w-8 h-8 text-on-surface-variant" />
                </div>
                <div>
                  <div className="font-display text-xl font-bold text-on-surface">Thảo Vy Store</div>
                  <div className="flex text-primary-container">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary-container" />)}
                  </div>
                </div>
                <div className="ml-auto text-right">
                  <div className="font-mono text-[10px] text-on-surface-variant uppercase mb-1">Doanh thu/Tháng</div>
                  <div className="font-display text-2xl font-black text-secondary-container">30Tr+ VNĐ</div>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant italic leading-relaxed">"Gói Chuyên Nghiệp thực sự quá đỉnh. AI làm hết mọi việc từ chọn sản phẩm đến dựng video. Chỉ việc kiểm tra hoa hồng mỗi ngày."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-32 px-6 md:px-16 max-w-container-max mx-auto scroll-mt-24">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">BẢNG GIÁ ĐẦU TƯ</h2>
          <p className="font-sans text-lg text-on-surface-variant">Chọn gói giải pháp phù hợp với quy mô của bạn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <PricingCard 
            type="Combo gói 1 năm" 
            price="9.000.000" 
            priceSuffix="VND / năm"
            buttonText="Mua gói này"
            onClick={() => setIsModalOpen(true)}
            features={[
              { text: 'Render không giới hạn video 1 ngày', included: true },
              { text: 'Quản lý không giới hạn số lượng kênh', included: true },
              { text: 'Auto đăng video gắn giỏ', included: true },
              { text: 'Auto seeding đẩy đề xuất kênh tự động', included: true },
            ]}
          />
          <PricingCard 
            type="Combo gói 5 năm" 
            price="21.000.000" 
            recommended={true}
            recommendedText="Được tin dùng"
            priceSuffix="VND / 5 năm"
            buttonText="Mua gói này"
            onClick={() => setIsModalOpen(true)}
            features={[
              { text: 'Full quyền lợi gói 1 năm', included: true },
              { text: 'Ưu tiên hỗ trợ 1:1', included: true },
              { text: 'Tặng kho 1000+ kịch bản viral', included: true },
              { text: 'Tư vấn lộ trình scale up', included: true },
            ]}
          />
          <PricingCard 
            type="Combo gói 10 năm" 
            price="36.000.000" 
            priceSuffix="VND / 10 năm"
            buttonText="Mua gói này"
            onClick={() => setIsModalOpen(true)}
            features={[
              { text: 'Full quyền lợi gói 5 năm', included: true },
              { text: 'Cam kết hỗ trợ trọn đời', included: true },
              { text: 'Update AI VIP độc quyền', included: true },
              { text: 'Tư vấn dựng Agency', included: true },
            ]}
          />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-16 relative flex justify-center items-center overflow-hidden">
        <div className="absolute inset-0 bg-primary-container/20 blur-[200px] pointer-events-none" />
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="glass-card p-12 md:p-20 rounded-[40px] text-center max-w-5xl border-primary-container/30 relative z-10 shadow-3xl"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black text-on-surface mb-8 leading-[1.1] tracking-tighter uppercase italic">
            BẮT ĐẦU XÂY HỆ THỐNG <br /> TIẾP THỊ LIÊN KẾT AI NGAY HÔM NAY
          </h2>
          <p className="font-sans text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto leading-relaxed">
            Đừng để đối thủ bỏ xa bạn trong cuộc đua công nghệ. Tự động hóa công việc kiếm tiền online của bạn ngay bây giờ.
          </p>
          <motion.button 
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glow-button-primary px-16 py-6 text-xl rounded-2xl flex items-center gap-4 mx-auto"
          >
            <Rocket className="w-8 h-8" />
            KHỞI ĐỘNG HỆ THỐNG
          </motion.button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 bg-surface-container-lowest border-t border-white/5">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
            <div className="font-display text-2xl font-black text-on-surface flex items-center gap-2">
              <Bolt className="w-8 h-8 text-primary-container fill-primary-container" />
              AI AFFILIATE
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {['Tài liệu', 'Bảo mật', 'Điều khoản', 'Trạng thái API'].map(item => (
                <a key={item} href="#" className="font-mono text-xs text-on-surface-variant hover:text-secondary-container transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left font-sans text-sm text-on-surface-variant opacity-40">
            © 2024 PULSE AI AUTOMATION. HỆ THỐNG HOẠT ĐỘNG ỔN ĐỊNH. THỐNG TRỊ AFFILIATE VỚI CÔNG NGHỆ DẪN ĐẦU.
          </div>
        </div>
      </footer>
    </div>
  );
}
