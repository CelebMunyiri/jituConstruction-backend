const {Router}=require('express');
const { createProject, getProject, getOneProject, updateProject } = require('../controllers/projectsController');
 
const projectrouter=Router();

projectrouter.post('/',createProject);
projectrouter.get('/',getProject);
projectrouter.get('/:id', getOneProject);
projectrouter.put('/:id', updateProject);

module.exports={
    projectrouter
}