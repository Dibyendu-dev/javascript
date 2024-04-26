function isBigEnough(element){
    return(element>=10)
}
let passed =[12,5,8,130,44].filter(isBigEnough);
console.log("Test value : " + passed);