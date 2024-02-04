// davaleba 1
const monthsObject = {
    1: 'january',
    2: 'february',
    3: 'march',
    4: 'april',
    5: 'may',
    6: 'june',
    7: 'july',
    8: 'aogust',
    9: 'september',
    10: 'october',
    11: 'november',
    12: 'december'
  };
  
  console.log(monthsObject);
// davaleba 2
const adamiani = {
    firstname: 'ნატო',
    lastname: 'შონია',
    gender: 'მდედრობითი'
  };
  
  const konsoli = `${adamiani.firstname} ${adamiani.lastname} (${adamiani.gender})`;
  console.log(konsoli);
// davaleba 4
const car = { 
    model: { 
     manufacturer: "BMW", 
     mark: "X6" 
    },
    color: "black", 
    is_left_hand_drive: false,
    number_of_doors: 5 
   };
   console.log(car.model.manufacturer);
   console.log(car.color);
// davaleba 5
const student = { studentName : "პეტრე მგელაძე", 
paydVolum: 700 }
let canEnrollToCourse=(studentobject)=>{
    if(studentobject.paydVolum>=1125){
        return true
    }
    else{
        return false
    }
} 
let pasuxi=canEnrollToCourse(student)
console.log(pasuxi)
// davaleba 6
const purchases = {
    foods : ["Apples", "Bananas", "Eggs", "Cucumber", "Cheese"],
    amountPaid: [4, 6, 4, 12, 15], 
    date: "27/11/2021" 
   };
   function getTotalAmount(gadaxdebi){
    console.log(gadaxdebi.amountPaid)
    let plus=0
        for(let i=0;i<gadaxdebi.amountPaid.length;i++){
            console.log("i=",i,gadaxdebi.amountPaid[i]);
            plus=plus+gadaxdebi.amountPaid[i];
        }
        return plus
   }         
   let mimateba=getTotalAmount(purchases);
   console.log(mimateba)
