'use client';
import { useState, useEffect } from 'react';

export default function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [selected, setSelected] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const openModal = (service: any) => {
    setSelected(service);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelected(null), 300);
  };

  const services = [
    // مواقع
    {
      title: 'موقع تعريفي بسيط (Landing Page أو صفحة شركة)',
      description: 'صفحة ثابتة بها معلومات عن الشركة أو الشخص، تواصل، خريطة، صور بسيطة',
      icon: '📄',
      priceEgp: 'من 1,500 إلى 4,000 جنيه',
      type: 'مواقع',
      features: ['معلومات عن الشركة', 'تواصل', 'خريطة', 'صور بسيطة']
    },
    {
      title: 'موقع شركة صغير (عدة صفحات) واجهة فقط',
      description: 'موقع فيه صفحات: من نحن، خدماتنا، تواصل، معرض أعمال',
      icon: '🏢',
      priceEgp: 'من 5,000 إلى 8,000 جنيه',
      type: 'مواقع',
      features: ['صفحات متعددة', 'معرض أعمال', 'تواصل', 'خدماتنا']
    },
    {
      title: 'موقع ديناميكي بواجهة إدارة (CMS)',
      description: 'موقع يحتوي على لوحة تحكم لإضافة وتعديل المحتوى',
      icon: '📝',
      priceEgp: 'من 8,000 إلى 16,000 جنيه',
      type: 'مواقع',
      features: ['لوحة تحكم', 'إضافة وتعديل المحتوى', 'إدارة المستخدمين']
    },
    {
      title: 'متجر إلكتروني بسيط',
      description: 'بيع منتجات، سلة مشتريات، بوابة دفع، تسجيل مستخدم',
      icon: '🛒',
      priceEgp: 'من 10,000 إلى 30,000 جنيه',
      type: 'مواقع',
      features: ['إدارة المنتجات', 'سلة مشتريات', 'بوابة دفع', 'تسجيل مستخدم']
    },
    {
      title: 'نظام حجز أو موقع تفاعلي',
      description: 'مع تقويم حجز، تنبيهات، تسجيل دخول',
      icon: '📅',
      priceEgp: 'من 15,000 إلى 40,000 جنيه',
      type: 'مواقع',
      features: ['تقويم حجز', 'تنبيهات', 'تسجيل دخول', 'تفاعل المستخدم']
    },
    {
      title: 'موقع مخصص بالكامل من الصفر',
      description: 'تصميم UX/UI + برمجة كاملة بـ PHP / React أو Laravel أو غيرهم',
      icon: '⚙️',
      priceEgp: 'من 25,000 إلى 70,000 جنيه أو أكثر',
      type: 'مواقع',
      features: ['تصميم مخصص', 'برمجة من الصفر', 'بدون قوالب', 'تخصيص كامل']
    },
    {
      title: 'موقع تعليمي أو منصة تعليم أونلاين',
      description: 'كورسات، فيديوهات، دفع، تفاعل، درجات',
      icon: '🎓',
      priceEgp: 'من 30,000 إلى 100,000 جنيه',
      type: 'مواقع',
      features: ['كورسات', 'فيديوهات', 'دفع إلكتروني', 'تفاعل ودرجات']
    },
    {
      title: 'مواقع متطورة أو Enterprise',
      description: 'أنظمة معقدة متكاملة + أمان عالي + دعم',
      icon: '🏦',
      priceEgp: 'من 50,000 إلى 200,000 جنيه',
      type: 'مواقع',
      features: ['أنظمة متكاملة', 'أمان عالي', 'دعم فني', 'حلول مخصصة']
    },
    // أنظمة
    {
      title: 'نظام CRM بسيط',
      description: 'إدارة العملاء، سجل التواصل، تنبيهات، رسائل',
      icon: '📇',
      priceEgp: 'من 15,000 إلى 35,000 جنيه',
      type: 'أنظمة',
      features: ['إدارة العملاء', 'سجل التواصل', 'تنبيهات', 'رسائل']
    },
    {
      title: 'نظام CRM متوسط + ربط بالمبيعات أو الدعم',
      description: 'إدارة العملاء + عروض أسعار + فواتير + تقارير',
      icon: '📊',
      priceEgp: 'من 25,000 إلى 50,000 جنيه',
      type: 'أنظمة',
      features: ['عروض أسعار', 'فواتير', 'تقارير', 'ربط مبيعات/دعم']
    },
    {
      title: 'نظام ERP مخصص صغير',
      description: 'إدارة موارد بشرية، مخزون، مبيعات، مشتريات، تقارير',
      icon: '🏢',
      priceEgp: 'من 40,000 إلى 80,000 جنيه',
      type: 'أنظمة',
      features: ['موارد بشرية', 'مخزون', 'مبيعات', 'مشتريات', 'تقارير']
    },
    {
      title: 'نظام ERP متوسط',
      description: 'نظام كامل مع صلاحيات، مستخدمين، حسابات، ضريبة، تقارير BI',
      icon: '📈',
      priceEgp: 'من 70,000 إلى 150,000 جنيه',
      type: 'أنظمة',
      features: ['صلاحيات', 'مستخدمين', 'حسابات', 'ضريبة', 'تقارير BI']
    },
    {
      title: 'ERP متكامل للشركات الكبرى (مخصص من الصفر)',
      description: 'تطوير من الصفر، API، Cloud/On-Premises، ذكاء صناعي، دعم فني مستمر',
      icon: '🌐',
      priceEgp: 'من 200,000 إلى 500,000 جنيه أو أكثر',
      type: 'أنظمة',
      features: ['تطوير من الصفر', 'API', 'Cloud/On-Premises', 'ذكاء صناعي', 'دعم فني']
    },
    // تطبيقات
    {
      title: 'تطبيق بسيط (Static App)',
      description: 'مجرد شاشات ثابتة: نبذة، تواصل، صور، روابط',
      icon: '📱',
      priceEgp: 'من 3,000 إلى 7,000 جنيه',
      type: 'تطبيقات',
      features: ['شاشات ثابتة', 'تواصل', 'صور', 'روابط']
    },
    {
      title: 'تطبيق خدمات أو عرض محتوى (Dynamic)',
      description: 'فيه API، محتوى متغير، واجهات محدثة',
      icon: '📲',
      priceEgp: 'من 7,000 إلى 15,000 جنيه',
      type: 'تطبيقات',
      features: ['محتوى متغير', 'واجهات محدثة', 'تكامل مع API']
    },
    {
      title: 'تطبيق مع تسجيل دخول + قاعدة بيانات',
      description: 'مستخدمين، تسجيل دخول، بيانات محفوظة',
      icon: '🔐',
      priceEgp: 'من 12,000 إلى 25,000 جنيه',
      type: 'تطبيقات',
      features: ['تسجيل دخول', 'إدارة مستخدمين', 'قاعدة بيانات', 'حفظ بيانات']
    },
    {
      title: 'تطبيق متجر إلكتروني (E-Commerce App)',
      description: 'منتجات، سلة، دفع، تسجيل دخول',
      icon: '🛒',
      priceEgp: 'من 20,000 إلى 50,000 جنيه',
      type: 'تطبيقات',
      features: ['منتجات', 'سلة مشتريات', 'دفع إلكتروني', 'تسجيل دخول']
    },
    {
      title: 'تطبيق حجوزات أو تتبع (Booking / Tracking)',
      description: 'كالمطاعم، العيادات، التوصيل',
      icon: '📦',
      priceEgp: 'من 25,000 إلى 60,000 جنيه',
      type: 'تطبيقات',
      features: ['حجوزات', 'تتبع', 'تنبيهات', 'توصيل']
    },
    {
      title: 'تطبيق سوبر ماركت، صيدلية، أو مشاوير',
      description: 'متعدد البائعين أو السائقين',
      icon: '🛍️',
      priceEgp: 'من 30,000 إلى 80,000 جنيه',
      type: 'تطبيقات',
      features: ['متعدد البائعين', 'تتبع الطلبات', 'دفع إلكتروني', 'إدارة سائقين']
    },
    {
      title: 'تطبيق تعليمي أو بث مباشر أو شات',
      description: 'كورسات، فيديوهات، لايف، دردشة',
      icon: '🎥',
      priceEgp: 'من 30,000 إلى 250,000 جنيه',
      type: 'تطبيقات',
      features: ['كورسات', 'فيديوهات', 'بث مباشر', 'دردشة']
    },
    {
      title: 'تطبيق شامل أو مخصص بالكامل (Native / Flutter)',
      description: 'تصميم مخصص، أنظمة متكاملة، جودة عالية',
      icon: '⚡',
      priceEgp: 'من 50,000 إلى 150,000 جنيه أو أكثر',
      type: 'تطبيقات',
      features: ['تصميم مخصص', 'أنظمة متكاملة', 'جودة عالية', 'برمجة Native/Flutter']
    },
    // أمن
    {
      title: 'فحص أمني أساسي لموقع أو تطبيق (Basic Security Audit)',
      description: 'فحص يدوي + باستخدام أدوات مثل OWASP ZAP',
      icon: '🔎',
      priceEgp: 'من 3,000 إلى 7,000 جنيه',
      type: 'أمن',
      features: ['فحص يدوي', 'OWASP ZAP', 'تقرير ثغرات']
    },
    {
      title: 'فحص أمني شامل (Vulnerability Assessment)',
      description: 'يشمل SQLi, XSS, CSRF, LFI, RCE وغيره',
      icon: '🛡️',
      priceEgp: 'من 7,000 إلى 15,000 جنيه',
      type: 'أمن',
      features: ['SQLi', 'XSS', 'CSRF', 'LFI', 'RCE', 'تقرير شامل']
    },
    {
      title: 'اختبار اختراق (Penetration Testing)',
      description: 'تنفيذ هجمات وهمية لاكتشاف الثغرات + تقرير تقني',
      icon: '💣',
      priceEgp: 'من 12,000 إلى 30,000 جنيه',
      type: 'أمن',
      features: ['هجمات وهمية', 'تقرير تقني', 'كشف الثغرات']
    },
    {
      title: 'تأمين تطبيق أو موقع فعلي (Hardening + Fixes)',
      description: 'تطبيق حلول حقيقية على الكود والسيرفر',
      icon: '🔒',
      priceEgp: 'من 8,000 إلى 25,000 جنيه',
      type: 'أمن',
      features: ['تأمين الكود', 'تأمين السيرفر', 'حلول عملية']
    },
    {
      title: 'تركيب جدار حماية (WAF / Firewall)',
      description: 'سواء Cloudflare, ModSecurity, أو غيرهم',
      icon: '🧱',
      priceEgp: 'من 1,500 إلى 5,000 جنيه',
      type: 'أمن',
      features: ['Cloudflare', 'ModSecurity', 'جدار حماية']
    },
    {
      title: 'تشفير البيانات (Encryption)',
      description: 'تشفير بيانات المستخدمين، الاتصال، قواعد البيانات',
      icon: '🔐',
      priceEgp: 'من 2,000 إلى 10,000 جنيه',
      type: 'أمن',
      features: ['تشفير بيانات', 'تشفير اتصال', 'تشفير قواعد بيانات']
    },
    {
      title: 'خدمة مراقبة مستمرة (Monitoring + Alerts)',
      description: 'مراقبة النشاطات المشبوهة وتنبيهات فورية',
      icon: '📡',
      priceEgp: 'من 5,000 إلى 20,000 شهريًا',
      type: 'أمن',
      features: ['مراقبة مستمرة', 'تنبيهات فورية', 'كشف نشاط مشبوه']
    },
    {
      title: 'دورة تدريبية لفريقك أو توعية المستخدمين',
      description: 'تدريب على حماية الحسابات أو البنية التحتية',
      icon: '🎓',
      priceEgp: 'من 2,000 إلى 10,000 جنيه',
      type: 'أمن',
      features: ['تدريب فريق', 'توعية المستخدمين', 'حماية الحسابات']
    },
    // شات بوت
    {
      title: 'شات بوت بسيط (Static)',
      description: 'ردود جاهزة، بدون ذكاء صناعي، يعمل من خلال أزرار أو نصوص ثابتة (مثل بوتات Facebook أو Telegram البسيطة)',
      icon: '💬',
      priceEgp: 'من 1,000 إلى 4,000 جنيه',
      type: 'شات بوت',
      features: ['ردود جاهزة', 'أزرار أو نصوص ثابتة', 'بدون ذكاء صناعي']
    },
    {
      title: 'شات بوت ذكي باستخدام AI مجاني',
      description: 'يعتمد على أدوات مجانية مثل OpenRouter API أو GPT-3.5 أو Dialogflow المجاني – بدون تدريب مخصص',
      icon: '🤖',
      priceEgp: 'من 3,000 إلى 8,000 جنيه',
      type: 'شات بوت',
      features: ['ذكاء صناعي مجاني', 'OpenRouter/GPT-3.5', 'بدون تدريب مخصص']
    },
    {
      title: 'شات بوت للموقع (Live Chat + AI)',
      description: 'مدمج في موقعك (HTML/JS + PHP)، مع واجهة دردشة، وقاعدة بيانات للمحادثات',
      icon: '🖥️',
      priceEgp: 'من 5,000 إلى 12,000 جنيه',
      type: 'شات بوت',
      features: ['واجهة دردشة', 'قاعدة بيانات', 'تكامل مع الموقع']
    },
    {
      title: 'شات بوت WhatsApp أو Telegram مخصص',
      description: 'مع توصيل بقاعدة بيانات، دعم استفسارات تلقائية، نظام طلبات أو حجز',
      icon: '📱',
      priceEgp: 'من 6,000 إلى 15,000 جنيه',
      type: 'شات بوت',
      features: ['توصيل بقاعدة بيانات', 'استفسارات تلقائية', 'طلبات أو حجز']
    },
    {
      title: 'شات بوت مع لوحة تحكم (Dashboard)',
      description: 'Admin Panel لإدارة الردود، مراجعة المحادثات، إضافة أسئلة وأجوبة بسهولة',
      icon: '🛠️',
      priceEgp: 'من 10,000 إلى 20,000 جنيه',
      type: 'شات بوت',
      features: ['لوحة تحكم', 'إدارة الردود', 'مراجعة المحادثات']
    },
    {
      title: 'شات بوت بذكاء صناعي قوي (GPT / API مدفوعة)',
      description: 'يربط بـ GPT-4, Gemini, Claude, أو LLMs خارجية – مع تخصيص الردود وسيناريوهات متقدمة',
      icon: '🚀',
      priceEgp: 'من 20,000 إلى 50,000 جنيه أو أكثر',
      type: 'شات بوت',
      features: ['GPT-4/Gemini/Claude', 'تخصيص الردود', 'سيناريوهات متقدمة']
    }
  ];

  const serviceTypes = [
    { key: 'مواقع', label: 'خدمات المواقع', icon: '🌐', desc: 'كل ما تحتاجه لبناء موقع احترافي' },
    { key: 'تطبيقات', label: 'خدمات التطبيقات', icon: '📱', desc: 'حلول تطبيقات موبايل وويب متقدمة' },
    { key: 'أمن', label: 'خدمات الأمن السيبراني', icon: '🛡️', desc: 'حماية بياناتك وأنظمتك بأحدث التقنيات' },
    { key: 'شات بوت', label: 'خدمات الشات بوت', icon: '🤖', desc: 'شات بوتات ذكية تناسب أعمالك' },
    { key: 'أنظمة', label: 'خدمات أنظمة CRM/ERP', icon: '📊', desc: 'أنظمة إدارة الأعمال التجارية' },
  ];

  return (
    <section id="services" className="py-20 text-white relative min-h-screen" style={{background: 'transparent'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-fade-in`} style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <span className="gradient-text">خدماتنا</span>
          </h2>
          <p className="mb-6 text-lg text-white/90 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
            نقدم مجموعة متكاملة من الخدمات الرقمية لتغطية جميع احتياجات أعمالك التقنية.
          </p>
        </div>
        {serviceTypes.map(type => (
          <div key={type.key} className="mb-20">
            <h2 className="text-3xl font-extrabold text-center mb-2 flex items-center justify-center gap-2">
              <span>{type.icon}</span> {type.label}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
              {services.filter(s => s.type === type.key).map((service, idx) => (
                <div
                  key={service.title}
                  className="bg-gradient-to-br from-gray-900/80 to-gray-800/60 rounded-3xl border border-white/10 shadow-xl p-6 flex flex-col justify-between items-center text-center min-h-[420px] h-full transition-transform duration-500 hover:scale-105 hover:shadow-green-500/30 animate-fade-in"
                  style={{animationDelay: `${idx * 0.1}s`}}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-gray-800 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow mb-3">{service.priceEgp}</span>
                  <p className="text-gray-300 text-base mb-4 min-h-[48px]">{service.description}</p>
                  {service.features && (
                    <ul className="space-y-1 w-full text-right mt-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-white text-sm">
                          <span className="text-green-400 text-lg">✓</span>{feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    onClick={() => window.location.href = `/contact?service=${encodeURIComponent(service.title)}`}
                    className="w-full bg-gradient-to-r from-green-500 to-gray-800 text-white py-3 rounded-xl font-bold text-lg hover:from-green-600 hover:to-gray-900 transition-all duration-300 flex items-center justify-center gap-2 mt-4"
                  >
                    <span>اطلب الخدمة</span> <span>🛒</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* نافذة منبثقة لتفاصيل الخدمة */}
        {showModal && selected && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
            <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-slide-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}} onClick={e => e.stopPropagation()}>
              <button onClick={closeModal} className="absolute left-4 top-4 text-gray-400 hover:text-green-400 text-2xl font-bold">×</button>
              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-gray-800 rounded-full flex items-center justify-center text-4xl mb-4 shadow-lg">
                  {selected.icon}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>{selected.title}</h2>
                <span className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white text-base md:text-lg font-bold px-4 py-2 rounded-full shadow-lg mb-4 flex items-center gap-2 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>{selected.priceEgp}</span>
                <p className="text-gray-300 text-base mb-4 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>{selected.description}</p>
                {selected.features && (
                  <ul className="space-y-1 w-full text-right mt-2">
                    {selected.features.map((feature: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-white text-sm">
                        <span className="text-green-400 text-lg">✓</span>{feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 