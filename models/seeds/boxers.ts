import {Boxer} from './../Boxers';

const seeds = [
  {name: 'Bill Brasky', age: 37, weight: 201},
  {name: 'Chip McDaniels', age: 29,  weight: 179},
  {name: 'Kevin Evans', age: 28, weight: 181}
]

seeds.map((seed) => {
  Boxer.create(seed, (e, data) => {
    if(e) throw new Error(e);
    console.log(`Created ${data.name} in the ${Boxer.modelName} collection as ${data._id}`);
  });
});
