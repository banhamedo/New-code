'use client';

import { useState } from 'react';

interface ServiceRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  serviceType: string;
  budget: string;
  timeline: string;
  description: string;
  features: string[];
}

export default function ServiceRequest() {
  const [formData, setFormData] = useState<ServiceRequest>({
    name: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    budget: '',
    timeline: '',
    description: '',
    features: []
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const serviceTypes = [
    { id: 'website', name: 'موقع ويب', icon: '🌐' },
    { id: 'ecommerce', name: 'متجر إلكتروني', icon: '🛒' },
    { id: 'app', name: 'تطبيق موبايل', icon: '📱' },
    { id: 'cms', name: 'نظام إدارة محتوى', icon: '📝' },
    { id: 'api', name: 'واجهة برمجة API', icon: '🔌' },
    { id: 'custom', name: 'حل مخصص', icon: '⚙️' }
  ];

  const budgetRanges = [
    { id: 'small', name: '5,000 - 15,000 ريال', description: 'مشاريع صغيرة' },
    { id: 'medium', name: '15,000 - 50,000 ريال', description: 'مشاريع متوسطة' },
    { id: 'large', name: '50,000 - 150,000 ريال', description: 'مشاريع كبيرة' },
    { id: 'enterprise', name: '150,000+ ريال', description: 'مشاريع مؤسسية' }
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'عاجل (1-2 أسبوع)', description: 'مشاريع سريعة' },
    { id: 'normal', name: 'عادي (1-3 أشهر)', description: 'مشاريع قياسية' },
    { id: 'extended', name: 'ممتد (3-6 أشهر)', description: 'مشاريع معقدة' }
  ];

  const features = [
    { id: 'responsive', name: 'تصميم متجاوب', description: 'يعمل على جميع الأجهزة' },
    { id: 'seo', name: 'تحسين محركات البحث', description: 'SEO متقدم' },
    { id: 'security', name: 'أمان متقدم', description: 'حماية شاملة' },
    { id: 'analytics', name: 'تحليلات متقدمة', description: 'تقارير مفصلة' },
    { id: 'cms', name: 'نظام إدارة محتوى', description: 'سهولة التحديث' },
    { id: 'payment', name: 'بوابات دفع', description: 'مدفوعات آمنة' },
    { id: 'chat', name: 'دردشة مباشرة', description: 'تواصل فوري' },
    { id: 'multilingual', name: 'متعدد اللغات', description: 'دعم لغات متعددة' }
  ];

  const handleInputChange = (field: keyof ServiceRequest, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // محاكاة إرسال البيانات
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    alert('تم إرسال طلبك بنجاح! سنتواصل معك قريباً.');
  };

  const progress = (currentStep / 4) * 100;

  return (
    <section id="service-request" className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            اطلب خدمتك الآن
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            أخبرنا عن مشروعك وسنقدم لك عرض سعر مخصص وخطة عمل مفصلة
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <span className="text-white font-medium">الخطوة {currentStep} من 4</span>
            <span className="text-green-400 font-medium">{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-gray-900 rounded-2xl p-8 border border-green-500/30">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">المعلومات الأساسية</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-medium mb-2">الاسم الكامل *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="أدخل اسمك الكامل"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">البريد الإلكتروني *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">رقم الهاتف *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="05xxxxxxxx"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">اسم الشركة</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="اسم شركتك أو المؤسسة"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Service Type */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">نوع الخدمة المطلوبة</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {serviceTypes.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleInputChange('serviceType', service.id)}
                    className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      formData.serviceType === service.id
                        ? 'border-blue-500 bg-blue-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="text-4xl mb-3">{service.icon}</div>
                    <h4 className="text-white font-semibold">{service.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Budget & Timeline */}
          {currentStep === 3 && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">الميزانية والجدول الزمني</h3>
              
              <div>
                <h4 className="text-xl text-white font-semibold mb-4">الميزانية المتوقعة</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {budgetRanges.map((budget) => (
                    <div
                      key={budget.id}
                      onClick={() => handleInputChange('budget', budget.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.budget === budget.id
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white font-semibold">{budget.name}</div>
                      <div className="text-gray-300 text-sm">{budget.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-xl text-white font-semibold mb-4">الجدول الزمني المطلوب</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {timelineOptions.map((timeline) => (
                    <div
                      key={timeline.id}
                      onClick={() => handleInputChange('timeline', timeline.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.timeline === timeline.id
                          ? 'border-purple-500 bg-purple-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-white font-semibold">{timeline.name}</div>
                      <div className="text-gray-300 text-sm">{timeline.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Features & Description */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-6">الميزات والتفاصيل</h3>
              
              <div>
                <h4 className="text-xl text-white font-semibold mb-4">الميزات المطلوبة</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature) => (
                    <div
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        formData.features.includes(feature.id)
                          ? 'border-yellow-500 bg-yellow-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white font-semibold">{feature.name}</div>
                          <div className="text-gray-300 text-sm">{feature.description}</div>
                        </div>
                        {formData.features.includes(feature.id) && (
                          <div className="text-yellow-400">✓</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">وصف المشروع</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="اشرح لنا فكرة مشروعك بالتفصيل..."
                />
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-white/20">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-6 py-3 border-2 border-white/30 text-white rounded-xl hover:bg-white/10 transition-colors"
              >
                السابق
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 ml-auto"
              >
                التالي
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
} 