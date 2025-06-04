const express = require('express');
const app = express();
const path = require('path');
const journeyData = require('./data/journey.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', { journey: journeyData });
});

app.get('/champions', (req, res) => {
  const rcb2024 = journeyData.find(j => j.year === 2024);
  res.render('champions', { victory: rcb2024 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`RCB Tribute app running on http://localhost:${PORT}`);
});