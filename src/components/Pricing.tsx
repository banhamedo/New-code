import Link from 'next/link';

export default function Pricing() {
  // باقات مجمعة
  const packages = [
    {
      name: 'باقة الشركات الناشئة',
      price: 'من 5,000 إلى 10,000 جنيه',
      description: 'حل متكامل للشركات الناشئة يشمل الأساسيات التقنية والأمان.',
      features: [
        'موقع تعريفي بسيط',
        'شات بوت بسيط',
        'فحص أمني أساسي',
        'دعم فني شهر'
      ]
    },
    {
      name: 'باقة الشركات المتوسطة',
      price: 'من 15,000 إلى 30,000 جنيه',
      description: 'باقة متكاملة للشركات المتوسطة تشمل موقع وتطبيق وخدمات ذكية.',
      features: [
        'موقع شركة صغير (عدة صفحات)',
        'تطبيق خدمات أو عرض محتوى',
        'شات بوت ذكي باستخدام AI مجاني',
        'فحص أمني شامل',
        'دعم فني 3 شهور'
      ]
    },
    {
      name: 'باقة الأعمال المتقدمة',
      price: 'من 40,000 إلى 80,000 جنيه',
      description: 'حلول متقدمة للأعمال تشمل إدارة المحتوى والتجارة والأمان.',
      features: [
        'موقع ديناميكي بواجهة إدارة (CMS)',
        'تطبيق متجر إلكتروني',
        'شات بوت مع لوحة تحكم',
        'اختبار اختراق',
        'نظام CRM بسيط',
        'دعم فني 6 شهور'
      ]
    },
    {
      name: 'باقة الشركات الكبرى',
      price: 'من 200,000 إلى 500,000 جنيه أو أكثر',
      description: 'حلول متكاملة للشركات الكبرى تشمل أنظمة متقدمة وأمان عالي.',
      features: [
        'موقع مخصص بالكامل من الصفر',
        'تطبيق شامل أو مخصص بالكامل',
        'ERP متكامل للشركات الكبرى',
        'شات بوت بذكاء صناعي قوي',
        'جميع خدمات الأمن (تشفير، مراقبة، جدار حماية...)',
        'دعم فني سنوي'
      ]
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* باقات مجمعة */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">باقات متكاملة</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-center mb-12">
            اختر الباقة الأنسب لاحتياجات شركتك، كل باقة تجمع عدة خدمات تقنية في حل واحد متكامل.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className="relative bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 text-center">{pkg.name}</h3>
                  <p className="text-gray-300 text-sm mb-6 text-center">{pkg.description}</p>
                  <div className="mb-6 text-center">
                    <span className="text-3xl font-bold text-green-400">{pkg.price}</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <svg className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href={`/contact?package=${encodeURIComponent(pkg.name)}`} className="mt-auto">
                  <button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-opacity duration-300">
                    اطلب الباقة
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* خدمات إضافية */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">خدمات إضافية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                service: 'صيانة شهرية',
                price: '1000 جنيه',
                description: 'صيانة دورية وتحديثات'
              },
              {
                service: 'دعم فني إضافي',
                price: '800 جنيه',
                description: 'دعم فني على مدار الساعة'
              },
              {
                service: 'تحسين SEO',
                price: '1500 جنيه',
                description: 'تحسين محركات البحث'
              },
              {
                service: 'تدريب الفريق',
                price: '1000 جنيه',
                description: 'تدريب على استخدام النظام'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 text-center hover:bg-white/20 transition-all duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{service.service}</h4>
                <div className="text-2xl font-bold text-blue-400 mb-2">{service.price}</div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">الأسئلة الشائعة</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: 'كم تستغرق مدة التطوير؟',
                answer: 'تختلف مدة التطوير حسب حجم المشروع وتعقيده. المشاريع البسيطة تستغرق 2-4 أسابيع، والمشاريع المتقدمة قد تستغرق 8-12 أسبوع.'
              },
              {
                question: 'هل تقدمون ضمان على المشاريع؟',
                answer: 'نعم، نقدم ضمان لمدة 3 أشهر على جميع المشاريع مع دعم فني مجاني خلال فترة الضمان.'
              },
              {
                question: 'هل يمكن تعديل المشروع بعد التسليم؟',
                answer: 'نعم، يمكن إجراء تعديلات بسيطة مجاناً خلال فترة الضمان. التعديلات الكبيرة تحتاج لرسوم إضافية.'
              },
              {
                question: 'هل تقدمون استضافة للمواقع؟',
                answer: 'نعم، نقدم خدمات استضافة موثوقة مع شهادات SSL مجانية ونسخ احتياطية دورية.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
                <h4 className="text-lg font-semibold text-white mb-3">{faq.question}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 