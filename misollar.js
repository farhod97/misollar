/*
13-misol
Kun boshidan boshlab 8999 sekund vaqt o‘tdi. Kun boshidan boshlab
qancha soat, minut va sekund o‘tganini aniqlovchi dastur tuzilsin.
Misol uchun:
n = 3750
Natija: 1 soat 2 minut 30 sekund
*/
// let s = 8999
// let min_sek = s%3600
// let soat = (s-min_sek)/3600
// let sek = min_sek%60
// let min = (min_sek-sek)/60
// console.log(soat, " soat ", min, " minut ", sek, " sekund.");

//12-misol
// let s=205
// let sek = s%60
// let min = (s-sek)/60
// console.log(min, "min", sek, "sekund");

/*
9) Uch xonali son berilgan. Uni raqamlarini teskari tartibda yozishdan
hosil bo‘lgan sonni aniqlovchi dastur tuzilsin.
Masalan: n = 123, Natija n = 321 
*/
// let n = 123 //321
// let r3 = n%10 + ""
// let r2 = (n-r3)/10%10 + ""
// let r1 = (n-n%100)/100 + ""
// let q = r3+r2+r1
// console.log(q);

// let uch

// =478
// let uch=xona%100%10
// let birlik=uch-xona%100/10
// let yuzlik=uch-xona/100
// let yigindi=yuzlik+onlik+birlik
// console.log("natija","yog'indi")


let n = 986
let r3 = n%10+""
let r2 = (n-r3)/10%10+""
let r1 = (n-n%100)/100+""
let q = r2+r3+r1
console.log(q);
