class favorisDTO {

    name;
    prix;
    stock;

    constructor(data) {
        this.name = data.name;
        this.prix = data.prix;
        this.stock = data.stock;
    }
}

module.exports = favorisDTO;