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
            loadMore.addEventListener("click", function () {

                paginaActual = paginaActual + 1
                console.log(paginaActual)

                //aca vuelvo a ser el fetch para las proximas pelis
                
                fetch(fetch(`${urlInternas}&page=${paginaActual}`))
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
})
}

// onclick en cada boton de la nav, le aplico la funcion que las trae
elementosPopular.onclick = () => traerCategorias(popularTodas, categoriaPopular, divTopRated, divUpcoming, divNowPlaying, divResultados, divPopular)
elementosTopRated.onclick = () => traerCategorias(topRatedTodas, categoriaTopRated, divPopular, divUpcoming, divNowPlaying, divResultados, divTopRated)
elementosUpcoming.onclick = () => traerCategorias(upcomingTodas, categoriaUpcoming, divPopular, divTopRated, divNowPlaying, divResultados, divUpcoming)
elementosNowPlaying.onclick = () => traerCategorias(nowPlayingTodas, categoriaNowPlaying, divPopular, divTopRated, divUpcoming, divResultados, divNowPlaying)