# Checkpointهای پروژه

## `phase-1-ui-foundation` — نسخهٔ 0.1.0

این checkpoint یک snapshot مستقل در تاریخچهٔ Git است؛ پیاده‌سازی فازهای بعد در همان codebase ادامه می‌یابد. فایل‌های این فاز همگی جدید هستند، چون پوشهٔ اولیه خالی بود. فهرست تک‌تک فایل‌ها و مسئولیت آن‌ها در بخش «مسئولیت فایل‌ها»ی README آمده است.

### دامنهٔ تکمیل‌شده

- [x] React + Vite و MUI
- [x] تم فارسی و RTL با Emotion/Stylis
- [x] Navbar، Footer، Hero، SectionTitle، CategoryCard، ProductCard و ProductGrid
- [x] Home، Product List و Product Details UI
- [x] ۸ محصول و ۴ دستهٔ محلی؛ تصاویر SVG محلی
- [x] props، children، map، JSX، conditional rendering و local state
- [x] منوی موبایل قابل باز و بسته شدن و ناوبری محلی
- [x] چیدمان mobile/tablet/desktop، focus قابل دیدن، skip link و reduced motion
- [x] مستندات معماری و نقشهٔ هر پنج فاز
- [x] build تولیدی و تست مرورگر موفق
- [x] تعویق کامل قابلیت‌های فازهای ۲ تا ۵

### شواهد بررسی

- `npm run build`: موفق؛ خروجی در `dist/`.
- `PLAYWRIGHT_CHANNEL=chrome npm run test:ui`: هر ۲ تست موفق.
- تست اول: صفحهٔ خانه، تعداد محصولات منتخب/فهرست، انتخاب محصول، قیمت و جزئیات، بازگشت، بارگذاری تصاویر و نبود console error و page error در مسیر بررسی‌شده.
- تست دوم: منوی موبایل، بستن با Escape و انتخاب مقصد؛ نبود overflow افقی در Home/List/Details در عرض‌های ۳۲۰، ۳۹۰، ۷۶۸، ۱۰۲۴ و ۱۴۴۰ پیکسل.
- مرورگر بررسی‌شده: Chrome محلی؛ تست مستقل Safari/Firefox و دستگاه فیزیکی انجام نشده است.

### بازسازی checkpoint

ابتدا تغییرات جاری خود را commit یا stash کنید. برای بازدید نسخهٔ ثبت‌شده:

```bash
git switch --detach phase-1-ui-foundation
npm ci
npm run dev
```

برای ادامهٔ توسعه به شاخهٔ اصلی برگردید:

```bash
git switch main
```

فازهای بعد نیز با commit و tag مشخص ثبت می‌شوند؛ نیازی به کپی پروژه یا پوشهٔ جدا نیست. `dist/`، `node_modules/` و خروجی تست‌ها به Git اضافه نمی‌شوند.

### موارد عمداً خارج از این checkpoint

API، useEffect برای fetch، search/filter، React Router، URL params، 404، Redux، cart، authentication، profile، Formik/Yup، checkout، backend واقعی، PWA، manifest، service worker و deployment. category card فعلاً نمایشی است. state صفحه پس از refresh حفظ نمی‌شود.
