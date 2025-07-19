'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const stats = [
    { number: '50+', label: 'مشروع مكتمل', icon: '🎯' },
    { number: '30+', label: 'عميل سعيد', icon: '😊' },
    { number: '5+', label: 'سنوات خبرة', icon: '⭐' },
    { number: '24/7', label: 'دعم فني', icon: '🛠️' },
  ];

  // const features = [
  //   {
  //     title: 'تصميم عصري',
  //     description: 'نصمم مواقع عصرية وجذابة تناسب هوية عملك وتوفر تجربة مستخدم فريدة',
  //     icon: '🎨',
  //     color: 'from-blue-500 to-blue-600'
  //   },
  //   {
  //     title: 'أداء عالي',
  //     description: 'مواقع سريعة ومحسنة لمحركات البحث مع تقنيات متقدمة للأداء الأمثل',
  //     icon: '⚡',
  //     color: 'from-purple-500 to-purple-600'
  //   },
  //   {
  //     title: 'أمان متقدم',
  //     description: 'حماية شاملة لبياناتك وموقعك مع أحدث تقنيات الأمان والخصوصية',
  //     icon: '🔒',
  //     color: 'from-green-500 to-green-600'
  //   },
  //   {
  //     title: 'دعم فني',
  //     description: 'فريق دعم فني متخصص متاح على مدار الساعة لمساعدتك في أي وقت',
  //     icon: '💬',
  //     color: 'from-pink-500 to-pink-600'
  //   }
  // ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* المحتوى النصي */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} animate-fade-in`} style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                <span className="gradient-text">من نحن</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                <span className="hidden sm:inline">شركة <strong className="text-green-400">New Code Development</strong> هي شركة رائدة في مجال تطوير المواقع والتطبيقات، تأسست بهدف تقديم حلول تقنية مبتكرة ومتطورة تلبي احتياجات العملاء في العصر الرقمي.</span>
                <span className="sm:hidden">شركة <strong className="text-green-400">New Code Development</strong> رائدة في تطوير المواقع والتطبيقات، نقدم حلول تقنية مبتكرة ومتطورة.</span>
              </p>
              <p className="text-sm md:text-base text-gray-300 leading-relaxed animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
                <span className="hidden sm:inline">نتميز بخبرة واسعة في أحدث التقنيات وأفضل الممارسات في مجال التطوير، مما يجعلنا الشريك المثالي لتحويل أفكارك إلى واقع رقمي مذهل.</span>
                <span className="sm:hidden">نتميز بخبرة واسعة في أحدث التقنيات وأفضل الممارسات في مجال التطوير.</span>
              </p>
            </div>

            {/* المميزات */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {/* كل ميزة */}
              <div className="flex items-start space-x-3 space-x-reverse animate-slide-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">خبرة 5+ سنوات</h3>
                  <p className="text-xs md:text-sm text-gray-300">خبرة واسعة في تطوير المواقع والتطبيقات</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">50+ مشروع مكتمل</h3>
                  <p className="text-xs md:text-sm text-gray-300">مشاريع متنوعة لشركات مختلفة</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse animate-slide-up" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">دعم فني 24/7</h3>
                  <p className="text-xs md:text-sm text-gray-300">دعم فني متواصل على مدار الساعة</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 space-x-reverse animate-slide-up" style={{animationDelay: '1.1s', animationFillMode: 'both'}}>
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-bold text-white mb-1">تقنيات حديثة</h3>
                  <p className="text-xs md:text-sm text-gray-300">أحدث التقنيات وأفضل الممارسات</p>
                </div>
              </div>
            </div>

            {/* أزرار CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in" style={{animationDelay: '1.3s', animationFillMode: 'both'}}>
              <Link href="/contact">
                <button className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25">
                  <span className="flex items-center justify-center">
                    <span className="hidden sm:inline">تواصل معنا</span>
                    <span className="sm:hidden">تواصل معنا</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="w-full sm:w-auto border-2 border-green-500 text-green-500 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-sm md:text-base hover:bg-green-50 hover:border-green-600 transition-all duration-300 backdrop-blur-md">
                  <span className="flex items-center justify-center">
                    <span className="hidden sm:inline">شاهد أعمالنا</span>
                    <span className="sm:hidden">أعمالنا</span>
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* فريق الإدارة */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} animate-fade-in`} style={{animationDelay: '1.5s', animationFillMode: 'both'}}>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/10 animate-slide-up" style={{animationDelay: '1.7s', animationFillMode: 'both'}}>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 text-center">فريق الإدارة</h3>
              
              <div className="space-y-6 md:space-y-8">
                {/* سيبر سيكيورتي */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-gray-800 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white flex-shrink-0">
                    ع
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-white mb-1">محمد علي</h4>
                    <p className="text-sm md:text-base text-green-400 mb-1">سيبر سيكيورتي</p>
                    <p className="text-xs md:text-sm text-gray-300">خبير في الأمن السيبراني وحماية الأنظمة والشبكات</p>
                  </div>
                </div>

                {/* Full Stack */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-green-500 to-gray-800 rounded-full flex items-center justify-center text-2xl md:text-3xl font-bold text-white flex-shrink-0">
                    إ
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base md:text-lg font-bold text-white mb-1">محمد إبراهيم</h4>
                    <p className="text-sm md:text-base text-green-400 mb-1">Full Stack</p>
                    <p className="text-xs md:text-sm text-gray-300">متخصص في تطوير المواقع والتطبيقات الكاملة (Full Stack)</p>
                  </div>
                </div>
              </div>

              {/* إحصائيات الفريق */}
              <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">15+</div>
                  <div className="text-xs md:text-sm text-gray-300">مطور محترف</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-400">100%</div>
                  <div className="text-xs md:text-sm text-gray-300">رضا العملاء</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-500/20 to-gray-800/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{stat.icon}</span>
              </div>
              <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* فريق الإدارة */}
        <div className="mt-20 hidden lg:block"></div>
      </div>
    </section>
  );
} 