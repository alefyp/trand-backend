const express = require('express');
const cors = require('cors');

const config = require('./config/dev');
const connect = require('./utils/db');
const errorHandler = require('./middleware/error');
const quoteRouter = require('./routes/quoteRouter');

const pkg = require('./package.json');
const { port, dbUrl } = config;

const app = express();
app.set('config');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/api', (req, res) => res.json({ name: pkg.name, version: pkg.version }));
app.use('/api/quote', quoteRouter);
app.all('*', (req, resp, nextAll) => nextAll(404));


/** connect function */
const start = async () => {
  try {
    await connect(dbUrl)
    app.use(errorHandler)
    app.listen(port, () => {
      console.log(`DB Connected, API Listening on http://localhost:${port}/api`)
    })
  } catch (e) {
    console.error(e)
  }
}

/** init */
start();





