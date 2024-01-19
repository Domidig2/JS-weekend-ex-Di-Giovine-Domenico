// ! PRIMO ESERCIZIO


let numeri = 0;



for (let numeri = 1; numeri < 51; numeri++) {

    if (numeri % 5 == 0 && numeri % 3 == 0){
        console.log("BuzzFizz");

    }else if (numeri % 3 == 0 ) {
        console.log("Fizz");

    } else if (numeri % 5 == 0){
        console.log("Buzz");

    } else { 
        console.log(`${numeri}`)
    }
};



//! secondo esercizio


// let somma = 0;


// for (let i = 1; i < 11; i+=2) {

//    console.log(i * i);
//     somma += i *i;  
// }
// console.log("la loro somma è" + somma);


//! TERZO ESERCIZIO

// let a = 0;
// let b = 1;
// let c;
// for (let  i = 0; i  < 24; i ++) {
    
//     c= a+ b;
//     a = b;
//     b = c;
// // console.log(c);
    
//     if (c % 2 == 0 ) {
//         console.log(`${c}  Even`);
        
//     } else{
//         console.log(`${c}  Odd`);
        
        
        
//     }
// }

