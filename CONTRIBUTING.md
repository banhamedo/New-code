# دليل المساهمة - New Code Development Website

شكراً لاهتمامك بالمساهمة في مشروع New Code Development Website! نرحب بجميع المساهمات من المجتمع.

## 🤝 كيف يمكنك المساهمة

### أنواع المساهمات المطلوبة

1. **إصلاح الأخطاء (Bug Fixes)**
   - إصلاح مشاكل في الكود
   - تحسين الأداء
   - إصلاح مشاكل التوافق

2. **إضافة ميزات جديدة (New Features)**
   - إضافة أقسام جديدة
   - تحسين التصميم
   - إضافة وظائف تفاعلية

3. **تحسينات التصميم (Design Improvements)**
   - تحسين واجهة المستخدم
   - إضافة تأثيرات بصرية
   - تحسين التجاوب

4. **تحسينات SEO**
   - تحسين محركات البحث
   - إضافة Schema Markup
   - تحسين الأداء

5. **التوثيق (Documentation)**
   - تحسين README
   - إضافة تعليقات للكود
   - تحديث الدليل

## 🚀 كيفية البدء

### المتطلبات الأساسية

- Node.js 18 أو أحدث
- npm أو yarn
- Git
- معرفة بـ React و TypeScript

### خطوات الإعداد

1. **استنساخ المشروع**
   ```bash
   git clone https://github.com/newcode-dev/website.git
   cd website
   ```

2. **تثبيت التبعيات**
   ```bash
   npm install
   ```

3. **تشغيل المشروع**
   ```bash
   npm run dev
   ```

