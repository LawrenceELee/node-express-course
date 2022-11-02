//Lawrence

// No WINDOW object in node

// __dirname 	- path to cwd
// __filename - file name
// require		- function to use modules (in CommonJS)
// module			- info about current module (file)
// process 		- info about the env where the program is being executed

console.log(__dirname);

//logs "hello world" to console every 1 second
setInterval(() => {
	console.log("hello world");
}, 1000);
