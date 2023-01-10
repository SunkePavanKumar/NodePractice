const express = require("express");
const app = express();
const dataRoute = require("./route.js");

const port = 9000;
app.use(express.json());
app.use("/", dataRoute);

// const doc = new PDFDocument();
// doc.pipe(fs.createWriteStream("example.pdf"));
// doc.fontSize(27).text("This is sample text for test", 100, 100);
app.listen(port, () => {
  console.log(`listening to the port ${port}`);
});
module.exports = app;
