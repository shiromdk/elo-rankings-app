//Imports
const express = require('express');
const app = express();


//Setting up routes and static folders

app.use(express.static('./server/public/'));
app.use(express.static('./client/dist/'));

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
