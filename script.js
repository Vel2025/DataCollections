let str = 'ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26';
let cell1 ="";
let cell2 ="";
let cell3 ="";
let cell4 ="";
let currentCell= 0;
// for (i=0; i<str.length; i++){
//     console.log(str)
//     break;

// }

for (i=0; i<str.length; i++){
    if (str[i]===","){
        // console.log('found a comma')
        currentCell++;

    } else if(str[i]==="\n"){
        // console.log ("found a new line")
        console.log(cell1, cell2, cell3, cell4);
        currentCell=0;
        cell1 = 0;
        cell2 = 0;
        cell3 = 0;
        cell4 = 0;
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