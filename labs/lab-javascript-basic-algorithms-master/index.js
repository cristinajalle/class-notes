// Iteration 1: Names and Input
// let hacker1 ="Joe";
// console.log("the drivers name is " + hacker1);
// let hacker2 ="Mary";
// console.log("the navigator's name is " + hacker2);

// Iteration 2: Conditionals




// Iteration 3: Loops

// for (expresionInicial, condicion, actualizacionDeExpresion) {body}
//expresioninicial= inicializa y/o declara variables y se ejecuta una sola vez.
//condicion : cantidad de veces que estaremos loopeando
//variable que usaremos como nuemro para poder iterar dentro de nuestra "condicion"

//loops para arrays

// const cities = ["barcelona", "chicago", "helsinki", "mordor"];
// for(let i=0; i < cities.length; i++) {
//     console.log(`-. ${cities[i]}`);
// }

//loops para mixed array

//array de objeto:


// if(typeof )
// // Ejercicio 1
// let cris;
// cris = 2;
// // Primera manera:
// cris= cris +1;
// //2 manera:
// cris +=1;
// console.log(cris);
// cris++;
// console.log(cris);

// ejercicio2
// const number = 3;
// const string = "3";
// console.log(number==string);
// console.log(number===string);
// console.log(number!==string);
// console.log(number>=7);
// console.log(number===string || number<=3);

//ejercicio3

 // const ageQuestion = parseInt(prompt("How old are you?"));

// if(ageQuestion<=5) {console.log("Gratis")}
// else if(ageQuestion <15)
// {console.log("tienes un 20% de descuento");}
// else if(ageQuestion>= 15 && ageQuestion<= 60)
// {console.log("pagas el precio estandar");}
// else if(ageQuestion> 60)
// {console.log("tienes un 40% de descuento");};

//ejercicio4

// let person = prompt("Please enter your name");
// let action = prompt("what do you say?");
// switch(action) {
//   case action= "say bye":
//     console.log("bye bye" + person)
//     break;
//   case action= "greet":
//     console.log("Hello " + person)
//     break;
//     case action= "ask":
//         console.log("how are you today" + person)
//         break;
//     case action= "rest":
//         console.log("I'm signing off now")
//         break;

//   default:
//     console.log( "I dont know how to do that yet");
// }


//ejercicios clase loops:

// for (let i = 0; i < 100; i++) {
//     text += cars[i] + "<br>";
//   }


//LABORATORIO WEEK 1

// Iteration 1: Names and Input
const hacker1 ="Joe";
console.log("the drivers name is " + hacker1);
const hacker2 ="Mary";
console.log("the navigator's name is " + hacker2);

// Iteration 2: Conditionals
let longerName;
if(hacker1.length > hacker2.length){  
    longerName=hacker1;
}
else{
    longerName=hacker2;
}

console.log("it seems that the navigator has the longest name, it has " + longerName.length + " characters");


// Iteration 3: Loops
const characters= hacker1.split("");
let newName="";
for (let i = 0; i < characters.length; i++) {
    newName+= characters[i].toUpperCase() + " ";
  }
  console.log(newName.trim());

//3.2.
const characters2= hacker2.split("");
let newName2="";
for (let i = characters2.length-1; i >= 0; i--) {
    newName2+= characters2[i];
  }
console.log(newName2);

//3.3.
if(hacker1 <hacker2){
    console.log("the drivers name goes first");
    
}
else if(hacker1> hacker2){
    console.log("Yo, the navigator goes first definitely.");

}
else if(hacker1==hacker2){
    console.log("what? you both have the same name?");
}



