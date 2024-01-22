const { fakerTH } = require('@faker-js/faker');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const userId = fakerTH.string.numeric(13);
const fullName = fakerTH.person.fullName();
const email = fakerTH.internet.email();
const personalEmail = fakerTH.internet.email();
const DepartMent = fakerTH.person.jobType();
const course = fakerTH.person.jobTitle;
const credit = 3;

const docId = fakerTH.string.uuid();

function pdfDemo1() {
    // Create a PDF document
    const doc = new PDFDocument({size: 'A4'});

    // Pipe the PDF content to a writable stream (e.g., a file)
    const stream = fs.createWriteStream(`./asset/PDF/demoPDF-${docId}.pdf`);
    doc.font('./asset/font/IBMPlexSansThai-Regular.ttf')
        .fontSize(16)
        .text('เทสภาษาไทย');
    doc.font('./asset/font/IBMPlexSansThai-Bold.ttf')
        .fontSize(16)
        .text(`${fullName}`);

    doc.pipe(stream);

    // End the document
    doc.end();

    // Handle stream events (optional)
    stream.on('finish', () => {
    console.log(`PDF created successfully. -> demoPDF-${docId}.pdf`);
    });

    stream.on('error', (err) => {
    console.error('Error creating PDF:', err);
    });
}


module.exports = {pdfDemo1};