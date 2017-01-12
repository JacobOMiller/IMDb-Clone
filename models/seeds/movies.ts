import {Movie} from './../movies';

const seeds = [
  {title:'test movie 1', director:'test director 1', picture:'http://www.altfg.com/film/wp-content/uploads/images/the-hobbit-gandalf-ian-mckellen.jpg', rating:4},
    {title:'test movie 2', director:'test director 2', picture:'test picture2', rating:3}
]

seeds.map((seed) => {
  Movie.create(seed, (e, data) => {
    if(e) throw new Error(e);
    console.log(`created ${data.title} in the ${Movie.modelName}
      collection as ${data._id}`);
  });
});
