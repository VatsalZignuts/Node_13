const express = require("express");
const router = express.Router();
const Course = require("../models/course");


//create router & all course

router.get("/", async (req,res)=>{
    try{
    const courses = await Course.find();
    res.json(courses);
    }catch (err){
        res.json(err);
    }
    // return res.send("course data is successfully fetched")
});

// get single data
router.get("/", async (req,res)=>{
    const courseID = req.params.courseID;
    try{
        const c = await Course.findById(courseID);
        res.json(c);
    }catch(error){
        res.json(error);
    }
});

//create course

router.post("/", async (req,res) => {
    
    const course = await Course.create(req.body);
    await course.save()
    return  res.json(course);
});

//delete data

router.delete("/:courseID", async (req,res) => {

    try{
        await Course.remove ({_id:req.params.courseID});
        res.status(200).json({
            message: "done",
        });
    }catch(error){
        res.json(error);
    }
});

//update data

router.put("/:courseID", async (req,res) => {
    const courseID = req.params.courseID;

    try{
        const course = await Course.updateOne(
            {
                _id : courseID,
            },
            req.body
        );
        res.json(course);
    } catch (error) {
        res.json(error);
    }
});

module.exports = router;