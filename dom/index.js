const input = document.querySelector('#search');

// obtengo todos los elementos que necesito modificar
const title = document.querySelector('.movie-info .title');
const rated = document.querySelector('#rated');
const year = document.querySelector('#year');
const genre = document.querySelector('#genre');
const description = document.querySelector('.movie-info .description');
const writtenBy = document.querySelector('.movie-info .written-by span');
const directedBy = document.querySelector('.movie-info .directed-by span');
const starring = document.querySelector('.movie-info .starring span');
const image = document.querySelector('#movie img');

input.addEventListener('keypress', function (event) {

    if (event.keyCode === 13) {

        const movieName = input.value;

        const movieLower = movieName.toLowerCase();

        fetch(`https://www.omdbapi.com/?apikey=2fb7569a&t=${movieName}`)

            .then(res => res.json()) 
            .then(movie => { 
                
                title.innerText = movie.Title;
                rated.innerText = movie.Rated;
                year.innerText = movie.Year;
                genre.innerText = movie.Genre;
                description.innerText = movie.Plot;
                writtenBy.innerText = movie.Writer;
                directedBy.innerText = movie.Director;
                starring.innerText = movie.Actors;

                image.src = movie.Poster;

            })

    }

})