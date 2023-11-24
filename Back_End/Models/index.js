// Importation l'object Sequelize
const { Sequelize } = require('sequelize');

// Initilisation une nouvelle instance de l'object avec SQLite en paramètre
const sequelize = new Sequelize({
    dialect: 'mssql',
    database: 'Laboratoire',
    username: 'Data_Login',
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    port: 1433 // Le port de base de SQL Server
});

// Création de l'object db
const db = {};
module.exports = db;

//gère l'instance
db.sequelize = sequelize;
//gère d'autres méthodes de sequelize
db.Sequelize = Sequelize;

// Ajout des models
db.Auth = require('./auth.model')(sequelize);
db.Product = require('./product.model')(sequelize);
db.Panier = require('./panier.model')(sequelize);
db.Favoris = require('./favoris.model')(sequelize);
db.Advices = require('./advices.model')(sequelize);
db.Comment = require('./comment.model')(sequelize);
db.PanierProduit = require('./panierProduit.model')(sequelize);
db.FavorisProduct = require('./favorisProduct.model')(sequelize);

 // Définir les associations

 //Panier
 db.Product.belongsToMany(db.Panier, { through: db.PanierProduit });
 db.Panier.belongsToMany(db.Product, { through: db.PanierProduit });
 db.PanierProduit.belongsTo(db.Panier);
 db.PanierProduit.belongsTo(db.Product);


 // LIst favoris
 db.Product.belongsToMany(db.Favoris, { through: db.FavorisProduct });
 db.Favoris.belongsToMany(db.Product, { through: db.FavorisProduct });
 db.FavorisProduct.belongsTo(db.Favoris);
 db.FavorisProduct.belongsTo(db.Product)