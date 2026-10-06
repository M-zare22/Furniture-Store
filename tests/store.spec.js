import { test, expect } from '@playwright/test';

test('home, catalog and product details work without runtime errors', async ({ page }) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('سلیقهٔ شما');
  await expect(page.getByRole('button', { name: /^مشاهدهٔ / })).toHaveCount(4);
  await page.getByRole('button', { name: 'کشف محصولات' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('همهٔ محصولات');
  await expect(page.getByRole('button', { name: /^مشاهدهٔ / })).toHaveCount(8);
  await page.getByRole('button', { name: 'مشاهدهٔ چراغ رومیزی هاله' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('چراغ رومیزی هاله');
  await expect(page.getByText('۱٬۶۸۰٬۰۰۰ تومان', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'بازگشت به محصولات' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('همهٔ محصولات');
  await page.getByRole('button', { name: 'میترا، صفحهٔ خانه' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('سلیقهٔ شما');
  // Scroll through lazy images before checking that every local asset loaded.
  for (const image of await page.locator('img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect(image).toHaveJSProperty('complete', true);
    expect(await image.evaluate((element) => element.naturalWidth)).toBeGreaterThan(0);
  }
  expect(errors).toEqual([]);
});

test('mobile drawer and layouts fit mobile, tablet and desktop', async ({ page }, testInfo) => {
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    if (width === 390 || width === 1440) {
      await page.screenshot({ path: testInfo.outputPath(`home-${width}.png`), fullPage: true });
    }
    if (width < 600) {
      await page.getByRole('button', { name: 'باز کردن منو' }).click();
      await expect(page.getByRole('navigation', { name: 'منوی موبایل' })).toBeVisible();
      await page.keyboard.press('Escape');
      await expect(page.getByRole('navigation', { name: 'منوی موبایل' })).toBeHidden();
      await page.getByRole('button', { name: 'باز کردن منو' }).click();
      await page.getByRole('navigation', { name: 'منوی موبایل' }).getByRole('button', { name: 'همهٔ محصولات' }).click();
    } else {
      await page.getByRole('navigation', { name: 'منوی اصلی' }).getByRole('button', { name: 'همهٔ محصولات' }).click();
    }
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('همهٔ محصولات');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.getByRole('button', { name: 'مشاهدهٔ صندلی راحتی آوید' }).click();
    await expect(page.getByRole('heading', { level: 1 })).toHaveText('صندلی راحتی آوید');
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  }
});
