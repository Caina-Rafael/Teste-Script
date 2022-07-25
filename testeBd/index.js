const Runner = require("run-my-sql-file");
 
//SETTING THE OPTIONS
Runner.connectionOptions({
   host:"34.121.240.54",
   user:"admUser",
   database: "database",
   password:"=(29T*R,oBnx|rIn"
});
 
const file1_path = "nodemysql.sql";
 
//IT WILL RUN THE FILE 3
Runner.runFile(file1_path, (err)=>{
   if(err){
      console.log(err);
   } else {
      console.log("Script sucessfully executed!");
   }
});