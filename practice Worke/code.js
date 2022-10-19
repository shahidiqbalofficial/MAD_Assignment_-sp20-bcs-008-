console.log("welcome in this Dream");
// let array=[1,3,4,2,6];
// // map function is here we see its work
// function array_map(num) {
//     return num+100;
// }
// let new_var=array.map(array_map);
// // console.log(new_var);
// // now we will see filter function
// function array_filter(num) {
//     if(num%2==0)
//     return num
// }
// let new_filter=array.filter(array_filter);
// // console.log(new_filter);
// // another function is reduce function now we will see
// function reduce_var(pre,current) {
//     return pre+current+5
// }
// let new_red=array.reduce(reduce_var,2);
// // console.log(new_red);

// now applay function on arrays ............................

// let name=['Ali', 'umer', 'sadaf' , 'fatima', 'tahmi']
// let age=['14','20','21','22','26']

// let result=age.concat(name);
// console.log(result);

// join method which convert aarray into string and also splited by anything you want.................................
// let array=['satapri','apple','orange','foodi',13]
// var new_r=array.join(',')
// console.log(new_r)

// now we will see slice and splice method .....................
// splice use for take a start position and apply action after it...............
// let array_1=['satapri','apple','orange','foodi',13]
// array.splice(2,0,'oli','kili');
// console.log(array)

// slice use for print form giving starting position and end on ending-1 ...........
let array = ["satapri", "apple", "orange", "foodi", 13];
var num = array.slice(2, 4);
console.log(num);

// object in javascript
const car = {type:"Fiat", model:"500", color:"white"};
console.log(car);
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  console.log(person)