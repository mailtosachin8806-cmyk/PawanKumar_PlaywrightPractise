// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({
  testDir: './tests',
  fullyParallel: false,
  workers: process.env.CI ? 1 : undefined,
 // retries: process.env.CI ? 2: 0,
  retries:2,
  timeout: 40*1000,
   expect : {
    timeout: 40*1000,
   },
  
  reporter : 'html',
  //reporter : [['json',{ outputFile: 'playwright-report/results.json'}]], //Generate JSON report
  //reporter : [['junit',{ outputFile: 'playwright-report/results.xml'}]], //Generate junit report in xml format
  
 /* reporter : [['List'],
              ['html'],
              ['json',{ outputFile: 'playwright-report/results.json'}],
              ['junit',{ outputFile: 'playwright-report/results.xml'}]             
            ],*/
  use: {
    
    browserName: 'chromium',
    channel: 'chrome',   // 👉 THIS makes it use Google Chrome
    headless: false,      // optional: see Chrome UI
    viewport: null,    //Maximise the browser
    launchOptions: {
      args: ['--start-maximized'] // ✅ THIS is required
    },
    trace : 'retain-on-failure',
    screenshot : 'only-on-failure',
    video: 'retain-on-failure',
  },

});

module.exports = config
