//Lawrence
/*
Add the code to make this file a working express server. 

1) For the ‘/’ get request, it should return the index.html from the new-public folder. 

2) For the ‘/sample’ get request, it should just return the line “This is working.” 

3) Configure it to use port 3000. Test it by trying “localhost:3000” and “localhost:3000/sample” from your browser.
*/

const express = require("express");
const path = require("path");
const PORT = 3000;

const app = express();

//Step 1
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, './new-public/index.html'));
});

//Step 2
app.get('/sample', (req, res) => {
	res.status(200).send("This is working!");
});

//Step 3
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}...`)
});
