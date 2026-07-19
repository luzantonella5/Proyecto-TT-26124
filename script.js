const contenedorProductos = document.getElementById("productos");
const contadorCarrito = document.getElementById("cantidad-carrito");

// Catálogo propio de talleres
const talleres = [
    {
        nombre: "Taller de Pastelería",
        descripcion: "Aprendé técnicas profesionales para crear postres increíbles.",
        precio: 25000
    },
    {
        nombre: "Taller de Medialunas",
        descripcion: "Descubrí todos los secretos para lograr medialunas tiernas y brillantes.",
        precio: 18000
    },
    {
        nombre: "Taller de Pastas Caseras",
        descripcion: "Prepará pastas frescas totalmente artesanales.",
        precio: 22000
    },
    {
        nombre: "Taller de Pastas Rellenas",
        descripcion: "Ravioles, sorrentinos y diferentes tipos de rellenos.",
        precio: 24000
    },
    {
        nombre: "Taller de Cookies",
        descripcion: "Cookies clásicas y gourmet con diferentes sabores.",
        precio: 17000
    },
    {
        nombre: "Taller de Chocolatería",
        descripcion: "Bombones, tabletas y técnicas de templado.",
        precio: 26000
    },
    {
        nombre: "Taller de Macarons",
        descripcion: "Macarons franceses con rellenos y decoración.",
        precio: 28000
    },
    {
        nombre: "Taller de Tortas Decoradas",
        descripcion: "Decoración con buttercream, drip cake y ganache.",
        precio: 30000
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

            <img src="${imagen.strMealThumb}" alt="${taller.nombre}">

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