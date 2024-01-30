// Các cách truy cập đến Node
// document.getElementById('');
// document.getElementsByClassName('')
// document.getElementsByTagName()
// document.querySelector('.item')
// const item = document.querySelector('#content');
// console.dir(item);

// Xử lý bất đồng bộ.
// Promise;
// Callback hell
// setTimeout(() => {
//     console.log(1);
//         setTimeout(() => {
//             console.log(2);
//             setTimeout(() => {
//                 console.log(3);
//                 setTimeout(() => {
//                     console.log(4);
//                 },0)
//             },0)
//         },5000)
// },10000);
//  const promise = new Promise((resolve, reject) => {
//     // resolve("Ok") ; 
//     reject("lỖi");
//  });
// //  promise.then((result) => {
// //     console.log(result);
// //  });
//  promise.catch((err)=>{
//     console.log(err);
//  })

// const data = fetch("http://localhost:3000/products");
// // console.log(data);
// data.then((result) => {
//     return result.json();
// }).then((result) => {
//     console.log(result);
// });
// const CallData = async ()=>{
//     const data = await fetch("http://localhost:3000/products");
//    const product = await data.json();
//    return product[0].id;
// }

// const displayResults = async ()=>{
//     let id =  await CallData();
//     console.log(id);
// }
// displayResults();

// const data = await fetch("http://localhost:3000/products/1",{method:"DELETE"});
