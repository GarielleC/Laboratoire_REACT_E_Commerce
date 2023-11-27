class favorisDTO {

    name;
    price;
    stock;

    constructor(data) {
        this.name = data.name;
        this.price = data.price;
        this.stock = data.stock;
    }
}

module.exports = favorisDTO;