const   express      = require("express"),

        app          = express(),

        bodyParser   = require("body-parser");



app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

app.use(express.static("public")); //this is to connect the stylesheet in the public dir
app.use(express.static("otherCode")); 


app.get("/", function(req, res){
    res.render("home");
});

app.get("/location", function(req, res){
    res.render("location");
});


app.get("/current", function(req, res){
    res.render("current");
});

app.get("/forecast", function(req, res){
    res.render("forecast");
});


app.listen(3000, function(){
   console.log("SERVER IS ACTIVE!"); 
});