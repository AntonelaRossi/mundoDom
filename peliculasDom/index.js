
const apiKey = "aaac14e6ce98e6590f7e57b4e08e1c14";

const input = document.querySelector("input");
const body = document.querySelector("body")
const agarrarModal = document.getElementById("modal");
const agarrarCruz = document.getElementById("cerrar-modal")

//buscador
let paginaActual = 1;

//para la home
const popular = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const topRated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const upcoming = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const nowPlaying = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

// para las paginas internas
const popularTodas = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
const topRatedTodas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
const upcomingTodas = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
const nowPlayingTodas = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`

//para las paginas internas
const banner = document.querySelector("#banner")
const contenedorPeliculas = document.querySelector("#contenedor-peliculas")

// selecciono los divs donde estan creadas las ul y los lis
const divPopular = document.querySelector(".popular")
const divTopRated = document.querySelector(".top-rated")
const divUpcoming = document.querySelector(".upcoming")
const divNowPlaying = document.querySelector(".now-playing")
const divResultados = document.querySelector(".buscador")

const categoriaPopular = document.querySelector("#pelis-popular")
const categoriaTopRated = document.querySelector("#pelis-topRated")
const categoriaUpcoming = document.querySelector("#pelis-upcoming")
const categoriaNowPlaying = document.querySelector("#pelis-nowPlaying")

//atajos
const inicio = document.querySelector(".loguito")
const loadMore = document.querySelectorAll("#load-more")

// ONCLICK
// selecciono de la NAV BAR los botones
const elementosPopular = document.querySelector("#popular")
const elementosTopRated = document.querySelector("#top-rated")
const elementosUpcoming = document.querySelector("#upcoming")
const elementosNowPlaying = document.querySelector("#now-playing")

const viewPopular = document.querySelector(".view-popular")
const viewTopRated = document.querySelector(".view-top-rated")
const viewUpcoming = document.querySelector(".view-upcoming")
const viewNowPlaying = document.querySelector(".view-now-playing")

//FUNCIONES

// volver a la home
function homeActive() {
    
    

}

inicio.addEventListener("click", function () {
    homeActive()
})


//trae modal 
function modal() {
    document
        .querySelectorAll("li.lista-peliculas")
        .forEach(function (li) {

            li.addEventListener("click", function (e) {
                const peliculaId = e.currentTarget.id;

                fetch(`https://api.themoviedb.org/3/movie/${peliculaId}?api_key=${apiKey}`)
                    .then(res => res.json())
                    .then(data => {

                        document.querySelector('#modal .title').innerHTML = data.original_title;
                        document.querySelector('#modal .overview').innerHTML = data.overview;
                        document.querySelector('#modal .posterModal').src = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
                        document.querySelector('#modal .backdropModal').src = `https://image.tmdb.org/t/p/w500${data.backdrop_path}`;
                        document.querySelector('#modal .genresInfo').innerHTML = data.genre_id;
                        document.querySelector('#modal .yearInfo').innerHTML = data.release_date;

                        agarrarModal.classList.remove("displayNone")
                        agarrarModal.classList.add("displayActive")
                        agarrarCruz.classList.remove("displayNone")
                        agarrarCruz.classList.add("displayActive")

                    })
            })
        })

}


//trae peliculas a la Home
function traerPeliculas(url, categoria) {

    fetch(url)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            const ul = document.querySelector(categoria)
            const primerasPelis = data.results.slice(0, 5);

            let lis = '';

            for (let i = 0; i < primerasPelis.length; i++) {

                lis +=
                    `<li id=${primerasPelis[i].id} class= "lista-peliculas" > 
                        <img src= "https://image.tmdb.org/t/p/original${primerasPelis[i].poster_path}" class="peliculaImg" >
                        <p>${primerasPelis[i].title}</p>
                        </a>
                    </li>
                    `;
            }

            ul.innerHTML = lis;
            modal()


        });
}

// llamo funcion para llenar la home
traerPeliculas(popular, "#pelis-popular")
traerPeliculas(topRated, "#pelis-topRated")
traerPeliculas(upcoming, "#pelis-upcoming")
traerPeliculas(nowPlaying, "#pelis-nowPlaying")


//cierra modal con cruz
function cerrar() {
    // agarrarCruz.classList.remove("displayActive")
    agarrarCruz.classList.add("displayNone")
    agarrarModal.classList.add("displayNone")
}

agarrarCruz.onclick = cerrar

//apago home
function homeOff() {
    banner.classList.add("displayNone")
    categoriaPopular.classList.add("displayNone")
    categoriaTopRated.classList.add("displayNone")
    categoriaUpcoming.classList.add("displayNone")
    categoriaNowPlaying.classList.add("displayNone")
}

function homeOffResultados() {
    divPopular.classList.add("displayNone")
    divTopRated.classList.add("displayNone")
    divUpcoming.classList.add("displayNone")
    divNowPlaying.classList.add("displayNone")
    divResultados.style.marginTop = "100px"
}

//mostrar home
function homeActive() {
    console.log("cositas ricas")
    banner.classList.remove("displayNone")
    banner.classList.add("displayActive")
    document.querySelectorAll(".view-on-home").forEach(el => el.classList.add("displayNone"))
    categoriaPopular.classList.add("displayActive")
    categoriaTopRated.classList.add("displayActive")
    categoriaUpcoming.classList.add("displayActive")
    categoriaNowPlaying.classList.add("displayActive")
}


