"use client";

import React, { useState } from 'react';

type Course = {
  slug: string;
  title: string;
  description: string;
  image: string;
  price: number; // السعر الجديد
  details: {
    description: string;
    points: string[];
  };
};

const courses: Course[] = [
  {
    slug: 'web',
    title: 'أساسيات تطوير الويب',
    description: 'تعلم بناء مواقع احترافية من الصفر باستخدام HTML, CSS, JavaScript.',
    image: '/course-web.png',
    price: 950,
    details: {
      description: 'دورة شاملة لتعلم بناء مواقع احترافية من الصفر باستخدام HTML, CSS, JavaScript، مع مشاريع تطبيقية ودعم مباشر.',
      points: [
        'مقدمة في HTML, CSS, JavaScript',
        'تصميم واجهات متجاوبة',
        'أساسيات تحسين محركات البحث (SEO)',
        'مشروع تخرج عملي'
      ]
    }
  },
  {
    slug: 'mobile',
    title: 'برمجة تطبيقات الموبايل',
    description: 'دورة شاملة لتطوير تطبيقات Android وiOS بأحدث التقنيات.',
    image: '/course-mobile.png',
    price: 1200,
    details: {
      description: 'دورة شاملة لتطوير تطبيقات Android وiOS باستخدام أحدث التقنيات مثل React Native وFlutter.',
      points: [
        'مقدمة في تطوير الموبايل',
        'تصميم واجهات المستخدم',
        'ربط التطبيق بقاعدة بيانات',
        'نشر التطبيق على المتاجر'
      ]
    }
  },
  {
    slug: 'ai',
    title: 'مقدمة في الذكاء الاصطناعي',
    description: 'تعرف على أساسيات الذكاء الاصطناعي وتطبيقاته العملية.',
    image: '/course-ai.png',
    price: 1350,
    details: {
      description: 'تعرف على أساسيات الذكاء الاصطناعي، تعلم الآلة، وتطبيقات عملية في الحياة الواقعية.',
      points: [
        'مفاهيم الذكاء الاصطناعي',
        'مقدمة في تعلم الآلة',
        'تطبيقات عملية',
        'مشروع تخرج'
      ]
    }
  },
  {
    slug: 'cyber',
    title: 'سيبر سيكيورتي للمبتدئين',
    description: 'تعلم أساسيات الأمن السيبراني، حماية الأنظمة والشبكات، وكيفية التصدي للهجمات الإلكترونية مع تطبيقات عملية.',
    image: '/course-cyber.png',
    price: 1500,
    details: {
      description: 'دورة متكاملة لفهم الأمن السيبراني، حماية الأنظمة والشبكات، واكتشاف الثغرات والتصدي للهجمات الإلكترونية مع تطبيقات عملية.',
      points: [
        'مقدمة في الأمن السيبراني',
        'أنواع الهجمات الإلكترونية',
        'حماية الشبكات والأنظمة',
        'تطبيقات عملية واختبار اختراق',
        'شهادات معتمدة بعد التخرج'
      ]
    }
  }
];

export default function CoursesPage() {
  const [selected, setSelected] = useState<Course | null>(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (course: Course) => {
    setSelected(course);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setTimeout(() => setSelected(null), 300);
  };
  const share = () => {
    if (navigator.share && selected) {
      navigator.share({
        title: selected.title,
        text: selected.details.description,
        url: window.location.href
      });
    } else if (selected) {
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ رابط الكورس!');
    }
  };

  return (
    <section className="py-20 bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center gradient-text animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'both'}}>كورساتنا</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className={`relative bg-white/10 rounded-2xl p-6 border border-white/20 flex flex-col items-center text-center shadow-lg hover:shadow-green-500/25 transition-all duration-300 group animate-slide-up`} style={{animationDelay: `${0.2 + idx * 0.15}s`, animationFillMode: 'both'}}>
              {/* شارة جديد */}
              {course.title.includes('سيبر سيكيورتي') && (
                <span className="absolute -top-3 right-3 bg-gradient-to-r from-green-400 to-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-bounce-slow" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>جديد</span>
              )}
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-gray-800 rounded-full flex items-center justify-center mb-4 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                <img src={course.image} alt={course.title} className="w-16 h-16 object-contain" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>{course.title}</h2>
              <p className="text-green-400 text-lg font-bold mb-1 animate-fade-in" style={{animationDelay: '0.35s', animationFillMode: 'both'}}>التكلفة: {course.price.toLocaleString()} جنيه</p>
              <p className="text-gray-300 text-sm mb-4 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>{course.description}</p>
              <button onClick={() => openModal(course)} className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300 group-hover:scale-105 shadow-md text-base animate-fade-in" style={{animationDelay: '0.5s', animationFillMode: 'both'}}>تفاصيل الكورس</button>
            </div>
          ))}
        </div>
      </div>
      {/* Modal */}
      {showModal && selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in" onClick={closeModal}>
          <div className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-8 animate-slide-up" style={{animationDelay: '0.1s', animationFillMode: 'both'}} onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute left-4 top-4 text-gray-400 hover:text-green-400 text-2xl font-bold">×</button>
            <div className="flex flex-col items-center text-center mb-6">
              <img src={selected.image} alt={selected.title} className="w-24 h-24 object-contain mb-4 rounded-full bg-gradient-to-r from-green-500 to-gray-800 shadow-lg" />
              <h2 className="text-2xl md:text-3xl font-bold mb-2 gradient-text animate-fade-in" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>{selected.title}</h2>
              <p className="text-green-400 text-lg font-bold mb-2 animate-fade-in" style={{animationDelay: '0.25s', animationFillMode: 'both'}}>التكلفة: {selected.price.toLocaleString()} جنيه</p>
              <p className="text-gray-300 text-base mb-4 animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>{selected.details.description}</p>
            </div>
            <ul className="space-y-3 text-right animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              {selected.details.points.map((point: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2 animate-slide-up" style={{animationDelay: `${0.5 + idx * 0.1}s`, animationFillMode: 'both'}}>
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full inline-block animate-bounce-slow"></span>
                  <span className="text-white text-sm">{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex justify-center gap-4 mt-8 animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
              <button onClick={share} className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md">مشاركة الكورس</button>
              <button onClick={closeModal} className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 shadow-md">إغلاق</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 