// /*Ejercicio SUMA*/
// function sum(nums) {
//     let currentSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         currentSum = currentSum + nums[i];
//     }
//     return currentSum;
// }
// console.log(sum([1, 2, 3, 4, 5]));
// /*_________________________________________________*/

// const a = ([1, 4, 7, 2, 9]);
// let suma = 0
// for (i = 0; i < 5; i++) {
//     suma = a[i];
//     return suma
// }
// console.log("Total" + i + a[i]);

// /*_________________________________________________*/
// /*Ejercicio REVERSE*/
// function reverse(array) {
//     const copy = [...array];
//     for (let i = 0; i < array.length; i++) {
//         console.log(copy.pop());
//     }
// }
// reverse([1, 2, 3, 4, 5]);

// /*_________________________________________________*/

// const array1 = [1, 2, 3, 4, 5];
// console.log('array1:', array1);
// const reversed = array1.reverse();
// console.log('reversed:', reversed);

// function reverse1(array1) {
//     for (let i = array1.length - 1; i >= 0; i--) {
//         console.log(array1[i])
//     }
// }

// reverse1([3, 5, 7, 9, 10]);
// /*_________________________________________________*/
// /*Ejercicio MAX*/

// let mayor = Math.max(10, 50, 65, 12, 45);
// console.log(mayor);
// /*_________________________________________________*/

// const max = [1, 10, 6, 3, 5];
// for (let i; i >= 0; i++) {
//     console.log(array[i])
// }
// /*_________________________________________________*/

// function maxium (arreglo) {
//     let maxium = arreglo[0];
//     for (i = 0; i < areglo.length; i++) {
//         if (maxium < arreglo[i])
//             maxium = arreglo[i];
//     }
//     return maxium;
// }
// const arreglo = [1, 10, 6, 3, 5];
// const arreglo1 = [5, 3, 9, 12];
// console.log(max(arreglo));
// console.log(max(arreglo1));
// /*_________________________________________________*/

// /*EJERCICIO MIN*/

// function min(array) {
//     let minium = array[0];
//     for (i = 0; i > array.length; i++) {
//         if (minium < array[i])
//             minium = array[i];
//     }
//     return minium;
// }
// const array = [1, 10, 6, 3, 5];
// const array1 = [5, 3, 9, 12];
// console.log(min(array));
// console.log(min(array1));
// /*_________________________________________________*/
// function text(array) {
//     let texto = array
//     for (i = 0; i < array.length; i++) {
//         if (text < array[i])
//             texto = array[i];
//     }
// }
// const array = ["hola", " ", "mundo", " ", "cruel!"];
// console.log(text(array));
 /*_________________________________________________*/

/*EJERCICIO UNION*/
// const array1 = [1,2,3,4,5];
// const array2 = [6,7,8,9,10];
// const array3 = [...array1, ...array2];
// console.log(array3);

 /*_________________________________________________*/

/*EJERCICIO INTERSECION*/
function intersection(arr1, arr2) {
    return arr1.filter((ele => {
      return arr2.includes(ele);
    }));
  }
  
  console.log(intersection([1,2,4,3], [2,3,4,5]));

