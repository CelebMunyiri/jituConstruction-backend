const {Router}=require('express');
const { createProject, getProject, getOneProject, updateProject, deleteProject } = require('../controllers/projectsController');
 
const projectrouter=Router();

projectrouter.post('/',createProject);
projectrouter.get('/',getProject);
projectrouter.get('/:id', getOneProject);
projectrouter.put('/:id', updateProject);
projectrouter.delete('/:id',deleteProject);

module.exports={
    projectrouter
}