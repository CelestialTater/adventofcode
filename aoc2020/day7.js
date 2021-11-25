/** ADVENT OF CODE 2020 - DAY 7
 * today is the day where I had no idea how to do anything
 * overall just not happy; not able to figure out much by myself today which sucks
 * a lot of this code isn't really mine; I used references for help today.
 * might revisit later on to come up with a solution alone. 
 * recursion sucks, but at least I learned some stuff (foreach, hasOwnProperty)
 */
const fs = require("fs");
const INPUT = fs.readFileSync('day7input', 'utf8');
var inp = INPUT.split('.\r\n')
var count = 0;
var bags = getBags(inp)
//console.log(bags)

//pt 1 (pain)
for(color in bags){
    if(hasColor(bags[color],'shiny gold')){
        count++
    }
}

function getBags(input){
    let bagtypes = {}
    input.forEach(item => {
        var parts = item.split('contain')
        parts[1] = parts[1].replace('.','');
        parts[0] = parts[0].replace(' bags', "")
        parts[0] = parts[0].substr(0, parts[0].length -1)

        var nested = parts[1].split(",")
        bagtypes[parts[0]] = {}

        nested.forEach(bag => {
            var num = bag.substr(0, bag.indexOf(" ", 1)+1)
            if(num.includes("no")){
                num = 0;
            }
            num = parseInt(num)
            var bagType = bag.substr(bag.indexOf(" ", 1)+1)
            var subType = bagType.replace(" bags", "").replace(" bag", "")
            bagtypes[parts[0]][subType] = num;
            
        });
    });
    return bagtypes

}
function hasColor(allBags, color){
    for(subColor in allBags){
        if(subColor.includes(color)){
            return true
        }
        if(bags.hasOwnProperty(subColor)){
            if(hasColor(bags[subColor], color)){
                return true
            }
        }
    }
}
//console.log(count)

//pt 2
function innerBags(color){
    let bagCount = 0;

    for(subColor in bags[color]){

        if(!subColor.includes("other")){

            bagCount += bags[color][subColor];

            var subColCount = bags[color][subColor];
            var subCount = innerBags(subColor);
            
            if(subCount > 0){
                subCount = subCount * subColCount;
                bagCount += subCount;
            }
        }
    }
    return bagCount;
}
console.log(innerBags('shiny gold'))