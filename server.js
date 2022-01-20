const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(express.static('dist'));
app.get('*', (request, response) => {
response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
const port = process.env.PORT || 3000;
app.listen(port);