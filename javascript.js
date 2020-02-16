var texto = document.querySelector('#contenido');

function traer() {
    fetch('datos.json')
        .then(res => res.json())
        .then(datos => {
            // texto.innerHTML = `${datos}`;
            tabla(datos);
        })
}

function tabla(datos) {
    texto.innerHTML = '';
    for (let i of datos) {
        // console.log(i)
        texto.innerHTML += `
            <tr>
                <td>${i.nombre}</td>
                <td>${i.precio}</td>
                <td>${i.tipo}</td>
              </tr>


        `
    }
}