const mssql=require('mssql')
const dotenv=require('dotenv')

const sqlConfig={
    user:process.env.DB_USER,
    password:process.env.DB_PWD,
    database:process.env.DB_NAME,
    server:'localhost',
    pool: {
        max:10,
        min:0,
        idleTimeoutMillies:30000
    },
    options:{
        encryp:false,
        trustServerCertificate:false
    }
}
mssql.connect(sqlConfig).then(pool=>{
    if(pool.connected){
        console.log('Connected to DB....')
    }
})

module.exports={
    sqlConfig
}