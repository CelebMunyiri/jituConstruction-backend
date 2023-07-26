const mssql=require('mssql')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const {v4}=require('uuid')

const {createEmployeeTable}=require()

const registerEmployee=(req,res)=>{
    try{
createEmployeesTable()
const id=v4()
const {e_name,email,passwrd}=req.body

const hashedPWD=await bcrypt.hash(password,5)

    }catch(error){
return res.json({Error:err})
    }
}