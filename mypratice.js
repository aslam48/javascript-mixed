
// function myfunction(){
//     class aslam{
//         constructor(name , age){ 
//         this.name = name;
//         this.age = age;
//         }
//     }
    
// var bam = new aslam("weed ", 50);
// document.getElementById("demo").innerHTML = bam.name + " " +  bam.age;
// }






// let btn_red_ten = document.getElementById("acid")
// btn_red_ten.addEventListener("click", function(){
//     document.getElementById("demo").innerHTML= 5 + 5;
//     document.getElementById("demo").style.color= "Red"
// })
















    //   Array loop for
// let cars = [" benz ", "venza ", " audi ", " benz"];

// let chag_clr_text = document.getElementById("acid");
// chag_clr_text.addEventListener("click", function(){
   
// for (let i=0; i<cars.length; i++){
//     cars[i];
// }

//  document.getElementById("demo").style.color="red"
// document.getElementById("demo").innerHTML= cars
// })





        //  object for in loop that has loader inside

// var food = {name:"aslam " , dream:" footballer" , job:" none"};
// let text = " ";
// let chag_clr_text=document.getElementById("acid");
// chag_clr_text.addEventListener("click" , function(){
  
    

//     var delayInMilliseconds = 3000; 

// setTimeout(function() {
//     for (let x in food){
//         text+= food[x] 
//     }

//     document.getElementById("demo").style.color= "red"
//     document.getElementById("demo").innerHTML = text
// }, delayInMilliseconds);

   
// })









// how to loop through images using javascript when their not going to change


// let imgs = [
//     "img/pic.png",
//     "img/pix.png"
// ]

// let container = document.getElementById("container")

// function renderimage(){
//     let imgsDOM = ""
//     for(let i = 0; i<imgs.length; i++){
//         imgsDOM += `<img class="team-img" src="${imgs[i]}">`
//     }
//     container.innerHTML = imgsDOM
// }

// renderimage()





// // function myfunction(a , b){
// //     return  a + b
// // }
//     console.log(myfunction(4,5))







// let carz = [" benz ", " toyota ", " buggati "," audi "," bmw"]

// document.getElementById("acid").addEventListener("click", function(){
//     for(let i = 0; i<carz.length; i++){
//     let randomitem =    carz[Math.floor(Math.random() *carz.length)]

//     document.getElementById("demo").innerHTML= randomitem
//     } 
// })





// let age , voteable
// let add =document.getElementById("acid")
// add.addEventListener("click",function(){
//   age = Number(document.getElementById("age").value);
//   if (isNaN(age)){
//     voteable = "please inpute a number"
//   }
//   else if(age < 18){
//     voteable = "you too young"
//   }

//   else{
//     voteable = "old enough"
//   }

//   document.getElementById("demo").innerHTML = voteable
// })



// let age , item
// let add = document.getElementById("acid")
// add.addEventListener("click",function(){
//     age = (document.getElementById("age").value);
//     if (age === "aslam"){
//         item = "password corret"
//     }else if(age === "")  item = "empty";
//     else{
//         item = "wrong password"
//     }

//     document.getElementById("demo").innerHTML=item
// })








// throw and cash mehod


// let message, age;
// message = document.getElementById("demo")
// message.innerHTML= "";
// let add= document.getElementById("acid")
// add.addEventListener("click", function(){
//     age = document.getElementById("age").value;
//     try{
//         if(age == "") throw "empty";
//         if (isNaN(age))throw "not a number";
//         age =Number(age)
//         if( age < 5) throw "too young";
//         if (age > 10 ) throw "too high"; 
//     }
//     catch(err){
//         message.innerHTML = " input is " + err
//     }
//     finally {
//         document.getElementById("age").value = "";
//       }
// })







// append child


// document.getElementById("acid").addEventListener("click", function(){
//     const node =document.createElement("li");

//     const textnode = document.createTextNode("water")

//     node.appendChild(textnode);

//     document.getElementById("join").appendChild(node)
// })


            //  append elememt to the body

// document.getElementById("acid").addEventListener("click",function(){
//     const list = document.createElement("li");
//     const node = document.createTextNode("aslam");


//     list.appendChild(node);
//     document.body.appendChild(list);
// })






// adding my class style with java script

// document.getElementById("acid").addEventListener("click",function(){

//   const list =  document.getElementById("demo").classList;

//   list.remove("mystyle")
// })





//toogle function  on and off

// document.getElementById("acid").addEventListener("click",function(){
//     const list = document.getElementById("demo").classList

//     list.toggle("mystyle")
// })




// replace method

// document.getElementById("acid").addEventListener("click", function(){
//  const list =   document.getElementById("demo").classList
//    list.replace("mystyle", "newstyle")
// })



//toggle between 2 css style with javascript

// document.getElementById("acid").addEventListener("click", function(){
//     const element = document.getElementById("demo");
//     if (element.className == "mystyle") {
//       element.className = "newstyle";
//     } else {
//       element.className = "mystyle";
//     }
//   })







