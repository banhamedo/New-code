'use client';

import { useState, useEffect } from 'react';
import { getAllContacts, deleteContact, ContactRecord } from '../../lib/contactService';

export default function AdminPage() {
  const [contacts, setContacts] = useState<ContactRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const data = await getAllContacts();
      setContacts(data);
    } catch (err) {
      setError('حدث خطأ في تحميل البيانات');
      console.error('Error loading contacts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('هل أنت متأكد من حذف هذه الرسالة؟')) {
      try {
        const success = await deleteContact(id);
        if (success) {
          setContacts(contacts.filter(contact => contact.id !== id));
          alert('تم حذف الرسالة بنجاح');
        } else {
          alert('حدث خطأ في حذف الرسالة');
        }
      } catch (err) {
        alert('حدث خطأ في حذف الرسالة');
      }
    }
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('ar-EG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getServiceLabel = (service: string) => {
    const serviceLabels: { [key: string]: string } = {
      'website': 'تطوير المواقع',
      'app': 'تطوير التطبيقات',
      'ecommerce': 'التجارة الإلكترونية',
      'maintenance': 'صيانة المواقع',
      'erp': 'أنظمة ERP',
      'crm': 'أنظمة CRM',
      'security': 'الأمن السيبراني',
      'ai': 'حلول الذكاء الاصطناعي',
      'other': 'خدمات أخرى'
    };
    return serviceLabels[service] || service;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-xl">جاري التحميل...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-red-400 text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-black border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">لوحة إدارة رسائل التواصل</h1>
            <a 
              href="/" 
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors text-sm"
            >
              العودة للموقع
            </a>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <p className="text-gray-300">إجمالي الرسائل: {contacts.length}</p>
            <button
              onClick={loadContacts}
              className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
            >
              تحديث البيانات
            </button>
          </div>
        </div>

        {contacts.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 text-xl">لا توجد رسائل بعد</div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full bg-gray-800 rounded-lg overflow-hidden">
              <thead className="bg-gray-700">
                <tr>
                  <th className="px-4 py-3 text-right">التاريخ</th>
                  <th className="px-4 py-3 text-right">الاسم</th>
                  <th className="px-4 py-3 text-right">البريد الإلكتروني</th>
                  <th className="px-4 py-3 text-right">الهاتف</th>
                  <th className="px-4 py-3 text-right">الشركة</th>
                  <th className="px-4 py-3 text-right">الخدمة</th>
                  <th className="px-4 py-3 text-right">الميزانية</th>
                  <th className="px-4 py-3 text-right">الرسالة</th>
                  <th className="px-4 py-3 text-right">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="px-4 py-3 text-sm">
                      {formatDate(contact.timestamp)}
                    </td>
                    <td className="px-4 py-3 font-medium">{contact.name}</td>
                    <td className="px-4 py-3">
                      <a href={`mailto:${contact.email}`} className="text-green-400 hover:text-green-300">
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-4 py-3">
                      {contact.phone && (
                        <a href={`tel:${contact.phone}`} className="text-blue-400 hover:text-blue-300">
                          {contact.phone}
                        </a>
                      )}
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {contact.company || '-'}
                    </td>
                    <td className="px-4 py-3">
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-sm">
                        {getServiceLabel(contact.service)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {contact.budget || '-'}
                    </td>
                    <td className="px-4 py-3 max-w-xs">
                      <div className="truncate" title={contact.message}>
                        {contact.message || '-'}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm transition-colors"
                      >
                        حذف
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
} 