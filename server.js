import express from "express";

const server = express();

const PORT = 3001;

server.listen(PORT, () => {
    console.log(`Server Running at ${PORT}`);
});


// // // Firstly, Open the Powershell Terminal and clear all the stuff;
// // // Secondly, ls and check the folder and file you want to operate;
// // // Thirdly, write down the command i.e., (node --watch server.js) 
// // // And, you will get the Output as Server Running at 3001
// // // Finally, your server started :- Server running at 3001;
// // // Now, open the browser and in url write localhost:3001
// // // You will get the result on the display this :- Cannot GET /
// // // You will get the result on the display console this :- GET http://localhost:3001/ 404 (Not Found)