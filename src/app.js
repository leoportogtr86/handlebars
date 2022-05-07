const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    return res.render('home', { var1: 'Variável 1' });
})

app.get('/2', (req, res) => {
    return res.render('page2');
})

app.listen(8080, () => {
    console.log('Hello, handlebars!');
})