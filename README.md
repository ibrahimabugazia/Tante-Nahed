# طنط ناهد — Website

موقع مطعم مصري Static Website جاهز للنشر على GitHub Pages / Netlify / Vercel.

## الحالة
- Arabic RTL + mobile-first responsive design
- 5 صفحات: الرئيسية، المنيو، عن طنط ناهد، الصور، اتصل بينا
- WhatsApp + phone CTAs شغالة
- Menu + pricing + categories مركزية في `js/restaurant-data.js`
- Responsive mobile bottom navigation
- SEO metadata + Restaurant JSON-LD
- Favicon + original SVG logo + food artwork
- `.nojekyll` + `404.html` للنشر الساكن
- لا توجد مكتبات أو build step مطلوبة

## قبل الإطلاق التجاري
غيّر فقط البيانات الحقيقية داخل `js/restaurant-data.js`:
1. العنوان
2. مواعيد العمل
3. البريد الإلكتروني
4. روابط Instagram / Facebook / TikTok / Google Business
5. قصة طنط ناهد الحقيقية
6. الأسعار النهائية بعد food-costing
7. الصور الحقيقية للأكل والمكان
8. حالة النشاط من `pre-launch` إلى `open` عند الافتتاح

> مهم: الأسعار الحالية مقترحة للتخطيط وليست أسعاراً نهائية، ومكتوب بالموقع أنها قابلة للتغيير حسب أسعار السوق.

## نشر سريع على GitHub Pages
1. أنشئ Repository جديد على GitHub.
2. ارفع **محتويات هذا المجلد** بحيث يكون `index.html` في الـ root.
3. ادخل Settings → Pages.
4. اختر النشر من branch الرئيسي، ثم مجلد `/ (root)`.
5. احفظ وانتظر دقائق قليلة.
6. افتح رابط GitHub Pages الذي سيظهر لك.

لا تحتاج إلى npm أو Node أو أي build command.

## الملفات المهمة
- `index.html` — الصفحة الرئيسية
- `menu.html` — المنيو
- `about.html` — عن المطعم
- `gallery.html` — الصور
- `contact.html` — التواصل والحجز
- `css/style.css` — التصميم
- `js/restaurant-data.js` — كل بيانات المطعم والمنيو
- `js/main.js` — السلوك الديناميكي
- `LAUNCH-CHECKLIST.md` — checklist قبل الإطلاق
- `CREDITS.md` — ملاحظات الأصول والصور

## ملاحظة الصور
النسخة الحالية تستخدم رسومات طعام SVG محلية حتى يعمل الموقع بدون الاعتماد على روابط صور خارجية. قبل الافتتاح، استبدل صور الأطباق الرئيسية بصور أصلية مصوّرة للمطعم؛ هذا أفضل تسويقياً وأقوى للثقة والتحويل.
