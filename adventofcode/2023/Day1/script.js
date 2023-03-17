const e = require("express");
const fsP = require("fs/promises");

/** DAY 1 */
async function getMostCals(path) {
  let content = await fsP.readFile(path, "utf8");
  let elfFoods = content.split("\n\n");

  let foodGroups = elfFoods.map((elf) => elf.split("\n"));

  let cals = foodGroups.map(function(group) {
    return group.reduce(function(a, b){
      return Number(a) + Number(b);
    });
  })

  let max = cals.sort().slice(-3)

  let sum = max.reduce(function(a, b){
    return Number(a) + Number(b);
  });

  return sum;
}

getMostCals("input.txt");
