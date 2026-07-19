const contenedorProductos = document.getElementById("productos");

async function cargarProductos() {

    try {

        const respuesta = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");

        const datos = await respuesta.json();

        mostrarProductos(datos.meals.slice(0,8));

    } catch(error){

        contenedorProductos.innerHTML = "<h3>Error al cargar los talleres.</h3>";

        console.error(error);

    }

}

function mostrarProductos(productos){

    contenedorProductos.innerHTML="";

    productos.forEach(producto=>{

        contenedorProductos.innerHTML += `

        <div class="card">

            <img src="${producto.strMealThumb}" alt="${producto.strMeal}">

            <h3>${producto.strMeal}</h3>

            <p>${producto.strCategory}</p>

            <button>Agregar al carrito</button>

        </div>

        `;

    });

}

cargarProductos();