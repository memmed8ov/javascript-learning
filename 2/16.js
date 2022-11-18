// let a=[2,3,4,5]
// let b=[6,7,8,9]
// let c=[]
// for(i=0;i<a.length;i++){
//     c.push(a[i]+b[i])
// }
// console.log(c)
// let a= 12

// for( let i=1; i<a;i++){
//     if(i%2==0)

//     console.log("true")
// }
// let n = 76;
// let b = 0;
// // for (i = 0; i < n; i++) {
// //     if (i % 2 !== 0){
// //         b = b + i

// // }
// // }  console.log(b)






// let a = [1, 2, 3, 4, 5];
// let b = true;

//  for (i = 0; i <= a.length; i++) {

//    b=b&&(a[i]>0)

//    for (j= 2; j < n - 1; j++) {
//       let c=true;
//       c = c && (n % j !== 0)


//   }
//    if (j) {

//       console.log("sade"); 

//   }
//  }










// let a = [2,-3]
// let b=[];
// for(i=0;i<a.length;i++){
//     if(a[i]>0){
//     b.push(a[i]*a[i])
//     console.log(b)
// }
//     if(a[i]<0){
//         b.push(a[i]*a[i]*a[i])
//         console.log(b)
//     }

//     }console.log(1)
//   let a =[2,-3];
//  let b=[5,2];
//  let c=0;
//  let d=0;

// for(let i=0;i<a.length;i++){

//    if(a[i]>0){

//  c=(b[i]*b[i]);

//    console.log(c+c) ;
//   }
//    else if(a[i]<0)
//    {

//    d=(b[i]*b[i]*b[i]);
//        console.log(d+d);
//  }
// }
// let a=[2];
// let b=[2];
// let c=0;
// for(i=0;i<a.length;i++){
//   if(a[i]>0){
// c=c+b[i]*b[i];

//   } 

// }
// console.log(c);
//   //  else if(a[i]<0){
//   //   d=d+(b[i]*b[i]*b[i]);

//   //  }

// //console.log(d);
// function salamlar(){
//   console.log("salam")
//   console.log("salam 2")
//   console.log("salam 3")
// }

// for (let i=0;i<5;i++){
//   salamlar()
// }
// function topla( a, b){
//   const c= a+b
//   console.log(c)
// }
// topla (3,7)
// topla( 9,7)
// topla(2,12)
// function topla( a, b){
//   const c= a+b
// console.log(c)}
// //    console.log(topla (3,9))
// //    console.log(topla (2,12))
// //   topla(3,7)
//   let d=2*topla(2,3)
//     console.log(d)





// function funk1(a,b){
//   let c=a*a+b*b
//   return c;
// }
// console.log(funk1(2,3))











// function funk2(a){
//   let c=0;
//   for(i=0;i<=a;i++){

//     c=c+i;

//   }
//   return c;
// }console.log(funk2(4))







// function func3(a){
//  c=true
// for (i = 2; i < a- 1; i++){

// c = c && (a % i !== 0)


//  return c; }}
//  console.log(func3(7))




// let a=()=>{
//   console.log("salam")
// }
// let b=()=>{
//   console.log("sagol")
// }
// b=a
// a()
// b()






// const a=[3,9,8,6,2,4]
// a.forEach((x) => {                      a.foreach(x=>console.log(x*x))
//   console.log(x*x)
// });
//(console logu for eachde iceride yaza bilersen digerlerinde meslehet deyil)



// const a=[3,9,8,-6,2,-4]
// let b=a.filter((x)=>{                     let b=a.filter(x=>x>0);(belede yaza bilersen )
//   return x<0;

// })
// console.log(b);

//(filter mutleq return elemelidi)\


// let a =[2,-3,-4,5]
// let c=a.filter((b)=>{
//   return b>0;
// }) 
// console.log(c)
// let d=c.map(x=>x*x)

//   console.log(d)
// let y=d.filter((z)=>{
//   return z>10;


// })
// console.log(y)






// let a=[2,3,4,5]
// let b=a.filter(c=>c%2!==0)
//   .map(c=>c*c)
// console.log(b)




export function positivearray(a) {
  let b = a.filter(c => c > 0)
  return b
}













