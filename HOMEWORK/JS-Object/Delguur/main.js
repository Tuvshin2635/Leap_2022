// 1. Нийт борлуулалтын дүнг тооцоолох.
// 2. Нийт борлуулагдсан барааны тоог тооцоолох.
// 3. Хамгийн их зарагдсан 5 барааны жагсаалт 
        // /боруулалтын үнийн дүнгээр/ харуулах.
// 4. Хамгийн их зарагдсан 5 барааны жагсаалт 
        // /боруулалтын тоо хэмжээгэр/ харуулах.
// 5. Хамгийн бага зарагдсан 5 барааны жагсаалт 
        // /боруулалтын үнийн дүнгээр/ харуулах.
// 6. Хамгийн бага зарагдсан 5 барааны жагсаалт 
//      /боруулалтын тоо хэмжээгээр/ харуулах.
// 7. Хамгийн их зарагдсан /боруулалтын үнийн дүнгээр/ 
        // 10 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд 
            // эзлэх хувь харуулах.
// 8. Хамгийн их зарагдсан /боруулалтын тоо хэмжээгээр/ 
//      5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх хувь харуулах.
// 9. Хамгийн бага зарагдсан /боруулалтын үнийн дүнгээр/ 
        // 5 барааны боруулалтын үнийн дүнгийн нийт боруулалтанд 
        // эзлэх хувь харуулах.
// 10. Хамгийн бага зарагдсан /боруулалтын тоо хэмжээгээр/ 
        // 5 барааны тоо хэмжээ нийт барааны тоо хэмжээнд эзлэх 
        // хувь харуулах.

const data = [
    {
        productName: "Bakery",
        unitPrice: 5000,
        amount: 200,
        totalPrice: 1000000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "Chocolate",
        unitPrice: 3000,
        amount: 18,
        totalPrice: 54000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "candy",
        unitPrice: 1000,
        amount: 320,
        totalPrice: 320000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "beer",
        unitPrice: 5000,
        amount: 90,
        totalPrice: 450000,
        casherId: 1,
        date: '2022-11-01'
    }, 
    {
        productName: "milk",
        unitPrice: 3800,
        amount: 86,
        totalPrice: 326000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "cook",
        unitPrice: 3800,
        amount: 94,
        totalPrice: 357200,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "nogoo",
        unitPrice: 6000,
        amount: 50,
        totalPrice: 300000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "jims",
        unitPrice: 8000,
        amount:75,
        totalPrice: 600000,
        casherId: 1,
        date: '2022-11-01'
    },
    {
        productName: "davs",
        unitPrice: 3800,
        amount: 120,
        totalPrice: 456000,
        casherId: 1,
        date: '2022-11-01'
    },
];

console.log( '===  SHOP ===' );

let sum = 0;
for ( let i=0; i<data.length; i++) {
    sum = sum + data[i].totalPrice
}     console.log('Нийт борлуулалт:  ' + sum);

let sum2 = 0;
for ( let i=0; i<data.length; i++) {
    sum2 = sum2 + data[i].amount
}     console.log('Нийт борлуулагдсан бараа:  ' + sum2);

let sum3 = 0;
let count = 5;
for ( let i=0; i<data.length; i++) {
    // Math.max(amount[i])
    
}   
count = 0;
for ( let i=0; i<data.length; i++) {
    count= count + 1
    console.log(count , Math.max(data[i].amount));
}

// var max = arr[0];
// let maxValues = [];
for (let i = 1; i < data.length; i++) {
  if (data[i].amount > max) {
    max = data[i].amount; 
  }
}
console.log("Max is: " + max);
console.log("total five max values is: " + maxValues);



// console.log('Хамгийн их зарагдсан 5 бараа:  ' + Math.max(data[i].productName));


