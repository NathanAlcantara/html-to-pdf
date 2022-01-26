const fs = require('fs')
const pdf = require('html-pdf')

const html = fs.readFileSync('index.html').toString()

const options = {
    type: 'pdf',
    format: 'A4',
    orientation: 'landscape'
}

pdf.create(html, options).toFile("./index.pdf", (err, res) => {
    console.log(res.filename);
});