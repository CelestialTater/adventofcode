/** ADVENT OF CODE 2020 - DAY 4
 *  NIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARENIGHTMARE
 */

const fs = require("fs");
const INPUT = fs.readFileSync('day4input', 'utf8');
var inp = INPUT.split(/\n\s*\n/)
var inp2 = []
var currentparams = [];
var type;
var value;
var counter;
var eyecolors = "amb blu brn gry grn hzl oth"
var validCount = 0;

//pt 1 
for(i in inp){
    inp2[i] = inp[i].replace(/\r/g, "")
    inp2[i] = inp2[i].split(/\n| /)
}

console.log(inp2)
for(i of inp2){
    currentparams = ""
    for(j of i){
        currentparams += j;
        currentparams += " "
    }
    if(
    currentparams.includes("byr") &&
    currentparams.includes("iyr") &&
    currentparams.includes("eyr") &&
    currentparams.includes("hgt") &&
    currentparams.includes("hcl") &&
    currentparams.includes("ecl") &&
    currentparams.includes("pid")
    ){
        validCount++
    }

}
console.log(validCount)

//pt2 
for(i in inp){
    inp2[i] = inp[i].replace(/\r/g, "")
    inp2[i] = inp2[i].split(/\n| /)
    // for(c in inp2[i]){
    //     inp2[i][c] = inp2[i][c].split(":")
    // }
}

for(i of inp2){
    currentparams = []
    for(j of i){
        currentparams += j
        currentparams += " "
    }
    if(
    currentparams.includes("byr") &&
    currentparams.includes("iyr") &&
    currentparams.includes("eyr") &&
    currentparams.includes("hgt") &&
    currentparams.includes("hcl") &&
    currentparams.includes("ecl") &&
    currentparams.includes("pid")
    ){
        counter = 0;
        currentparams = currentparams.split(" ")
        for(t of currentparams){
            type = t.substr(0,3)
            value = t.substr(4)
            switch(type){
                case "byr":
                    if(value >= 1920 && value <= 2002){
                        counter++
                    }
                    break;
                case "iyr":
                    if(value >= 2010 && value <= 2020){
                        counter++
                    }
                    break;
                case "eyr":
                    if(value >= 2020 && value <= 2030){
                        counter++
                    }
                    break;
                case "hgt":
                    if(value.includes("cm")){
                        value = value.substring(0, value.length-2)
                        if(value >= 150 && value <= 193){
                            counter++
                        }
                    }else if (value.includes("in")){
                        value = value.substring(0, value.length-2)
                        if(value >= 59 && value <= 76){
                            counter++
                        }
                    }
                    break;
                case "hcl":
                    if(value[0] == "#" && value.length == 7){
                        counter++
                    }
                    break
                case "ecl":
                    if(eyecolors.includes(value)){
                        counter++
                    }
                    break;
                case "pid":
                    if(value.length == 9){
                        counter++
                    }
                    break;
            }
            
        }
        if(counter == 7){
            validCount++
        }
    }
}
console.log(validCount)
