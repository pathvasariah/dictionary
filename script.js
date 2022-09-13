let url = 'https://significado.herokuapp.com/v2/';
let inputTxt = document.querySelector('#input');
let buttonSearch = document.querySelector('#button_container');
let result = document.querySelector('#result_container');
buttonSearch.addEventListener('click', handleSearch);

function handleSearch(){
    let word = inputTxt.value;
    if(word == ''){
        result.innerHTML = `<p id="result">Escreva alguma palavra no campo buscar!</p>`;
    }else{
        //Implementar separação silábica.
            // fetch(`${url}silabas/${word}`)
            //     .then((res) => res.json())
            //     .then((syllable) => {
            //         result.innerHTML = `<h3 id="word_container">${syllable.join('-')}</h3>`; 
            //     }).catch(() => {
            //         result.innerHTML = `<p id="result">Não foi possível encontrar esta palavra!</p>`;
            //     });

        fetch(`${url}${word}`)
            .then((res) => res.json())
            .then((data) => {
                result.innerHTML = `<h3 id="word_container">${word}</h3>
                <p id="result"><span>1. </span>${data[0].meanings[0]}</p>
                <p id="result"><span>2. </span>${data[0].meanings[1]}</p>
                <p id="result"><span>3. </span>${data[0].meanings[2]}</p>
                <p id="result"><span>4. </span>${data[0].meanings[3]}</p>
                <p id="result"><span>5. </span>${data[0].meanings[4]}</p>`;
            }).catch(() => {
                result.innerHTML = `<p id="result">Não foi possível encontrar esta palavra!</p>`;
            });
    }
}