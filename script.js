let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let cell1 ="";
let cell2 ="";
let cell3 ="";
let cell4 ="";
let currentCell= 0;


for (i=0; i<str.length; i++){
    if (str[i]===","){
        // console.log('found a comma')
        currentCell++;

    } else if(str[i]==="\n"){
        // console.log ("found a new line")
        console.log(cell1, cell2, cell3, cell4);
        currentCell=0;
        cell1 = '';
        cell2 = '';
        cell3 = '';
        cell4 = '';
    } else if(currentCell==0){
        cell1+= str[i];
        // console.log(str[i])
    }
    else if(currentCell==1){
        cell2+= str[i];
        // console.log(str[i])
    }
    else if(currentCell==2){
        cell3+= str[i];
        // console.log(str[i])
    }
    else {
        cell4+= str[i];
        // console.log(str[i])
    }
    if(i=== str.length-1){
        console.log(cell1, cell2, cell3, cell4);
    }
}

console.log ('==============Part -1 Refactoring Old Code============');

let str1 = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';

let cell = '';
let rows = [];

for (i=0; i<str1.length; i++){

    if(str1[i]===','){
        rows.push(cell);
        cell ='';
    } else if(str1[i]==='\n'){
        rows.push(cell);
        console.log(rows)
        rows =[];
        cell = '';
        
    } else {
        cell+= str1[i];

    }
    if(i===str1.length-1){
        rows.push(cell);
        console.log(rows);
    }
}


console.log ('================Part 2: Expanding Functionality==============');

rows =[];
cell = "";
let mainArr = [];
let colNums = [];
for (j=0; j<str1.length; j++){

    if(str1[j]===','){
        rows.push(cell);
        cell ='';
    } else if(str1[j]==='\n'){
        rows.push(cell);
        mainArr.push(rows);
        // console.log(rows);
        colNums.push(rows.length);
        rows =[];
        cell = '';
        
    } else {
        cell+= str1[j];

    }
    if(j===str1.length-1){
        rows.push(cell);
        mainArr.push(rows);
        console.log(mainArr);
    }


    // console.log(colNums);
    // if(===str1.length-1){
    //     rows.push(cell);
    //     console.log(rows);
    // }
}
