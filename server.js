// import path module 
const path = require('path')

// import express to create an express app 
const express = require('express')

// connect app to database
const mongoose = require('mongoose')

const dotenv = require('dotenv')
    // import express react views
const expressReactViews = require("express-react-views");


// connect to .env ****
dotenv.config()

// console.log(process.env)

mongoose.connect(process.env.DATABASE).then(() => {
    console.log('database is working')
})

// create a variable to hold all our express modules
const app = express();

// mout the middleware(app.use)
// use for authentication
//  mongo password: jBog7a9YgFYzcHjI

app.use((req, res, next) => {
    console.log('i run on all routes')
    next()
})

app.use(express.urlencoded({ extended: false }))

// set up our view engine 
app.set("view engine", "jsx")

// create the view engine
app.engine("jsx", expressReactViews.createEngine())

// import our fruit model
const fruits = require('./models/fruits');
const data = require('./models/data')
const { Mongoose } = require('mongoose');

// less specific routes come before more specific routes

// create a new route to remy
app.get('/Remy', (req, res) => {
    res.render("Remy", )
})


// create route to index
app.get('/fruits', (req, res) => {
    res.render("Index", {
        fruits: fruits,
    });
});

// create route to remy
app.get('/fruits', (req, res) => {
    res.render("Index", {
        fruits: fruits,
    });
});


app.post('/fruits', (req, res) => {
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true;
    } else {
        req.body.readyToEat = false
    }
    fruits.unshift(req.body)
    console.log(fruits)
    res.redirect('/fruits')
    res.send("data recieved")
});

app.get('fruits/new', (req, res) => {
    res.render("New")
});

// create new route
app.get('/fruits/new', (req, res) => {
    res.render("new", )
})

// add a show route  
// :indexOfFruitsArray can be anything 
app.get("/fruits/:indexOfFruitsArray", (req, res) => {
    res.render("show", {
        fruit: fruits[req.params.indexOfFruitsArray],
        firstName: "name",
    })
})

// add a show route to remy 
app.get("/Remy/:indexOfData", (req, res) => {
    res.render("show", {
        Remy: Remy[req.params.indexOfData],
        firstName: "name",
    })
})




// listen for the request/response cycle
app.listen(3000, () => {
    console.log('server started on 3000...')
})

// - Models
//     - data (javascript variables)
// - Views
//     - how the data is displayed to the user (HTML)
// - Controllers
//     - the glue that connects the models with the views with logic