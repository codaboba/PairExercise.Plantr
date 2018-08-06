const db = require('./models');

const dbPromise = db.sync({ force: true });
dbPromise
  .then(() => console.log('** DATABASE SYNCED **'))
  .catch(err => console.log(err))
  .finally(db.close());
