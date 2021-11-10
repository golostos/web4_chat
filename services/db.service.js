const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('chat_21', 'chat_21_user', 'user123', {
    host: 'localhost',
    dialect: 'mysql'
});

(async function () {
    try {
        // MessageInit(sequelize);
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        await sequelize.sync();
        console.log('Successfull sync');
        // start()
    } catch (error) {
        console.error('Unable to connect to the database:', error)
    }
})();

module.exports = sequelize