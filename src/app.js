const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    return res.render('home', { layout: false });
})

app.listen(8080, () => {
    console.log('Hello, handlebars!');
})