const ExcelJS = require('exceljs');
const path = require('path');

// Create a new workbook and add a worksheet
const workbook = new ExcelJS.Workbook();
const worksheet = workbook.addWorksheet('Sheet 1');

// Add data to the worksheet
worksheet.columns = [
  { header: 'Name', key: 'name', width: 20 },
  { header: 'Age', key: 'age', width: 10 },
  { header: 'City', key: 'city', width: 15 },
];

const data = [
  { name: 'John Doe', age: 30, city: 'New York' },
  { name: 'Jane Doe', age: 25, city: 'Los Angeles' },
  { name: 'Bob Smith', age: 35, city: 'Chicago' },
];

worksheet.addRows(data);

// Save the workbook to a file
const filePath = path.join(__dirname, './asset/excel/output.xlsx');

workbook.xlsx.writeFile(filePath)
  .then(() => {
    console.log(`Excel file saved to: ${filePath}`);
  })
  .catch((error) => {
    console.error('Error saving Excel file:', error);
  });
