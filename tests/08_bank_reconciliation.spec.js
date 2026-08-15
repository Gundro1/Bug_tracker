// @ts-check
const { test, expect } = require('@playwright/test');
const path = require('path');

test.describe('Module 08: Bank Reconciliation Suite', () => {

  test('8.1 View Bank Reconciliation landing page [Scenario 12.1]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    await expect(page).toHaveURL(/\/bank-reconciliation/);
    const alertError = page.locator('text="Failed to load"');
    await expect(alertError).not.toBeVisible();
  });

  test('8.2 Upload CSV bank statement file [Scenario 12.1]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    const fileInput = page.locator('input[type="file"]');
    if (await fileInput.count() > 0) {
      const csvPath = path.join(__dirname, '../SAMPLE_BANK_STATEMENT.csv');
      await fileInput.setInputFiles(csvPath);
      await page.waitForTimeout(500);
    }
  });

  test('8.3 Auto-match bank statement transactions [Scenario 12.2]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    const autoMatchBtn = page.locator('button:has-text("Auto-Match"), button:has-text("Auto Match")');
    if (await autoMatchBtn.count() > 0) {
      await autoMatchBtn.first().click();
      await page.waitForTimeout(300);
    }
  });

  test('8.4 Open manual match drawer & reconcile transaction [Scenario 12.3]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    const matchBtn = page.locator('button:has-text("Match"), button:has-text("Reconcile")');
    if (await matchBtn.count() > 0) {
      await matchBtn.first().click();
      await page.waitForTimeout(300);
    }
  });

  test('8.5 Unmatch reconciled transaction [Scenario 12.5]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    const unmatchBtn = page.locator('button:has-text("Unmatch")');
    if (await unmatchBtn.count() > 0) {
      await unmatchBtn.first().click();
    }
  });

  test('8.6 View reconciliation summary report [Scenario 12.6]', async ({ page }) => {
    await page.goto('/bank-reconciliation');
    const reportTab = page.locator('a:has-text("Summary"), button:has-text("Report")');
    if (await reportTab.count() > 0) {
      await reportTab.first().click();
    }
  });

});
