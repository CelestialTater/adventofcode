var max = 843212
var goodAmount = 0;
for(let min = 353069; min < max; min++){
    min = min.toString();
    if(min[5] >= min[4] && min[4] >= min[3] && min[3] >= min[2] && min[2] >= min[1] && min[1] >= min[0]){
        if(
        (min[5] == min[4] && min[4] != min[3]) || 
        (min[4] == min[3] && min[3] != min[2] && min[5] != min[4]) || 
        (min[3] == min[2] && min[2] != min[1] && min[4] != min[3]) || 
        (min[2] == min[1] && min[1] != min[0] && min[3] != min[2]) || 
        (min[1] == min[0] && min[2] != min[1])){
            goodAmount++
        } 
    }
    min = +(min)
}
console.log(goodAmount)