const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Express on Vercel'));

app.listen(3000, () => console.log('Server ready on port 3000'));

// import files and packages up here
const morgan = require('morgan')
const data = require('../server/data.json')

// create your express server below

// add your routes and middleware below
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/data', (req, res) => {
    res.status(200).json(data);
});

// finally export the express application
module.exports = app;
