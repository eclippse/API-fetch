var texto = document.querySelector('#contenido');

function traer(){
    fetch('texto.txt')
    .then(data => data.text())
    .then(data =>{
        texto.innerHTML = `${data}`;
    })
}