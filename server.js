//Dependencies

const app = require('./app.js');

//Configuration


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

//Listen

//Listening
app.listen(port, () =>{
    console.log("Listening for requests");
});


