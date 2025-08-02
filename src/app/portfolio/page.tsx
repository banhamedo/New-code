'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: 'متجر إلكتروني متقدم',
      category: 'ecommerce',
      description: 'متجر إلكتروني متكامل مع نظام دفع وإدارة مخزون متقدم',
      image: '/portfolio/ecommerce.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      client: 'شركة الأزياء الحديثة',
      duration: '8 أسابيع',
      features: ['نظام دفع آمن', 'إدارة المخزون', 'لوحة تحكم متقدمة', 'تطبيق موبايل'],
      link: '#',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 2,
      title: 'نظام إدارة المستشفى',
      category: 'erp',
      description: 'نظام متكامل لإدارة المستشفيات والمراكز الطبية',
      image: '/portfolio/hospital.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis'],
      client: 'مجموعة المستشفيات الوطنية',
      duration: '12 أسبوع',
      features: ['إدارة المرضى', 'المواعيد الطبية', 'الصيدلية', 'التقارير الطبية'],
      link: '#',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: 'تطبيق توصيل الطعام',
      category: 'mobile',
      description: 'تطبيق موبايل متكامل لخدمات توصيل الطعام',
      image: '/portfolio/delivery.jpg',
      technologies: ['React Native', 'Firebase', 'Google Maps', 'Stripe'],
      client: 'شركة التوصيل السريع',
      duration: '10 أسابيع',
      features: ['تتبع الطلبات', 'دفع إلكتروني', 'تقييم المطاعم', 'إشعارات فورية'],
      link: '#',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'موقع شركة العقارات',
      category: 'website',
      description: 'موقع احترافي لشركة عقارية مع نظام بحث متقدم',
      image: '/portfolio/realestate.jpg',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Algolia'],
      client: 'شركة العقارات الذهبية',
      duration: '6 أسابيع',
      features: ['بحث متقدم', 'خرائط تفاعلية', 'نظام حجز', 'إدارة المحتوى'],
      link: '#',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 5,
      title: 'نظام إدارة المدارس',
      category: 'erp',
      description: 'نظام شامل لإدارة المدارس والطلاب والمعلمين',
      image: '/portfolio/school.jpg',
      technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'SignalR'],
      client: 'وزارة التربية والتعليم',
      duration: '16 أسبوع',
      features: ['إدارة الطلاب', 'الجدول الدراسي', 'التقييمات', 'التواصل مع الأهل'],
      link: '#',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 6,
      title: 'منصة التعلم الإلكتروني',
      category: 'webapp',
      description: 'منصة تعليمية متقدمة للدورات التدريبية عبر الإنترنت',
      image: '/portfolio/elearning.jpg',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      client: 'مركز التدريب المتقدم',
      duration: '14 أسبوع',
      features: ['دورات تفاعلية', 'اختبارات إلكترونية', 'شهادات معتمدة', 'دردشة مباشرة'],
      link: '#',
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 7,
      title: 'تطبيق إدارة المهام',
      category: 'mobile',
      description: 'تطبيق موبايل لإدارة المهام والمشاريع',
      image: '/portfolio/taskmanager.jpg',
      technologies: ['Flutter', 'Firebase', 'Provider', 'Google Auth'],
      client: 'شركة الإدارة الذكية',
      duration: '8 أسابيع',
      features: ['إدارة المهام', 'تقويم متكامل', 'تقارير أداء', 'مزامنة سحابية'],
      link: '#',
      color: 'from-emerald-500 to-green-600'
    },
    {
      id: 8,
      title: 'موقع السياحة والسفر',
      category: 'website',
      description: 'موقع سياحي متكامل لحجز الرحلات والفنادق',
      image: '/portfolio/travel.jpg',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Payment Gateway'],
      client: 'شركة السياحة العالمية',
      duration: '10 أسابيع',
      features: ['حجز الرحلات', 'حجز الفنادق', 'دليل السياحة', 'نظام تقييم'],
      link: '#',
      color: 'from-yellow-500 to-orange-600'
    }
  ];

  const categories = [
    { id: 'all', name: 'جميع المشاريع', count: projects.length },
    { id: 'website', name: 'مواقع الويب', count: projects.filter(p => p.category === 'website').length },
    { id: 'webapp', name: 'تطبيقات الويب', count: projects.filter(p => p.category === 'webapp').length },
    { id: 'mobile', name: 'تطبيقات الموبايل', count: projects.filter(p => p.category === 'mobile').length },
    { id: 'ecommerce', name: 'التجارة الإلكترونية', count: projects.filter(p => p.category === 'ecommerce').length },
    { id: 'erp', name: 'أنظمة ERP', count: projects.filter(p => p.category === 'erp').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-20 right-5 w-48 h-48 md:w-72 md:h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} animate-fade-in`} style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
              <span className="gradient-text">أعمالنا</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              <span className="hidden sm:inline">اكتشف مجموعة من مشاريعنا المميزة التي نفخر بها</span>
              <span className="sm:hidden">اكتشف مشاريعنا المميزة</span>
              <br />
              <span className="text-green-400 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">أكثر من 50 مشروع ناجح في مختلف المجالات</span>
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
            {categories.map((category, i) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-3 py-2 md:px-6 md:py-3 rounded-xl font-semibold text-xs md:text-sm transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-green-500 text-white shadow-lg shadow-green-500/25'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                } animate-slide-up`}
                style={{animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: 'both'}}
              >
                <span className="hidden sm:inline">{category.name} ({category.count})</span>
                <span className="sm:hidden">{category.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:border-green-500/50 transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } animate-slide-up`}
                style={{ transitionDelay: `${0.7 + index * 0.2}s`, animationDelay: `${0.7 + index * 0.2}s`, animationFillMode: 'both'}}
              >
                {/* Project Image */}
                <div className="relative h-40 md:h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`}></div>
                  {/* صورة المشروع */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center z-10 transition-opacity duration-500"
                    style={{opacity: 0.95}}
                    onError={e => { e.currentTarget.style.display = 'none'; }}
                  />
                  {/* fallback أيقونة إذا لم تظهر الصورة */}
                  <div className="absolute inset-0 flex items-center justify-center z-0">
                    <div className="text-4xl md:text-6xl opacity-30">
                      {project.category === 'website' ? '🌐' : 
                        project.category === 'webapp' ? '💻' : 
                        project.category === 'mobile' ? '📱' : 
                        project.category === 'ecommerce' ? '🛒' : 
                        project.category === 'erp' ? '🗂️' : '⚡'}
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 md:top-4 md:right-4 z-20">
                    <span className="bg-green-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs font-semibold">
                      {project.category === 'website' ? 'موقع ويب' : 
                        project.category === 'webapp' ? 'تطبيق ويب' : 
                        project.category === 'mobile' ? 'تطبيق موبايل' : 
                        project.category === 'ecommerce' ? 'متجر إلكتروني' : 
                        project.category === 'erp' ? 'نظام ERP' : 'مشروع تقني'}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white/10 text-green-400 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-white/10 text-green-400 px-2 py-1 rounded-md text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1 md:space-y-2 mb-3 md:mb-4">
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-400">العميل:</span>
                      <span className="text-white text-xs md:text-sm">{project.client}</span>
                    </div>
                    <div className="flex justify-between text-xs md:text-sm">
                      <span className="text-gray-400">المدة:</span>
                      <span className="text-white text-xs md:text-sm">{project.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-4 md:mb-6">
                    <h4 className="text-xs md:text-sm font-semibold text-green-400 mb-2">المميزات الرئيسية:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 2).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400 rounded-full ml-2"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 2 && (
                        <li className="flex items-center text-xs text-gray-300">
                          <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-green-400 rounded-full ml-2"></span>
                          +{project.features.length - 2} ميزات أخرى
                        </li>
                      )}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <Link href={`/portfolio/${project.id}`}>
                    <button className="w-full bg-gradient-to-r from-green-500 to-gray-800 text-white py-2 md:py-3 rounded-xl font-semibold text-sm md:text-base hover:from-green-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                      <span className="flex items-center justify-center">
                        <span className="hidden sm:inline">عرض التفاصيل</span>
                        <span className="sm:hidden">التفاصيل</span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className={`text-center py-12 md:py-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="text-4xl md:text-6xl mb-4">🔍</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2">لا توجد مشاريع</h3>
              <p className="text-gray-300 text-sm md:text-base">جرب اختيار فئة مختلفة أو إعادة تعيين الفلاتر</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-green-600 transition-all duration-300"
              >
                إعادة تعيين
              </button>
            </div>
          )}

          {/* Stats Section */}
          <div className="mt-20 text-center">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8">إحصائيات أعمالنا</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">50+</div>
                  <div className="text-gray-300 text-sm">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                  <div className="text-gray-300 text-sm">عميل سعيد</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">15+</div>
                  <div className="text-gray-300 text-sm">تقنية مختلفة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                  <div className="text-gray-300 text-sm">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-md rounded-2xl p-8 border border-green-500/20">
              <h3 className="text-3xl font-bold text-white mb-4">هل تريد مشروع مماثل؟</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                دعنا نناقش مشروعك ونطور لك حلولاً تقنية مبتكرة تناسب احتياجات عملك
              </p>
              <Link href="/contact">
                <button className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
                  ابدأ مشروعك الآن
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 