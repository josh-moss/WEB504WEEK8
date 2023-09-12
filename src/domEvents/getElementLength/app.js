//NOTE - Get number of elements from specifc ID

let btn = document.getElementById('btnCount')
btn.addEventListener ('click', () => {
    let hTwoHeader = document.getElementsByTagName('h2')
    alert(`the number of tags are: ${hTwoHeader.length}`)
});

/* let btn = document.getElementById('btnRadio');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let languages = document.getElementsByName('language');
    languages.forEach((language) => {
        if (language.checked) {
            output.innerText = `You code with: ${language.value}`;
        }
    });
}); */