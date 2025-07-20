import type { Metadata } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'لوحة الإدارة - New Code',
  description: 'لوحة إدارة رسائل التواصل',
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className="font-tajawal antialiased">
        {children}
      </body>
    </html>
  )
} 