
// // // var name="rahul";
// // // var name="kumar"

// // // console.log(name)

// // let name="rahul"
// // // let name="manoj";

// // console.log(name)


// // // const year=2024

// // // // const year=2023 

// // // console.log(year)



// // // snake case
// // let department_name

// // // camel case
// // let departmentName

// // // pascal case

// // let DepartmentName


// const student=[

//     {

//     name:"rahul11",
//     age:20,
//     college:"gla University",
// },

// {

//     name:"rahul22",
//     age:20,
//     college:"gla University",
// }, {

//     name:"rahul33",
//     age:20,
//     college:"gla University",
//     marks:[1,2,4],
// },



// ];

// console.log(student)


// let sname="rahul";
// let age=20;
// let branch="cse";

// const updatekey='age'

// let rgisternum="eng"

// if(true){
//     rgisternum="mbbs"
// }


// const student={
//     name:sname,
//     // age:age,
//     age,
//     // branch:branch,
//     branch,

//     eng:12345,
//     mbbs:789,
// }

// console.log(sname)
// console.log(age)
// console.log("student---1",student)

// student.name="raju"
// student.age=44;
// student.branch="ece"

// console.log("student---1",student.addres)



// student.addres="mathura"




// console.log("student---2",student.addres)

// const studentcopy={...student};

// student[updatekey]=67;


// console.log(student[rgisternum])
// console.log(student['mbbs'])
// console.log(student['eng'])

// console.log(studentcopy)


// let sname="rahul";
// let age=20;
// let branch="cse";

// // let collegname="college name"

// let college="colleg name"


// // const student=[
// //     {
// //     name:"rashmi",
// //     // age:age,
// //     age:20,
// //     // branch:branch,
// //     branch :"cs", 
// //     year:2023,
// //     order:1
// // },

// // {
// //     name:"rahul",
// //     // age:age,
// //     age:22,
// //     // branch:branch,
// //     branch :"ece", 
// //     year:2024,
// //     order:2

// // }
// // ,{
// //     name:"rahul",
// //     // age:age,
// //     age:22,
// //     // branch:branch,
// //     branch :"ece", 
// //     year:2024,
// //     order:3

// // },{
// //     name:"rahul",
// //     // age:age,
// //     age:22,
// //     // branch:branch,
// //     branch :"ece", 
// //     year:2024,
// //     order:4

// // }, 
// // {
// //     name:"rahul",
// //     // age:age,
// //     age:22,
// //     // branch:branch,
// //     branch :"ece", 
// //     year:2024,
// //     order:5

// // }
// // ]
// // const order=student.order+1


// // student[0].order=student[0].order+1
// // student[1].order=student[1].order+1

// // student[0].order=2
// // student[1].order=3


// // student[0].order=student[0].order*5
// // student[1].order=student[1].order*5

// // map




// const student=[
    
//     {
// order:1
    
// },
   
// {
//     order:2
        
//     },
       
//     {
//         order:3
            
//         },
           
//     {
//         order:4
            
//         },
           
//     {
//         order:5
            
//         }

// ]

//  type frist
// student.map(item=>{
//    const updatedvalue=item.order*5;
//    item.updatedvalue=updatedvalue
//    return item
// });


// type secound

// student.map((item,index)=>{
//     const updatedvalue=item.order*5;
//     // item.updatedvalue=updatedvalue;
//     // return item;

// });


// student.map((item,index)=>{
//     const updatedvalue=item.order*5;
//     student[index].order=updatedvalue

    

// });

// numbers=[5,10,15,20,25]

// numbers.map((item,index)=>{
//     numbers[index]=item-5;
// })




// numbers.forEach((item,index)=>{
//     numbers[index]=item-5;
// })


// numbers=numbers.map((item,index)=>{
//     return item-5
// })




// console.log(numbers)




// third type

// const student1 =student.map((item,index)=>{
//     const updatedvalue=item.order*5;
//     item.updatedvalue=updatedvalue;
//     return item;

// }); 


// [].map((value,index)=>{
//     return value;
// }









// console.log(student)


// const student1=student[0];
// const student2=student[1];

// console.log(student1)
// console.log(student2)


// const out=`this is ${student.name}, ans i am studying in ${student.college}, and my english mark is ${student.english.totalmarks}`

// console.log(out)

// agealise="age";
// const colleganame="college"

// const currentcollege=student.college;
// const currentcollege=student["college"];
// const currentcollege=student?.[college];
// const currentcollege=student?.['colleganame'];


// const v1=student?.[colleganame]
// console.log(v1)

// const v2=student?.["age"]
// console.log(v2)


// const v3=student?.mbbs
// console.log(v3)

// const v4=student.eng
// console.log(v4)


// const v5=student["age"]
// console.log(v5)


// console.log(currentcollege)







// functions functions


// simple function

// function addition(a,b){
//     return a+b;
// }


// aero function
var a=1;
var b=2;
var c=12;

addition=(v1,v2)=>{
   
    return a+b+c
}

// v=a+b;

const v=addition(2,4);

console.log(v)
