
const projects = require('../Models/projectSchema')
// add project
exports.addProject = async(req, res)=>{
    console.log('inside addprojectcontroller');
    const userId = req.payload;
    console.log(userId);
    const projectImage = req.file.filename;
    console.log(projectImage);
    const {title, language, github, website, overview} = req.body;
    try{
        const existingProject = await projects.findOne({github:github});
        if(existingProject){
            res.status(406).json("project already exist, upload a new one");
        }
        else{
            const newProject = new projects({
                title,    //title : title
                language,
                github,
                website,
                overview,
                projectImage,
                userId
            })
            await newProject.save();
            res.status(200).json("Project added successfully");
        }
    }catch(err){
        res.status(401).json('unable to add project due to:',err);
    }
}