const cantidadNumeros = document.getElementById('cantidadNumeros');
const subtitle = document.querySelector('.subtitle');
const labelInput = document.querySelector('.labelInput');
const mainSection = document.querySelector('.mainSection');
const generationZone = document.querySelector('.generationZone');
const buttonNext = document.querySelector('.buttonNext');
const buttonProcess = document.querySelector('.buttonProcess');
const buttonReloadPage = document.querySelector('.reloadPage');
const buttonSection = document.querySelector('.buttonSection');
const lastSectionAnswer = document.querySelector('.lastSectionAnswer');
buttonNext.addEventListener('click',showingInputs);
buttonReloadPage.addEventListener('click',reloadPage);
buttonProcess.addEventListener('click',proccesOfPage);

function showingInputs () {
    const cantidadN = parseInt(Number(cantidadNumeros.value));
    if(cantidadN != 0 && cantidadN >= 1 && cantidadN <=50){
        for (i=1; i<=cantidadN; i++){
            const label = document.createElement('label');
            const p = document.createElement('p');
            const input = document.createElement('input');
            label.appendChild(p);
            p.innerText = 'Número ' + i;
            label.classList.add(`label${i}`);
            label.setAttribute('for',`number${i}`);
            input.setAttribute('id',`number${i}`)
            generationZone.append(label,input);
        }
        buttonNext.classList.add('inactive');
        buttonProcess.classList.remove('inactive');
        buttonReloadPage.classList.remove('inactive');
        generationZone.classList.remove('inactive');
        cantidadNumeros.classList.add('inactive');
        labelInput.classList.add('inactive');
        subtitle.classList.add('inactive');
        generationZone.classList.add('generationZoneStyles');
        
    } else {
        alert('Ingrese por favor la cantidad de datos requerida!')
    }
}

function reloadPage () {
    location.reload();
}

function proccesOfPage () {
    
    const buttonMedia = document.querySelector('.buttonMedia');
    const buttonMediana = document.querySelector('.buttonMediana');
    const buttonModa = document.querySelector('.buttonModa');
    const buttonOrder = document.querySelector('.buttonOrder');
    const answerSection = document.createElement('p');

    buttonProcess.classList.add('inactive');

    buttonMedia.addEventListener('click',calcularMedia);
    buttonMediana.addEventListener('click', calcularMediana);
    buttonModa.addEventListener('click', calcularModa);
    buttonOrder.addEventListener('click', calcularOrder);
    const array = [];

    buttonSection.classList.remove('inactive');
    buttonSection.classList.add('displaygrid');
    generationZone.classList.add('inactive');
    generationZone.classList.remove('generationZoneStyles');
    
    
    const cantidadN = parseInt(Number(cantidadNumeros.value));
    for (i=1; i<=cantidadN; i++){
        let element = document.getElementById(`number${i}`)
        array.push(Number(element.value));
    }
    
   
    function calcularMedia () {
       const media = platziMath.mediaAritmetica(array);
       lastSectionAnswer.appendChild(answerSection);
       answerSection.innerText = 'La media es: ' + media;
    }  
    function calcularMediana () {
        const mediana = platziMath.calcularMediana(array);
        lastSectionAnswer.appendChild(answerSection);
        answerSection.innerText = 'La mediana es: ' + mediana;
    }

    function calcularModa () {
        const moda = platziMath.calcularModa(array);
        lastSectionAnswer.appendChild(answerSection);
        answerSection.innerText = 'La moda es: ' + moda;
    }

    function calcularOrder () {
        const orderList = platziMath.ordenarLista(array);
        lastSectionAnswer.appendChild(answerSection);
        answerSection.innerText = 'La lista ordenada es: [' + orderList + ']';
    }
}