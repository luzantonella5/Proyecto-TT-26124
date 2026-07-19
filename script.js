const contenedorProductos = document.getElementById("productos");
const contadorCarrito = document.getElementById("cantidad-carrito");


const talleres = [
    {
        nombre: "Taller de Pastelería",
        descripcion: "Aprendé técnicas profesionales para crear postres increíbles.",
        precio: 25000,
        imagen: "img/pasteleria.jpg"
    },
    {
        nombre: "Taller de Medialunas",
        descripcion: "Descubrí todos los secretos para lograr medialunas tiernas y brillantes.",
        precio: 18000,
        imagen: "img/medialunas.jpg"
    },
    {
        nombre: "Taller de Pastas Caseras",
        descripcion: "Prepará pastas frescas totalmente artesanales.",
        precio: 22000,
        imagen: "img/pastas.jpg"
    },
    {
        nombre: "Taller de Pastas Rellenas",
        descripcion: "Ravioles, sorrentinos y diferentes tipos de rellenos.",
        precio: 24000,
        imagen: "img/pastas-rellenas.jpg"
    },
    {
        nombre: "Taller de Cookies",
        descripcion: "Cookies clásicas y gourmet con diferentes sabores.",
        precio: 17000,
        imagen: "img/cookies.jpg"
    },
    {
        nombre: "Taller de Chocolatería",
        descripcion: "Bombones, tabletas y técnicas de templado.",
        precio: 26000,
        imagen: "img/chocolate.jpg"
    },
    {
        nombre: "Taller de Macarons",
        descripcion: "Macarons franceses con rellenos y decoración.",
        precio: 28000,
        imagen: "img/macarons.jpg"
    },
    {
        nombre: "Taller de Tortas Decoradas",
        descripcion: "Decoración con buttercream, drip cake y ganache.",
        precio: 30000,
        imagen: "img/tortas.jpg"
    }
];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

actualizarContador();

async function cargarProductos() {

    try {

        const respuesta = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

        const datos = await respuesta.json();

        mostrarProductos(datos.meals.slice(0, 8));

    } catch (error) {

        contenedorProductos.innerHTML = "<h2>Error al cargar los talleres.</h2>";

        console.error(error);

    }

}

function mostrarProductos(imagenes) {

    contenedorProductos.innerHTML = "";

    imagenes.forEach((imagen, index) => {

        const taller = talleres[index];

        contenedorProductos.innerHTML += `

        <div class="card">

            <img src="${taller.imagen}" alt="${taller.nombre}">

            <h3>${taller.nombre}</h3>

            <p>${taller.descripcion}</p>

            <h4>$${taller.precio}</h4>

            <button onclick="agregarAlCarrito(${index})">
                Inscribirme
            </button>

        </div>

        `;

    });

}

function agregarAlCarrito(indice){

    carrito.push(talleres[indice]);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    alert("¡Te inscribiste al taller!");

}

function actualizarContador(){

    contadorCarrito.textContent = carrito.length;

}

cargarProductos();