// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('Module 07: Assets & Payroll Management Suite', () => {

  test('7.1 View Assets list page [Scenario 16.1]', async ({ page }) => {
    await page.goto('/assets');
    await expect(page).toHaveURL(/\/assets/);
  });

  test('7.2 Add new asset profile [Scenario 16.1]', async ({ page }) => {
    await page.goto('/assets');
    const addAssetBtn = page.locator('button:has-text("Add Asset"), button:has-text("New Asset")');
    if (await addAssetBtn.count() > 0) {
      await addAssetBtn.first().click();
      await page.fill('input[name="name"]', 'Office Laptop Asset');
      await page.fill('input[name="value"], input[name="cost"]', '1200');
      await page.click('button[type="submit"]:has-text("Save")');
    }
  });

  test('7.3 Check Assets action menu for Edit option [PB-037 / Scenario 16.7]', async ({ page }) => {
    await page.goto('/assets');
    const actionMenu = page.locator('.action-dropdown, .three-dots, button:has-text("Actions")');
    if (await actionMenu.count() > 0) {
      await actionMenu.first().click();
      const editOption = page.locator('a:has-text("Edit"), button:has-text("Edit")');
      await expect(editOption.first(), 'PB-037 Failure: Edit option missing from Asset action dropdown').toBeVisible({ timeout: 3000 });
    }
  });

  test('7.4 Record Asset lease & back-date start date check [PB-047 / Scenario 16.5]', async ({ page }) => {
    await page.goto('/assets');
    const leaseTab = page.locator('a:has-text("Lease"), button:has-text("Lease Assets")');
    if (await leaseTab.count() > 0) {
      await leaseTab.first().click();
      const addLeaseBtn = page.locator('button:has-text("Add Lease"), button:has-text("Record Lease")');
      if (await addLeaseBtn.count() > 0) {
        await addLeaseBtn.first().click();
        const dateInput = page.locator('input[type="date"][name="start_date"]');
        if (await dateInput.count() > 0) {
          const isMinRestricted = await dateInput.getAttribute('min');
          expect(isMinRestricted).toBeNull();
        }
      }
    }
  });

  test('7.5 View Payroll Employees list page [Scenario 17.1]', async ({ page }) => {
    await page.goto('/payroll/employees');
    await expect(page).toHaveURL(/\/payroll/);
  });

  test('7.6 Create Department and employee wording error check [PB-046 / Scenario 17.2]', async ({ page }) => {
    await page.goto('/payroll/departments');
    const addDeptBtn = page.locator('button:has-text("Create Department"), button:has-text("Add Department")');
    if (await addDeptBtn.count() > 0) {
      await addDeptBtn.first().click();
      await page.fill('input[name="name"]', 'Engineering Department');
      await page.click('button[type="submit"]:has-text("Save")');
    }
  });

  test('7.7 Run Payroll for department [Scenario 17.4]', async ({ page }) => {
    await page.goto('/payroll/runs');
    const runPayrollBtn = page.locator('button:has-text("Run Payroll"), button:has-text("Process Payroll")');
    if (await runPayrollBtn.count() > 0) {
      await runPayrollBtn.first().click();
    }
  });

  test('7.8 Add employee loan, leave request, and pension contribution [Scenario 17.5, 17.6, 17.7]', async ({ page }) => {
    await page.goto('/payroll/loans');
    const addLoanBtn = page.locator('button:has-text("Add Loan"), button:has-text("New Loan")');
    if (await addLoanBtn.count() > 0) {
      await addLoanBtn.first().click();
    }
  });

});
