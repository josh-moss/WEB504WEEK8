/* NOTE - When nothing is passed in id, returns null.
const p = document.getElementById('Hello World');
console.log(p);
*/ 

let btn = document.getElementById('btnRadio');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let languages = document.getElementsByName('language');
    languages.forEach((language) => {
        if (language.checked) {
            output.innerText = `You code with: ${language.value}`;
        }
    });
});