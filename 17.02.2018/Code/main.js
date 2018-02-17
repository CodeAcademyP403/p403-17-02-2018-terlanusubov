//Multiploication table with 1-dimension

// var N = Number(prompt("Reqem daxil edin: "));

// while(isNaN(N) || N < 1 || N > 10){
//     alert("1-10 arasinda duzgun reqem daxil edin.");
//     N = Number(prompt("Reqem daxil edin: "));
// }

// var counter = 1;
// while(counter <= 10){
//     console.log(N + " * " + counter + " = " + N * counter);
//     counter++;
// }
// console.log("Sorry, this is the end.");



//Multiploication table with 2-dimension
// var N1 = 1, N2 =1;
// while(N1 <= 10){
//     console.log(N1 + "-in vuruqlari");
    
//     while(N2 <= 10){
//         console.log(N1 + " * " + N2 + " = " + N1 * N2);
//         N2++;
//     }
//     N1++;
//     N2 = 1;
//     console.log("---------------------------------");
    
// }
// inner loop || nested loops

//difference between while and for loops
// var counter = 1;
// while(counter <= 10){
//     console.log(counter);
//     counter++;    
// }

// for(var counter = 1; counter <= 10; counter++){
//     console.log(counter);
// }

// Sum only even digits in a number

var N = Number(prompt("Reqem daxil edin: "));

while(isNaN(N)){
    alert("Duzgun reqem daxil edin.");
    N = Number(prompt("Reqem daxil edin: "));
}
 
var originalN = N;
var sum = 0;
while(N != 0){
    var qaliq = N % 10;
    if(qaliq % 2 == 0){
        sum += qaliq;
    }
    N = Math.floor(N/10);
}
console.log("Daxil etdiyiniz " + originalN + " reqemindeki cut ededlerin cemi " + sum + "-e beraberdir.");
