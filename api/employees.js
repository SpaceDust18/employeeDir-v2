import express from "express";
import { getEmployees, addEmployees } from "../db/data.js";

const router = express.Router()

router.route("/employees")
  .get((req, res) => {
    const employees = getEmployees()
    res.json(employees)
  })
  .post((req, res) => {
    const { name } = req.body;

    if (typeof name !== 'string' || name.trim() === "") {
      return res.status(400).send('Please provide a valid employee name.');
    }
  
    const newEmployee = addEmployees({name});
    res.status(201).json(`Added the employee ${newEmployee.name}`);
  });

export default router