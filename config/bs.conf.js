import 'dotenv/config';
import { generalConf } from "./general.conf.js";

export let bsConf = {
  runner: "local",
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: ["browserstack"],
  specs: ['./test/specs/**/*js'],
  hostname: "hub.browserstack.com",

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone XR",
      "appium:platformVersion": "15",
      "appium:automationName": "XCUITest",
      "appium:app": "bs://d58e8d68794dee5a993fe11cb4788e0124241930",
    },
  ],
  commonCapabilities: {
    "bstack:options": {
      projectName: "BrowserStack EBAC",
      buildName: "browserstack build",
      sessionName: "BStack test IOS",
      //debug: true,
      // networkLogs: true,
    },
  },
  ...generalConf,
};