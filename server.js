const express = require ('express');
const port = 5000;
const app = express();


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

app.get('/', (req, res) => {

    res.json({ message:'welcome to the random ideas api'});
});
    
//Get all ideas
app.get('/api/ideas', (req, res) => {
    res.json({ sucess:true, data: ideas });
});

app.get('/api/ideas/:id', (req, res) => {

const idea = ideas.find((idea) => idea.id === +req.params.id);

if (!idea) {
    return res
    .status(404)
    .json({success: false, error: 'resourse not found'});
}

    res.json({ sucess:true, data:idea });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));




