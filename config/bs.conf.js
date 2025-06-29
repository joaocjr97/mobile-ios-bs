import 'dotenv/config';
import { generalConf } from "./general.conf.js";

export let bsConf = {
  runner: "local",
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: ["browserstack"],
  specs: ['specs/**/*.js'],
  hostname: "hub.browserstack.com",

  capabilities: [
    {
      platformName: "iOS",
      "appium:deviceName": "iPhone XR",
      "appium:platformVersion": "15",
      "appium:automationName": "XCUITest",
      "appium:app": "bs://11df40fcc7c8fd0f5262b17d0d4bc9d3e88bd14d",
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