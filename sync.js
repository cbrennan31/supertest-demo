const { sequelize } = require('./config/sequelize-config');

sequelize
  .sync()
  .then(() => {
    console.log('Models synced to database.');
  })
  .catch(err => {
    console.error(`Database sync unsuccessful: ${err}`);
  });
