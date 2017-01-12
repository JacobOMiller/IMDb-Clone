"use strict";
var movies_1 = require("./../movies");
var seeds = [
    { title: 'test movie 1', director: 'test director 1', picture: 'http://www.altfg.com/film/wp-content/uploads/images/the-hobbit-gandalf-ian-mckellen.jpg', rating: 4 },
    { title: 'test movie 2', director: 'test director 2', picture: 'test picture2', rating: 3 }
];
seeds.map(function (seed) {
    movies_1.Movie.create(seed, function (e, data) {
        if (e)
            throw new Error(e);
        console.log("created " + data.title + " in the " + movies_1.Movie.modelName + "\n      collection as " + data._id);
    });
});
