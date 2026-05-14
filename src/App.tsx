import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
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
  Star
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
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
            className="fixed inset-0 bg-black/90 backdrop-blur-xl"
          />
          
          {/* Modal Content */}
          <motion.div 
            initial={{ scale: 0.9, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 40 }}
            className="relative w-full max-w-4xl bg-white rounded-[32px] shadow-2xl flex flex-col md:flex-row min-h-[600px] z-10 overflow-hidden"
          >
            {/* Close Button Mobile */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-black/10 md:hidden"
            >
              <X className="w-6 h-6 text-gray-800" />
            </button>

            {/* Left Side: Orange Branding */}
            <div className="w-full md:w-[50%] bg-[#EA4C2C] p-8 md:p-12 text-white flex flex-col relative">
              <h2 className="font-display text-4xl md:text-5xl font-black italic tracking-tighter mb-8 leading-tight">
                ĐỪNG BỎ LỠ!
              </h2>

              <div className="space-y-5 mb-10">
                {[
                  { text: <>Hỗ trợ 24/7, hướng dẫn <span className="text-[#00F0E8]">TẬN TÌNH</span> đến khi bạn thành thạo sử dụng công cụ</> },
                  { text: <>Huấn luyện <span className="text-[#00F0E8]">tư duy chiến lược</span> với đội ngũ chuyên gia &gt;10 năm kinh nghiệm</> },
                  { text: "Bảo trì và cập nhật phần mềm trọn đời miễn phí" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[#1B72E8] flex items-center justify-center border border-white/20">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-sans text-sm md:text-base font-bold leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-8 rounded-2xl overflow-hidden border-[3px] border-[#1B72E8] shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop" 
                  alt="Town canal"
                  className="w-full h-44 object-cover"
                />
              </div>

              <div className="bg-[#FF6A00] rounded-xl px-6 py-3 inline-flex items-center gap-3 mb-8 w-fit shadow-lg">
                <span className="font-display font-black text-sm tracking-tight leading-none">+600.000 Khách hàng đã phục vụ</span>
              </div>

              <div className="flex flex-wrap gap-3 mt-auto">
                {['AGENCY', 'ACAC ACADEMY', 'ASANA'].map(tag => (
                  <span key={tag} className="px-5 py-3 bg-white rounded-xl text-[#EA4C2C] font-display font-black text-[10px] tracking-widest shadow-md">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side: Contact Info */}
            <div className="w-full md:w-[50%] bg-[#F8FAFC] relative flex flex-col overflow-hidden">
              {/* Subtle background decoration */}
              <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none">
                <div className="absolute top-[20%] -right-20 w-64 h-64 bg-blue-400/20 rounded-full blur-3xl" />
                <div className="absolute bottom-[10%] -left-10 w-48 h-48 bg-orange-400/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 p-8 md:p-12 flex flex-col h-full items-center justify-center">
                {/* Close Button Desktop */}
                <button 
                  onClick={onClose}
                  className="absolute top-8 right-8 hidden md:block group transition-all duration-300 hover:rotate-90 p-2"
                >
                  <X className="w-7 h-7 text-gray-300 group-hover:text-gray-900" />
                </button>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="w-full bg-white rounded-[40px] p-8 md:p-14 shadow-[0_40px_80px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col items-center"
                >
                  <div className="mb-6 md:mb-8 font-display text-[10px] md:text-xs uppercase font-black tracking-[0.3em] text-[#94A3B8] text-center leading-none">
                    Hỗ trợ & tư vấn nhanh chóng
                  </div>
                  <h3 className="font-display text-4xl md:text-6xl font-black text-[#0F172A] mb-10 md:mb-14 italic uppercase tracking-tighter text-center leading-none">
                    LIÊN HỆ NGAY
                  </h3>

                  <motion.a 
                    href="https://zalo.me/0559360374"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-[#2563EB] text-white p-5 md:p-8 rounded-[24px] md:rounded-[30px] flex items-center gap-4 md:gap-6 shadow-[0_30px_60px_rgba(37,99,235,0.25)] transition-all group overflow-hidden relative"
                  >
                    {/* Gloss effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shrink-0 shadow-lg relative z-10 p-1">
                      <div className="text-[#2563EB] font-black text-[10px] md:text-sm leading-none bg-blue-50 w-full h-full rounded-lg md:rounded-xl flex items-center justify-center">Zalo</div>
                    </div>
                    <div className="text-left relative z-10 flex-1">
                      <div className="font-mono text-[11px] uppercase font-black tracking-[0.15em] opacity-80 mb-1 md:mb-2 leading-none text-white">LIÊN HỆ QUA ZALO SỐ:</div>
                      <div className="font-display text-[14px] font-black tracking-tighter leading-none whitespace-nowrap text-white">0559.360.374</div>
                    </div>
                    <ArrowRight className="hidden sm:block w-6 h-6 md:w-10 md:h-10 ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300" />
                  </motion.a>
                  
                  <div className="mt-14 flex items-center gap-4 py-4 px-8 bg-gray-50 rounded-full border border-gray-100 w-full overflow-hidden">
                    <div className="flex -space-x-3">
                      {[1,2,3,4,5].map(i => (
                        <motion.div 
                          key={i} 
                          animate={{ 
                            x: [0, 5, 0],
                            scale: [1, 1.05, 1]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity, 
                            delay: i * 0.5,
                            ease: "easeInOut"
                          }}
                          className="w-10 h-10 rounded-full border-2 border-white bg-white shadow-sm flex items-center justify-center overflow-hidden"
                        >
                          <User className="w-6 h-6 text-blue-500/40" />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-xs font-bold text-[#64748B] italic whitespace-nowrap"
                    >
                      Đang có 12 người chờ được tư vấn
                    </motion.div>
                  </div>
                </motion.div>
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
    <div className="w-12 h-12 rounded bg-surface-container flex items-center justify-center mb-6 border border-white/5">
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
    className={`glass-card p-8 rounded-2xl border-white/10 ${recommended ? 'border-primary-container shadow-[0_0_40px_rgba(255,106,0,0.2)] md:-translate-y-4 scale-105 z-10' : ''}`}
  >
    {recommended && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-container text-white px-4 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-widest shadow-xl whitespace-nowrap">
        {recommendedText}
      </div>
    )}
    <div className={`font-mono text-xs uppercase mb-2 ${recommended ? 'text-primary-container' : 'text-on-surface-variant'}`}>{type}</div>
    <div className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">
      {price}{priceSuffix && <span className="text-lg text-on-surface-variant font-normal">{priceSuffix}</span>}
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
      className={`w-full py-4 rounded-lg font-mono text-xs uppercase font-bold tracking-widest transition-all ${recommended ? 'glow-button-primary' : 'border border-white/20 hover:bg-white/5 text-on-surface'}`}
    >
      {buttonText}
    </button>
  </motion.div>
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-white">
      {/* CTA Modal */}
      <CTAModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-container-max mx-auto px-6 md:px-16 flex justify-between items-center h-20">
          <div className="font-display text-xl font-black tracking-tighter text-on-surface flex items-center gap-2">
            <Bolt className="w-6 h-6 text-primary-container fill-primary-container" />
            AI_AFFILIATE
          </div>
          <div className="hidden md:flex gap-10">
            {['Tính năng', 'Giải pháp', 'Bảng giá'].map((item) => (
              <a key={item} href="#" className="text-on-surface-variant hover:text-on-surface transition-colors font-mono text-xs uppercase tracking-widest">
                {item}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-secondary-container/30 bg-secondary-container/10 mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-secondary-container shadow-[0_0_8px_#00f0e8] animate-pulse" />
            <span className="font-mono text-[10px] text-secondary-container uppercase tracking-widest font-bold">HỆ SINH THÁI TỰ ĐỘNG HÓA</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-extrabold text-on-surface mb-8 leading-[1.1] tracking-tight"
          >
            XÂY HỆ THỐNG KÊNH <br className="hidden md:block" />
            AI AFFILIATE <span className="text-primary-container">SHOPEE</span> & <span className="text-secondary-container glow-text-secondary">TIKTOK</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Quy trình tự động hóa hoàn toàn từ tạo Video AI, Đăng bài đa nền tảng đến Seeding. Thống trị affiliate với tốc độ và quy mô không tưởng.
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
              className="px-10 py-5 rounded-md font-display font-bold uppercase tracking-wider border border-white/20 hover:bg-white/5 transition-colors flex items-center gap-3 text-on-surface"
            >
              <PlayCircle className="w-6 h-6" />
              Xem demo ngay
            </motion.a>
          </motion.div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 md:gap-20 border-t border-white/10 pt-10">
            {[
              { val: '10.000+', lbl: 'Video/Ngày', color: 'text-primary-container' },
              { val: '5.000+', lbl: 'Users Active', color: 'text-secondary-container' },
              { val: '$2.5M+', lbl: 'Hoa hồng tạo ra', color: 'text-on-surface' }
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
            className="w-full h-auto rounded-xl object-cover opacity-90 border border-white/10" 
            src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2664&auto=format&fit=crop" 
          />
          <div className="absolute -right-8 top-1/4 bg-surface-container-high/90 backdrop-blur-xl p-5 rounded-lg border border-secondary-container/30 shadow-[0_0_30px_rgba(0,240,232,0.2)] hidden lg:flex items-center gap-4">
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
      <section className="py-32 px-6 md:px-16 max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">BẠN ĐANG LÀM AFFILIATE THỦ CÔNG?</h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">Và đang vật lộn với những rào cản này mỗi ngày?</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PainPointCard icon={Video} title="Edit Video Mất Thời Gian" description="Tốn hàng giờ để cắt ghép, chỉnh sửa một video ngắn mà chưa chắc đã cắn đề xuất." />
          <PainPointCard icon={TrendingDown} title="Đói Traffic, View Lẹt Đẹt" description="Kênh mãi không lên xu hướng, đăng video chỉ có lác đác vài view người quen." />
          <PainPointCard icon={SearchX} title="Khó Chọn Sản Phẩm Win" description="Không biết spy đối thủ, chọn bừa sản phẩm dẫn đến làm mãi không có chuyển đổi." />
          <PainPointCard icon={Network} title="Không Thể Scale Up" description="Làm tay chỉ duy trì được 1-2 kênh, không thể nhân bản hệ thống để bùng nổ doanh thu." />
          <PainPointCard icon={Ban} title="Chết Kênh Liên Tục" description="Đăng tay dễ dính gậy bản quyền, reup bị quét, mất bao công sức xây lại từ đầu." />
          <PainPointCard icon={CalendarClock} title="Canh Giờ Đăng Bài" description="Phải online liên tục để canh giờ vàng, không có thời gian tối ưu chiến lược." />
        </div>
      </section>

      {/* Ecosystem Bento */}
      <section className="py-32 px-6 md:px-16 max-w-container-max mx-auto relative">
        <div className="absolute inset-0 bg-secondary-container/5 blur-[150px] pointer-events-none" />
        <div className="mb-20">
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
                CORE ENGINE
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-extrabold text-on-surface mb-4">AI Video Generator</h3>
              <p className="font-sans text-lg text-on-surface-variant max-w-md leading-relaxed">Tự động crawl sản phẩm hot, sinh kịch bản và render video hàng loạt với voice AI và hiệu ứng trending chỉ trong vài phút.</p>
            </div>
            <div className="mt-10 flex gap-3 h-10 w-full">
              <div className="flex-1 bg-white/5 rounded-md border border-white/10 overflow-hidden"><motion.div animate={{ width: ['40%', '80%', '60%'] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-secondary-container/50" /></div>
              <div className="flex-1 bg-white/5 rounded-md border border-white/10 overflow-hidden"><motion.div animate={{ width: ['20%', '90%', '40%'] }} transition={{ duration: 4, repeat: Infinity }} className="h-full bg-primary-container/50" /></div>
            </div>
          </motion.div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-white/30 transition-colors">
            <Smartphone className="w-12 h-12 text-on-surface opacity-50" />
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">Auto Posting</h3>
              <p className="font-sans text-xs text-on-surface-variant">Lên lịch đăng đa nền tảng TikTok, Shopee Video tự động.</p>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-8 flex flex-col justify-between hover:border-white/30 transition-colors">
            <Sparkles className="w-12 h-12 text-on-surface opacity-50" />
            <div>
              <h3 className="font-display text-xl font-bold text-on-surface mb-2">AI Content</h3>
              <p className="font-sans text-xs text-on-surface-variant">Tự động sinh tiêu đề, hashtag chuẩn SEO ăn đề xuất.</p>
            </div>
          </div>

          <div className="md:col-span-2 md:row-span-1 glass-card rounded-2xl p-8 flex items-center gap-8 hover:border-primary-container/30 transition-all">
            <div className="w-20 h-20 rounded-2xl bg-primary-container/10 flex items-center justify-center border border-primary-container/20 flex-shrink-0">
              <MessagesSquare className="w-10 h-10 text-primary-container" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-2">Auto Seeding Mồi</h3>
              <p className="font-sans text-on-surface-variant">Hệ thống account AI tự động thả tim, comment mồi để kéo traffic thật trong 30p đầu.</p>
            </div>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-6 border-[#1877F2]/30 flex flex-col hover:scale-[1.02] transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#1877F2] shadow-[0_0_10px_#1877F2]" />
              <span className="font-mono text-[9px] text-[#1877F2] font-bold uppercase tracking-widest">Facebook MKT</span>
            </div>
            <h3 className="font-display text-xl font-black text-on-surface mb-3 uppercase italic tracking-tighter group-hover:text-[#1877F2] transition-colors">MKT Page</h3>
            <ul className="space-y-2.5">
              {[
                "Quản lý hàng trăm page tự động",
                "Nuôi page chuẩn tệp cắn xu hướng dễ dàng",
                "Lên lịch đăng Video từng page thuận tiện",
                "Rải link affiliate tự động các hội nhóm"
              ].map((text, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#1877F2]/40 shrink-0" />
                  <span className="font-sans text-[10px] leading-tight text-on-surface-variant font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-6 border-[#FF6A00]/30 flex flex-col hover:scale-[1.02] transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_10px_#FF6A00]" />
              <span className="font-mono text-[9px] text-[#FF6A00] font-bold uppercase tracking-widest">Video AI</span>
            </div>
            <h3 className="font-display text-xl font-black text-on-surface mb-3 uppercase italic tracking-tighter group-hover:text-[#FF6A00] transition-colors">Video AI</h3>
            <ul className="space-y-2">
              {[
                "Tích hợp Grok sản xuất video hàng loạt",
                "Đồng nhất nhân vật & giọng nói tự động",
                "Tạo video từ link Shopee nhanh chóng",
                "Tự động sinh mô tả & hashtag xu hướng",
                "Tối ưu video theo từng nền tảng"
              ].map((text, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FF6A00]/40 shrink-0" />
                  <span className="font-sans text-[10px] leading-tight text-on-surface-variant font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1 md:row-span-1 glass-card rounded-2xl p-6 border-[#FE2C55]/30 flex flex-col hover:scale-[1.02] transition-all group">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex -space-x-1">
                <span className="w-2 h-2 rounded-full bg-[#25F4EE] shadow-[0_0_10px_#25F4EE]" />
                <span className="w-2 h-2 rounded-full bg-[#FE2C55] shadow-[0_0_10px_#FE2C55]" />
              </div>
              <span className="font-mono text-[9px] text-[#FE2C55] font-bold uppercase tracking-widest">Tiktok MKT</span>
            </div>
            <h3 className="font-display text-xl font-black text-on-surface mb-3 uppercase italic tracking-tighter group-hover:text-[#FE2C55] transition-colors">MKT Tikpro</h3>
            <ul className="space-y-2">
              {[
                "Nuôi hàng nghìn tài khoản Tiktok chuẩn tệp",
                "Tự động đăng bài gắn giỏ hàng từng kênh",
                "Seeding đẩy đề xuất kênh tự động chuẩn tệp",
                "Seeding livestream đẩy xu hướng bùng nổ đơn"
              ].map((text, i) => (
                <li key={i} className="flex gap-2 items-start">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#FE2C55]/40 shrink-0" />
                  <span className="font-sans text-[10px] leading-tight text-on-surface-variant font-bold">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Automation Timeline */}
      <section className="py-32 bg-surface-container-lowest/50 border-y border-white/5 overflow-hidden">
        <div className="max-w-container-max mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">QUY TRÌNH 5 BƯỚC TỰ ĐỘNG</h2>
            <p className="font-sans text-lg text-on-surface-variant">Setup 1 lần, hệ thống cày cuốc 24/7.</p>
          </div>
          
          <div className="relative flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-[48px] left-[10%] right-[10%] h-0.5 bg-white/10 z-0">
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-primary-container via-secondary-container to-primary-container shadow-[0_0_10px_rgba(0,240,232,0.3)]"
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
                <div className="w-14 h-14 rounded-full bg-surface-bright flex items-center justify-center border border-white/10">
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
                  <div className="font-display text-2xl font-black text-secondary-container">45M+ VNĐ</div>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant italic leading-relaxed">"Chưa bao giờ làm affiliate lại nhàn như vậy. Cắm máy chạy 50 video mỗi ngày trên 3 kênh TikTok, tiền về đều như vắt chanh."</p>
            </motion.div>

            <div className="glass-card p-8 rounded-2xl border-l-[6px] border-l-primary-container relative text-left">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-14 h-14 rounded-full bg-surface-bright flex items-center justify-center border border-white/10">
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
                  <div className="font-display text-2xl font-black text-secondary-container">30M+ VNĐ</div>
                </div>
              </div>
              <p className="font-sans text-on-surface-variant italic leading-relaxed">"Gói Pro thực sự quá đỉnh. AI làm hết mọi việc từ chọn sản phẩm đến render video. Chỉ việc check hoa hồng mỗi ngày."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-6 md:px-16 max-w-container-max mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-6">BẢNG GIÁ ĐẦU TƯ</h2>
          <p className="font-sans text-lg text-on-surface-variant">Chọn gói giải pháp phù hợp với quy mô của bạn.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <PricingCard 
            type="Combo gói 1 năm" 
            price="9tr" 
            priceSuffix=""
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
            price="21tr" 
            recommended={true}
            recommendedText="Được tin dùng"
            priceSuffix=""
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
            price="36tr" 
            priceSuffix=""
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
            BẮT ĐẦU XÂY HỆ THỐNG <br /> AI AFFILIATE NGAY HÔM NAY
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
              AI AFFILIATE AUTOMATION
            </div>
            <div className="flex flex-wrap justify-center gap-10">
              {['Documentation', 'Privacy', 'Terms', 'API Status'].map(item => (
                <a key={item} href="#" className="font-mono text-xs text-on-surface-variant hover:text-secondary-container transition-colors uppercase tracking-widest">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="text-center md:text-left font-sans text-sm text-on-surface-variant opacity-40">
            © 2024 PULSE AI AUTOMATION. ALL SYSTEMS OPERATIONAL. THỐNG TRỊ AFFILIATE VỚI CÔNG NGHỆ DẪN ĐẦU.
          </div>
        </div>
      </footer>
    </div>
  );
}
