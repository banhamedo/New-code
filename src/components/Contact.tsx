'use client'

import { useState, useEffect } from 'react'
import { saveContactForm, getContactFormData } from '../lib/contactService'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  })
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // قراءة معاملات URL
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    const plan = urlParams.get('plan');
    
    if (service) {
      setFormData(prev => ({ ...prev, service: service }));
    } else if (plan) {
      setFormData(prev => ({ ...prev, service: plan }));
    }
    // مراقبة ظهور القسم
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // تحضير البيانات
      const contactData = getContactFormData(formData);
      
      // حفظ البيانات في Firebase
      const success = await saveContactForm(contactData);
      
      if (success) {
        setSubmitStatus('success');
        // إعادة تعيين النموذج
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        alert('تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.');
      } else {
        setSubmitStatus('error');
        alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      alert('حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'} animate-fade-in`} style={{animationDelay: '0.1s', animationFillMode: 'both'}}>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 animate-slide-up" style={{animationDelay: '0.2s', animationFillMode: 'both'}}>
                <span className="gradient-text">تواصل معنا</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
                <span className="hidden sm:inline">نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي مذهل. تواصل معنا الآن واحصل على استشارة مجانية.</span>
                <span className="sm:hidden">نحن هنا لمساعدتك في تحويل أفكارك إلى واقع رقمي مذهل.</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 animate-fade-in" style={{animationDelay: '0.4s', animationFillMode: 'both'}}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm md:text-base font-semibold text-white mb-2">
                    الاسم الكامل *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="أدخل اسمك الكامل"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm md:text-base font-semibold text-white mb-2">
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="أدخل بريدك الإلكتروني"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm md:text-base font-semibold text-white mb-2">
                    رقم الهاتف
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="أدخل رقم هاتفك"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm md:text-base font-semibold text-white mb-2">
                    اسم الشركة
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                    placeholder="أدخل اسم شركتك (اختياري)"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm md:text-base font-semibold text-white mb-2">
                  نوع الخدمة *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-3 md:py-4 bg-white text-black border border-white/20 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  onChange={handleChange}
                >
                  <option value="">اختر نوع الخدمة</option>
                  <option value="website">تطوير المواقع</option>
                  <option value="app">تطوير التطبيقات</option>
                  <option value="ecommerce">التجارة الإلكترونية</option>
                  <option value="maintenance">صيانة المواقع</option>
                  <option value="erp">أنظمة ERP</option>
                  <option value="crm">أنظمة CRM</option>
                  <option value="security">الأمن السيبراني</option>
                  <option value="ai">حلول الذكاء الاصطناعي</option>
                  <option value="other">خدمات أخرى</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm md:text-base font-semibold text-white mb-2">
                  الميزانية المتوقعة
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 md:py-4 bg-white text-black border border-white/20 rounded-xl focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                  onChange={handleChange}
                >
                  <option value="">اختر الميزانية</option>
                  <option value="1000-5000">1,000 - 5,000 جنيه</option>
                  <option value="5000-10000">5,000 - 10,000 جنيه</option>
                  <option value="10000-20000">10,000 - 20,000 جنيه</option>
                  <option value="20000-50000">20,000 - 50,000 جنيه</option>
                  <option value="50000+">أكثر من 50,000 جنيه</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm md:text-base font-semibold text-white mb-2">
                  تفاصيل المشروع *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                  placeholder="أخبرنا عن مشروعك وأهدافك ومتطلباتك..."
                  onChange={handleChange}
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 md:py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 transform shadow-2xl ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-green-500 to-gray-800 hover:from-green-600 hover:to-gray-900 hover:scale-105 hover:shadow-green-500/25'
                } text-white`}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>جاري الإرسال...</span>
                    </>
                  ) : (
                    <>
                      <span className="hidden sm:inline">إرسال الطلب</span>
                      <span className="sm:hidden">إرسال الطلب</span>
                      <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </span>
              </button>
              
              {/* رسائل الحالة */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-center">
                  ✅ تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-center">
                  ❌ حدث خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.
                </div>
              )}
            </form>
          </div>

          {/* Contact Information */}
          <div className={`space-y-6 md:space-y-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} animate-fade-in`} style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 animate-slide-up" style={{animationDelay: '0.8s', animationFillMode: 'both'}}>
                معلومات التواصل
              </h3>
              <p className="text-base md:text-lg text-gray-300 leading-relaxed animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
                <span className="hidden sm:inline">يمكنك التواصل معنا عبر أي من الطرق التالية أو زيارة مكتبنا للحصول على استشارة مجانية.</span>
                <span className="sm:hidden">يمكنك التواصل معنا عبر أي من الطرق التالية.</span>
              </p>
            </div>

            <div className="space-y-4 md:space-y-6 animate-fade-in" style={{animationDelay: '1.0s', animationFillMode: 'both'}}>
              {/* Email */}
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">البريد الإلكتروني</h4>
                  <a href="mailto:info@newcode.dev" className="text-green-400 hover:text-green-300 text-sm md:text-base transition-colors">
                    info@newcode.dev
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">الهاتف</h4>
                  <a href="tel:01065686528" className="text-green-400 hover:text-green-300 text-sm md:text-base transition-colors">
                    01065686528
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">العنوان</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="hidden sm:inline"> القاهرة، مصر</span>
                    <span className="sm:hidden">القاهرة، مصر</span>
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg md:text-xl font-bold text-white mb-1">ساعات العمل</h4>
                  <p className="text-gray-300 text-sm md:text-base">
                    <span className="hidden sm:inline">الأحد - الخميس: 9:00 ص - 6:00 م</span>
                    <span className="sm:hidden">الأحد - الخميس: 9 ص - 6 م</span>
                    <br />
                    <span className="text-green-400">الجمعة - السبت: مغلق</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
              <h4 className="text-lg md:text-xl font-bold text-white mb-4">تابعنا على</h4>
              <div className="flex space-x-4 space-x-reverse">
                <a href="https://www.facebook.com/share/1HkwtgNVRr/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
                  {/* فيسبوك */}
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
                  </svg>
                </a>
                <a href="https://wa.me/201065686528" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center hover:bg-green-600 transition-all duration-300 transform hover:scale-110">
                  {/* واتساب */}
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.52 3.48A11.77 11.77 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.64 6.06L0 24l6.24-1.63A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12a11.77 11.77 0 00-3.48-8.52zM12 22a9.93 9.93 0 01-5.09-1.39l-.36-.21-3.7.97.99-3.6-.23-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.6c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.08 4.88 4.2.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 