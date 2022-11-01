//Lawrence
/*
1) Within the answers directory, create two files, practice1.js and practice2.js. 

2) The practice2.js file should just have a single variable called sentence, initialized to a sentence of your choosing. Export this variable. 

3) In practice1.js, require the sentence variable from the practice2.js module. Require also the os and fs modules. 

4) Then, also in practice1.js, write code that will create a file, ./content/practice.txt. 

5) Use asynchronous write operations. Write first the sentence and then the os.userInfo().username to the file. 

6)Test practice1.js to make sure these are written to the file (they will typically appear on the same line.)
*/

//Step 3
const { sentence } = require("./practice2.js") 	//the .js at the end of file is optional
const os = require("os")
const { writeFile } = require("fs")

//Step 4
writeFile(
	"./content/practice.txt", 
	`1st writeFile() from practice1.js: ${sentence}..................................................`, 
  //{ flag: "a" }, //flag is optional on the 1st writeFile because we always create a new file the 1st time. default flag is 'w' write flag (not append)
	(err, res) => { 

  if (err) {
    console.log(err);
  } 	// end if


	//Step 5
  writeFile(	// start 2nd/inner writeFile()
	// From official Node documentation: Asynchronously writes data to a file, REPLACING the FILE if it already EXISTS
	// It is unsafe to use filehandle.writeFile() multiple times on the same file without waiting for the promise to be resolved (or rejected).
    "./content/practice.txt", 
		`2nd writeFile() from practice1.js: ${os.userInfo().username}`,
    { flag: "a" },	// without the 'a' append flag, the 2nd writeFile will overwrite the 1st writeFile()
    (err, res) => {
      if (err) {
        console.log(err)
      } //end if
    } //end anonymous function
  ); 	//end 2nd/inner writeFile


});		//end 1st/outer writeFile
