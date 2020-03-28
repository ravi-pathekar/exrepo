const mongoose = require('mongoose');
const express = require('express');
const { Table, validate } = require('../models/table');
const router = express.Router();
  
// ---------------- Getting data from database -------------------
router.get('/', async (req, res) => {                 
    const result = await Table.find();
    res.send(result);
});

// --------------------- Getting data of a particular id ----------------
router.get('/:id', async (req, res) => {                
    const name = await Table.findById(req.params.id);

    if (!name) return res.status(404).send('Data with the given ID was not found.');
    res.send(name);
});

// ------------------- Creating a new document in database ------------------------------
router.post('/', async (req, res) => {              
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let name = new Table({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
    })

// ------------------------- Handling error while updating database ---------------------
    try {                            
        name = await name.save();
        res.send(name);
    } catch (err) {
        console.log(err.message);
    }
});

// ---------------------- Updating data of a particular document --------------------------
router.put('/:id', async (req, res) => { 
    
    // ------------ Handling error while receiving request --------------------------------
    const { error } = validate(req.body);         
    if (error) return res.status(404).send(error.details[0].message);

    // ------------------ Finding document and updating its data -------------------------
    let name = await Table.findByIdAndUpdate(req.params.id, {   
        $set: {
            firstname: req.body.firstname,
            lastname: req.body.lastname
        }
    }, { new: true });

    // ---------------------- if id not found then it gives error -----------------------
    if (!name) return res.status(404).send('Not a valid ID')   

    res.send(name);
});

// ----------------------------- Deleting a particular document --------------------------
router.delete('/:id', async (req, res) => {                  
    const name = await Table.findByIdAndDelete(req.params.id);

    if (!name) return res.status(404).send('Not a valid ID');

    res.send(name);
});

// async function createCourse() {
//     const name = new Table({
//         firstname: 'Dhairya',
//         lastname: 'Shah'
//     });

//     const result = await name.save();
//     console.log(result);
// }

// createCourse();

module.exports = router;