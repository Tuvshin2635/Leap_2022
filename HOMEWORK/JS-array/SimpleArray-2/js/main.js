/** 
1. Array - ын хувьсагчийг itCompanies гэж зарлаж, Facebook, 
Google, Microsoft, 
    Apple, IBM, Oracle, Amazon зэрэг анхны утгыг оруулна уу.
2. Array - аас эхний 3 компанийг хайчилж ав
3. Array - аас сүүлийн 3 компанийг хайчилж ав
4. Мэдээллийн технологийн дунд компани эсвэл компаниудыг arrey - аас хайчилж ав
5. Эхний мэдээллийн технологийн компанийг array - аас хас
6. Сүүлийн мэдээллийн технологийн компанийг array - аас хас
*/

console.log('= = = = = = = = = #1 = = = = = = = = = = = = = = = =');

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);


console.log('= = = = = = = = = #2 = = = = = = = = = = = = = = = =');
for ( i=0; i<3; i++) {
    console.log(itCompanies[i]);
}

console.log('= = = = = = = = = = = = #3 = = = = = = = = = = = = = = = =');
console.log(`Lenght of Companies ` + itCompanies.length);
for ( i=4; i<itCompanies.length; i++) {
    console.log(itCompanies[i]);
}

console.log('= = = = = = = = = = = = #4 = = = = = = = = = = = = = = = =');
let itCompanies3 = itCompanies.slice(1,5);
console.log(itCompanies3);


console.log('= = = = = = = = = = = = #5 = = = = = = = = = = = = = = = =');
let itCompanies2 = itCompanies.slice(1);
console.log(itCompanies2);

console.log('= = = = = = = = = = = = #6 = = = = = = = = = = = = = = = =');


