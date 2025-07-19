'use client';

import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'الخدمات', href: '/services' },
    { name: 'أعمالنا', href: '/portfolio' },
    { name: 'الأسعار', href: '/pricing' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 border-b border-green-500/30 shadow-lg' 
        : 'bg-black/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">NC</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-white font-bold text-xl">New Code</span>
                <div className="text-green-400 text-xs font-medium">Development</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-green-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-green-500/10 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link href="/contact">
              <button className="bg-green-500 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
                ابدأ مشروعك
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-green-400 focus:outline-none focus:text-green-400 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100 animate-slide-down' 
          : 'max-h-0 opacity-0'
      } overflow-hidden animate-fade-in`} style={{animationDelay: isMobileMenuOpen ? '0.2s' : '0s', animationFillMode: 'both'}}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 border-t border-green-500/30">
          {navItems.map((item, i) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-white hover:text-green-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-green-500/10 animate-slide-up" style={{animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: 'both'}} onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 animate-fade-in" style={{animationDelay: '0.7s', animationFillMode: 'both'}}>
            <Link href="/contact">
              <button className="w-full bg-green-500 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-green-600 transition-all duration-300 animate-scale-105">
                ابدأ مشروعك
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 