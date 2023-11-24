class commentDTO {

    prenom;
    name;
    email;
    note;
    message;


    constructor(data) {
        this.prenom = data.prenom;
        this.name = data.name;
        this.email = data.email;
        this.note = data.note;
        this.message = data.message;
        
    }
}

module.exports = commentDTO;