const {v4}=require('uuid');
const { createProjectTable } = require('../Database/Tables/projectsTable');
const mssql=require('mssql');
const { sqlConfig } = require('../Config/config');


const createProject=async(req,res)=>{
    
    try {
        
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
        const id=req.params
      
    } catch (error) {
        res.json({error})
    }
}

const updateProject=async(req,res)=>{
   
    try {
       

    } catch (error) {
        res.json({error})
        
    }
}

const deleteProject=async(req,res)=>{
    try {
    
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