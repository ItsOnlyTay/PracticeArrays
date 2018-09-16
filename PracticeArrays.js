const musketeers = ["Athos", "Porthos", "Aramis"];

console.log (musketeers.length);

for (i=0; i < musketeers.length; i++){
    console.log(musketeers[i]);
}
musketeers.push("D'Artagan");
musketeers.forEach(myElement=>{
    console.log(`${myElement}`);
});
musketeers.splice(2,1);
let ofMusketeers;
for(ofMusketeers of musketeers){
    console.log(ofMusketeers);
}
//******* Sum of Values ********/
const values=[3, 11, 7, 2, 9, 10];
let sum=values[0]+values[1]+values[2]+values[3]+values[4]+values[5];
console.log(sum);
//******* Maiximum Array ********/
let max=0;
for(i=0; i<values.length;i++){
    if(values[i]>max)
      max=values[i];
}
console.log(max);