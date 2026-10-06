# نقشهٔ راه فروشگاه میترا

یک codebase واحد؛ هر فاز ادامهٔ فاز قبل است. هیچ پوشه یا نسخهٔ جداگانه‌ای برای فازها ساخته نمی‌شود. checkpointها با Git tag نگهداری می‌شوند.

## وابستگی‌ها

`Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5`

## فاز ۱ — UI Foundation

- React + Vite، MUI، تم فارسی راست‌به‌چپ و طراحی responsive.
- Navbar، Footer، Hero، SectionTitle با children، CategoryCard، ProductCard و ProductGrid.
- Home، فهرست محصولات و نمایش جزئیات محصول با دادهٔ محلی.
- props، JSX، map، conditional rendering و state محلی برای منوی موبایل و نمایش صفحه.
- تعویق عمدی: API، useEffect برای دریافت داده، جست‌وجو و فیلتر، Router و URL، Redux، سبد، احراز هویت، فرم‌ها، پرداخت و PWA.
- معیار اتمام: build موفق، نمایش محصولات و جزئیات و ناوبری محلی قابل استفاده.
- checkpoint: `phase-1-ui-foundation`؛ دستور بازسازی: `npm ci && npm run build`.

## فاز ۲ — دریافت و کشف محصول

- وابسته به کامپوننت‌ها و قرارداد دادهٔ فاز ۱.
- افزودن Fetch یا Axios در `src/services/products.js` و hook دریافت محصول در `src/hooks/useProducts.js`.
- useEffect، لغو درخواست هنگام unmount، loading، error و empty state مرتبط با درخواست.
- جست‌وجو و فیلتر؛ تبدیل پاسخ API به مدل محصول مورد استفادهٔ UI.
- تعویق عمدی: URL routing، Redux، سبد، حساب کاربری، checkout، backend نهایی و PWA.

## فاز ۳ — مسیریابی

- وابسته به صفحه‌های مستقل فاز ۱ و دادهٔ فاز ۲.
- نصب React Router DOM، تعریف routeها در `src/routes/`، nested routes و layout routing.
- مسیرهای Home، Products، `/products/:id` و 404؛ مدیریت شناسهٔ محصول نامعتبر.
- جایگزینی state نمایشی App با Router، callbackهای ناوبری با Link/useNavigate و children layout با Outlet.
- تعویق عمدی: Redux، Cart، Login/Register/Profile، Formik/Yup، Checkout و PWA.

## فاز ۴ — وضعیت و جریان خرید

- وابسته به API فاز ۲ و routeهای فاز ۳.
- Redux Toolkit در `src/store/`؛ cart slice و وضعیت session.
- Cart، Login، Register، Profile و Checkout؛ Formik و Yup برای اعتبارسنجی.
- routeهای مرتبط و محافظت از صفحه‌های مورد نیاز؛ اتصال به API مناسب با توجه به امکانات آن.
- خرید و پرداخت فقط در حد محیط آزمایشی تا backend نهایی آماده شود.
- تعویق عمدی: Strapi/backend تولید، service worker، manifest، نهایی‌سازی خطاها و انتشار.

## فاز ۵ — آماده‌سازی نهایی

- وابسته به تکمیل چهار فاز قبلی.
- اتصال backend واقعی/Strapi از طریق services، تنظیم env و تکمیل مدیریت خطاها.
- PWA، manifest، service worker، سیاست cache و UX آفلاین متناسب با فروشگاه.
- polish، دسترس‌پذیری، عملکرد، بررسی responsive و build آمادهٔ deployment.
- مستندسازی و انتشار؛ بدون افزودن دامنهٔ خارج از assignment.

## مرزهای معماری

- `data/`: فقط mockهای فاز ۱؛ کامپوننت‌های محصول مستقیماً به منبع داده وابسته نیستند.
- `components/`: قطعات نمایشی با props؛ بدون درخواست شبکه و وضعیت تجاری.
- `pages/`: ترکیب قطعات و دریافت داده/رویدادها از بیرون.
- `layouts/`: قاب مشترک شامل Navbar، main و Footer.
- `theme.js`: رنگ، تایپوگرافی و قواعد مشترک MUI.
- `App.jsx`: فعلاً مالک state نمایشی؛ بعداً محل اتصال routeها و providerها.
- `services/`، `hooks/`، `routes/` و `store/` دقیقاً در فاز مربوط ساخته می‌شوند؛ اکنون abstraction یا پوشهٔ خالی ندارند.

مدل محصول: `id` پایدار، `title`، `price` عددی به تومان، `image`، `categoryId`، `description`، `material`، `dimensions` و `featured`. مدل category: `id`، `title`، `description` و `image`. آداپتور API در فاز ۲ این قرارداد را حفظ می‌کند.
