require('dotenv').config();
const path = require('path');
const express = require('express');
const app = require('./src/app.js');

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set the static folder, ensuring the path is correct
  app.use(express.static(path.join(__dirname, '..', 'Frontend', 'build')));

  // Handle all other requests by serving the React app's index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'Frontend', 'build', 'index.html'));
  });
}

// Your existing listener code
app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on http://localhost:3000");
});
