let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";
let currentCell = 0;


for (i = 0; i < str.length; i++) {
    if (str[i] === ",") {
        // console.log('found a comma')
        currentCell++;

    } else if (str[i] === "\n") {
        // console.log ("found a new line")
        console.log(cell1, cell2, cell3, cell4);
        currentCell = 0;
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    } else if (currentCell == 0) {
        cell1 += str[i];
        // console.log(str[i])
    }
    else if (currentCell == 1) {
        cell2 += str[i];
        // console.log(str[i])
    }
    else if (currentCell == 2) {
        cell3 += str[i];
        // console.log(str[i])
    }
    else {
        cell4 += str[i];
        // console.log(str[i])
    }
    if (i === str.length - 1) {
        console.log(cell1, cell2, cell3, cell4);
    }
}

console.log('==============Part -1 Refactoring Old Code============');

let str1 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell = '';
let rows = [];

for (i = 0; i < str1.length; i++) {

    if (str1[i] === ',') {
        rows.push(cell);
        cell = '';
    } else if (str1[i] === '\n') {
        rows.push(cell);
        console.log(rows)
        rows = [];
        cell = '';

    } else {
        cell += str1[i];

    }
    if (i === str1.length - 1) {
        rows.push(cell);
        console.log(rows);
    }
}


console.log('================Part 2: Expanding Functionality==============');

rows = [];
cell = "";
let mainArr = [];
let colNums = [];
for (i = 0; i < str1.length; i++) {

    if (str1[i] === ',') {
        rows.push(cell);
        cell = '';
    } else if (str1[i] === '\n') {
        rows.push(cell);
        mainArr.push(rows);
        // console.log(rows);
        colNums.push(rows.length);
        rows = [];
        cell = '';

    } else {
        cell += str1[i];

    }
    if (i === str1.length - 1) {
        rows.push(cell);
        mainArr.push(rows);
        console.log(mainArr);
        colNums.push(rows.length);
        // console.log (colNums);
    }
}

console.log('=============Part 3: Transforming Data===========')

let header = mainArr.shift();
// console.log (header);
let newArr = [];

mainArr.forEach((line, index) => {

    const obj = {};

    header.forEach((el, i) => {

        //   console.log(i, el);

        el = el.toLowerCase();

        obj[el] = line[i];

        //   console.log(index, line, i, el, obj);

    });

    newArr.push(obj);

    if (index == mainArr.length - 1) {

        console.log(newArr);

    }
});

console.log('=====================Part 4: Sorting and Manipulating Data==========')

let copyNewArr = newArr.concat();

copyNewArr.pop(); 
console.log('Removed the last element in the sorted array')
console.log(copyNewArr);
copyNewArr.splice(1, 0, { id: "48", name: "Barry", occupation: "Runner", age: "25" });
console.log('Added new element at index 1');
console.log(copyNewArr);
console.log('Added new element at the end');
copyNewArr.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
console.log(copyNewArr);

console.log('Calculated the average age of the above all age elements');

let ageList = [];
let sum = 0;
let avgAge = 0;

for (const key in copyNewArr) {
    let ageNum = Number(copyNewArr[key].age);
    ageList.push(ageNum);
    sum += ageNum;
}
avgAge = sum / ageList.length;
console.log(`Average age:`+ avgAge);

console.log('====================Part 5: Full Circle==========')

let newStr = '';
const dataArray = copyNewArr;

// Get headers from first object and join with commas
const headers = Object.keys(dataArray[0]);
newStr += headers.join(',') + '\\n';
// console.log(headers);
// console.log (newStr);

// Add each row of data
dataArray.forEach(obj => {
    const row = Object.values(obj).join(',');
    newStr += row + '\\n';
    // console.log(row);
});


console.log('New String in CSV format:\n', newStr);
console.log('====================================================');

 