// const http = require('http');

// const hostname = '127.0.0.1';
// const port = 3000; 

// const express = require ('express');
// const { appendFile } = require('fs');

// app.use(express.static('public'));

// app.get('/', (req, res) => (
//     const htmlData = <div>
// <h1> Music site </h1>
//     </div>
// ));

// app.get('/')

// const server = http.createserver((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World');
// });

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;


const express = require ('express');
const { readdirSync } = require('fs');
// const { appendFile } = require('fs');
// const db = require('./db');

const app = express();
const server = http.createServer(app);

const db = require('./db');

app.use(express.static('public'));

app.get('/', (req, res) => {
    const htmlData= `<div>
                        <h1>J Cole Discography</h1>
                        <h2>This Website is about my Favorite Artist!</h2>
                        <img src="/Images/j-cole-image.webp" style=" display: block; margin-bottom:20px; width: 600px" />
                        <a href="/albums">Check out J Coles Albums!</a>
                        </div>`;
    res.send(htmlData);
});

app.get('/albums', (req, res) => {
    const htmlData= `<div>
                        <h1>J Cole Discography</h1>
                        <a href ="http://127.0.0.1:3000">Return Home</a>
                        <ul>
                            <li>
                            <a href="/albums/0">Sideline Story</li>
                            <li>
                            <a href="/albums/1">Born Sinner</li>
                            <li>
                            <a href="/albums/2">Forest Hills Drive</li>
                            <li>
                            <a href="/albums/3">4 Your Eyez Only</li>
                            <li>
                            <a href="/albums/4">KOD</li>
                            <li>
                            <a href="/albums/5">The Off Season</li>
                        </div>`;
res.send(htmlData);
});

app.get('/albums/:id', (req, res) => {
    const { id } = req.params;
    const name = db[id].name;
    const publishDate = db[id].publishDate;
    const description = db[id].description;
    const imgURL = db[id].imgURL;
    const songTitles = db[id].songTitles;
    let test = "<p>"+songTitles.join('</p><p>')+"</p>"





    const htmlData = `<div style>
                        <h1>All About ${name}</h1>
                        <img src= ${imgURL} style=" display: block; margin-bottom:20px; width: 600px" />
                        <h1> Publish; ${publishDate}</h1>
                        <p> ${description}</p>
                        <a href="http://127.0.0.1:3000/albums"> Return Home </a>
                        <h3> Song Names ${test}</h3>
                        </div>`;
    res.send(htmlData);
});


server.listen(port, hostname, () => {
    console.log(`Server runnning at http://${hostname}:${port}/`);
})




