const express = require ('express');
require ('dotenv').config();
const port = process.env.PORT || 5000;
const app = express();
const connectDB = require('./config/db');

connectDB();

//Body parser moddleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {

    res.json({ message:'welcome to the random ideas api'});
});
    
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);                                         



app.listen(port, () => console.log(`Server listening on port ${port}`));




