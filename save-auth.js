const { chromium } = require('playwright');
const fs = require('fs');
const readline = require('readline');

(async () => {
  console.log('🚀 Launching browser for one-time login setup...');
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://test.primbooks.com/login');

  console.log('\n=====================================================================');
  console.log('👉 INSTRUCTIONS FOR AZEEZ:');
  console.log('1. In the opened Chrome browser, type your login email and password.');
  console.log('2. When prompted for Email Verification / OTP, enter the code sent to your inbox.');
  console.log('3. Once you reach the PrimBooks Dashboard page, press ENTER in this terminal window.');
  console.log('=====================================================================\n');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await new Promise(resolve => rl.question('Press ENTER here after you reach the Dashboard: ', resolve));
  rl.close();

  await context.storageState({ path: 'auth.json' });
  console.log('\n✅ SUCCESS: Logged-in session saved to auth.json!');
  console.log('All 165+ Playwright tests will now use this saved session automatically without asking for login/OTP again.\n');
  await browser.close();
})();
