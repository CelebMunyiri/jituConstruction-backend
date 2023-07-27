const {v4}=require('uuid')
const projects=[];

class Project{
    constructor(id,project_name,description,project_location,startdate,enddate ){
        this.project_name=project_name,
        this.description=description,
        this.project_location=project_location,
        this.startdate=startdate,
        this.enddate=enddate
    }
}

const createProject=async(req,res)=>{
    try {
        const id=v4()

        const {project_name,description,project_location,startdate,enddate}=req.body

        const newProject={id,project_name,description,project_location,startdate,enddate}

        projects.push(newProject)
       // console.log(projects)

        res.json({
            message:'Project Created successfully',
            project:newProject
        })

    } catch (error) { 
        return res.json({error})
    }
}

const getProject=async(req,res)=>{
   
    try {
        return res.json({projects:projects})
        
    } catch (error) {
         res.json({error})
        
    }
}

const getOneProject=async(req,res)=>{
    try {
        const id=req.params.id
        const project=projects.filter(el=>el.id==id)

        res.json({
            project
        })
    } catch (error) {
        res.json({error})
    }
}

const updateProject=async(req,res)=>{
   // console.log("Reached here");
    try {
        const id=req.params.id

        const {project_name,description,project_location,startdate,enddate}=req.body
        const projectIndex=projects.findIndex(project=>project.id==id) 

        if(projectIndex<0){
            res.json('Project not found')
        }else{
           
            projects[projectIndex]=new Project(id,project_name,description,project_location,startdate,enddate)
            
        }
        res.json({
            message:"project updated successfully",
            project:projects[projectIndex]
        })

    } catch (error) {
        res.json({error})
        
    }
}

const deleteProject=async(req,res)=>{
    try {
        const id=req.params.id

        let project_Index=projects.findIndex(project=>project.id==id)


        if(project_Index< 0){
            res.json({
                message:"Project not found here"
            })
        }else{
projects.splice(project_Index,1)
        }
        res.json({
            message:"Project deleted successfully"
        })
    } catch (error) {
        return res.json({Error:error})
    }
}
module.exports={
    createProject,
    getProject,
    getOneProject,
    updateProject,
    deleteProject
}