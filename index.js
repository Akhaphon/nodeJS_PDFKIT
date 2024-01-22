const { fakerTH } = require('@faker-js/faker');
const pdfTemplete = require('./pdf_template');
const express = require('express');
const PORT = 8080;
const app = express();
// or, if desiring a different locale
// const { fakerDE: faker } = require('@faker-js/faker');

app.get('/', (req, res) => {
    res.send("index page");
});

const helloRoute = require('./route/hello');
app.use(helloRoute);

// pdfTemplete.pdfDemo1();

app.listen(PORT, () => {
    console.log(`Application listening on port ${PORT} - http://localhost:${PORT}/`);
});