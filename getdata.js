const pdfkit = require("pdfkit");
const fs = require("fs");
const doc = new pdfkit();
exports.getdata = async (req, res) => {
  let data = fs.readFileSync("./temp.json", "utf-8");
  doc.pipe(fs.createWriteStream("output.pdf"));
  doc.addPage().fontSize(25).text(data, 100, 100);
  data = JSON.parse(data);

  doc.end();
  try {
    res.json({
      message: "Success",
      data: data,
    });
  } catch (err) {
    res.json({
      message: "fail",
      Error: err,
    });
  }
};
