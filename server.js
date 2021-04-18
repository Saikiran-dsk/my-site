//Install express server
const express = require('express');
const path = require('path');
 
const app = express();
app.use(express.static(__dirname+'/dist/siteDsk'));
// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
// app.use(express.static(__dirname + '/dist/'));
 
app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname + '/dist/siteDsk/index.html'));
});

app.listen( process.env.PORT || 8080);// Start the app by listening on the de  fault Heroku port
