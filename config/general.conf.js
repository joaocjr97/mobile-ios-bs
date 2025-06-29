import { specsConf } from "./specs.conf.js";

export let generalConf = {
  maxInstances: 1,
  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  ...specsConf,
};