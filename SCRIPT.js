// var arr2, arr3;
// arr1 = [-1, 3, 5, -3];
// arr2 = [1, 2, 17, 0, 5, 15, 100];
// arr3 = [6, 4];

// var arr4, arr5, arr6;
// arr4 = ["hello", "world"];
// arr5 = ["cat", "dog", 15, "memo"];
// arr6 = ["are", "you", "doing", "it", "right"]




// // **QUESTION 1 **//
// // ** FUNCTION THAT CALCULATE ARRAY AVERAGE ***/

// function array_avg(elmt) {
//     var sum = 0;
//     for (var i = 0; i < elmt.length; i++) {
//         sum += elmt[i]
//     }

//     var avg = sum / elmt.length;
//     return avg
// }
// console.log(avg1(arr1));
// console.log(avg1(arr2));
// console.log(avg1(arr3));

//************************************************************/

//**QUESTION 2  **//
//** FUNCTION THAT CALCULATE ARRAY minimum ***/
// function mincal(arr)
// {
//      let m = arr[0] ;
// for( var i = 1; i < arr.length; i++ )
// {
//     if(arr[i]<m)
//     {
//         m=arr[i];
//     }  
//     return(m);
 
// }
// }
// console.log(mincal(arr1));
// console.log(mincal(arr2));
// console.log(mincal(arr3));

//************************************************************/

//**QUESTION 3 **//
//** FUNCTION THAT CALCULATE ARRAY LARGESR STRING ***/

// function STRRING_LENGTH(arr)
// {
//     for(i=1; i<arr.length; i++)
//     {
//         var m=arr[0].length;
//         if(arr[i].length>arr[0].length)
//         {
//             m+=arr[i].length;
//         }

//     }
//     return(m);
// } 


// console.log(STRRING_LENGTH(arr4));
// console.log(STRRING_LENGTH(arr5));
// console.log(STRRING_LENGTH(arr6));

//************************************************************/

// **QUESTION 5 **//
//** FUNCTION THAT CALCULATE how many numbers in array smaller than avarge  ***/

// function small_than_avarege(arr) {
//     let avarge = (array_avg(arr));
//     let count = 0;
//     for (i = 0; i < arr.length; i++) {
//         if (avarge >= arr[i]) {
//             count++;
//         }
//     }
//     return (count);
// }
// console.log(small_than_avarege(arr1));
// console.log(small_than_avarege(arr2));
// console.log(small_than_avarege(arr3));

//************************************************************/

//**QUESTION 6 **//
//** FUNCTION THAT CALCULATE is the number is primary  ***/
// var num, n = 0;
// num = +prompt("please enter random num");


// function isPrime(num)
// {
//     num = num<0 ? (num*-1) : num;   
//     for (i = 2; i < num; i++) 
//     {
//         if (num % i == 0) {
//             return false;
//         }

//     }
//         return true;
// }


//************************************************************/

//**QUESTION 7 **//
//** FUNCTION THAT CALCULATE if array has primary numbers  ***/
// let calculater=0;
// function has_Prime_number(arr)
// {
//     for (i = 0; i < arr.length; i++) 
//     {
        
//         if (isPrime(arr[i])) {
//             console.log("there's a prime number");
//             return;
//         }

//     }
//             console.log("there's no prime numbers");
//     }
// has_Prime_number(arr3);
