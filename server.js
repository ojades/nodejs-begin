const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'abs');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

app.get('/', function (req, res) {

    res.render('index.hbs', {
        title: 'Express.js Project - Home',
        currentYear: new Date().getFullYear()
    });

});

app.get('/about', function (req, res) {
    res.send('<h2>This is the about page</h2>');
});

app.get('/bad', (req, res) => {
    res.send({
    errorMessage: 'bad request'
});
});

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});