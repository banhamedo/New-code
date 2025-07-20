import { ref, push, set } from 'firebase/database';
import { database } from './firebase';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  budget?: string;
  message: string;
  timestamp: number;
  ip?: string;
  userAgent?: string;
}

export const saveContactForm = async (formData: ContactFormData): Promise<boolean> => {
  try {
    // إضافة timestamp
    const dataWithTimestamp = {
      ...formData,
      timestamp: Date.now(),
      createdAt: new Date().toISOString(),
    };

    // حفظ البيانات في Firebase
    const contactsRef = ref(database, 'contacts');
    const newContactRef = push(contactsRef);
    await set(newContactRef, dataWithTimestamp);

    console.log('Contact form saved successfully:', newContactRef.key);
    return true;
  } catch (error) {
    console.error('Error saving contact form:', error);
    return false;
  }
};

export const getContactFormData = (formData: any): ContactFormData => {
  return {
    name: formData.name || '',
    email: formData.email || '',
    phone: formData.phone || '',
    company: formData.company || '',
    service: formData.service || '',
    budget: formData.budget || '',
    message: formData.message || '',
    timestamp: Date.now(),
  };
}; 