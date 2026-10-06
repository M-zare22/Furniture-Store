# فروشگاه میترا — فاز ۱

پروژهٔ آموزشی React با Vite و MUI؛ رابط فارسی RTL، داده و تصویر محلی، طراحی responsive. تنها فاز ۱ پیاده‌سازی شده است.

## اجرا

Node.js نسخهٔ 22.12 یا بالاتر (محیط بررسی: 24.10) و npm لازم است.

```bash
npm ci
npm run dev
```

آدرس نمایش داده‌شده در ترمینال را باز کنید. برای خروجی production:

```bash
npm run build
npm run preview
```

## امکانات فعلی

- خانه، معرفی دسته‌ها، چهار محصول منتخب، فهرست هشت محصول و جزئیات هر محصول.
- منوی دسکتاپ و Drawer موبایل، بازگشت به فهرست و خانه.
- تم MUI، راست‌به‌چپ با Emotion/Stylis، قیمت فارسی به تومان.
- تصاویر SVG محلی و طراحی مستقل از backend و CDN.
- ساختار component/page/layout، داده‌های قابل تعویض و مفاهیم پایهٔ React.

ناوبری فقط state محلی است: URL تغییر نمی‌کند و refresh به خانه برمی‌گردد؛ history مرورگر و لینک مستقیم در فاز ۳ اضافه می‌شوند. کارت دسته صرفاً معرفی است و هنوز فیلتر ندارد. هیچ درخواست API، سبد، ورود، پرداخت، Redux، فرم یا PWA وجود ندارد. محصولات، قیمت‌ها و توضیحات نمونه‌اند.

## مسئولیت فایل‌ها

| فایل | مسئولیت |
| --- | --- |
| `package.json` | وابستگی‌ها، نسخهٔ checkpoint و دستورهای اجرا/build/test |
| `package-lock.json` | تثبیت دقیق وابستگی‌ها برای `npm ci` |
| `.gitignore` | حذف خروجی build، وابستگی‌ها، فایل‌های محلی و نتیجهٔ تست از Git |
| `index.html` | سند فارسی RTL، عنوان، metadata و محل اتصال React |
| `vite.config.js` | پیکربندی Vite و plugin رسمی React |
| `src/main.jsx` | راه‌اندازی React، StrictMode، تم، CssBaseline و cache راست‌به‌چپ |
| `src/theme.js` | رنگ‌ها، تایپوگرافی و تنظیم مشترک componentهای MUI |
| `src/styles.css` | قواعد عمومی، focus، skip link و reduced motion |
| `src/App.jsx` | مالک state موقت صفحه و محصول انتخاب‌شده؛ انتقال داده و callback به صفحات |
| `src/layouts/StoreLayout.jsx` | Navbar، main و Footer مشترک؛ نمایش صفحه از طریق children |
| `src/components/Navbar.jsx` | برند، ناوبری دسکتاپ، state و Drawer موبایل |
| `src/components/Footer.jsx` | معرفی کوتاه، ناوبری و توضیح نمایشی بودن فروشگاه |
| `src/components/Hero.jsx` | بنر خانه و دکمهٔ رفتن به محصولات |
| `src/components/SectionTitle.jsx` | عنوان بخش، subtitle اختیاری و محل children برای action |
| `src/components/CategoryCard.jsx` | نمایش یک دسته بدون منطق فیلتر |
| `src/components/ProductCard.jsx` | تصویر، نشان اختیاری، عنوان، قیمت و رویداد انتخاب محصول |
| `src/components/ProductGrid.jsx` | چیدمان responsive با map و حالت بدون محصول |
| `src/pages/HomePage.jsx` | ترکیب Hero، دسته‌ها، محصولات منتخب و معرفی فروشگاه |
| `src/pages/ProductListPage.jsx` | نمایش تعداد و مجموعهٔ محصولات دریافتی از props |
| `src/pages/ProductDetailsPage.jsx` | نمایش مشخصات محصول انتخاب‌شده و بازگشت |
| `src/data/catalog.js` | هشت محصول و چهار دستهٔ محلی با شناسهٔ پایدار |
| `src/utils/formatPrice.js` | تبدیل مبلغ عددی به قیمت فارسی به تومان |
| `public/images/room.svg` | تصویرسازی اصلی بنر |
| `public/favicon.svg` | نشان محلی زبانهٔ مرورگر |
| `public/images/chair.svg` | تصویر محصول صندلی و دستهٔ مبلمان |
| `public/images/lamp.svg` | تصویر چراغ رومیزی و دستهٔ روشنایی |
| `public/images/vase.svg` | تصویر گلدان و دستهٔ دکور |
| `public/images/cushion.svg` | تصویر کوسن و دستهٔ پارچه |
| `public/images/table.svg` | تصویر میز |
| `public/images/mirror.svg` | تصویر آینه |
| `public/images/pendant.svg` | تصویر چراغ آویز |
| `public/images/throw.svg` | تصویر پتو |
| `playwright.config.js` | اجرای مرورگر تست و سرور موقت Vite |
| `tests/store.spec.js` | بررسی ناوبری، جزئیات، assetها، خطاهای runtime، منوی موبایل و عرض صفحه |
| `docs/ROADMAP.md` | پنج فاز، وابستگی‌ها، مرز معماری و موارد تعویق‌یافته |
| `docs/CHECKPOINTS.md` | دامنه، معیار پذیرش و روش بازسازی checkpoint |

## مفاهیم React در عمل

- **Components / JSX:** تمام فایل‌های `.jsx`.
- **Props:** محصول و callback در ProductCard و داده‌ها در pages.
- **children:** StoreLayout برای محتوای صفحه و SectionTitle برای دکمهٔ بخش.
- **array.map:** ProductGrid و نمایش دسته‌ها در HomePage.
- **conditional rendering:** نشان محصول، subtitle، حالت فهرست خالی و انتخاب صفحه.
- **local state:** صفحه و محصول در App؛ باز و بسته بودن Drawer در Navbar.

## ادامهٔ پروژه

در فاز ۲، `services/` و `hooks/` دادهٔ API را به همین مدل محصول تبدیل می‌کنند. در فاز ۳، `routes/` و Outlet جای state صفحه و children قاب را می‌گیرند. در فاز ۴، `store/` و صفحه‌های خرید و حساب کاربری افزوده می‌شوند. فاز ۵ اتصال backend نهایی، PWA و انتشار را تکمیل می‌کند. جزئیات و قابلیت‌های عمداً معوق در [نقشهٔ راه](docs/ROADMAP.md) آمده است؛ پوشه‌های فاقد استفاده از قبل ساخته نشده‌اند.

## بررسی در مرورگر

```bash
npx playwright install chromium
npm run test:ui
```

اگر Google Chrome روی سیستم نصب است، بدون دانلود مرورگر جداگانه:

```bash
PLAYWRIGHT_CHANNEL=chrome npm run test:ui
```

تست‌ها در عرض‌های ۳۲۰، ۳۹۰، ۷۶۸، ۱۰۲۴ و ۱۴۴۰ پیکسل اجرا می‌شوند. تست مرورگر نیازمند مجوز اجرای مرورگر و سرور محلی در محیط sandbox است. این تست‌ها ابزار توسعه‌اند و وارد برنامهٔ production نمی‌شوند.

مراجع راه‌اندازی: [Vite](https://vite.dev/guide/) و [نصب MUI](https://mui.com/material-ui/getting-started/installation/).
