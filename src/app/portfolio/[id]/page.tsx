'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  client: string;
  duration: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
  link: string;
  color: string;
  gallery: string[];
}

export default function PortfolioDetail() {
  const params = useParams();
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Mock project data - in a real app, this would come from an API
    const projects = [
      {
        id: 1,
        title: 'متجر إلكتروني متقدم',
        category: 'ecommerce',
        description: 'متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون متقدم',
        fullDescription: 'تم تطوير متجر إلكتروني متكامل يضم جميع المميزات الحديثة للتجارة الإلكترونية. يتضمن النظام واجهة مستخدم متقدمة، نظام دفع آمن، إدارة مخزون ذكية، وتقارير تحليلية شاملة.',
        image: '/portfolio/ecommerce.jpg',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redux', 'Socket.io'],
        client: 'شركة الأزياء الحديثة',
        duration: '8 أسابيع',
        features: ['نظام دفع آمن', 'إدارة المخزون', 'لوحة تحكم متقدمة', 'تطبيق موبايل', 'تقارير تحليلية', 'نظام تقييم العملاء'],
        challenges: ['تكامل مع أنظمة دفع متعددة', 'تحسين الأداء مع قاعدة بيانات كبيرة', 'تأمين البيانات الحساسة'],
        solutions: ['استخدام Stripe API للدفع', 'تحسين استعلامات قاعدة البيانات', 'تشفير البيانات الحساسة'],
        results: ['زيادة المبيعات بنسبة 300%', 'تقليل وقت التحميل بنسبة 60%', 'رضا العملاء 95%'],
        link: '#',
        color: 'from-green-500 to-blue-600',
        gallery: ['/portfolio/ecommerce-1.jpg', '/portfolio/ecommerce-2.jpg', '/portfolio/ecommerce-3.jpg']
      },
      {
        id: 2,
        title: 'نظام إدارة المستشفى',
        category: 'erp',
        description: 'نظام متكامل لإدارة المستشفيات والمراكز الطبية',
        fullDescription: 'تم تطوير نظام إدارة شامل للمستشفيات والمراكز الطبية يغطي جميع العمليات من تسجيل المرضى إلى إدارة المواعيد والعلاجات.',
        image: '/portfolio/hospital.jpg',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'WebRTC', 'Chart.js'],
        client: 'مجموعة المستشفيات الوطنية',
        duration: '12 أسبوع',
        features: ['إدارة المرضى', 'المواعيد الطبية', 'الصيدلية', 'التقارير الطبية', 'نظام التنبيهات', 'إدارة الموظفين'],
        challenges: ['تكامل مع أنظمة طبية متعددة', 'حماية البيانات الطبية', 'أداء النظام مع عدد كبير من المستخدمين'],
        solutions: ['استخدام HL7 للتواصل مع الأنظمة الطبية', 'تشفير البيانات وفق معايير HIPAA', 'تحسين الأداء باستخدام Redis'],
        results: ['تقليل وقت انتظار المرضى بنسبة 40%', 'تحسين دقة التشخيص بنسبة 25%', 'توفير 30% في التكاليف التشغيلية'],
        link: '#',
        color: 'from-purple-500 to-pink-600',
        gallery: ['/portfolio/hospital-1.jpg', '/portfolio/hospital-2.jpg', '/portfolio/hospital-3.jpg']
      },
      {
        id: 3,
        title: 'تطبيق توصيل الطعام',
        category: 'mobile',
        description: 'تطبيق موبايل متكامل لخدمات توصيل الطعام',
        fullDescription: 'تم تطوير تطبيق موبايل متكامل لخدمات توصيل الطعام يربط بين المطاعم والعملاء والسائقين في منصة واحدة.',
        image: '/portfolio/delivery.jpg',
        technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe', 'Socket.io', 'Push Notifications'],
        client: 'شركة التوصيل السريع',
        duration: '10 أسابيع',
        features: ['تتبع الطلبات', 'دفع إلكتروني', 'تقييم المطاعم', 'إشعارات فورية', 'نظام المكافآت', 'إدارة السائقين'],
        challenges: ['تتبع الموقع في الوقت الفعلي', 'إدارة الطلبات المتعددة', 'تكامل مع أنظمة دفع مختلفة'],
        solutions: ['استخدام Google Maps API', 'نظام إدارة الطلبات الذكي', 'تكامل مع Stripe للدفع'],
        results: ['زيادة الطلبات بنسبة 200%', 'تقليل وقت التوصيل بنسبة 35%', 'رضا العملاء 92%'],
        link: '#',
        color: 'from-orange-500 to-red-600',
        gallery: ['/portfolio/delivery-1.jpg', '/portfolio/delivery-2.jpg', '/portfolio/delivery-3.jpg']
      },
      {
        id: 4,
        title: 'موقع شركة العقارات',
        category: 'website',
        description: 'موقع احترافي لشركة عقارية مع نظام بحث متقدم',
        fullDescription: 'تم تطوير موقع احترافي لشركة عقارية يضم نظام بحث متقدم وخرائط تفاعلية لعرض العقارات المتاحة.',
        image: '/portfolio/realestate.jpg',
        technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Algolia', 'Google Maps API', 'Stripe'],
        client: 'شركة العقارات الذهبية',
        duration: '6 أسابيع',
        features: ['بحث متقدم', 'خرائط تفاعلية', 'نظام حجز', 'إدارة المحتوى', 'نظام تقييم', 'إشعارات فورية'],
        challenges: ['بحث سريع في قاعدة بيانات كبيرة', 'تكامل مع خرائط Google', 'أداء الموقع مع الصور عالية الجودة'],
        solutions: ['استخدام Algolia للبحث السريع', 'تحسين الصور باستخدام Next.js Image', 'تحسين الأداء باستخدام CDN'],
        results: ['زيادة الزيارات بنسبة 150%', 'تحسين معدل التحويل بنسبة 45%', 'تقليل وقت التحميل بنسبة 50%'],
        link: '#',
        color: 'from-blue-500 to-indigo-600',
        gallery: ['/portfolio/realestate-1.jpg', '/portfolio/realestate-2.jpg', '/portfolio/realestate-3.jpg']
      },
      {
        id: 5,
        title: 'نظام إدارة المدارس',
        category: 'erp',
        description: 'نظام شامل لإدارة المدارس والطلاب والمعلمين',
        fullDescription: 'تم تطوير نظام إدارة شامل للمدارس يغطي جميع العمليات من إدارة الطلاب والمعلمين إلى الجداول الدراسية والتقييمات.',
        image: '/portfolio/school.jpg',
        technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'SignalR', 'Chart.js', 'PDF Generation'],
        client: 'وزارة التربية والتعليم',
        duration: '16 أسبوع',
        features: ['إدارة الطلاب', 'الجدول الدراسي', 'التقييمات', 'التواصل مع الأهل', 'التقارير الإحصائية', 'نظام الحضور'],
        challenges: ['إدارة بيانات عدد كبير من الطلاب', 'تكامل مع أنظمة وزارة التربية', 'أمان البيانات التعليمية'],
        solutions: ['تحسين قاعدة البيانات للتعامل مع البيانات الكبيرة', 'استخدام API موحد للتواصل', 'تشفير البيانات الحساسة'],
        results: ['تحسين إدارة الطلاب بنسبة 60%', 'تقليل الأخطاء الإدارية بنسبة 80%', 'تحسين التواصل مع الأهل بنسبة 70%'],
        link: '#',
        color: 'from-teal-500 to-cyan-600',
        gallery: ['/portfolio/school-1.jpg', '/portfolio/school-2.jpg', '/portfolio/school-3.jpg']
      },
      {
        id: 6,
        title: 'منصة التعلم الإلكتروني',
        category: 'webapp',
        description: 'منصة تعليمية متقدمة للدورات التدريبية عبر الإنترنت',
        fullDescription: 'تم تطوير منصة تعليمية متقدمة تتيح للمدربين إنشاء دورات تفاعلية والطلاب الوصول للمحتوى التعليمي بسهولة.',
        image: '/portfolio/elearning.jpg',
        technologies: ['React', 'Django', 'PostgreSQL', 'AWS', 'WebRTC', 'FFmpeg'],
        client: 'مركز التدريب المتقدم',
        duration: '14 أسبوع',
        features: ['دورات تفاعلية', 'اختبارات إلكترونية', 'شهادات معتمدة', 'دردشة مباشرة', 'نظام التقييم', 'إدارة المحتوى'],
        challenges: ['بث الفيديو عالي الجودة', 'إدارة المحتوى التعليمي', 'نظام التقييم الآلي'],
        solutions: ['استخدام AWS Media Services', 'نظام إدارة محتوى متقدم', 'خوارزميات ذكية للتقييم'],
        results: ['زيادة عدد الطلاب بنسبة 300%', 'تحسين معدل الإكمال بنسبة 45%', 'رضا الطلاب 94%'],
        link: '#',
        color: 'from-indigo-500 to-purple-600',
        gallery: ['/portfolio/elearning-1.jpg', '/portfolio/elearning-2.jpg', '/portfolio/elearning-3.jpg']
      },
      {
        id: 7,
        title: 'تطبيق إدارة المهام',
        category: 'mobile',
        description: 'تطبيق موبايل لإدارة المهام والمشاريع',
        fullDescription: 'تم تطوير تطبيق موبايل متكامل لإدارة المهام والمشاريع مع تقويم ذكي ونظام تقارير متقدم.',
        image: '/portfolio/taskmanager.jpg',
        technologies: ['Flutter', 'Firebase', 'Provider', 'Google Auth', 'Cloud Functions', 'Analytics'],
        client: 'شركة الإدارة الذكية',
        duration: '8 أسابيع',
        features: ['إدارة المهام', 'تقويم متكامل', 'تقارير أداء', 'مزامنة سحابية', 'نظام التنبيهات', 'إدارة الفرق'],
        challenges: ['مزامنة البيانات في الوقت الفعلي', 'إدارة الإشعارات المتقدمة', 'تحليل أداء المستخدمين'],
        solutions: ['استخدام Firebase Realtime Database', 'نظام إشعارات ذكي', 'تكامل مع Firebase Analytics'],
        results: ['زيادة الإنتاجية بنسبة 40%', 'تقليل الوقت الضائع بنسبة 30%', 'رضا المستخدمين 96%'],
        link: '#',
        color: 'from-emerald-500 to-green-600',
        gallery: ['/portfolio/taskmanager-1.jpg', '/portfolio/taskmanager-2.jpg', '/portfolio/taskmanager-3.jpg']
      },
      {
        id: 8,
        title: 'موقع السياحة والسفر',
        category: 'website',
        description: 'موقع سياحي متكامل لحجز الرحلات والفنادق',
        fullDescription: 'تم تطوير موقع سياحي متكامل يقدم خدمات حجز الرحلات والفنادق مع دليل سياحي شامل وتقييمات العملاء.',
        image: '/portfolio/travel.jpg',
        technologies: ['Vue.js', 'Laravel', 'MySQL', 'Payment Gateway', 'Google Maps API', 'Social Login'],
        client: 'شركة السياحة العالمية',
        duration: '10 أسابيع',
        features: ['حجز الرحلات', 'حجز الفنادق', 'دليل السياحة', 'نظام تقييم', 'نظام المكافآت', 'إدارة الحجوزات'],
        challenges: ['تكامل مع أنظمة حجز متعددة', 'إدارة الحجوزات المعقدة', 'تجربة مستخدم سلسة'],
        solutions: ['API موحد للحجوزات', 'نظام إدارة حجوزات ذكي', 'تصميم متجاوب ومتقدم'],
        results: ['زيادة الحجوزات بنسبة 250%', 'تحسين تجربة المستخدم بنسبة 60%', 'رضا العملاء 93%'],
        link: '#',
        color: 'from-yellow-500 to-orange-600',
        gallery: ['/portfolio/travel-1.jpg', '/portfolio/travel-2.jpg', '/portfolio/travel-3.jpg']
      }
    ];

    const projectId = parseInt(params['id'] as string);
    const foundProject = projects.find(p => p.id === projectId);
    
    if (!foundProject) {
      router.push('/portfolio');
      return;
    }
    
    setProject(foundProject);
  }, [params['id'], router]);

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4"></div>
          <p className="text-gray-300">جاري التحميل...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-5 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Breadcrumb */}
            <nav className="mb-8">
              <Link href="/portfolio" className="text-green-400 hover:text-green-300 transition-colors">
                ← العودة إلى الأعمال
              </Link>
            </nav>

            {/* Project Header */}
            <div className="text-center mb-12">
              <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                {project.category === 'website' ? 'موقع ويب' : 
                  project.category === 'webapp' ? 'تطبيق ويب' : 
                  project.category === 'mobile' ? 'تطبيق موبايل' : 
                  project.category === 'ecommerce' ? 'متجر إلكتروني' : 
                  project.category === 'erp' ? 'نظام ERP' : 'مشروع تقني'}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Project Image */}
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-12">
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center z-10"
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="text-6xl md:text-8xl opacity-30">
                  {project.category === 'website' ? '🌐' : 
                    project.category === 'webapp' ? '💻' : 
                    project.category === 'mobile' ? '📱' : 
                    project.category === 'ecommerce' ? '🛒' : 
                    project.category === 'erp' ? '🗂️' : '⚡'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Description */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">وصف المشروع</h2>
                <p className="text-gray-300 leading-relaxed">
                  {project.fullDescription}
                </p>
              </div>

              {/* Technologies */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">التقنيات المستخدمة</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-white/10 text-green-400 px-4 py-3 rounded-lg text-center font-medium">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h2 className="text-2xl font-bold text-white mb-4">المميزات الرئيسية</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-400 rounded-full ml-3"></span>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-4">التحديات</h2>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="w-1.5 h-1.5 bg-red-400 rounded-full ml-2 mt-2"></span>
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                  <h2 className="text-xl font-bold text-white mb-4">الحلول</h2>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full ml-2 mt-2"></span>
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Results */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-green-500/20">
                <h2 className="text-2xl font-bold text-white mb-4">النتائج المحققة</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-2">✓</div>
                      <p className="text-gray-300 text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-4">معلومات المشروع</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-400 text-sm">العميل:</span>
                    <p className="text-white font-medium">{project.client}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">المدة:</span>
                    <p className="text-white font-medium">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-gray-400 text-sm">الفئة:</span>
                    <p className="text-white font-medium">
                      {project.category === 'website' ? 'موقع ويب' : 
                        project.category === 'webapp' ? 'تطبيق ويب' : 
                        project.category === 'mobile' ? 'تطبيق موبايل' : 
                        project.category === 'ecommerce' ? 'متجر إلكتروني' : 
                        project.category === 'erp' ? 'نظام ERP' : 'مشروع تقني'}
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-6 border border-green-500/20">
                <h3 className="text-xl font-bold text-white mb-4">هل تريد مشروع مماثل؟</h3>
                <p className="text-gray-300 text-sm mb-6">
                  دعنا نناقش مشروعك ونطور لك حلولاً تقنية مبتكرة
                </p>
                <Link href="/contact">
                  <button className="w-full bg-gradient-to-r from-green-500 to-gray-800 text-white py-3 rounded-xl font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-105">
                    ابدأ مشروعك الآن
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 