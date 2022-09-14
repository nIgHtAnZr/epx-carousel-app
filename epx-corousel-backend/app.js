const express = require('express');
const app = express();
const { slideData } = require('./src/model/slides.json');
const cors = require('cors');
const port = process.env.PORT || 3600;

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}));

app.get('/api/carousel', (req, res) => {
  const { slides } = req.query;

    if (isNaN(slides) || slides < 1 || slides > 10) {
      return res.status(400).json({
        code: -1,
        error: 'Invalid slides count'
      });
    }

    res.send(slideData.slice(0, slides));
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
})