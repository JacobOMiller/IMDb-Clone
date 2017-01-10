"use strict";
var Boxers_1 = require("./../Boxers");
var seeds = [
    { name: 'Bill Brasky', age: 37, weight: 201, email: '1234a@email.net' },
    { name: 'Chip McDaniels', age: 29, weight: 179, email: '1234a@email.net' },
    { name: 'Kevin Evans', age: 28, weight: 181, email: '1234a@email.net' }
];
seeds.map(function (seed) {
    Boxers_1.Boxer.create(seed, function (e, data) {
        if (e)
            throw new Error(e);
        console.log("Created " + data.name + " in the " + Boxers_1.Boxer.modelName + " collection as " + data._id);
    });
});