// document.getElementById("acid").addEventListener("click",function(){
//     let game = [ " ROCK ", " PAPER ", " SICSSORS"]
//     game.innerHTML="";
//     for (let i=0; i<game.length; i++){
//     }







// concat()  arrays

// const arr1  = ["aslam", "me"];
// const arry2 = ["milk", " weed"]
// const arry3 = ["bam", " smaoke"]

// const children = arr1.concat(arry2, arry3);
// document.getElementById("demo").innerHTML = children;





// fill() array this overwrite exesting arrays


// const fruits = [ "apple", "mango", "milk"]
// document.getElementById("demo").innerHTML = fruits.fill("aslam")








//filiter array 

// const fruits = [ 7,7,7,3,3,23,5,67,8,9,]
// document.getElementById("demo").innerHTML = fruits.fill("aslam")





// filter() array

// const age = [32, 67, 14, 40];

// document.getElementById("demo").innerHTML = age.filter(checkAdult);

// function checkAdult(age){
//     if (age >= 18){
//         return age
//     }
// }



// for each() arrray

// let text = "";
// let item = [ "apple", "mango", "milk"]
// item.forEach(elememt)
//     document.getElementById("demo").innerHTML = text;

//     function elememt(item, index){ 
//         text += index + ":" + item + "<br>"
//     }



//  forEach sum

//     let sum = 0;
// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction);

// document.getElementById("demo").innerHTML = sum;

// function myFunction(item) {
//   sum += item;
// }


//times array

// const numbers = [65, 44, 12, 4];
// numbers.forEach(myFunction)

// document.getElementById("demo").innerHTML = numbers;

// function myFunction(item, index, arr) {
//   arr[index] = item * 10;
// }



//join() it convert element into  a string
 
// const item = ["aslam", "sam","apple"]
// let x= document.getElementById("demo");
// x.innerHTML=item.join()







// Map() Array

// var item =  [4,9,16,25]
// x = document.getElementById("demo")
// x.innerHTML = item.map(Math.sqrt)





// multily the full array with *10

// let item  = [ 2,2,3,3,5,];
// let newitem  = item.map(myFunction)

// function myFunction(num){
//     return num * 10;
// }

// document.getElementById("demo").innerHTML = newitem;





// pop() array


// let fruits = ["apple","mango","milk","sweet"]
// document.getElementById("demo").innerHTML=fruits;

// document.getElementById("acid").addEventListener("click",function(){
//     fruits.pop()
//     document.getElementById("demo").innerHTML=fruits
// })




// push() array   it push new array item to th last


// let fruits = ["apple","mango","milk","sweet"]
// document.getElementById("demo").innerHTML=fruits;

// document.getElementById("acid").addEventListener("click",function(){
//     fruits.push("aslam")
//     document.getElementById("demo").innerHTML=fruits
// })




// reverse() array   it take what is from the back to front vice vrsal


// let fruits = ["apple","mango","milk","sweet"]
// document.getElementById("demo").innerHTML=fruits;

// document.getElementById("acid").addEventListener("click",function(){
//     fruits.reverse()
//     document.getElementById("demo").innerHTML=fruits
// })





// shift() Array it remove Element from the first item of an array

// let fruits = ["apple","mango","milk","sweet"]
// document.getElementById("demo").innerHTML=fruits;

// document.getElementById("acid").addEventListener("click",function(){
//     fruits.shift()
//     document.getElementById("demo").innerHTML=fruits
// })






// construction function  for object

// class car{
//     constructor(brand,name){
//         this.carbrand = brand;
//         this.carname= name
//     }
// }

// const mycar = new car("ford","biza")
// document.getElementById("demo").innerHTML = mycar.carbrand + " " + mycar.carname






// function clearThis(target) {
//     target.value= "";
// }


// document.getElementById("acid").addEventListener("click", function(){
//    age = document.getElementById("age").value

 
//  document.getElementById("demo").innerHTML+= age + "<br>";
// })




// document.getElementById("acid").addEventListener("click",function(){
//     document.body.style.backgroundColor="red"
// })





// let items = [ "aslam", " me", " apple", " goat"]

// document.getElementById("acid").addEventListener("click",function(){
//     let interval = 2000;
//     let interval2 = 4000;

//     setTimeout(function(){
//         for(let i =0; i<items.length; i++){
//           items[i]
//         }
//         document.getElementById("demo").innerHTML=items;
//     },interval)

//     setTimeout(function(){
//         document.getElementById("demo").style.color="red"
//     },interval2)
    
// })







// let item = [ "aslam ", "me ", "weed ", "bastard"]
// document.getElementById("demo").innerHTML= item;
// document.getElementById("acid").addEventListener("click",function(){


// item.fill("real madrid my dream club to play for")

// document.getElementById("demo").innerHTML = item;

// })


// let sam = () => {
//     console.log("idiot")
// }
// sam()



