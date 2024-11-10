const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./models/index');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(taskRoutes);

app.get('/', async (req, res) => {
    const tasks = await sequelize.models.Task.findAll();
    res.render('index', { tasks });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
