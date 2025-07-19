import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ChatWidget from '@/components/ChatWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Navbar />
      <Hero />
      <div className="max-w-2xl mx-auto mt-16 mb-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">مرحبًا بك في New Code Development</h2>
        <p className="text-lg text-gray-300 mb-8">اكتشف خدماتنا ونجاحاتنا من خلال الصفحات التالية:</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/about" className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300">من نحن</a>
          <a href="/services" className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300">الخدمات</a>
          <a href="/pricing" className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300">الأسعار</a>
          <a href="/contact" className="bg-gradient-to-r from-green-500 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-gray-900 transition-all duration-300">تواصل معنا</a>
        </div>
      </div>
      <Footer />
      <ChatWidget />
      </main>
  );
}
