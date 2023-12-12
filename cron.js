const cron = require("cron");
const https = require("https");


const job = new cron.CronJob("*/14 * * * *", function () {
  https
    .get('https://back-end-2saw.onrender.com', (res) => {
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
