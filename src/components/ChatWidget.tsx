'use client';

import { useState, useEffect } from 'react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const chatOptions = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: '💬',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      link: 'https://wa.me/966501234567?text=مرحباً، أريد استفسار عن خدماتكم'
    },
    {
      id: 'telegram',
      name: 'Telegram',
      icon: '📱',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      link: 'https://t.me/newcode_dev'
    },
    {
      id: 'phone',
      name: 'اتصال مباشر',
      icon: '📞',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      link: 'tel:+966501234567'
    },
    {
      id: 'email',
      name: 'بريد إلكتروني',
      icon: '✉️',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      link: 'mailto:info@newcode.dev'
    }
  ];

  const quickMessages = [
    'أريد عرض سعر لموقع ويب',
    'متى يمكن بدء المشروع؟',
    'هل تقدمون خدمات الصيانة؟',
    'أريد استشارة مجانية'
  ];

  const [selectedMessage, setSelectedMessage] = useState('');

  const handleQuickMessage = (message: string) => {
    setSelectedMessage(message);
    // يمكن إضافة منطق إضافي هنا
  };

  const handleChatOption = (option: typeof chatOptions[0]) => {
    if (option.id === 'whatsapp' || option.id === 'telegram') {
      const message = selectedMessage || 'مرحباً، أريد استفسار عن خدماتكم';
      const encodedMessage = encodeURIComponent(message);
      const link = option.link.replace('?text=', `?text=${encodedMessage}`);
      window.open(link, '_blank');
    } else {
      window.open(option.link, '_blank');
    }
    setIsOpen(false);
  };

  // إخفاء الدردشة عند التمرير
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen && !isMinimized) {
        setIsMinimized(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen, isMinimized]);

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110"
        >
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs animate-pulse">
            3
          </div>
          
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
        </button>
      </div>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-20 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold">New Code Development</h3>
                  <p className="text-sm opacity-90">متصل الآن</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {isMinimized ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Chat Content */}
          {!isMinimized && (
            <div className="p-4 space-y-4">
              {/* Welcome Message */}
              <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                <p className="text-gray-800 text-sm">
                  مرحباً! كيف يمكننا مساعدتك اليوم؟ 🚀
                </p>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600 font-medium">رسائل سريعة:</p>
                <div className="grid grid-cols-1 gap-2">
                  {quickMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickMessage(message)}
                      className={`text-right p-2 rounded-lg text-sm transition-all duration-200 ${
                        selectedMessage === message
                          ? 'bg-blue-100 text-blue-800 border border-blue-300'
                          : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {message}
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat Options */}
              <div className="space-y-3">
                <p className="text-sm text-gray-600 font-medium">اختر طريقة التواصل:</p>
                <div className="grid grid-cols-2 gap-3">
                  {chatOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleChatOption(option)}
                      className={`${option.color} ${option.hoverColor} text-white p-3 rounded-xl transition-all duration-300 hover:scale-105 flex flex-col items-center space-y-2`}
                    >
                      <span className="text-2xl">{option.icon}</span>
                      <span className="text-xs font-medium">{option.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="flex items-center space-x-2 text-blue-800">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs">متاح من الأحد إلى الخميس: 9 ص - 6 م</span>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Minimized Chat */}
      {isOpen && isMinimized && (
        <div className="fixed bottom-20 left-6 z-50 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">New Code Development</h3>
                <p className="text-sm text-gray-600">متصل الآن</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>
      )}
    </>
  );
} 