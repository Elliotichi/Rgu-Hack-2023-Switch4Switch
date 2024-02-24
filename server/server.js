const path = require("path")
const express = require('express');
const app = express();

// access config file for server port
const config = require('config');
const port = 23456; // config.get('server.port');

// redirect to client build
// https://levelup.gitconnected.com/how-to-render-react-app-using-express-server-in-node-js-a428ec4dfe2b
app.use(express.static(path.join(__dirname, "../client/build")));

// start server
app.listen(port, () => {
    console.log("+ Server is running on port " + port);
})
.on('error', function(err) { "+ Server can't run on port " + port});

// any other urls get redirected to the static page
app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});