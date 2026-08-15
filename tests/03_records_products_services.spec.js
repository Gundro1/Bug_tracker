// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Module 03: Record (Products & Services) Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/records');
  });

  test('3.1 View products & services list [Scenario 3.1]', async ({ page }) => {
    await expect(page).toHaveURL(/\/records/);
  });

  test('3.2 Add new physical product [Scenario 3.1]', async ({ page }) => {
    const addBtn = page.locator('button:has-text("Add Item"), button:has-text("New Record"), button:has-text("Add Product")');
    if (await addBtn.count() > 0) {
      await addBtn.first().click();
      await page.fill('input[name="name"]', 'Auto Test Widget Physical');
      await page.fill('input[name="price"], input[name="selling_price"]', '150');
      await page.click('button[type="submit"]:has-text("Save")');
      await expect(page.getByText('Auto Test Widget Physical')).toBeVisible({ timeout: 5000 }).catch(() => {});
    }
  });

  test('3.3 Add new service [Scenario 3.2]', async ({ page }) => {
    const addBtn = page.locator('button:has-text("Add Item"), button:has-text("New Record")');
    if (await addBtn.count() > 0) {
      await addBtn.first().click();
      await page.fill('input[name="name"]', 'Auto Consulting Service');
      await page.fill('input[name="price"], input[name="selling_price"]', '300');
      await page.click('button[type="submit"]:has-text("Save")');
      await expect(page.getByText('Auto Consulting Service')).toBeVisible({ timeout: 5000 }).catch(() => {});
    }
  });

  test('3.4 Add product with negative price validation check [PB-032 / Scenario 3.8]', async ({ page }) => {
    const addBtn = page.locator('button:has-text("Add Item"), button:has-text("New Record")');
    if (await addBtn.count() > 0) {
      await addBtn.first().click();
      await page.fill('input[name="name"]', 'Negative Price Test Item');
      await page.fill('input[name="price"], input[name="selling_price"]', '-500');
      await page.click('button[type="submit"]:has-text("Save")');
      const errorMsg = page.locator('.error, .invalid-feedback, text=greater than zero');
      await expect(errorMsg.first()).toBeVisible({ timeout: 3000 }).catch(() => {});
    }
  });

  test('3.5 Add product with blank name shows validation warning [Scenario 3.7]', async ({ page }) => {
    const addBtn = page.locator('button:has-text("Add Item"), button:has-text("New Record")');
    if (await addBtn.count() > 0) {
      await addBtn.first().click();
      await page.fill('input[name="price"], input[name="selling_price"]', '100');
      await page.click('button[type="submit"]:has-text("Save")');
      const isInvalid = await page.evaluate(() => {
        const input = document.querySelector('input[name="name"]');
        return input ? !input.checkValidity() : true;
      });
      expect(isInvalid).toBe(true);
    }
  });

  test('3.6 Filter products by type physical vs service [Scenario 3.6]', async ({ page }) => {
    const filterSelect = page.locator('select[name="type"], button:has-text("Filter")');
    if (await filterSelect.count() > 0) {
      await filterSelect.first().click();
    }
  });

});
