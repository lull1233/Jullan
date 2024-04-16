const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});
app.get('/index.html', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // send HTML file on GET request
});
app.get('/About.html', (req, res) => {
    res.sendFile(__dirname + '/About.html'); // send HTML file on GET request
});
app.get('/Contact.html', (req, res) => {
    res.sendFile(__dirname + '/Contact.html'); // send HTML file on GET request
});
app.get('/Home.html', (req, res) => {
    res.sendFile(__dirname + '/Home.html'); // send HTML file on GET request
});

app.post('/submit-form', (req, res) => {
    const username = req.body.username; // access form data
    // Add validation logic here
    res.send(`Username is $jreyes49`);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});