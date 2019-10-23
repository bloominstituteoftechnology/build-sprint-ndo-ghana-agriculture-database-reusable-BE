const express = require('express');
const router = express.Router();
const Employee = require('../data/employeeModel.js');

const { authenticate } = require('../auth/auth.js');

//getting all the Employee
router.get('/all', authenticate, async (req, res) => {
    try {
        await Employee.find()
            .then(name => {
                res.status(200).json(name)
            })

    } catch (err) {
        res.status(500).json({ Error: 'An uexpected error happened', err });
    }
})

//getting a the employees's all info
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    try {
        await Employee.findById(id)
            .then(name => {
                res.status(200).json(name)
            })

    } catch (err) {
        res.status(500).json({ Error: 'An uexpected error happened', err });
    }
})

    ;// Delete a Employee by id
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const client = await Employee.deleteUser(req.params.id);
        res.status(200).json({ message: `This client profile has deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

module.exports = router;

// update a Employee by id
router.put('/:id', authenticate, async (req, res) => {
    try {
        const { username, email } = req.body;
        const { id } = req.params;
        if (!name) {
            res.status(400).json({ message: "Please provide all the required information of the plant." })
        }
        await Employee.update(id, req.body)
            .then(user => {
                if (user) {
                    res.status(200).json(req.body)
                } else {
                    res.status(404).json({ message: "The client with the specified ID does not exist." })
                }
            })
    } catch (err) {
        res.status(500).json({ error: `there was an error accessing the db: ${err}` });
    }
}
);
