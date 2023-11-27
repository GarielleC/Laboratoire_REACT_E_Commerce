class productDTO {

    name;
    description;
    price;
    categorie;
    othersInformations;
    stock;


    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.price = data.price;
        this.categorie = data.categorie;
        this.othersInformations = data.othersInformations;
        this.stock = data.stock;
        
    }
}

module.exports = productDTO;