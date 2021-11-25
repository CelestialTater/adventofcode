const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");
const fs = require("fs");
const INPUT = fs.readFileSync('day3input', 'utf8');
var inp = INPUT.split('\r\n')
// var inp = [
//     '..##.......',
//     '#...#...#..',
//     '.#....#..#.',
//     '..#.#...#.#',
//     '.#...##..#.',
//     '..#.##.....',
//     '.#.#.#....#',
//     '.#........#',
//     '#.##...#...',
//     '#...##....#',
//     '.#..#...#.#'
// ]
const width = 30;
var xloc = 0;
var treeCount = 0;
var treeCount2 = 0;
var treeCount3 = 0;
var treeCount4 = 0;
var treeCount5 = 0;


//PT 1
for(var i = 0; i < inp.length; i++){
    if(inp[i][xloc] == '#'){
        treeCount++
    }
    if(width - (xloc + 3) < 0){
        xloc = Math.abs(width - (xloc + 2))
    }else{
        xloc += 3;
    }
}
console.log(treeCount);


//PT 2: I apologize in advance for this part 2 solution, please forgive me. It is awful. Don't look. Please. 
for(var i = 0; i < inp.length; i++){
    if(inp[i][xloc] == '#'){
        treeCount++
    }
    if(width - (xloc + 1) < 0){
        xloc = Math.abs(width - (xloc))
    }else{
        xloc += 1;
    }
}
xloc = 0;
for(var i = 0; i < inp.length; i++){
    if(inp[i][xloc] == '#'){
        treeCount2++
    }
    if(width - (xloc + 3) < 0){
        xloc = Math.abs(width - (xloc + 2))
    }else{
        xloc += 3;
    }
}
xloc = 0;
for(var i = 0; i < inp.length; i++){
    if(inp[i][xloc] == '#'){
        treeCount3++
    }
    if(width - (xloc + 5) < 0){
        xloc = Math.abs(width - (xloc + 4))
    }else{
        xloc += 5;
    }
}
xloc = 0;
for(var i = 0; i < inp.length; i++){
    if(inp[i][xloc] == '#'){
        treeCount4++
    }
    if(width - (xloc + 7) < 0){
        xloc = Math.abs(width - (xloc + 6))
    }else{
        xloc += 7;
    }
}
xloc = 0;
for(var i = 0; i < inp.length; i+=2){
    if(inp[i][xloc] == '#'){
        treeCount5++
    }
    if(width - (xloc + 1) < 0){
        xloc = Math.abs(width - (xloc))
    }else{
        xloc += 1;
    }
}
console.log(treeCount * treeCount2 * treeCount3 * treeCount4 * treeCount5)