const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const job = require("./cron");
job.start();

const productsRouter = require("./routes/api/products");
const authRouter = require("./routes/api/auth");
const contactsRouter = require("./routes/api/contacts");

dotenv.config();
const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/products", productsRouter);
app.use("/api/auth", authRouter);
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My first server</title></head>");
  res.write("<body><h1>Hello from my Node JS server</h1></body>");
  res.write("</html>");
  res.end();
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
