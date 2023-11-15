// function grumpy(){
//     alert('go away eh');
// }

// // setTimeout(grumpy, 7000);

// // alternatively

// // setTimeout(function (){
// //     alert ('welcome');
// // },5000);

// const btn = document.querySelector('button');
// btn.addEventListener('click',function(){
//     alert('go shorty ,its your birthday')
// });

// const numbers =[20,21,22,23,24,25,26,27];
// let total=0;
// numbers.forEach(function(num){
//     let numtwo=num*2;
//     total+=num;
    
    // console.log(num,numtwo,);
// })
// let avg =total/numbers.length
// console.log(avg);
// // alternatively

// function printtriple(n){
//     console.log(n*3);
// }
// numbers.forEach(printtriple);

const books =[{
    title: 'harry potter',
    authors: ['jk rowling','uyo'],
    rating: 4.9
},
{
    title: 'goosebumps',
    authors: ['rl stine','uyo'],
    rating: 4.9
},
{
    title: 'mr pink whistle',
    authors: ['enid blyton',],
    rating: 4.9
},
{
    title: 'malory towers',
    authors: ['blyton enid'],
    rating: 4.9
}
]
    books.forEach(function(book){
        console.log(books.title.toUpperCase())
    });


