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
    // forEach

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

// const books =[{
//     title: 'harry potter',
//     authors: ['jk rowling','uyo'],
//     rating: 4.9
// },
// {
//     title: 'goosebumps',
//     authors: ['rl stine','uyo'],
//     rating: 4.9
// },
// {
//     title: 'mr pink whistle',
//     authors: ['enid blyton',],
//     rating: 4.9
// },
// {
//     title: 'malory towers',
//     authors: ['blyton enid'],
//     rating: 4.9
// }
// ]

// books.forEach(function(book){
//     console.log(book.title.toUpperCase(),book.rating,book.authors)
// })
// // We can also access the index by adding another argument to the function

// books.forEach(function(book,idx){
//     console.log(idx,book.title)
// })


// // we can use a for of loop
// // for(let book of books){
// //     console.log(book.title);
// // }

// // we can also use a for loop

// // for(let i=0;i<books.length;i++){
// //     console.log(books[i].authors[0]);
// // }

// // MAP
const numbers=[20,21,22,23,24,25,26,27];
const words=['asap','brb','rsvp','diy'];

const double=numbers.map(function(num){
    return num*2;
})
console.log(double);

const iseven= numbers.map(function(n){
    return {
        value: n,
        even:n%2===0
    }
})
console.log(iseven)



const wordcaps =words.map(function(w){
    return w.toUpperCase();
})
console.log(wordcaps);

// Example to create a newarray from this below use map
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

const titles = books.map(function(tit){
    return tit.title;
})
console.log(titles)

