const express = require('express');
const app = express();
const port = 3000;
const { Sequelize } = require('sequelize');

app.get('/', (req,res)=>{
    res.send("hola mundo")
});


const sequelize = new Sequelize('TestingOne', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

 async function dbinit(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
 } 

 dbinit()
 
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })