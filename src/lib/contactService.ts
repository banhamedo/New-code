import { ref, push, set, get, query, orderByChild } from 'firebase/database';
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

export interface ContactRecord extends ContactFormData {
  id: string;
  createdAt: string;
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

// دالة لجلب جميع بيانات التواصل
export const getAllContacts = async (): Promise<ContactRecord[]> => {
  try {
    const contactsRef = ref(database, 'contacts');
    const contactsQuery = query(contactsRef, orderByChild('timestamp'));
    const snapshot = await get(contactsQuery);
    
    if (snapshot.exists()) {
      const contacts: ContactRecord[] = [];
      snapshot.forEach((childSnapshot) => {
        contacts.push({
          id: childSnapshot.key!,
          ...childSnapshot.val()
        });
      });
      
      // ترتيب البيانات من الأحدث إلى الأقدم
      return contacts.reverse();
    }
    
    return [];
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
};

// دالة لحذف رسالة
export const deleteContact = async (contactId: string): Promise<boolean> => {
  try {
    const contactRef = ref(database, `contacts/${contactId}`);
    await set(contactRef, null);
    return true;
  } catch (error) {
    console.error('Error deleting contact:', error);
    return false;
  }
}; 