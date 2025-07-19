'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* خلفية فيديو */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        poster="/video-poster.jpg"
      >
        <source src="/2.mp4" type="video/mp4" />
        متصفحك لا يدعم تشغيل الفيديو.
      </video>

      {/* عناصر عائمة خضراء - محسنة للموبايل */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-5 w-48 h-48 md:w-72 md:h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-20 right-5 w-48 h-48 md:w-72 md:h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 left-10 w-48 h-48 md:w-72 md:h-72 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* شارة - محسنة للموبايل */}
          <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full bg-green-600/10 backdrop-blur-md border border-green-500/30 text-green-500 text-xs md:text-sm font-medium animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            <span className="hidden sm:inline">متخصصون في تطوير المواقع والتطبيقات</span>
            <span className="sm:hidden">متخصصون في التطوير</span>
          </div>

          {/* العنوان الرئيسي - محسن للموبايل */}
          <div className="space-y-4 md:space-y-6 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight px-2 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
              <span className="text-green-400">New Code</span>
              <br />
              <span className="text-gray-100">Development</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <span className="hidden sm:inline">نطور مواقع الويب والتطبيقات الحديثة بأحدث التقنيات وأفضل الممارسات</span>
              <span className="sm:hidden">نطور مواقع الويب والتطبيقات الحديثة</span>
              <br />
              <span className="text-green-400 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">نحول أفكارك إلى واقع رقمي مذهل</span>
            </p>
          </div>

          {/* شبكة الميزات - محسنة للموبايل */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto px-2">
            <div className="group bg-gray-800 rounded-xl p-4 md:p-6 border border-green-500/30 hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">أمان متقدم</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">حماية شاملة لبياناتك وموقعك مع أحدث تقنيات الأمان والخصوصية</p>
            </div>

            <div className="group bg-gray-800 rounded-xl p-4 md:p-6 border border-green-500/30 hover:bg-gray-700 transition-all duration-300 hover:scale-105 animate-slide-up" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">أداء عالي</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">مواقع سريعة ومحسنة لمحركات البحث مع تقنيات متقدمة للأداء الأمثل</p>
            </div>

            <div className="group bg-gray-800 rounded-xl p-4 md:p-6 border border-green-500/30 hover:bg-gray-700 transition-all duration-300 hover:scale-105 sm:col-span-2 lg:col-span-1 animate-slide-up" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
              <div className="w-12 h-12 md:w-14 md:h-14 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">تصميم حديث</h3>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed">تصاميم عصرية وجذابة تناسب هوية عملك وتوفر تجربة مستخدم فريدة</p>
            </div>
          </div>

          {/* أزرار CTA - محسنة للموبايل */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4 animate-fade-in" style={{animationDelay: '1.1s', animationFillMode: 'both'}}>
            <Link href="/contact" className="w-full sm:w-auto">
              <button className="group bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 w-full">
                <span className="flex items-center justify-center">
                  <span className="hidden sm:inline">ابدأ مشروعك الآن</span>
                  <span className="sm:hidden">ابدأ مشروعك</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="group border-2 border-green-500 text-green-500 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-green-50 hover:border-green-600 transition-all duration-300 backdrop-blur-md w-full">
                <span className="flex items-center justify-center">
                  <span className="hidden sm:inline">تعرف على خدماتنا</span>
                  <span className="sm:hidden">خدماتنا</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </Link>
            <Link href="/portfolio" className="w-full sm:w-auto">
              <button className="group border-2 border-gray-500 text-gray-300 px-6 py-3 md:px-8 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-500 hover:text-white transition-all duration-300 backdrop-blur-md w-full">
                <span className="flex items-center justify-center">
                  أعمالنا
                  <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </span>
              </button>
            </Link>
          </div>

          {/* إحصائيات - محسنة للموبايل */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto pt-6 md:pt-8 px-4">
            <div className="text-center group animate-bounce-slow" style={{animationDelay: '1.3s', animationFillMode: 'both'}}>
              <div className="text-2xl md:text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">50+</div>
              <div className="text-gray-300 text-xs md:text-sm font-medium">مشروع مكتمل</div>
            </div>
            <div className="text-center group animate-bounce-slow" style={{animationDelay: '1.5s', animationFillMode: 'both'}}>
              <div className="text-2xl md:text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">30+</div>
              <div className="text-gray-300 text-xs md:text-sm font-medium">عميل سعيد</div>
            </div>
            <div className="text-center group animate-bounce-slow" style={{animationDelay: '1.7s', animationFillMode: 'both'}}>
              <div className="text-2xl md:text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">5+</div>
              <div className="text-gray-300 text-xs md:text-sm font-medium">سنوات خبرة</div>
            </div>
            <div className="text-center group animate-bounce-slow" style={{animationDelay: '1.9s', animationFillMode: 'both'}}>
              <div className="text-2xl md:text-4xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-gray-300 text-xs md:text-sm font-medium">دعم فني</div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر التمرير - محسن للموبايل */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-xs md:text-sm mb-1 md:mb-2">اكتشف المزيد</span>
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
} 