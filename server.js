const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (_, res) => res.sendFile(path.join(__dirname, 'build/index.html')));
const server = app.listen(8081, () => console.log('server running on 8081'));
