const express = require('express');
const router = express.Router();

const ideas = [
    {
        id: 1,
        text: 'positive newsletter, a newsletter that only shares positvie uplifting news',
        tag: 'technology',
        username: 'tonystark',
        date: '2022-01-02',
    },
    {
        id: 2,
        text: 'atm location app which lets you know where the closest atm is in service',
        tag: 'software',
        username: 'burce',
        date: '2022-01-02',
    },
    {
        id: 3,
        text: 'milk catoons that are different colors',
        tag: 'inventions',
        username: 'steverogers',
        date: '2022-01-02',
    },
]

//Get all ideas
router.get('/', (req, res) => {
    res.json({ sucess:true, data: ideas });
});


//Get single idea
router.get('/:id', (req, res) => {
const idea = ideas.find((idea) => idea.id === +req.params.id);

if (!idea) {
    return res
    .status(404)
    .json({success: false, error: 'resourse not found'});
}

    res.json({ sucess:true , data:idea });
});

//Add an idea
router.post('/', (req, res) => {
    const idea = {
        id: ideas.length + 1,
        text: req.body.text,
        tag: req.body.tag,
        username: req.body.username,
        date: new Date().toISOString().slice(0, 10),
    };

    ideas.push(idea);

    res.json({sucess: true, data: idea});
});

//Upadte idea
router.put('/:id', (req, res) => {
    const idea = ideas.find((idea) => idea.id === +req.params.id);
    
    if (!idea) {
        return res
        .status(404)
        .json({success: false, error: 'resourse not found'});
    }

    idea.text = req.body.text || idea.text;
    idea.tag = req.body.tag || idea.tag;
    
        res.json({ sucess:true , data:idea });
    });

    //Delete idea

    router.delete('/:id', (req, res) => {
        const idea = ideas.find((idea) => idea.id === +req.params.id);
        
        if (!idea) {
            return res
            .status(404)
            .json({success: false, error: 'resourse not found'});
        }
    
        const index = ideas.indexOf(idea);
        ideas.splice(index, 1);
              
            res.json({ sucess:true , data:{} });
        });




module.exports = router;