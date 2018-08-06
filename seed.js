const db = require('./models');

const dbPromise = db.sync({ force: true });
dbPromise
  .then(() => {
    console.log('** DATABASE SYNCED **')
    db.close()
  })
  .catch(err => {
    console.log(err)
    db.close()
  })
