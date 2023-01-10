const fs = require("fs");
const xlsx = require("xlsx");
const dat = require("./temp.json");
const data = require("./test.json");
//Reading the json file and parse it
//const data = JSON.parse(fs.readFileSync("./test.json", "utf-8"));
const data1 = [
  { name: "Pavan Kumar Sunke", age: 21, Gender: "Male" },
  { name: "Sai", age: 21, Gender: "Male" },
];
/**This is the function that convert the json to excel */
const jsonToSheet = (data) => {
  // Create the  new Workbook
  let workbook = xlsx.utils.book_new();

  // create  the new Worksheet
  let newws = xlsx.utils.json_to_sheet(data);

  //Append the work sheet
  xlsx.utils.book_append_sheet(workbook, newws, "new data");
  console.log(workbook);
  //write data to the excel
  xlsx.writeFile(workbook, "profile.xlsx");
};
jsonToSheet(data);

/**This is the function that convert the excel to JSON */

const excelToJSON = () => {
  // Read the excel file
  const workbook = xlsx.readFile("./profile.xlsx");
  workbook.SheetNames()
};
excelToJSON();
