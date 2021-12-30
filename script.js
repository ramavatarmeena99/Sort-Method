




const name = document.querySelector(".name");
const number = document.querySelector(".number");
const object = document.querySelector(".object");


// sort by name
var objs = [
    {name: "Peter", age: 35},
    {name: "Emma", age: 21},
    {name: "Jack", age: 53}
  ];

objs.sort(function(a, b){
  let nameA = a.name
  let nameB = b.name
  if (nameA < nameB){
        return -1
}
})


// sort by number
let numbers = [6,34,2,8,456,95,2457,5568756,5467];

numbers.sort(function(c,d){
    return c-d;
})



// sort by Age
let objects = [
    {name: "meena", age: 35},
    {name: "Ena", age: 21},
    {name: "Jake", age: 53}
  ];
  objects.sort(function(k,l){
    let ageA = k.age;
    let ageB = l.age;  
    if (ageA < ageB){
        return -1;
    }
  })
  console.log(objects)

  window.addEventListener("DOMContentLoaded", function(){
    let list = objs.map((b)=>{    
    return b.name});

    let num = numbers.map((e)=>{
    return e});
    let obje = objects.map((j)=>{
        return j.name});

    name.innerHTML = list.join(" ")

    number.innerHTML = num.join(" ")
    
    object.innerHTML = obje.join(" ")
})