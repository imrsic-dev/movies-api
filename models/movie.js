const knex = require('../db/connection.js');

module.exports = class Movie {
    constructor({name, genre, rating, explicit}) {
        this.name = name;
        this.genre = genre;
        this.rating = rating;
        this.explicit = explicit;

    }
    checkName(){
        return new Promise((resolve, reject) =>{
            knex('movies')
                .where('name', this.name)
                .then((res)=>{
                    if(res.length > 0){
                        reject ({message:`Name (${this.name}) is already used, please try a new one.`})
                    }
                    resolve();
                })
                .catch((err)=>{
                    reject(err);
                })
        });

        }


    save() {
        return knex('movies').insert({
            name: this.name,
            genre: this.genre,
            rating: this.rating,
            explicit: this.explicit
        });
    }

    static fetchAll() {
        return knex.select('*')
            .from('movies');
    }

    static fetchById(id) {
        return knex('movies').where({
            id: id
        }).select('*');
    }

    static updateById(id, data) {
        return knex('movies')
            .where({id: id})
            .update(data);
    }

    static deleteById(id) {
        return knex('movies')
            .where({
                id: id
            })
            .del();
    }
    static deleteAll(){
       return knex('movies')
           .del();
    }
}