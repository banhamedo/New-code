# دليل النشر - New Code Development Website

## 🚀 خيارات النشر

### 1. Vercel (موصى به)

Vercel هو أفضل خيار لنشر تطبيقات Next.js:

1. **إنشاء حساب على Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل حساب جديد أو سجل دخول

2. **ربط المشروع**
   ```bash
   # تثبيت Vercel CLI
   npm i -g vercel
   
   # تسجيل الدخول
   vercel login
   
   # نشر المشروع
   vercel
   ```

3. **النشر من GitHub**
   - ارفع المشروع إلى GitHub
   - اربط مستودع GitHub مع Vercel
   - سيتم النشر التلقائي عند كل تحديث

### 2. Netlify

1. **إنشاء حساب على Netlify**
   - اذهب إلى [netlify.com](https://netlify.com)
   - سجل حساب جديد

2. **رفع المشروع**
   - اسحب مجلد المشروع إلى Netlify
   - أو اربط مستودع GitHub

3. **إعدادات البناء**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

### 3. AWS Amplify

1. **إنشاء حساب على AWS**
   - اذهب إلى [aws.amazon.com](https://aws.amazon.com)
   - أنشئ حساب جديد

2. **إعداد Amplify**
   - اذهب إلى AWS Amplify Console
   - اربط مستودع GitHub
   - اتبع الإرشادات

## 🔧 إعدادات ما قبل النشر

### 1. تحديث المتغيرات البيئية

أنشئ ملف `.env.production`:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SITE_NAME=New Code Development
NEXT_PUBLIC_CONTACT_EMAIL=info@yourdomain.com
NEXT_PUBLIC_CONTACT_PHONE=+966501234567
```

### 2. تحديث الروابط

تأكد من تحديث جميع الروابط في الملفات:
- `sitemap.xml`
- `robots.txt`
- `manifest.json`
- `layout.tsx`

### 3. اختبار البناء

```bash
# اختبار البناء محلياً
npm run build

# اختبار التشغيل
npm start
```

## 🌐 إعداد النطاق

### 1. شراء نطاق

- استخدم خدمات مثل Namecheap أو GoDaddy
- اختر نطاق مناسب مثل `newcode.dev` أو `newcode.com`

### 2. إعداد DNS

#### لـ Vercel:
```
Type: CNAME
Name: @
Value: cname.vercel-dns.com
```

#### لـ Netlify:
```
Type: CNAME
Name: @
Value: your-site.netlify.app
```

### 3. إعداد SSL

معظم منصات النشر تقدم SSL مجاناً. تأكد من تفعيله.

## 📊 تحليلات الموقع

### 1. Google Analytics

أضف Google Analytics إلى `layout.tsx`:

```tsx
// في layout.tsx
<script
  async
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<script
  dangerouslySetInnerHTML={{
    __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
    `,
  }}
/>
```

### 2. Google Search Console

1. اذهب إلى [search.google.com/search-console](https://search.google.com/search-console)
2. أضف موقعك
3. تحقق من الملكية
4. أرسل sitemap.xml

## 🔍 تحسين SEO

### 1. اختبار الأداء

استخدم أدوات مثل:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### 2. تحسين الصور

```bash
# تحسين الصور قبل الرفع
npm install -g imagemin-cli
imagemin images/* --out-dir=optimized
```

### 3. إضافة Schema Markup

أضف Schema Markup إلى `layout.tsx`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "New Code Development",
      "url": "https://newcode.dev",
      "logo": "https://newcode.dev/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+966501234567",
        "contactType": "customer service"
      }
    })
  }}
/>
```

## 🔒 الأمان

### 1. Headers الأمان

أضف ملف `next.config.js`:

```js
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
};
```

### 2. Content Security Policy

أضف CSP إلى headers:

```js
{
  key: 'Content-Security-Policy',
  value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:;"
}
```

## 📱 PWA (Progressive Web App)

### 1. إضافة Service Worker

أنشئ ملف `public/sw.js`:

```js
const CACHE_NAME = 'newcode-v1';
const urlsToCache = [
  '/',
  '/static/css/main.css',
  '/static/js/main.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
```

### 2. تسجيل Service Worker

أضف إلى `layout.tsx`:

```tsx
useEffect(() => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
  }
}, []);
```

## 🔄 النشر المستمر

### 1. GitHub Actions

أنشئ ملف `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 الدعم

إذا واجهت أي مشاكل في النشر:

1. تحقق من سجلات البناء
2. تأكد من صحة التبعيات
3. اختبر الموقع محلياً
4. راجع إعدادات DNS

---

**ملاحظة**: تأكد من اختبار الموقع على مختلف المتصفحات والأجهزة قبل النشر النهائي. 