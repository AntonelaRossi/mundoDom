const clientId = '1bdf77874d539b78c9ed';
const clientSecret = '4a1769b47ff7b03618226f664593537acba3e3ba';
const cantidadDeRepos = 5;

// `https://api.github.com/users/${user}?
// client_id=${clientId}&client_secret=${clientSecret}`

// `https://api.github.com/users/${user}/repos?
// per_page=${cantidadDeRepos}&sort=${reposSort}&client_id=
// ${clientId}&client_secret=${clientSecret}`


//estas las rellene para ver el json
// https://api.github.com/users/AntonelaRossi?client_id=1bdf77874d539b78c9ed&client_secret=4a1769b47ff7b03618226f664593537acba3e3ba


// https://api.github.com/users/AntonelaRossi/repos?
// per_page=5&sort=${reposSort}&client_id=
// 1bdf77874d539b78c9ed&client_secret4a1769b47ff7b03618226f664593537acba3e3ba

const input = document.querySelector("#search-form input");

function traerDatos () {
    //me guardo el valor del input
    
    const user = input.value

    //if (user.length >0)
    //if (user !=="")
    if (user) {
        //guardo la url en una const para que quede mas prolijo el fetch
        const url = `https://api.github.com/users/${user}?client_id=${clientId}&client_secret=${clientSecret}`
        const urlRepos = `https://api.github.com/users/${user}/repos?per_page=${cantidadDeRepos}&client_id=${clientId}&client_secret=${clientSecret}`

        //hacemos los dos fetchs en el if, para que hagga las busquedas en simultaneo
        //el primer fetch es el de la cantidad de repos
        fetch(urlRepos)
            .then(res => res.json())
            .then(repos => {

                const repositoriesList = [];
                repos.forEach(function(repo) {
                    
                    const repoName = repo.full_name.replace(`${repo.owner.login}`,"");


                    repositoriesList.push(`<a href=${repo.html_url} target="_blank" class="list-group-item list-group-item-action">${repoName}</a>`)

                });

                document
                    .querySelector("#profile .list-group")
                    .innerHTML = repositoriesList.join("");
            })

        fetch(url)
            .then(res => res.json())
            .then(userInfo => { //userInfo es una variable, le pongo el nombre que quiero. en el tp data se llama especificamente asi
                // console.log(userInfo);

                document
                    .querySelector("#profile .card .card-img-top") // seamos ESPECIFICSSS
                    .src = userInfo.avatar_url;

                document
                    .querySelector("#profile .card .card-title")
                    .innerHTML = userInfo.login;

                document
                    .querySelector("#profile .card a")
                    .setAttribute("href", userInfo.html_url)
                    console.log(userInfo)

                document
                    .querySelector("#profile .badges #public-repos")
                    .innerHTML = userInfo.public_repos;
                console.log(userInfo);
                document
                    .querySelector("#profile .badges #followers")
                    .innerHTML = userInfo.followers;

                    console.log(followers)

                document
                    .querySelector("#profile .badges #following")
                    .innerHTML = userInfo.following;

            });
    }
}

document
    .querySelector("#search-form")
    .addEventListener("submit", function (e) {
        e.preventDefault();
        traerDatos();
    });



//esto lo comento porque arriba con SUBMIT resuelvo todo
// const input = document.querySelector("#search-form input");

// document
//     .querySelector("#search-form input")
//     //puede ser onclick tb
//     .addEventListener("keypress", function (e) {

//         // if(e.charCode) etc
//         if(e.keyCode === 13) {
//             e.preventDefault();

//             //me guardo el valor del input
//             const user = input.value;
//             traerDatos();

//         }
//     })


