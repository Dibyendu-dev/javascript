function isBigEnough(e){
    return(e>=10)
}
let passed =[12,5,8,130,44].filter(isBigEnough);
console.log("Test value : " + passed);

let passed2 =[12,5,8,130,44].filter((e)=>(e>=10)); // for one line statement u can use explicit return using ()
console.log("Test value : " + passed);