const express = require('express');
// const { data } = require('./month_expenses_2016.json');

const app = express(); //allows for HTML rendering

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('interactiveBarGraph');
});

app.listen(3000, () => {
  console.log('The application is running on localhost:3000')
});
