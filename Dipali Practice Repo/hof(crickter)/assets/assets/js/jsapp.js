let cl = console.log;

let cricketers = [
    {"name": "Virat Kohli", "team": "India", "debut_year": 2008, "runs_test": 7547, "runs_odi": 12169, "runs_t20": 3159},
    {"name": "Kane Williamson", "team": "New Zealand", "debut_year": 2010, "runs_test": 7115, "runs_odi": 6173, "runs_t20": 1723},
    {"name": "Steve Smith", "team": "Australia", "debut_year": 2010, "runs_test": 7540, "runs_odi": 4162, "runs_t20": 794},
    {"name": "Joe Root", "team": "England", "debut_year": 2012, "runs_test": 8249, "runs_odi": 6063, "runs_t20": 893},
    {"name": "Babar Azam", "team": "Pakistan", "debut_year": 2015, "runs_test": 2265, "runs_odi": 3836, "runs_t20": 1763},
    {"name": "Rohit Sharma", "team": "India", "debut_year": 2007, "runs_test": 2679, "runs_odi": 9205, "runs_t20": 2864},
    {"name": "David Warner", "team": "Australia", "debut_year": 2009, "runs_test": 7311, "runs_odi": 5457, "runs_t20": 2265},
    {"name": "Quinton de Kock", "team": "South Africa", "debut_year": 2012, "runs_test": 2934, "runs_odi": 5135, "runs_t20": 1680},
    {"name": "Ross Taylor", "team": "New Zealand", "debut_year": 2006, "runs_test": 7513, "runs_odi": 8570, "runs_t20": 1909},
    {"name": "Aaron Finch", "team": "Australia", "debut_year": 2011, "runs_test": 1216, "runs_odi": 5073, "runs_t20": 2149},
    {"name": "Tamim Iqbal", "team": "Bangladesh", "debut_year": 2008, "runs_test": 4515, "runs_odi": 7610, "runs_t20": 1816},
    {"name": "Shakib Al Hasan", "team": "Bangladesh", "debut_year": 2006, "runs_test": 4163, "runs_odi": 6323, "runs_t20": 1717},
    {"name": "Mushfiqur Rahim", "team": "Bangladesh", "debut_year": 2005, "runs_test": 4413, "runs_odi": 6452, "runs_t20": 1348},
    {"name": "M.S. Dhoni", "team": "India", "debut_year": 2004, "runs_test": 4876, "runs_odi": 10773, "runs_t20": 1617},
    {"name": "Chris Gayle", "team": "West Indies", "debut_year": 2000, "runs_test": 7214, "runs_odi": 10480, "runs_t20": 1627},
    {"name": "Jason Roy", "team": "England", "debut_year": 2014, "runs_test": 194, "runs_odi": 3218, "runs_t20": 1017},
    {"name": "Jos Buttler", "team": "England", "debut_year": 2011, "runs_test": 2428, "runs_odi": 3901, "runs_t20": 1701},
    {"name": "Ben Stokes", "team": "England", "debut_year": 2013, "runs_test": 4513, "runs_odi": 2686, "runs_t20": 458},
    {"name": "Kusal Perera", "team": "Sri Lanka", "debut_year": 2011, "runs_test": 2356, "runs_odi": 3271, "runs_t20": 1075},
    {"name": "Angelo Mathews", "team": "Sri Lanka", "debut_year": 2008, "runs_test": 6095, "runs_odi": 5381, "runs_t20": 1119},
    {"name": "Kusal Mendis", "team": "Sri Lanka", "debut_year": 2015, "runs_test": 1868, "runs_odi": 2217, "runs_t20": 500},
    {"name": "Faf du Plessis", "team": "South Africa", "debut_year": 2012, "runs_test": 4163, "runs_odi": 5507, "runs_t20": 1448},
    {"name": "Hashim Amla", "team": "South Africa", "debut_year": 2004, "runs_test": 9282, "runs_odi": 8113, "runs_t20": 1277},
    {"name": "AB de Villiers", "team": "South Africa", "debut_year": 2004, "runs_test": 8765, "runs_odi": 9577, "runs_t20": 1672},
    {"name": "Shane Watson", "team": "Australia", "debut_year": 2002, "runs_test": 3731, "runs_odi": 5757, "runs_t20": 1462},
    {"name": "Martin Guptill", "team": "New Zealand", "debut_year": 2009, "runs_test": 2586, "runs_odi": 6976, "runs_t20": 2739},
    {"name": "Mohammad Hafeez", "team": "Pakistan", "debut_year": 2003, "runs_test": 3652, "runs_odi": 6614, "runs_t20": 2367},
    {"name": "Shoaib Malik", "team": "Pakistan", "debut_year": 1999, "runs_test": 1898, "runs_odi": 7534, "runs_t20": 2321},
    {"name": "Sarfraz Ahmed", "team": "Pakistan", "debut_year": 2007, "runs_test": 2657, "runs_odi": 2335, "runs_t20": 766},
    {"name": "Chris Lynn", "team": "Australia", "debut_year": 2014, "runs_test": 50}
];

//players who plays for india and debuted after 2005
let India05 = cricketers.filter(cricket => {
  return cricket.team.includes("India") && cricket.debut_year >=2005
})
console.log(India05)

//players who plays for India and debuted after 2000
let Aus0 = cricketers.filter(cricket=> cricket.team === "Australia" && cricket.debut_year >=2000 )
console.log(Aus0)

//players who scored ODI runs less than 5000
let ODIruns = cricketers.filter(player => player.runs_odi <5000).map(player =>{
  return {
    name : player.name,
    debut : player.debut_year
  }
})
console.log(ODIruns)

// let ODIPlayers = ODIruns.

// console.log(ODIPlayers)

//
//players with overall runs below 10k
let runs10k = cricketers.filter(player => {
  let total = player.runs_test + player.runs_odi + player.runs_t20;
  console.log(total)
  return total<10000;
})

console.log(runs10k)

//map, filter, find, findIndex, sort, forEach

//sorting according to debut year
let sorted = cricketers.sort((a,b) =>{
  return a.debut_year - b.debut_year;
})
// console.log(sorted)
console.log(cricketers)

//find player whos debut year is 2004
console.log(cricketers.find(player=> player.debut_year === 2010))

let arr = [3, 45, 323,32]
console.log(arr.sort())