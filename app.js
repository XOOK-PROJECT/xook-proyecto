// imports
const express = require('express');
const app = express();
const port = 3000;

//static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));

//Set views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
});
app.get('/login', (req, res) => {
    res.render('login')
});
app.get('/home', (req, res) => {
    res.render('home')
});
app.get('/chats', (req, res) => {
    res.render('chats')
});
app.get('/classes', (req, res) => {
    res.render('classes')
});
app.get('/payments', (req, res) => {
    res.render('payments')
});

//listen on port
app.listen(port, () => console.info(`Listening on port ${port}`));
