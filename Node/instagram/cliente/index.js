//el codigo del cliente (html js y css) se escribe coompletamente a mano


// var comentario = document.querySelector("div")
// console.log(comentario)

// comentario.classList.add("rojo")


// var click = 1
// var likes = 0
// function rellenarCorazon() {
//     var iconos = document.querySelector("i")
//     iconos.classList.toggle("far")
//     click++;
//     if (click % 2 === 0) {
//         likes++;
//         console.log(likes)
//         var numeroDeLikes = document.getElementById("likes")
//         console.log(numeroDeLikes.innerHTML = likes)
//     } else if (click % 2 !== 0) {
//         likes--;
//         var numeroDeLikes = document.getElementById("likes")
//         console.log(numeroDeLikes.innerHTML = likes)
//         iconos.classList.toggle("far")
//     }
// }
// iconos.classList.toggle("far")



//esto hicismos con Mari el jueves

// fetch("http://localhost:3000/api/posteos")
//     .then(res => res.json())
//     .then(function (posteos) {
//         return posteos.map(function (unPosteo) {
//             return ` <div class="caja">           
//             <div class="bla">
//                 <img class=img src="${unPosteo.img}" alt="">
//             </div>
//             <i onclick="rellenarCorazon()" class="far fas fa-heart"></i>
//            <div><span id="${unPosteo.likes}">0</span> likes

//             </div>

//             <input type="text" class=${unPosteo.texto} value="Alto Team!">

//         </div>`
//         });
//     })
//     .then(function(divContenedor){
//         document.querySelector(".container").innerHTML = divContenedor.join("");
//     })






//en alguna documentacion podemos encontrarlo de esta manera
//separando la baseURL y lo demas
const container = document.querySelector(".container");


const baseURL = "http://localhost:3000";
fetch(`${baseURL}/api/posteos`)
    .then(res => res.json())
    .then(posteos => {
        posteos.forEach(post => {
            const postHTML = `
        <div id="${posteos.id}" class="post">
        <img src="${posteos.imagen}"/>
        <button class="like">${post.likes} Me gusta</button>
        <p>${post.texto}</p>
        </div>
        `;
            //agregamnos los posteos al DOM
            container.innerHTML += postHTML;

            //vamos a agregar el boton de me gusta
            //al boton le vamos a agregar un onclick
            //con un fetch le vamos a pedir al servidor que agregue un like
            // fetch (direccion, {method:"put"}) - tambien pueden encontrarse con PATCH
            //si salio todo bien, modificamos el DOM para ir cambiando el numero de likes que tiene ese posteo

            //agregamos onclick al boton like
            //const botonesLike = document.querySelectorAll("button.like");

           configurarBotones();

        });
    });

document.getElementById("nuevo-post").onsubmit = function (e) {
    //funciona para cualquier evento, no solo para el submit
    e.preventDefault();

    //busca un input con atributo texto que esta dentro del elemento con el ID nuevo-post
    //y me guardo su valor
    const texto = document.querySelector("#nuevo-post input[name='texto']").value;
    const imagen = document.querySelector("#nuevo-post input[name='imagen']").value;

    const post = {
        texto: texto,
        imagen: imagen,
        likes: 0,
    }

    fetch(`${baseURL}/api/posteos`, {
        method: "post",
        //no le puedo pasar el post directo body:post), porque no es un string...entonces hacemos:
        body: JSON.stringify(post),
        //cada vez que hago un pedido a un servidor, estos tienen un header con info relevamente del pedido
        //que estoy haciendo
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(newPost => {
            // const postHTML = `
            //     <div class="post">
            //     <img src="${newPost.imagen}" />
            //     <p>${newPost.texto}</p>
            // <div>
            // `;

            const postHTML = document.createElement("div");
            postHTML.classList.add("post");
            postHTML.id = newPost.id;
            postHTML.innerHTML = `
            <img src="${newPost.imagen}" />
            <p>${newPost.texto}</p>
            <button class="like">${post.likes} Me gusta</button>
            `
            container.insertBefore(postHTML, container.firstChild);

            configurarBotones();
            const botonesLike = document.querySelectorAll("button.like");

            for (let i = 0; i < botonesLike.length; i++) {
                const boton = botonesLike[i];

                boton.onclick = function (e) {

                    const postID = e.target.parentNode.id;

                    fetch(`${baseURL}/api/posteos/${postID}/likes`, {
                        method: "put"
                    })
                        .then(res => res.json())
                        .then(post => {
                            boton.innerHTML = `${post.likes}Me gusta`;
                        });

                }
            }

        })


}

function configurarBotones() {
    const botonesLike = document.querySelectorAll("button.like");

    for (let i = 0; i < botonesLike.length; i++) {
        const boton = botonesLike[i];

        boton.onclick = function (e) {

            const postID = e.target.parentNode.id;

            fetch(`${baseURL}/api/posteos/${postID}/likes`, {
                method: "put"
            })
                .then(res => res.json())
                .then(post => {
                    boton.innerHTML = `${post.likes}Me gusta`;
                });

        }
    }
}