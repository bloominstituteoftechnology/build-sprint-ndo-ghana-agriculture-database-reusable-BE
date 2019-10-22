const express = require('express');
const router = express.Router();
const Clients = require('../data/clientModel.js');

const { validUser, authenticate } = require('../auth/auth.js');

//getting all the clients
router.get('/all', authenticate, async (req, res) => {
    try {
        await Clients.find()
            .then(name => {
                res.status(200).json(name)
            })

    } catch (err) {
        res.status(500).json({ Error: 'An uexpected error happened', err });
    }
})
//getting a the client's all info
router.get('/individual', authenticate, async (req, res) => {
    const { name, village } = req.body
    try {
        await Clients.findByNameVillage(name, village)
            .then(name => {
                res.status(200).json(name)
            })

    } catch (err) {
        res.status(500).json({ Error: 'An uexpected error happened', err });
    }
})
//getting a the client's all info
router.get('/:id', authenticate, async (req, res) => {
    const { id } = req.params;
    try {
        await Clients.findById(id)
            .then(name => {
                res.status(200).json(name)
            })

    } catch (err) {
        res.status(500).json({ Error: 'An uexpected error happened', err });
    }
})

// create a clients profile
router.post('/', authenticate, async (req, res) => {
    try {
        const client = req.body;
        if (!client.name) {
            res.status(404).json({ error: 'Please provide the name of your client' });
        } else {
            const newClient = await Clients.addClient(client);
            res.status(200).json(newClient);
        }
    } catch (err) {
        res.status(500).json({ Error: `${err}` });
    }
}
);// Delete a client by id
router.delete('/:id', authenticate, async (req, res) => {
    try {
        const client = await Clients.deleteClientById(req.params.id);
        res.status(200).json({ message: `This client profile has deleted successfully` });
    } catch (err) {
        res.status(500).json({ error: `there was an error: ${err}` });
    }
});

module.exports = router;

// update a client by id
router.put('/:id', authenticate, async (req, res) => {
    try {
        const { name, village, loanAmount, paidAmount, dueAmount, loanInitailDate, loanDueDate, achievedBag, goalBag } = req.body;
        const { id } = req.params;
        if (!name) {
            res.status(400).json({ message: "Please provide all the required information of the plant." })
        }
        await Clients.updateClient(id, req.body)
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
