const express = require('express');
const exporessLayouts = require('express-ejs-layouts');
const path = require('path');
const cors = require('cors');
const router = require('./routes');

const port = 3000;
const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view options', {
  // layout: path.join(__dirname, 'views/index.ejs'),
});
app.set('view engine', 'ejs');

app.use(exporessLayouts);
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.json({ extended: false }));
app.use(cors({
  origin: '*',
}));

app.use(router);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});