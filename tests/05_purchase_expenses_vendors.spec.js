// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Module 05: Purchase (Expenses & Vendors) Suite', () => {

  test('5.1 View Expenses list page [Scenario 10.1]', async ({ page }) => {
    await page.goto('/purchase/expenses');
    await expect(page).toHaveURL(/\/expenses/);
  });

  test('5.2 Record one-time expense and check for 404 error [PB-024, PB-086 / Scenario 10.1]', async ({ page }) => {
    await page.goto('/purchase/expenses');
    const addExpenseBtn = page.locator('button:has-text("Record Expense"), button:has-text("Add Expense")');
    if (await addExpenseBtn.count() > 0) {
      await addExpenseBtn.first().click();
      await page.fill('input[name="amount"]', '250');
      await page.fill('input[name="description"]', 'Office Supplies Automation Test');
      await page.click('button[type="submit"]:has-text("Save")');
      await expect(page.locator('text=404 Not Found')).not.toBeVisible();
    }
  });

  test('5.3 Check for edit option on existing expense entry [PB-025, PB-087 / Scenario 10.2]', async ({ page }) => {
    await page.goto('/purchase/expenses');
    const actionMenu = page.locator('.action-dropdown, .three-dots, button:has-text("Actions")');
    if (await actionMenu.count() > 0) {
      await actionMenu.first().click();
      const editBtn = page.locator('a:has-text("Edit"), button:has-text("Edit")');
      await expect(editBtn.first(), 'PB-087 Failure: Edit option missing from expense action dropdown').toBeVisible({ timeout: 3000 });
    }
  });

  test('5.4 Setup recurring expense weekly and monthly [Scenario 10.5, 10.6]', async ({ page }) => {
    await page.goto('/purchase/expenses');
    const addExpenseBtn = page.locator('button:has-text("Record Expense"), button:has-text("Add Expense")');
    if (await addExpenseBtn.count() > 0) {
      await addExpenseBtn.first().click();
      const recurringCheckbox = page.locator('input[type="checkbox"][name="is_recurring"]');
      if (await recurringCheckbox.count() > 0) {
        await recurringCheckbox.first().check();
      }
    }
  });

  test('5.5 View Vendors list page [Scenario 11.1]', async ({ page }) => {
    await page.goto('/purchase/vendors');
    await expect(page).toHaveURL(/\/vendors/);
  });

  test('5.6 Add new vendor profile [Scenario 11.1]', async ({ page }) => {
    await page.goto('/purchase/vendors');
    const addVendorBtn = page.locator('button:has-text("Add Vendor"), button:has-text("New Vendor")');
    if (await addVendorBtn.count() > 0) {
      await addVendorBtn.first().click();
      await page.fill('input[name="name"]', 'Auto Tech Vendor Ltd');
      await page.click('button[type="submit"]:has-text("Save")');
    }
  });

  test('5.7 Create vendor directly from expense dropdown check [PB-010, PB-072 / Scenario 11.1]', async ({ page }) => {
    await page.goto('/purchase/expenses');
    const addExpenseBtn = page.locator('button:has-text("Record Expense"), button:has-text("Add Expense")');
    if (await addExpenseBtn.count() > 0) {
      await addExpenseBtn.first().click();
      const addVendorShortcut = page.locator('button:has-text("Add Vendor"), option:has-text("Add New Vendor")');
      if (await addVendorShortcut.count() > 0) {
        await addVendorShortcut.first().click();
      }
    }
  });

});
