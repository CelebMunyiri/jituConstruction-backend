const mssql=require('mssql'); 
const { sqlConfig } = require('../../Config/config');

const createProjectTable=async(req,res)=>{
    try {
        const table=`
        BEGIN
     TRY
     CREATE TABLE projectsTable(
        id VARCHAR(200) PRIMARY KEY,
        project_name VARCHAR(50) NOT NULL,
        description VARCHAR(200) NOT NULL,
        project_location VARCHAR(200) NOT NULL,
        startdate DATE NOT NULL,
        enddate DATE NOT NULL
     )
     END TRY
     BEGIN
     CATCH
     THROW 50001, 'Table Already Exists',1
     END CATCH
`;
const pool=await mssql.connect(sqlConfig)
await pool.query(table,(err)=>{
    if(err instanceof mssql.RequestError){
        console.log({Error:err.message})
    }else{
        console.log('Table Created Successfully')
    }
})
    } catch (error) {
        res.json({Error:error})
    }
}
 
module.exports={
    createProjectTable
}