const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    database: 'todolist',
    username: 'postgres',
    password: 'sriram', 
});

const Task = sequelize.define('Task', {
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

sequelize.sync()
    .then(() => console.log("Database synced"))
    .catch(err => console.log(err));

module.exports = sequelize;
