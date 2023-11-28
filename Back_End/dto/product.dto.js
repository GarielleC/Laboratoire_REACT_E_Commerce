class productDTO {

    name;
    description;
    prix;
    categorie;
    othersInformations;
    stock;


    constructor(data) {
        this.name = data.name;
        this.description = data.description;
        this.prix = data.prix;
        this.categorie = data.categorie;
        this.othersInformations = data.othersInformations;
        this.stock = data.stock;
        
    }
}

module.exports = productDTO;