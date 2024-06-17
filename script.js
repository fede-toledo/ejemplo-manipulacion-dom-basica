// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.querySelector('#pid');
// const img = document.createElement('img');
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#resultado');
const form = document.querySelector('#formulario');

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input
// });

// h1.innerHTML = 'Patito';

// h1.classList.add('patito');
// h1.classList.remove('green');

// console.log(h1.getAttribute('pantalla'));

// h1.setAttribute('pantalla', 'red');

// input.value = '456';
// input.placeholder = 'Hola'


// img.setAttribute('src', 'https://cdn.prod.website-files.com/5e2f2362e479664d4e15718a/64f7508e3712732fbb8666d3_aivo-engageware-logo.svg');
// pid.append(img);


// btn.addEventListener('click', btnOnClick);

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event) {
//     // console.log({event});
//     event.preventDefault();
//     const sumaInputs = input1.value + input2.value;
//     pResult.innerText = `Resultado: ${sumaInputs}`;
// }

btn.addEventListener('click', sumarInputValues);

function sumarInputValues() {
    // console.log({event});
    // event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = `Resultado: ${sumaInputs}`;
}