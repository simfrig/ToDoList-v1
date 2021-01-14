const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const ejs = require('ejs');
const port = 3000;
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));

let items = [];



app.get('/', function (req, res) {
  
  let today = new Date();
  let options = {
  weekday: 'short',
  day: 'numeric',
  month: 'long',
  year: 'numeric'
  };

  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {kindOfDay: day, newListItems: items});



});

app.post('/', (req, res)=>{
  let item = req.body.newItem;

  items.push(item);

  res.redirect('/');
});



app.listen(port, () => {
  console.log("Server is running on port 3000");
});