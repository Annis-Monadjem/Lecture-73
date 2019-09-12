const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const officeRouter = require('./routes/office');
const usersRouter = require('./routes/users');
const rootDir = require('./utils/path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(officeRouter);
app.use(usersRouter);

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