// let myfunction = (a,b) => a *b ;
// document.getElementById("demo").innerHTML = myfunction(4,5)








// how to inherit method from classes

// class Car {
//     constructor(brand) {
//       this.carname = brand;
//     }
//     present() {
//       return 'I have a ' + this.carname;
//     }
//   }
  
//   class Model extends Car {
//     constructor(brand, mod) {
//       super(brand);
//       this.model = mod;
//     }
//     show() {
//       return this.present() + ', it is a ' + this.model;
//     }
//   }
  
//   let myCar = new Model("Ford", "Mustang");
//   document.getElementById("demo").innerHTML = myCar.show();






// getter and setter


// class Car {
//   constructor(brand) {
//     this.carname = brand;
//   }
//   get cnam() {
//     return this.carname;
//   }

//   // thia PART IS NOT USE FULL TO ME
//   set cnam(x) {
//     this.carname = x;
//   }
// }

// let myCar = new Car("Ford");

// document.getElementById("demo").innerHTML = myCar.cnam;








// static classes


// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello() {
//     return "Hello!!";
//   }
// }

// let myCar = new Car("Ford");

// //You can call 'hello()' on the Car Class:
// document.getElementById("demo").innerHTML = Car.hello();





// passing another object inside the static function

// class Car {
//   constructor(name) {
//     this.name = name;
//   }
//   static hello(x) {
//     return "Hello " + x.name;
//   }
// }
// let myCar = new Car("Ford");
// document.getElementById("demo").innerHTML = Car.hello(myCar);



// call back function()

// let nack = () =>{
//   let sam = "aslam"
//   document.getElementById("demo").innerHTML = sam

// }

// nack()






// sequence control function



// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }

// let result = myCalculator(5, 5);
// myDisplayer(result);



// another method ofsequence control function


// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   myDisplayer(sum);
// }

// myCalculator(5, 5);








// document.getElementById("acid").addEventListener("click",function(){
//   let theo = () =>{
//     let okey ="been"
//     document.getElementById("demo").innerHTML=okey;
 
//   }
//   theo()
// })





//i will finish latter function

// let myDisplayer = (something)=> {
//     document.getElementById("demo").innerHTML =something;
// }

// let myCalculator = (num1, num2, callback)=>{
//     let sum = num1 + num2;
//     callback(sum)
// }
// myCalculator(5,5,myDisplayer)







// how to do a calback function that item after the page has full loaded

 






// promises


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let x= 3;
  
//   // some code (try to change x to 5)
  
//     if (x == 0) {
//       myResolve("OK");
//     } else {
//       myReject("Error");
//     }
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );






// waiting for a file using promises


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   let myPromise = new Promise(function(myResolve, myReject) {
//     let req = new XMLHttpRequest();
//     req.open('GET', "mycar.html");
//     req.onload = function() {
//       if (req.status == 200) {
//         myResolve(req.response);
//       } else {
//         myReject("File not Found");
//       }
//     };
//     req.send();
//   });
  
//   myPromise.then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
//   );






// how to use async Promise  for returning value or error

// let  myDisplayer =(some)=>{
//     document.getElementById("demo").innerHTML = some
// }

// async function some() {return "hello";} 

// some().then(
//     function(value) {myDisplayer(value);},
//     function(error) {myDisplayer(error);}
// );







// await Promise

// async function myDisplay() {
//     let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();




// await Promise by setTimeout


// async function myDisplay() {
//     let myPromise = new Promise(function(resolve) {
//       setTimeout(function() {resolve("I love You !!");}, 3000);
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   myDisplay();





// await Promise waiting for a File

// async function getFile() {
//     let myPromise = new Promise(function(resolve) {
//       let req = new XMLHttpRequest();
//       req.open('GET', "mycar.html");
//       req.onload = function() {
//         if (req.status == 200) {
//           resolve(req.response);
//         } else {
//           resolve("File not Found");
//         }
//       };
//       req.send();
//     });
//     document.getElementById("demo").innerHTML = await myPromise;
//   }
  
//   getFile();





// document.addEventListener('keypress', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed ${name} \r\n Key code value: ${code}`);
//   }, false);




// reverse array

// function reverseArray(arr) {
//     let newArr = []
//     for (let i = arr.length - 1; i >= 0; i--) {
//       newArr.push(arr[i])
//     }
//     return newArr
//   }
//   document.getElementById("demo").innerHTML = reverseArray([1, 2, 3])
//   document.getElementById("demo").innerHTML  = reverseArray([1, 2, 3, 4, 5, 6]) 







// learning loops

// const stupidName = [ "asalma", "bisd", "dfjdfj",  "sjdsd",];

// let text = ""; 
// for (let i = 0; i < stupidName.length; i++){
//     text += stupidName[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = text








// for loop


// let text = "";

// for (let i= 1; i < 6; i++){
//     text += i

//     document.getElementById("demo").innerHTML = text
// }






