// Q No 1:
//console.log("Hellow World");
//Q No2:
//let personName:string="Ashfaque Ahmed from Khairpur";
//console.log("Actual Case:",personName)
//let upperCase:string=personName.toUpperCase();
//console.log("Name Changed into uppercase:",upperCase)
//let lowerCase:string=personName.toLowerCase();
//console.log("Name Changed into lowercase:",lowerCase);
//Q No 4
//let famous_person:string="Albert Einstein Once Said,";
//let famous_quote:string= famous_person+'\t"A         person who          never made a mistake never tried\n anything new"';
//console.log(famous_quote );
//console.log(5+3);
//Q No 6
//console.log("=======================================================================");
//  let personName: string = "Hi I'm Ashfaque Ahmed Channa, just for practice"
//  console.log (personName);
//  let lowerCase: string = personName.toLowerCase();
//  console.log(lowerCase);
//Q No 7
// function add(a:number, b:number): number{
//     return a+b;
// }
// console.log("Addition",add(5,3));
// console.log("=======================================================================");
// function sub(a:number, b:number): number{
//     return a-b;
// }
// console.log("Subtract",sub(11,3));
// console.log("=======================================================================");
// function mult(a:number, b:number): number{
//     return a*b;
// }
// console.log("Multiplication",mult(4,2));
// console.log("=======================================================================");
// function div(a:number, b:number): number{
//     return a/b;
// }
// console.log("Division",div(16,2));
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on 
// each line
// console.log("-".repeat(40)) (program not run shows error)
// console.log(5+3)
// console.log("_".repeat(40))
// console.log("\t",5+3);
// console.log("-----------------------------------------------------");
// console.log("\t",12-4);
// console.log("=====================================================");
// console.log("\t",2*4);
// console.log("*****************************************************");
// console.log("\t",16/2);
// console.log(".....................................................");
//Q No 9: Favorite Number: Store your favorite number in a variable. Then, using that variable,
//  create a message that reveals your favorite number. Print that message.
// let favoriteNumber:number=5;
// let msg:string="My favorite number is ";
// console.log(msg+favoriteNumber);
//Q 10 Adding Comments: Choose two of the programs you’ve written, and add at least one 
// comment to each. If you don’t have anything specific to write because your programs
//  are too simple at this point, just add your name and the current date at the top of 
//  each program file.Then write one sentence describing what the program does.
/* let personName: string = "This is Ashfaque Ahmed Channa"
 console.log (personName);
 let lowerCase: string = personName.toLowerCase();
 console.log(lowerCase);*/
//console.log("above program comment");
/*function add(a:number, b:number): number{
    return a+b;
}
console.log(add(5,3));*/
//console.log("this one also comment");
//Q No 11: Names: Store the names of a few of your friends in a array called names. Print each
//person’s name by accessing each element in the list, one at a time.
//  let names:string[]=['Ashfaque Ahmed Channa','Muhammad Ali Rahoojo ', 'Asad','Ali'];
//  console.log(names);
/*Greetings: Start with the array you used in Exercise 11, but instead of just
 printing each person’s name, print a message to them. The text of each message
 should be the same, but each message should be personalized with the person’s name.*/
var names = ['Ashfaque Ahmed Channa:', 'Muhammad Ali Rahoojo:', 'Asad:'];
/*for(let i=0;i<names.length;i++){
 console.log(i,names[i],"This is my first class");
} (start loop above / bellow)*/
for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
    var name_1 = names_1[_i];
    console.log("Good Morning ".concat(name_1, " Have a nice day"));
}
// for(let i=97;i<=122;i++){
//    console.log(String.fromCharCode(i))
// }
// for(let i=10;i>=1;i--){
//     console.log(i)
// }
// Q 13: Your Own Array: Think of your favorite mode of transportation, such as a 
//motorcycle or a car, and make a list that stores several examples. Use your list to print a
//series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myVehicle = ['Bike Suzuki 150', 'Car Honda civic'];
for (var _a = 0, myVehicle_1 = myVehicle; _a < myVehicle_1.length; _a++) {
    var name_2 = myVehicle_1[_a];
    console.log(name_2, "I always perfer to travel on own vehicle");
}
