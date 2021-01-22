
exports.seed = async function(knex) {
 await knex('products').insert([{name:'LED light 25w', department: 'electric',description: "LED ligh bulb 25W, better light and less consumption"},
 {name:'wood 2 by 4', department: 'lumber',description: "2 by 4 and length 6 feet"},
 {name:'drill 20v', department: 'power machine',description: "20v drill and two rechargable batteries"},
 {name:'pliers', department: 'tools',description: "strong plier, length 10 inch"},
])
};
