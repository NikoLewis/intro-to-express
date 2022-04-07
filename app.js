const { response } = require("express");
const { request } = require("express");
const express = require("express");
const req = require("express/lib/request");
const app = express();

app.get("/", (request, response) => {
    response.send("I love express");
});

app.get("/universe", (request, response)=> {
    response.send("Hello Universe");
});

app.get("/terminator", (request, response) => {
    response.send("I\'ll be back");
    // response.send("Hasta la vista, baby.")
});

app.get("/emeril", (request, response)=>{
    response.send("Bam!");
});

app.get("/steve-mcgarett", (request, response)=>{
    response.send("Book\'em Danno!");
})

app.get("/homer-simpson", (request, response)=>{
    response.send("D\'oh!")
});

app.get("/jj-evans", (request, response)=>{
    response.send("Dy-no-myte!");
});

app.get("/batman", (request, response)=>{
    response.send("To the batmobile!");
});

app.get("/hannibal-smith", (request, response)=>{
    response.send(" I love it when a plan comes together.");
});

app.get("/regis", (request, response)=>{
    response.send("Is that your final answer?");
});

app.get("/fox-mulder", (request, response)=>{
    response.send("The truth is out there");
});

app.get("/harry-callahan", (request, response)=>{
    response.send("Go ahead, make my day.");
});

app.get("/magic8",(request, response)=>{

    const magic8Responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - Definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes, and signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ];


    let magic8Answer = magic8Responses[Math.floor(Math.random()* magic8Responses.length)];


      response.send(`<h1>${magic8Answer}`);
})

app.listen(3003, () =>{
    console.log("Listening for requests on port 3003");
});