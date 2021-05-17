const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}))


app.get("/", function(req, res){
	res.sendFile(__dirname+"/index.html");

});

app.post("/", function(req,res){
   var n1 = Number(req.body.num1);
   var n2 = Number(req.body.num2);
   var ans = n1+n2;
   var bmi = n1/(n2*n2);

	res.send( "the ADDITION is "+ " "+ans+"."+"\n"+"BMI CALCULATOR ::" + bmi);
});

app.listen(3000, function(){

	console.log("SERVER HAS STARTED ON PORT 3000");
});