function loadMoreOn() {

    for (let i = 0; i < loadMore.length; i++) {
        loadMore[i].classList.remove("displayNone");
        
    }
 
    // loadMore.classList.add("displayActive")
}

// traer peliculas por categoria tocando la nav-bar
function traerCategorias(urlInternas, categoriaElegida, divHide1, divHide2, divHide3, divHide4, marginSuperior) {

    homeOff()

    fetch(urlInternas)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            const ul = categoriaElegida

            let lis = '';
            for (let i = 0; i < data.results.length; i++) {

                lis +=
                    `<li id=${data.results[i].id} class= "lista-peliculas" > 
                        <img src= "https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="peliculaImg" >
                        <p>${data.results[i].title}</p>
                        </a>
                    </li>
                    `;
            }

            ul.innerHTML = lis
            ul.classList.remove("displayNone")
            ul.classList.add("displayActive")
            marginSuperior.style.marginTop = "70px"

            divHide1.classList.add("displayNone")
            divHide2.classList.add("displayNone")
            divHide3.classList.add("displayNone")
            divHide4.classList.add("displayNone")
            modal() //activa onclick de modal
            loadMoreOn() //muestra el boton 

            //load more
            for (let i = 0; i < loadMore.length; i++) {
                
                
           
            loadMore[i].addEventListener("click", function () {

                paginaActual = paginaActual + 1
                console.log(paginaActual)

                //aca vuelvo a ser el fetch para las proximas pelis
                
                fetch(`${urlInternas}&page=${paginaActual}`)
                    .then(res => res.json())
                    .then(data => {
                    const ul = categoriaElegida
            

                    let lis = '';
                    for (let i = 0; i < data.results.length; i++) {

                    lis +=
                        `<li id=${data.results[i].id} class= "lista-peliculas" > 
                            <img src= "https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="peliculaImg" >
                            <p>${data.results[i].title}</p>
                            </a>
                        </li>
                        `;
                    }

                    ul.innerHTML = lis
                    ul.classList.remove("displayNone")
                    ul.classList.add("displayActive")
                    marginSuperior.style.marginTop = "70px"

                    divHide1.classList.add("displayNone")
                    divHide2.classList.add("displayNone")
                    divHide3.classList.add("displayNone")
                    divHide4.classList.add("displayNone")
                    modal()
    
                    })

            })
        }
})
}

// onclick en cada boton de la nav, le aplico la funcion que las trae
elementosPopular.onclick = () => traerCategorias(popularTodas, categoriaPopular, divTopRated, divUpcoming, divNowPlaying, divResultados, divPopular)
elementosTopRated.onclick = () => traerCategorias(topRatedTodas, categoriaTopRated, divPopular, divUpcoming, divNowPlaying, divResultados, divTopRated)
elementosUpcoming.onclick = () => traerCategorias(upcomingTodas, categoriaUpcoming, divPopular, divTopRated, divNowPlaying, divResultados, divUpcoming)
elementosNowPlaying.onclick = () => traerCategorias(nowPlayingTodas, categoriaNowPlaying, divPopular, divTopRated, divUpcoming, divResultados, divNowPlaying)
// onclick en cada view all. tiene que haber una forma mas felizzzzzzzzzzz
viewPopular.onclick = () => traerCategorias(popularTodas, categoriaPopular, divTopRated, divUpcoming, divNowPlaying, divResultados, divPopular)
viewTopRated.onclick = () => traerCategorias(topRatedTodas, categoriaTopRated, divPopular, divUpcoming, divNowPlaying, divResultados, divTopRated)
viewUpcoming.onclick = () => traerCategorias(upcomingTodas, categoriaUpcoming, divPopular, divTopRated, divNowPlaying, divResultados, divUpcoming)
viewNowPlaying.onclick = () => traerCategorias(nowPlayingTodas, categoriaNowPlaying, divPopular, divTopRated, divUpcoming, divResultados, divNowPlaying)


// BUSCADOR INPUT
input.addEventListener("keyup", function () {
    console.log("keyup", input.value)
    const ul = document.querySelector("#pelis-buscador")

    console.log(ul)

    if (input.value) {
        const textoBusqueda = input.value;
        const textoBusquedaMin = textoBusqueda.toLowerCase();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${textoBusquedaMin}&page=${paginaActual}`)
            .then(res => res.json()) // interprete los datos como json
            .then(data => {
                console.log(data, input.value)

                let lis = '';

                for (let i = 0; i < data.results.length; i++) {

                    lis +=
                        `<li id=${data.results[i].id} class= "lista-peliculas" > 
                        <img src= "https://image.tmdb.org/t/p/original${data.results[i].poster_path}" class="peliculaImg" >
                        <p>${data.results[i].title}</p>
                        </a>
                    </li>
                    `;
                    console.log("algo")
                }
                ul.innerHTML = lis;
                ul.classList.remove("displayNone")
                ul.classList.add("displayActive");

                homeOff()
                homeOffResultados()
                modal()
            });
    }
    // este else tiene que redirigirme a la home
    else { 
         homeActive()
    }
});

// paginaActual es una variable numérica que empieza en 1 y vamos a ir 
// incrementando cuando hacemos click en LOAD MORE. Al incrementar, estamos 
// "avanzando" a la siguiente página de películas, por lo que volvemos a hacer 
// el pedido a la misma dirección de las APIs para pedir las próximas 20 películas 
// en la categoría.


