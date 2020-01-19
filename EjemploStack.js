// let items = [];
// let top = 0;

// function init(size){
//     items = new Array(size);
//     top = 0;
// }

//     function push(item){
//         items[top]= item;
//         top++;
//     }

// init(5);
// push(6);
// push(7);
// push(3);
// console.log(items);

let items =[];
 let top = 0;

 function init(size){
     items = new Array(size);
     top = 0;
 }

     function push(){
         let x= items(top-1);
         items[top-1]= item;
         top--;
         return x;
     }
     function peek(){
         return items[top-1];
     }
     function isEmpty(){
         return top == 0;
     }

     function isFull(){
         return top == items.length;

     }

init(6);
console.log("Esta vacia:", isEmpty());
console.log("Esta llena:", isFull());
 push(6);
 console.log("Esta vacia:", isEmpty());
 push(7);
 push(9);
 push(10);
 push(11);
 console.log("Esta llena:", isFull());
     isEmpty();
    console.log("pop:", pop());
    push(22);
    console.log("peek:", peek());
     console.log(items);