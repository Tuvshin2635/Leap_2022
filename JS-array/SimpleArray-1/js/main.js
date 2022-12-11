/** 
1. console.log() ашиглан array хэвлэх
2. Array дахь компаниудын length хэвлэх
3. Эхний компани, дунд болон сүүлчийн компанийг хэвлэх
4. Компани бүрийг хэвлэх
5. Компанийн нэр тус бүрийг нэг нэгээр нь том үсгээр сольж хэвлэж гарга
6. Array - г өгүүлбэр болгон хэвлэ: Facebook, Google, Microsoft, Apple, 
    IBM, Oracle, Amazon зэрэг мэдээллийн технологийн томоохон компаниуд.. 
*/

console.log('= = = = = = = = = #1 = = = = = = = = = = = = = = = =');
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);

console.log('= = = = = = = = = #2 = = = = = = = = = = = = = = = =');

console.log(' Length : ', itCompanies.length);

console.log('= = = = = = = = = = = = #3 = = = = = = = = = = = = = = = =');

console.log(itCompanies[0]);
console.log(itCompanies[6]);

console.log('= = = = = = = = = = = = #4 = = = = = = = = = = = = = = = =');

for (i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
}
console.log('= = = = = = = = = = = = #5 = = = = = = = = = = = = = = = =');

for (i=0;  i<itCompanies.length; i++) {
    console.log(itCompanies[i].toLocaleUpperCase());
}

console.log('= = = = = = = = = = = = #6 = = = = = = = = = = = = = = = =');
 
console.log(itCompanies.join(` `) + `зэрэг мэдээллийн технологийн томоохон компаниуд юм.`);