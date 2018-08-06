const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/plantr');
module.exports = db;

const Gardener = db.define('gardener', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})
const Plot = db.define('plot', {
    size:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    shaded:{
        type: Sequelize.BOOLEAN,
        allowNull: false

    }

})
const Vegetable = db.define('vegetable', {
    name: Sequelize.INTEGER,
    color: Sequelize.STRING,
    planted_on: Sequelize.DATE
})

Vegetable.belongsToMany(Plot, {through: 'vegetable_plot'})
Plot.belongsToMany(Vegetable, {through: 'vegetable_plot'})
Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'})

Vegetable.bulkCreate([
    {name: 'tomato', color: 'red', planted_on: new Date()},
    {name: 'zucchini', color: 'green', planted_on: new Date()},
    {name: 'eggplant', color: 'purple', planted_on: new Date()},
    {name: 'carrots', color: 'orange', planted_on: new Date()}
]).then(() => {
  return Vegetable.findAll()
}).then((vegetable) => {
  console.log(vegetable)
})


