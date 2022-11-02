//Lawrence
/*
0) Within the answers directory, create a file practice3.js. Begin this file with this line:
fs = require('fs').promises;

1) Within practice3.js, create an async function called makeFile. 

2) This function should create the file ./content/practice2.txt, using asynchronous calls that return promises. 

3) These must all be within a try/catch block. Use await to get the results of each call. 

4) The first line, written without the append flag, should say “This is the first line.” and should end with a newline character. 

5) The next lines, each of which should end in a line end, should read “This is line 2”, then “This is line 3”, and so on up to 10. These should be written in a loop, with the append flag. 

6) The catch statement should log the error, if any, to the console. 

7) After the makeFile function declaration, add a program line that calls makeFile(). 

8) Test the practice3.js program to make sure it creates the file correctly.
*/

//Step 0
const fs = require("fs").promises;

			//Step 1
const makeFile = async () => {
	//Step 3
  try {
		//Step 2 and Step 4
    await fs.writeFile("./content/practice2.txt", "This is the first line\n");
		//Step 5
    for (let i = 2; i <= 10; i++) {
      await fs.writeFile("./content/practice2.txt", `This is line ${i}\n`, {
        flag: "a",
      })
    }
  } catch (error) {
		//Step 6
    console.log(error);
  }
}

//Step 7
makeFile();

