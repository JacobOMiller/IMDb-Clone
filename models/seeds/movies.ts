import {Movie} from './../Movies';

const seeds = [
  {title:'La La Land', director:'Damien Chazelle', picture:'models/seeds/la la land.jpg', rating:8},
  {title:'The Godfather', director:'Francis Ford Coppola',  picture:'models/seeds/the godfather.jpg', rating:9},
  {title:'The Princess Bride', director:'Rob Reiner', picture:'models/seeds/the princess bride.jpg', rating:7},
  {title:'Spirited Away', director:'Hayao Miyazaki', picture:'models/seeds/spirited away.jpg', rating:10},
  {title:'Frequently Asked Questions About Time Travel', director:'Gareth Carrivick', picture:'models/seeds/ffq time travel.jpg', rating:6},
  {title:'Good Morning Vietnam', director:'Barry Levinson', picture:'models/seeds/good morning vietnam.jpg', rating:8}
]

seeds.map((seed) => {
  Movie.create(seed, (e, data) => {
    if(e) throw new Error(e);
    console.log(`Created ${data.titile} in the ${Movie.modelName} collection as ${data._id}`);
  });
});
