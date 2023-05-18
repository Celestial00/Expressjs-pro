const express = require("express")
const app = express()
const addRouter = require("./routers/Addrouters");
const task = require("./Models/task");
const mongodb = require('mongoose');
const Tasks = require('./Models/task')


mongodb.connect("mongodb://127.0.0.1:27017/Todo", { useNewUrlParser: true })
const con = mongodb.connection

con.on('open', () => {

    console.log("connected");

})


app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))



app.get('/', async (req, res) => {

    try {


        let t1 = await Tasks.find();
        res.render("index.ejs", { tasks: t1 })

    }

    catch (e) {

        console.log(e);

    }

})



app.use("/add", addRouter)
app.listen(3200)