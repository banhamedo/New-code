import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import AnimatedBg from "../components/AnimatedBg";
import Navbar from "../components/Navbar";
import ChatWidget from "../components/ChatWidget";

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
});

export const metadata: Metadata = {
  title: "New Code Development - شركة تطوير مواقع الويب",
  description: "شركة متخصصة في تطوير مواقع الويب والتطبيقات الحديثة. نقدم حلول تقنية مبتكرة وعالية الجودة لمساعدة عملك على النمو.",
  keywords: "تطوير مواقع, تطبيقات ويب, تصميم مواقع, برمجة, شركة تقنية",
  authors: [{ name: "New Code Development" }],
  openGraph: {
    title: "New Code Development - شركة تطوير مواقع الويب",
    description: "شركة متخصصة في تطوير مواقع الويب والتطبيقات الحديثة",
    type: "website",
    locale: "ar_SA",
    url: "https://newcode.dev",
    siteName: "New Code Development",
  },
  twitter: {
    card: "summary_large_image",
    title: "New Code Development - شركة تطوير مواقع الويب",
    description: "شركة متخصصة في تطوير مواقع الويب والتطبيقات الحديثة",
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={tajawal.variable}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="font-tajawal antialiased">
        <AnimatedBg />
        <Navbar />
        {children}
        <ChatWidget />
        <script src="/js/chatbot.js" defer></script>
      </body>
    </html>
  );
}
