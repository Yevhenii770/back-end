const cron = require("cron");
const https = require("node:https");
const { BACKEND_URL } = process.env;

const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get(BACKEND_URL, (res) => {
      if (res.statusCode === 200) {
        console.log("Server restarted");
      } else {
        console.error(
          `failed to restart server with status code: ${res.statusCode}`
        );
      }
    })
    .on("error", (err) => {
      console.error("Error during Restart:", err.message);
    });
});

module.exports = job;
