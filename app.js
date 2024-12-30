//////////////////////Q1
let x="12345";



function _reverse(x){
    let rev="";
    for(let i=x.length-1;i>=0;i--){
        rev+=x[i];
        }
        return rev;
}
console.log(_reverse(x));
///////////////////////////Q2
function evenOdd(){
for(let i=0;i<=15;i++){
    if(i%2==0){
        console.log(i+"is even");
    }
    else{
        console.log(i+"is odd");
    }
}

}
evenOdd();
/////////////////////Q3


function SortArr(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
function convertToString(od_arr){
let n=od_arr.length;
let odChararr="";
for (let i=0;i<n;i++){
     

    odChararr+= String.fromCharCode( od_arr[i] + 96 );
}
return odChararr;
}


let alp="orange";
let arr=[];
for(let i =0;i<alp.length;i++){
    arr[i]=alp[i].toLowerCase().charCodeAt(0)-96;
}
let od_arr=SortArr(arr);
console.log(convertToString(od_arr));
/////////////////////////Q4
function enterdash(num) {
    let strnum = num.toString();
    let result = "";

    for (let i = 0; i < strnum.length; i++) {
        result += strnum[i];

        if (i < strnum.length - 1) {
            let currentDigit = parseInt(strnum[i]);
            let nextDigit = parseInt(strnum[i + 1]);

            if (currentDigit % 2 === 0 && nextDigit % 2 === 0) {
                result += "-";
            }
        }
    }

    return result;
}
let num = prompt("Enter a number for dashing between even numbers:");
let afterDashed = enterdash(num);
console.log(afterDashed);
//////////////////////////////////////////////////Q5
function AgeChecker(age){
let result=(age>=18)?"The user is Adult":"The user is Minor";
alert(result);

}
let age=prompt("Enter your age");
AgeChecker(age);

