const request = require('supertest');
const app = require('../app')
const Movie = require('../models/movie');

let lastId;

const movie1 = {
    name: "movie 1",
    rating: 5,
    explicit: true,
    genre: "fantasy"
}

beforeEach(async ()=>{
    await Movie.deleteAll();
    const res = await new Movie(movie1).save();
    lastId = res[0];
});


test('Should create a new movie: ', async ()=>{
  const res = await request(app).post('/api/v1/movies').send({
        name: "movie 2",
        rating: 5,
        explicit: true,
        genre: "romance"
    }).expect(201)
    expect(res.body).not.toBeNull();

});

test('Should fetch all movies: ', async ()=>{
    await request(app)
        .get('/api/v1/movies')
        .expect(200);
});

test('Should NOT create new movie with the same name: ', async ()=>{
    await request(app)
        .post('/api/v1/movies')
        .send({
            name: "movie 1",
            rating: 5,
            explicit: true,
            genre: "romance"
        })
        .expect(400);
});

test('Should update movie: ', async ()=>{
    await request(app)
        .put('/api/v1/movies/' + lastId)
        .send({
            name: "movie 1",
            rating: 10,
            explicit: true,
            genre: "romance"
        })
        .expect(200);
})

test('Should NOT update movie with wrong properties: ', async ()=>{
    await request(app)
        .put('/api/v1/movies/' + lastId)
        .send({
            views: 1000
        })
        .expect(400);
})

test('Should delete movie: ', async ()=>{
    await request(app)
        .delete('/api/v1/movies/' + lastId)
        .expect(200);
})