//Getting the html elements by their ids
const charEl = document.getElementById('char-el');
const numEl = document.getElementById('num-el');
const formEl =document.getElementById('form-el');
const upEl = document.getElementById('up-el');
const noEl = document.getElementById('no-el');
const symEl = document.getElementById('sym-el');
const pwdEl = document.getElementById('pwd-el');
const inpEl = document.getElementById('inp-el');
const inpnumEl = document.getElementById('inpnum-el');


//Initializing password character array
let chars=[];


//initializing arrays of letters,numbers and symbols
const upperCase= pushArray(65,90);
const lowerCase = pushArray(97, 122);
const numbers = pushArray(48, 57);
const symbols = pushArray(33, 47).concat(
    pushArray(58, 64)
).concat(
    pushArray(91, 96)
).concat(
    pushArray(123, 126)
);


//calling the generate password function when the form element is submitted

formEl.addEventListener('submit', e => {
        e.preventDefault();
        const charNum = numEl.value;
        const includeUppercase = upEl.checked;
        const includeNumbers = noEl.checked;
        const includeSymbols = symEl.checked;
        const password = generatePassword(charNum, includeUppercase, includeNumbers, includeSymbols);
        pwdEl.innerText = password;
})



//function to generate the password using ASCII codes
function generatePassword(charNum, includeUppercase, includeNumbers, includeSymbols){
    let temp = lowerCase;
    if (includeUppercase) temp= temp.concat(upperCase);
    if (includeNumbers) temp = temp.concat(numbers);
    if (includeSymbols) temp = temp.concat(symbols);
    const pwsdChars = [];
    if(chars.length>charNum){
        alert("The word is too long!! Kindly change the word or increase the number of characters");
    }
    else{
        if (chars.length != 0) {
            for (let i = 0; i < chars.length; i++) {
                pwsdChars.push(chars[i]);
            }
        }
    }

    for(let i=0;i<charNum;i++){
        const pwsdAscii = temp[Math.floor(Math.random()*temp.length)+1];
        pwsdChars.push(String.fromCharCode(pwsdAscii));
    }
    return pwsdChars.join('');
} 


//push the ASCII codes array comprising of letters,numbers and symbols
function pushArray(first,last){
    const arr=[];
    for(let i=first;i<=last;i++)
        {
            arr.push(i);
        }
    return arr;
}


//to check the js is connected to the html document
console.log("HI");

//to add the number and word to the password 
const addString = function (e) {
    console.log(e.target.value);
    let str = e.target.value;
    for (let i = 0; i < str.length; i++) {
        chars.push(str[i]);
    }
    console.log(chars);
};

//adding the event listener to the slider and number
charEl.addEventListener('input',syncValue);
numEl.addEventListener('input', syncValue);
inpEl.addEventListener('input', addString);
inpnumEl.addEventListener('input', addString);





//to sync the values of range slider and number
function syncValue(e){
    const val=e.target.value;
    charEl.value=val;
    numEl.value = val;
}
