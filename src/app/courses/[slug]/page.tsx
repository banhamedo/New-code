'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';

const courseDetails = {
  web: {
    title: 'أساسيات تطوير الويب',
    image: '/course-web.png',
    description: 'دورة شاملة لتعلم بناء مواقع احترافية من الصفر باستخدام HTML, CSS, JavaScript، مع مشاريع تطبيقية ودعم مباشر.',
    points: [
      'مقدمة في HTML, CSS, JavaScript',
      'تصميم واجهات متجاوبة',
      'أساسيات تحسين محركات البحث (SEO)',
      'مشروع تخرج عملي'
    ]
  },
  mobile: {
    title: 'برمجة تطبيقات الموبايل',
    image: '/course-mobile.png',
    description: 'دورة شاملة لتطوير تطبيقات Android وiOS باستخدام أحدث التقنيات مثل React Native وFlutter.',
    points: [
      'مقدمة في تطوير الموبايل',
      'تصميم واجهات المستخدم',
      'ربط التطبيق بقاعدة بيانات',
      'نشر التطبيق على المتاجر'
    ]
  },
  ai: {
    title: 'مقدمة في الذكاء الاصطناعي',
    image: '/course-ai.png',
    description: 'تعرف على أساسيات الذكاء الاصطناعي، تعلم الآلة، وتطبيقات عملية في الحياة الواقعية.',
    points: [
      'مفاهيم الذكاء الاصطناعي',
      'مقدمة في تعلم الآلة',
      'تطبيقات عملية',
      'مشروع تخرج'
    ]
  },
  cyber: {
    title: 'سيبر سيكيورتي للمبتدئين',
    image: '/course-cyber.png',
    description: 'دورة متكاملة لفهم الأمن السيبراني، حماية الأنظمة والشبكات، واكتشاف الثغرات والتصدي للهجمات الإلكترونية مع تطبيقات عملية.',
    points: [
      'مقدمة في الأمن السيبراني',
      'أنواع الهجمات الإلكترونية',
      'حماية الشبكات والأنظمة',
      'تطبيقات عملية واختبار اختراق',
      'شهادات معتمدة بعد التخرج'
    ]
  }
};

export default function CourseDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.['slug'] as string;
  const course = courseDetails[slug as keyof typeof courseDetails];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-black">
        <h1 className="text-2xl font-bold">الكورس غير موجود</h1>
      </div>
    );
  }

  // مشاركة الرابط
  const share = () => {
    if (navigator.share) {
      navigator.share({
        title: course.title,
        text: course.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الكورس!');
    }
  };

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <button onClick={() => router.back()} className="mb-8 bg-gradient-to-r from-green-500 to-gray-800 text-white px-5 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300 shadow-md animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
          ← العودة للكورسات
        </button>
        <div className="flex flex-col items-center text-center mb-10 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
          <img src={course.image} alt={course.title} className="w-28 h-28 object-contain mb-4 rounded-full bg-gradient-to-r from-green-500 to-gray-800 shadow-lg" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 gradient-text animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>{course.title}</h1>
          <p className="text-gray-300 text-lg mb-6 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>{course.description}</p>
        </div>
        <ul className="space-y-4 text-right animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>
          {course.points.map((point, idx) => (
            <li key={idx} className="flex items-center gap-2 animate-slide-up" style={{animationDelay: `${0.6 + idx * 0.1}s`, animationFillMode: 'both'}}>
              <span className="w-3 h-3 bg-green-500 rounded-full inline-block animate-bounce-slow"></span>
              <span className="text-white text-base">{point}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-4 mt-10 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
          <button onClick={share} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md">مشاركة الكورس</button>
          <a href="/courses" className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md">جميع الكورسات</a>
        </div>
      </div>
    </section>
  );
} 