4. **فتح المتصفح**
   افتح [http://localhost:3000](http://localhost:3000)

## 📝 قواعد المساهمة

### 1. إنشاء فرع جديد

```bash
# تأكد من أنك في الفرع الرئيسي
git checkout main

# احصل على أحدث التحديثات
git pull origin main

# أنشئ فرع جديد
git checkout -b feature/your-feature-name
# أو
git checkout -b fix/your-bug-fix
```

### 2. تسمية الفروع

استخدم أسماء واضحة ووصفية:

- `feature/add-contact-form` - لميزة جديدة
- `fix/navbar-mobile-issue` - لإصلاح خطأ
- `docs/update-readme` - لتحديث التوثيق
- `style/improve-hero-section` - لتحسين التصميم

### 3. كتابة الكود

#### قواعد التسمية

```typescript
// المكونات - PascalCase
const HeroSection = () => { ... }

// المتغيرات والدوال - camelCase
const userName = 'John';
const handleClick = () => { ... }

// الثوابت - UPPER_SNAKE_CASE
const API_BASE_URL = 'https://api.example.com';

// الأنواع - PascalCase
interface UserData { ... }
type ButtonVariant = 'primary' | 'secondary';
```

#### هيكل الملفات

```
src/
├── components/
│   ├── ui/           # مكونات واجهة المستخدم الأساسية
│   ├── layout/       # مكونات التخطيط
│   └── sections/     # أقسام الصفحة
├── lib/              # مكتبات ووظائف مساعدة
├── types/            # تعريفات TypeScript
├── utils/            # وظائف مساعدة
└── styles/           # ملفات CSS
```

#### قواعد التصميم

- استخدم Tailwind CSS للتصميم
- اتبع نظام الألوان المحدد
- تأكد من التجاوب مع جميع الأجهزة
- استخدم تأثيرات زجاجية متسقة

### 4. اختبار التغييرات

```bash
# تشغيل ESLint
npm run lint

# فحص TypeScript
npm run type-check

# بناء المشروع
npm run build

# اختبار التشغيل
npm start
```

### 5. Commit التغييرات

```bash
# إضافة الملفات
git add .

# كتابة رسالة commit واضحة
git commit -m "feat: add contact form with validation

- Add contact form component
- Implement form validation
- Add success/error messages
- Update contact section styling"
```

#### تنسيق رسائل Commit

استخدم [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - ميزة جديدة
- `fix:` - إصلاح خطأ
- `docs:` - تحديث التوثيق
- `style:` - تحسين التصميم
- `refactor:` - إعادة هيكلة الكود
- `test:` - إضافة اختبارات
- `chore:` - مهام الصيانة

### 6. Push التغييرات

```bash
git push origin feature/your-feature-name
```

### 7. إنشاء Pull Request

1. اذهب إلى GitHub
2. انقر على "New Pull Request"
3. اختر الفرع المصدر والهدف
4. املأ النموذج:

#### عنوان PR
```
feat: add contact form with validation
```

#### وصف PR
```markdown
## التغييرات
- إضافة نموذج اتصال تفاعلي
- تنفيذ التحقق من صحة البيانات
- إضافة رسائل النجاح والخطأ
- تحديث تصميم قسم الاتصال

## الاختبارات
- [x] اختبار النموذج على سطح المكتب
- [x] اختبار النموذج على الموبايل
- [x] اختبار التحقق من صحة البيانات
- [x] اختبار رسائل الخطأ

## لقطات الشاشة
[أضف لقطات شاشة إذا لزم الأمر]

## نوع التغيير
- [ ] إصلاح خطأ
- [x] ميزة جديدة
- [ ] تحسين التصميم
- [ ] تحديث التوثيق
```

## 🔍 مراجعة الكود

### معايير المراجعة

1. **جودة الكود**
   - الكود نظيف ومقروء
   - يتبع أفضل الممارسات
   - لا يحتوي على أخطاء ESLint

2. **الأداء**
   - لا يؤثر سلباً على الأداء
   - يستخدم التحميل الكسول عند الحاجة
   - محسن للصور والموارد

3. **التصميم**
   - متجاوب مع جميع الأجهزة
   - يتبع نظام التصميم
   - متناسق مع باقي الموقع

4. **الاختبار**
   - يعمل على المتصفحات الرئيسية
   - لا يحتوي على أخطاء في وحدة التحكم
   - يمر جميع الاختبارات

### عملية المراجعة

1. **مراجعة تلقائية**
   - GitHub Actions سيراجع الكود تلقائياً
   - ESLint و TypeScript سيتم فحصهما

2. **مراجعة يدوية**
   - أحد أعضاء الفريق سيراجع PR
   - قد يطلب تغييرات أو تحسينات

3. **الموافقة**
   - بعد المراجعة والموافقة، سيتم دمج PR

## 🐛 الإبلاغ عن الأخطاء

### كيفية الإبلاغ عن خطأ

1. **تحقق من الأخطاء المعروفة**
   - راجع Issues المفتوحة
   - تحقق من CHANGELOG

2. **أنشئ Issue جديد**
   - استخدم قالب "Bug Report"
   - املأ جميع الحقول المطلوبة

3. **قدم معلومات مفصلة**
   - وصف واضح للمشكلة
   - خطوات إعادة الإنتاج
   - معلومات النظام والمتصفح
   - لقطات شاشة إذا لزم الأمر

### قالب الإبلاغ عن خطأ

```markdown
## وصف المشكلة
[وصف واضح ومختصر للمشكلة]

## خطوات إعادة الإنتاج
1. اذهب إلى '...'
2. انقر على '...'
3. انتقل إلى '...'
4. شاهد الخطأ

## السلوك المتوقع
[وصف ما كان يجب أن يحدث]

## لقطات الشاشة
[أضف لقطات شاشة إذا لزم الأمر]

## معلومات النظام
- نظام التشغيل: [مثل Windows 10]
- المتصفح: [مثل Chrome 91]
- الإصدار: [مثل 1.0.0]

## معلومات إضافية
[أي معلومات أخرى قد تكون مفيدة]
```

## 💡 اقتراح ميزات جديدة

### كيفية اقتراح ميزة

1. **تحقق من الميزات المقترحة**
   - راجع Issues المفتوحة
   - تحقق من المشاريع

2. **أنشئ Issue جديد**
   - استخدم قالب "Feature Request"
   - املأ جميع الحقول المطلوبة

3. **قدم اقتراحاً مفصلاً**
   - وصف واضح للميزة
   - شرح الفوائد
   - أمثلة على الاستخدام

### قالب اقتراح ميزة

```markdown
## ملخص الميزة
[وصف واضح ومختصر للميزة المطلوبة]

## المشكلة التي تحلها
[شرح المشكلة التي تحلها هذه الميزة]

## الحل المقترح
[وصف الحل المقترح]

## البدائل المدروسة
[وصف أي حلول بديلة تم النظر فيها]

## أمثلة على الاستخدام
[أمثلة على كيفية استخدام الميزة]

## تأثير الميزة
[كيف ستؤثر هذه الميزة على المستخدمين]

## معلومات إضافية
[أي معلومات أخرى قد تكون مفيدة]
```

## 📚 الموارد المفيدة

### الوثائق
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

### أدوات التطوير
- [ESLint](https://eslint.org)
- [Prettier](https://prettier.io)
- [VS Code](https://code.visualstudio.com)

### أفضل الممارسات
- [React Best Practices](https://react.dev/learn)
- [TypeScript Best Practices](https://www.typescriptlang.org/docs)
- [Web Accessibility](https://www.w3.org/WAI/)

## 🎉 الاعتراف

سنعترف بجميع المساهمين في:
- ملف README
- صفحة المساهمين
- إصدارات GitHub

## 📞 التواصل

إذا كان لديك أي أسئلة أو تحتاج مساعدة:

- **Issues**: استخدم GitHub Issues
- **Discussions**: استخدم GitHub Discussions
- **Email**: info@newcode.dev

---

**شكراً لك على مساهمتك في تطوير New Code Development Website! 🌟** 