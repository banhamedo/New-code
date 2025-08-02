'use client';

import { useState, useEffect } from 'react';

interface CalculatorState {
  serviceType: string;
  complexity: string;
  features: string[];
  pages: number;
  timeline: string;
  maintenance: boolean;
}

export default function PriceCalculator() {
  const [calculator, setCalculator] = useState<CalculatorState>({
    serviceType: '',
    complexity: '',
    features: [],
    pages: 5,
    timeline: 'normal',
    maintenance: false
  });

  const [totalPrice, setTotalPrice] = useState(0);
  const [breakdown, setBreakdown] = useState<any[]>([]);

  const serviceTypes = [
    { id: 'website', name: 'موقع ويب', basePrice: 5000, icon: '🌐' },
    { id: 'ecommerce', name: 'متجر إلكتروني', basePrice: 15000, icon: '🛒' },
    { id: 'app', name: 'تطبيق موبايل', basePrice: 25000, icon: '📱' },
    { id: 'cms', name: 'نظام إدارة محتوى', basePrice: 8000, icon: '📝' },
    { id: 'api', name: 'واجهة برمجة API', basePrice: 12000, icon: '🔌' },
    { id: 'custom', name: 'حل مخصص', basePrice: 20000, icon: '⚙️' }
  ];

  const complexityLevels = [
    { id: 'simple', name: 'بسيط', multiplier: 1, description: 'تصميم أساسي، وظائف بسيطة' },
    { id: 'medium', name: 'متوسط', multiplier: 1.5, description: 'تصميم متقدم، وظائف متعددة' },
    { id: 'complex', name: 'معقد', multiplier: 2.5, description: 'تصميم فريد، وظائف متقدمة' },
    { id: 'enterprise', name: 'مؤسسي', multiplier: 4, description: 'حلول متكاملة، أمان عالي' }
  ];

  const availableFeatures = [
    { id: 'responsive', name: 'تصميم متجاوب', price: 1000, description: 'يعمل على جميع الأجهزة' },
    { id: 'seo', name: 'تحسين محركات البحث', price: 2000, description: 'SEO متقدم' },
    { id: 'security', name: 'أمان متقدم', price: 3000, description: 'حماية شاملة' },
    { id: 'analytics', name: 'تحليلات متقدمة', price: 1500, description: 'تقارير مفصلة' },
    { id: 'cms', name: 'نظام إدارة محتوى', price: 2500, description: 'سهولة التحديث' },
    { id: 'payment', name: 'بوابات دفع', price: 4000, description: 'مدفوعات آمنة' },
    { id: 'chat', name: 'دردشة مباشرة', price: 1500, description: 'تواصل فوري' },
    { id: 'multilingual', name: 'متعدد اللغات', price: 2000, description: 'دعم لغات متعددة' },
    { id: 'blog', name: 'نظام مدونة', price: 1200, description: 'محتوى ديناميكي' },
    { id: 'newsletter', name: 'نشرة إخبارية', price: 800, description: 'تواصل مع العملاء' },
    { id: 'social', name: 'تكامل وسائل التواصل', price: 1000, description: 'ربط مع السوشيال ميديا' },
    { id: 'api', name: 'واجهة برمجة API', price: 3000, description: 'تكامل مع أنظمة أخرى' }
  ];

  const timelineOptions = [
    { id: 'urgent', name: 'عاجل (1-2 أسبوع)', multiplier: 1.5, description: 'رسوم إضافية للسرعة' },
    { id: 'normal', name: 'عادي (1-3 أشهر)', multiplier: 1, description: 'الوقت القياسي' },
    { id: 'extended', name: 'ممتد (3-6 أشهر)', multiplier: 0.9, description: 'خصم للوقت الطويل' }
  ];

  const handleServiceChange = (serviceId: string) => {
    setCalculator(prev => ({ ...prev, serviceType: serviceId }));
  };

  const handleComplexityChange = (complexityId: string) => {
    setCalculator(prev => ({ ...prev, complexity: complexityId }));
  };

  const handleFeatureToggle = (featureId: string) => {
    setCalculator(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }));
  };

  const handlePagesChange = (pages: number) => {
    setCalculator(prev => ({ ...prev, pages }));
  };

  const handleTimelineChange = (timelineId: string) => {
    setCalculator(prev => ({ ...prev, timeline: timelineId }));
  };

  const handleMaintenanceToggle = () => {
    setCalculator(prev => ({ ...prev, maintenance: !prev.maintenance }));
  };

  // حساب السعر الإجمالي
  useEffect(() => {
    if (!calculator.serviceType || !calculator.complexity) {
      setTotalPrice(0);
      setBreakdown([]);
      return;
    }

    const selectedService = serviceTypes.find(s => s.id === calculator.serviceType);
    const selectedComplexity = complexityLevels.find(c => c.id === calculator.complexity);
    const selectedTimeline = timelineOptions.find(t => t.id === calculator.timeline);

    if (!selectedService || !selectedComplexity || !selectedTimeline) return;

    let basePrice = selectedService.basePrice;
    let breakdownItems = [];

    // السعر الأساسي
    breakdownItems.push({
      name: `${selectedService.name} (${selectedComplexity.name})`,
      price: basePrice,
      description: selectedComplexity.description
    });

    // تعديل السعر حسب التعقيد
    const complexityPrice = basePrice * selectedComplexity.multiplier - basePrice;
    if (complexityPrice > 0) {
      breakdownItems.push({
        name: `رسوم التعقيد (${selectedComplexity.name})`,
        price: complexityPrice,
        description: `مضاعف ${selectedComplexity.multiplier}x`
      });
    }

    // تعديل السعر حسب عدد الصفحات
    const pagePrice = Math.max(0, (calculator.pages - 5) * 500);
    if (pagePrice > 0) {
      breakdownItems.push({
        name: `صفحات إضافية (${calculator.pages - 5} صفحة)`,
        price: pagePrice,
        description: '500 ريال لكل صفحة إضافية'
      });
    }

    // الميزات المختارة
    const selectedFeatures = availableFeatures.filter(f => calculator.features.includes(f.id));
    selectedFeatures.forEach(feature => {
      breakdownItems.push({
        name: feature.name,
        price: feature.price,
        description: feature.description
      });
    });

    // تعديل السعر حسب الجدول الزمني
    const timelineAdjustment = (basePrice * selectedComplexity.multiplier + pagePrice + selectedFeatures.reduce((sum, f) => sum + f.price, 0)) * (selectedTimeline.multiplier - 1);
    if (timelineAdjustment !== 0) {
      breakdownItems.push({
        name: `تعديل الجدول الزمني (${selectedTimeline.name})`,
        price: timelineAdjustment,
        description: selectedTimeline.description
      });
    }

    // الصيانة السنوية
    if (calculator.maintenance) {
      const maintenancePrice = Math.round((basePrice * selectedComplexity.multiplier + pagePrice + selectedFeatures.reduce((sum, f) => sum + f.price, 0)) * 0.2);
      breakdownItems.push({
        name: 'صيانة سنوية',
        price: maintenancePrice,
        description: '20% من السعر الإجمالي'
      });
    }

    const total = breakdownItems.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
    setBreakdown(breakdownItems);
  }, [calculator]);

  return (
    <section id="price-calculator" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            حاسبة الأسعار
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            احسب تكلفة مشروعك بسهولة وشفافية. اختر الخيارات المناسبة واحصل على عرض سعر فوري
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <div className="space-y-8">
            {/* Service Type */}
            <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">نوع الخدمة</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {serviceTypes.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => handleServiceChange(service.id)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                      calculator.serviceType === service.id
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{service.icon}</span>
                      <div>
                        <h4 className="text-white font-semibold">{service.name}</h4>
                        <p className="text-gray-300 text-sm">ابتداءً من {service.basePrice.toLocaleString()} ريال</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity Level */}
            {calculator.serviceType && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">مستوى التعقيد</h3>
                <div className="space-y-4">
                  {complexityLevels.map((complexity) => (
                    <div
                      key={complexity.id}
                      onClick={() => handleComplexityChange(complexity.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        calculator.complexity === complexity.id
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{complexity.name}</h4>
                          <p className="text-gray-300 text-sm">{complexity.description}</p>
                        </div>
                        <div className="text-green-400 font-bold">{complexity.multiplier}x</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Number of Pages */}
            {calculator.serviceType && calculator.complexity && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">عدد الصفحات</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">عدد الصفحات: {calculator.pages}</span>
                    <span className="text-green-400 font-bold">
                      {Math.max(0, (calculator.pages - 5) * 500).toLocaleString()} ريال إضافي
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={calculator.pages}
                    onChange={(e) => handlePagesChange(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>1 صفحة</span>
                    <span>50 صفحة</span>
                  </div>
                </div>
              </div>
            )}

            {/* Features */}
            {calculator.serviceType && calculator.complexity && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">الميزات الإضافية</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {availableFeatures.map((feature) => (
                    <div
                      key={feature.id}
                      onClick={() => handleFeatureToggle(feature.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        calculator.features.includes(feature.id)
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{feature.name}</h4>
                          <p className="text-gray-300 text-sm">{feature.description}</p>
                        </div>
                        <div className="text-green-400 font-bold">{feature.price.toLocaleString()} ريال</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Timeline */}
            {calculator.serviceType && calculator.complexity && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
                <h3 className="text-2xl font-bold text-white mb-6">الجدول الزمني</h3>
                <div className="space-y-4">
                  {timelineOptions.map((timeline) => (
                    <div
                      key={timeline.id}
                      onClick={() => handleTimelineChange(timeline.id)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        calculator.timeline === timeline.id
                          ? 'border-green-500 bg-green-500/20'
                          : 'border-white/20 bg-white/5 hover:border-white/40 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-white font-semibold">{timeline.name}</h4>
                          <p className="text-gray-300 text-sm">{timeline.description}</p>
                        </div>
                        <div className={`font-bold ${timeline.multiplier > 1 ? 'text-red-400' : timeline.multiplier < 1 ? 'text-green-400' : 'text-yellow-400'}`}>
                          {timeline.multiplier > 1 ? '+' : ''}{Math.round((timeline.multiplier - 1) * 100)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Maintenance */}
            {calculator.serviceType && calculator.complexity && (
              <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">صيانة سنوية</h3>
                    <p className="text-gray-300 text-sm">تحديثات، دعم فني، نسخ احتياطية</p>
                  </div>
                  <button
                    onClick={handleMaintenanceToggle}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      calculator.maintenance ? 'bg-green-500' : 'bg-gray-600'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        calculator.maintenance ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Price Summary */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-gray-900 rounded-2xl p-6 border border-green-500/30">
              <h3 className="text-2xl font-bold text-white mb-6">ملخص السعر</h3>
              
              {totalPrice > 0 ? (
                <div className="space-y-6">
                  {/* Total Price */}
                  <div className="text-center p-6 bg-green-500/20 rounded-xl border border-green-500/30">
                    <p className="text-gray-300 text-sm mb-2">السعر الإجمالي</p>
                    <p className="text-4xl font-bold text-white">{totalPrice.toLocaleString()} ريال</p>
                    <p className="text-gray-400 text-sm mt-2">شامل الضريبة</p>
                  </div>

                  {/* Breakdown */}
                  <div className="space-y-3">
                    <h4 className="text-white font-semibold">تفاصيل السعر:</h4>
                    {breakdown.map((item, index) => (
                      <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <div>
                          <p className="text-white text-sm font-medium">{item.name}</p>
                          <p className="text-gray-400 text-xs">{item.description}</p>
                        </div>
                        <p className="text-green-400 font-bold">{item.price.toLocaleString()} ريال</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300">
                      اطلب عرض سعر مفصل
                    </button>
                    <button className="w-full border-2 border-white/30 text-white py-3 rounded-xl font-medium hover:bg-white/10 transition-colors">
                      احفظ هذا العرض
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">💰</div>
                  <p className="text-gray-300">اختر نوع الخدمة ومستوى التعقيد لرؤية السعر</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 