// este es el orden de los eventos
// keydown el momento en el que la persona empieza a teclear  onkeydown
// keypress aca la presiona   onkeypress
// keyup aca dejo de presionar   onkeyup

// en ONKEYUP esta siempre actualizado la info (el valor final) ONKEYDOWN y ONKEYPRESS sse ejecuta antes

// const input = document.getElementById("search");

// input.onkeydown = function () {
//     console.log("key down", input.value)
// } 

// input.onkeypress =  function () {
//     console.log("key press", input.value)
// }

// input.onkeyup = function () {
//     console.log("key up", input.value)
// }



// 1- en el input agregar onkeyup
// 2-obtener lo que escribimos en el input
// 3 generame la URL
// 4 fetch () devuelve una promise
// 4.1 res.json()
// 4.2 hacer un for por todas las pelis que me decuelve la api 
// 4.3 por cada peli que vamos iterando creamos los lis
// 4.4 agregar los lis a la UL


// https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e&query=

const input = document.getElementById("autocomplete-input");

input.onkeyup = function () {
    console.log("key up", input.value)
    const ul = document.querySelector('ul');  //ul#autocomplete-results

    if (input.value) {

        fetch(`https://api.themoviedb.org/3/search/movie?api_key=a70dbfe19b800809dfdd3e89e8532c9e`)
            .then(res => res.json()) // interprete los datos como json
            .then(data => {
                console.log(data, input.value)

                ul.style.display = "block";
                let lis = '';

                for (let i = 0; i < data.results.length; i++) {

                    lis +=
                        `
                        <li>
                            <p>${data.results[i].title}</p>
                        </li>
                        `;
                    console.log("algo")
                }

                ul.innerHTML = lis;
            });
    } else {
        ul.style.display = "none";


    }

    // esto es para seleccionar con click!
    document
        .querySelectorAll('li.list-item')
        .forEach(function (li) {
            li.addEventListener('click', function (e) {
                const movieId = e.target.id //target te dice el elemento donde hice click
                input.value = e.target.innerHTML;
                ul.style.display = 'none';

                fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`)
                    .then(res => res.json()) // interprete los datos como json
                    .then(data => {


                    })
                    })
            })







        }





