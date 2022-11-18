import axios from "axios"
import { isForInStatement } from "typescript"


// async function run() {


//      const respons = await axios.get("http://192.168.1.102:9999/task1")
//      console.log(respons.data)


// }



// let c = 0;
// async function run() {

//     const response1 = await axios.get("http://tiswork.tisserv.net:9999/task1")

//     const salaries = response1.data.salaries

//     for (let i = 0; i < salaries.length; i++) {
//         c = c + salaries[i]
//     }

//     const gonderdiyim = {
//         netice: c
//     }

//     const response2 = await axios.post("http://tiswork.tisserv.net:9999/task1", gonderdiyim)

//     console.log(response2.data)

// }

// run()

// async function run() {

//     const first =await axios.get("https://api.exchangerate.host/latest")
// //console.log(first.data.rates.AZN)
    
// }run()


// // // Sual 1) 
// // api verilib (deyisen kimi dirnagda yazmisham): url='https://api.exchangerate.host/latest'
// // bu api ferqli valyutalar uzre mezenneleri geri qaytarir, browserde acib mezenneleri gore bilersiniz. 
// Sual ondan ibratdiki, AZN mezennesinin qiymetini ekrana cixarin (console.log)  ("AZN": 1.705099)

// Sual 2) 
// (sual 1in ardi olaraq) 
// locateCurrency(currencyCode) adinda bir funksia yaradin, verilmish funksia verilmish currencyCode uygun mezenneni geri qaytarsin ve onu ekrana verin
// Misal: 
// console.log(locateCurrency('AZN'))    
// console.log(locateCurrency('USD'))    
// console.log(locateCurrency('TRY'))    

// Bu funksialar ekrana reqem verecek, ve bunun ucun yuxarida verilen url den verilmish currencyCode response.data dan axtarib tapacaq ve onu geriye return edecek.


    

async function locateCurrency(currencyCode:string){
    const first =await axios.get("https://api.exchangerate.host/latest")
    currencyCode=first.data.rates[currencyCode]
 


return(currencyCode)
}   
    async function run() {

console.log(await
    locateCurrency('USD'))}

run()
