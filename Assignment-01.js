//problem-1
function sandwich_calculator(bread,cheese){
    if(bread%2==0){
        if(cheese>1){
        let a=bread/2
        console.log("you can make ",a,"sandwiches")
        }else{
            console.log("1")
        }
    }else{
        console.log("Not enough breads")
    }

    
}

sandwich_calculator(10,1) 

//problem-2
 var student = {
     name : "sulman ahmad",
     sclass : "VI",
     rollno : 12 
 };
 console.log(student)

//problem-3
var student1 = {
    name : "sulman ahmad",
    sclass : "iii",
    rollno : 12 
};
console.log(`Before deleting the roll number is : ${student1.rollno}`)
// console.log(student1)
delete student1.rollno
console.log("after deleting")
console.log(student1.rollno)