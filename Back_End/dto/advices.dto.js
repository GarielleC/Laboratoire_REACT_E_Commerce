class advicesDTO {

    prenom;
    name;
    note;
    message;


    constructor(data) {
        this.prenom = data.prenom;
        this.name = data.name;
        this.note = data.note;
        this.message = data.message;
    }
}

module.exports = advicesDTO;