const express = require("express")
const router = express.Router()
const TaskModel = require("./../Models/task")


router.get('/', (req, res) =>{

    res.render("Add.ejs")
    
})

router.post('/', async (req, res) =>{



    try{

        let task = new TaskModel({

            title : req.body.Task
           

        })


        let a1 = await task.save();
        console.log(a1)

        res.redirect('/')
    }
    catch(e){


        console.log(e);

    }

})

router.get('/:id', async (req, res) => {

    try{
        let a2 = await TaskModel.findByIdAndRemove(req.params.id);
        res.render('deleted')

    }
    catch(e){

        console.log(e);

    }

})


module.exports = router