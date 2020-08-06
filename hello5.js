const firstName = "justin";
const lastName = "TimberLake";
const fullName = firstName + " " + lastName + " wow";
const fullName2 = `${firstName} ${99+99} wow`
const multiLine = `I miss you 
no. I don't need you
Baily road e dorkar nai.`
// ===========

const resulta = (num, bam) => num + bam * 2;
const wow = resulta(50, 60);
// console.log(wow)
const doubleIt = (x, y) => {
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}
const result3 = doubleIt(7, 5);
// console.log(result3);
// =========================

const ages = [12, 23, 44, 33];
const ages2 = [55, 83, 90, 34, 23];
const ages3 = [34, 43, 54, 12, 34, 23];
const allAges = ages.concat(ages2).concat(ages3);
// console.log(allAges);
const allAges2 = [...ages, ...ages2, ...ages3];
// console.log(allAges2);
// =====================

const business = 650;
const minister = 450;
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
// console.log(maximum);
// =======================
const takaPoisa = [650, 1200, 450, 350, 250, 150, 100, 50];
const maximumTaka = Math.max(...takaPoisa);
console.log(maximumTaka);
