import express from "express";

const server = express();

server.get("/", (request, response) => {
    response.send("Welcome to the Home Page.");
});

server.get("/about", (request, response) => {
    response.send("Welcome to the About Page.");
});

server.get("/contact", (request, response) => {
    return response.send(`<div class="container">
        <h1>Contact Us</h1>
        <form id="shorten-form">
            <div>
                <label for="url">Name :-</label>
                <input type="url" name="url" id="url" required>
            </div>
            <div>
                <label for="shortCode">Problem :-</label>
                <input type="text" name="shortCode" id="shortCode" required>
            </div>
            <button type="submit">Resolve</button>
        </form>
    </div>`);
});


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
// // // You will get the result on the display as :- Welcome to the Home Page.
// // // As well as you can switch the pages as localhost:3001/about or localhost:3001/contact;