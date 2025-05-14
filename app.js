import express from "express";
import employeeRouter from "./api/employees.js";

const app = express()

app.use(express.json())

app.use(( req, res, next ) => {
  console.log( req.method, req.originalUrl )
  next()
})

app.route("/").get((req, res) => {
  res.send("Employee List!");
});

app.use("/", employeeRouter)


  // req.params are always strings, so we need to convert `id` into a number
  // before we can use it to find the employee
  

//ERROR HANDLING MIDDLEWARE (LAST CODE USED)
app.use(( err, req, res, next ) => {
  console.log(err)
  res.status(500).send("AN ERROR OCCURED" + err )
  })

  export default app;