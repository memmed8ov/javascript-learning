


// function App() {
//   let a = 9;
//   let b = 4;
//   let c = 3;

//   return <div>
//     {a + b > c && <div>
//       <h1>
//         {
//           c - a
//         }
//       </h1>
//     </div>
//     }
//     {a + b < c && <div>
//       <span>
//         <h3>
//           {
//             b + a
//           }
//         </h3>
//       </span>

//     </div>
//     }
//   </div>
// }

// export default App;





// Eger tip personal disa personalDetails eger tip bussiness dise bussinessDetails ekrana cixarmag lazimdir
// [11:47, 04.09.2022] Enishte: Beleki butun field leri h1 uzerinde ekrana cixarin
// [11:47, 04.09.2022] Enishte: Mesel ucun.
// Eger personaldisa
// <h1>Taleh</h1>
// ...
// [11:52, 04.09.2022] Enishte: Eger bussinessdise
// <h1>NoOrg corp</h1>

function App() {
  let a = {
    "type": "bussiness",
    "personalDetails": {
      "firstName": "Taleh",
      "lastName": "Ibrahimli",
      "weight": 83
    },
    "businessDetails": {
      "companyName": "NoOrg corp",
      "profit": 159000000
    }
  }
  return <div>

    {a.type == 'personal' && <div>
      <h1>
        {a.personalDetails.firstName}
        {" "}
        {a.personalDetails.lastName}
        {" "}
        <span><sup>{a.personalDetails.weight}</sup></span>
      </h1>


    </div>
    }
    {a.businessDetails.profit > 1600000 && <div>
      <h1>
        {a.businessDetails.profit / 1000000} mln
      </h1>

    </ div>
    }
    {10000<a.businessDetails.profit>1000000 && <div>
      <h1>
        {a.businessDetails.profit / 0}
        {}
      </h1>

    </ div>
    }




  </div>



}
export default App;


