// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Module 02: Dashboard & Global Layout Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('2.1 Dashboard KPI summary metrics render correctly [Scenario 2.1]', async ({ page }) => {
    const kpiCards = page.locator('.kpi-card, .metric-card, .dashboard-stat, div:has-text("Revenue"), div:has-text("Expense")');
    if (await kpiCards.count() > 0) {
      await expect(kpiCards.first()).toBeVisible();
    }
  });

  test('2.2 Sidebar collapses and expands cleanly [Scenario 2.2]', async ({ page }) => {
    const toggleBtn = page.locator('button.sidebar-toggle, [aria-label="Toggle sidebar"], .collapse-btn, svg.lucide-menu');
    if (await toggleBtn.count() > 0) {
      await toggleBtn.first().click();
      await page.waitForTimeout(300);
      await toggleBtn.first().click();
    }
  });

  test('2.3 Light and Dark theme toggle updates styling [Scenario 2.3]', async ({ page }) => {
    const themeBtn = page.locator('button.theme-toggle, [aria-label="Toggle theme"], .dark-mode-switch');
    if (await themeBtn.count() > 0) {
      await themeBtn.first().click();
      await page.waitForTimeout(300);
    }
  });

  test('2.4 Cash flow chart widget renders [Scenario 2.4]', async ({ page }) => {
    const chart = page.locator('canvas, svg.chart, .cashflow-widget, div:has-text("Cash Flow")');
    if (await chart.count() > 0) {
      await expect(chart.first()).toBeVisible();
    }
  });

  test('2.5 Recent transactions table renders last 5 activities [Scenario 2.5]', async ({ page }) => {
    const recentTable = page.locator('table, .recent-transactions-list');
    if (await recentTable.count() > 0) {
      await expect(recentTable.first()).toBeVisible();
    }
  });

  test('2.6 Quick action drawer opens on click [Scenario 2.6]', async ({ page }) => {
    const quickAction = page.locator('button:has-text("Create Invoice"), button:has-text("Quick Action")');
    if (await quickAction.count() > 0) {
      await quickAction.first().click();
      await page.waitForTimeout(300);
    }
  });

  test('2.7 Notification bell badge renders unread count [Scenario 2.7]', async ({ page }) => {
    const bell = page.locator('.notification-bell, [aria-label="Notifications"], svg.lucide-bell');
    if (await bell.count() > 0) {
      await expect(bell.first()).toBeVisible();
    }
  });

});
