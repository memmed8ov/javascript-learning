 let a = {
    "result": {
      "wins": [
        {
          "profit": 13,
          "coefficient": 3
        },
        {
          "profit": 10,
          "coefficient": 2
        },
        {
          "profit": 5,
          "coefficient": 4
        }
      ],
      "loses": [
        {
          "profit": 31,
          "coefficient": 3
        },
        {
          "profit": 1,
          "coefficient": 2
        },
        {
          "profit": 15,
          "coefficient": 4
        }
      ]
    }
  }
 
//    Sual 1) 
//   win => proft leri topla  (13 + 10 + 5) ve neticeni ekrana ver
//  lose => proft leri topla  (31 + 1 + 15) ve neticeni ekrana ver
//   win ve lose ferqini tap ve neticeni ekrana ver
  
let c=0;

for(let i=0;i<a.result.wins.length;i++){

    c=c+a.result.wins[i].profit

}

console.log(c)
  


let d=0;

for(let i=0;i<a.result.loses.length;i++){
    
        d=d+a.result.loses[i].profit
    
    }
    
console.log(d)

console.log(d-c)

//    Sual 2) 
//   win => profit ve coefficient hasilin tapib topla (13*3 + 10*2 + 5*4)
//   lose => profit ve coefficient hasilin tapib topla (31*3 + 1*2 + 15*4)
//   win ve lose ferqini tap ve neticeni ekrana ver

let e=0;

for(let i=0;i<a.result.wins.length;i++){

e=a.result.wins[i].profit*a.result.wins[i].coefficient+e

}
console.log(e)

let j=0;

for(let i=0;i<a.result.loses.length;i++){
    
j=j+a.result.loses[i].profit*a.result.loses[i].coefficient
    
    }
    
console.log(j)

console.log(j-e)