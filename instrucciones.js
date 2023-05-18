// 9 pasos instruidos

// primero crear funcion "cargarPeliculas" de tipo flecha
// al cargar mi pagina quiero ejecutar esta funcion de cargar peliculas
// esta funcion va a conectar a la API, va a obtener las peliculas y las va a cargar dentro de nuestro contenedor en nuestro codigo html
// usamos la funcion de javascript FETCH, donde ponemos una cadena de textos q es la direccion URL a la API


const cargarPeliculas = () => {
/* copiar */ fetch('');
}

cargarPeliculas();


// usamos el ejemplo de peticion que nos indica la web. Pegamos dentro de fetch
// entramos en la pagina y actualizamos para ver donde mostramos q nada pasa en console porq hacemos la peticion pero no hacemos nada con la respuesta
// asi que agregamos un console log para ver "respuesta"


const cargarPeliculas = () => {
/* copiar const */    const respuesta = fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
/* copiar */    console.log(respuesta);
}

cargarPeliculas();


// mostramos navegador console y mostramos que nos responde una promesa. el comando fetch nos responde promesa y la guardamos en la variable 
// enviamos una peticion de pelicula al servidor y el servidor debe hacer sus procesos internos para darnos respuesta, esto demora tiempo, entonces tenemos que especificarle a nuestro programa que espere la respuesta para que continue con la siguiente linea q es el console.log y eso lo hacemos con la funcion AWAIT.


const cargarPeliculas = () => {
    const respuesta =/* copiar await */await fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
    console.log(respuesta);
}

cargarPeliculas();


// pero como esta funcion es asincronica, debemos especificarlo en el codigo para que lo puedo procesar de una manera ASINCRONICA, esto lo hacemos agregando ASYNC


const cargarPeliculas = /* copiar */async() => {
    const respuesta =/* copiar await */await fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
    console.log(respuesta);
}

cargarPeliculas();


// nos regresa una respuesta con un objeto. donde podemos ver las propiedades, type, url, status, etc. (con status podemos ver con numeros un reporte de como salio la peticion)
// mostrar web con los codigos de status
// como trabajamos con una funcion asincrona, deberiamos usar las funciones de TRY y de CATCH


const cargarPeliculas = async() => {
    /* copiar */
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
        console.log(respuesta);
    /* copiar */
    } catch(error){
        console.log(error);
    }
}

cargarPeliculas();


// con el catch podemos recibir el error en caso de no cumplirse la peticion. recibiremos un obje con todas las propiedades q mostramos con el console.log
// ahora q tenemos una respuesta, podemos empezar a usar la informacion que nos ha llegado. la informacion llega con formato json y tenemos q usar el metodo para usarlo.


const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
        console.log(respuesta);
        /* copiar */
        const datos = await respuesta.json();
        console.log(datos);
        console.log(datos.title);
        /* listo */
    } catch(error){
        console.log(error);
    }
}

cargarPeliculas();


// mostrar resultado de la peticion. luego realizar un error y mostrar undefine, para indicar que debemos realizar una validacion para realizar operaciones y evitar el mensaje de undefined.


const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/550?api_key=3cbb4970431a62c9dd95649867e4cf71');
        console.log(respuesta);
        /* copiar */
        if(respuesta.status === 200){
            /* listo */
        const datos = await respuesta.json();
        console.log(datos);
        console.log(datos.title);
        }/* <-- agregar llave y copiar abajo*/
        else if(respuesta.status === 404){
            console.log('la pelicula que buscas no existe');
        }/* <-- llave y listo */
        else {
            console.log('hubo un error hay que verificar en la web que error es');
        }/* <-- llave y listo */
    } catch(error){
        console.log(error);
    }
}

cargarPeliculas();


// accedemos a la pagina web para mostrar las distintas peticiones que podemos hacer
// modificamos el fetch y colocamos peliculas upcoming


const cargarPeliculas = async() => {
    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71'); /* modificamos el url */
        console.log(respuesta);

        if(respuesta.status === 200){

        const datos = await respuesta.json();
        console.log(datos); 
        console.log(datos.title); /* quitamos esta linea */
        }
        else if(respuesta.status === 404){
            console.log('la pelicula que buscas no existe');
        }
        else {
            console.log('hubo un error hay que verificar en la web que error es');
        }
    } catch(error){
        console.log(error);
    }
}

cargarPeliculas();


// ahora pasamos a hacer funciones con los resultados. y colocamos codigos para mostrar los titulos y los posters de las peliculas.
// con esto vamos a modificar el html agregando unas variables, y un codigo cadena donde modificamos el html con el javascript, agregando un div, una imagen, y un titulo.
// mostramos en la web la informacion de como trabajar las imagenes !


    const cargarPeliculas = async() => {
        try {
            const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');
            console.log(respuesta);
    
            if(respuesta.status === 200){
    
            const datos = await respuesta.json();
            console.log(datos);
    
            let titulos= ''; /* agregamos variable titulos */
            datos.results.forEach(pelicula => { /* agregamos esta funcion */
                titulos = titulos + `
                <div class="pelicula">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            })
            document.getElementById('contenedor').innerHTML = titulos; /* terminamos la funcion aqui */
            }
            else if(respuesta.status === 404){
                console.log('la pelicula que buscas no existe');
            }
            else {
                console.log('hubo un error hay que verificar en la web que error es');
            }
        } catch(error){
            console.log(error);
        }
    }
    
    cargarPeliculas();


// ahora pasamos a hacer funciones con los resultados. y colocamos codigos para mostrar los posters de las peliculas.
// con esto vamos a modificar el html agregando unas variables, y un codigo cadena donde modificamos el html con el javascript, agregando un div, una imagen, y un titulo.
// mostramos en la web la informacion de como trabajar las imagenes !


    const cargarPeliculas = async() => {
        try {
            const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');
            console.log(respuesta);
    
            if(respuesta.status === 200){
    
            const datos = await respuesta.json();
            console.log(datos);
    
            let titulos= ''; /* agregamos variable titulos */
            datos.results.forEach(pelicula => { /* agregamos esta funcion */
                titulos = titulos + `
                <div class="pelicula">
                    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                    <h3 class="titulo">${pelicula.title}</h3>
                </div>
                `;
            })
            document.getElementById('contenedor').innerHTML = titulos; /* terminamos la funcion aqui */
            }
            else if(respuesta.status === 404){
                console.log('la pelicula que buscas no existe');
            }
            else {
                console.log('hubo un error hay que verificar en la web que error es');
            }
        } catch(error){
            console.log(error);
        }
    }
    
    cargarPeliculas();

    
// PASOS PARA USAR AXIOS

//ingresamos en la web de axios, buscamos el codigo para acceder a la libreria de CDN
// (se puede instalar en proyectos con node.js o react usando el npm install)
//como nuestro codigo es html y es simple y corto, usaremos el CDN
// <!-- <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script> -->
//luego vamos a ir a nuestro archivo de html y agregamos un link script para agregar axios.js
// <!-- <script src="axios.js"></script> -->

axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');

//con axios podemos hacer la conexion con una linea, por lo cual es mas facil.
//con axios podemos trabajar con promesas, por lo que significa que podemos de una vez trabajar con promesas y como el servidor nos regresa una promesa, podemos agregar el metodo ".THEN()" seguido de nuestra promesa.

.then(() => {
    console.log('funciona');
})

//para detectar errores podemos agregar el metodo ".CATCH()" y se ejecuta en caso de haber algun error.

.catch(() => {
    console.log('no funciona, hay algun error');
})

//para ver la respuesta y el error mejor podemos agregar

.then((respuesta) => {
    console.log(respuesta);
})
.catch((error) => {
    console.log(error);
})

//anteriormente con la funcion fetch, teniamos que indicar que interpretara un objeto json, pero en este caso como axios ya puede simplicar estos pasos, podemos agregar de una vez las especificaciones de las propiedades del objeto q recibimos.

axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');
.then((respuesta) => {
    console.log(respuesta.data.results[1].title);
})
.catch((error) => {
    console.log(error);
})

//mostrar en consola el resultado de la pelicula y explicar.
//vamos a modificar el codigo para usar metodos de axios y simplificar el codigo.
//por ahora usamos el mismo principio que usamos con el fetch

const obtenerPeliculas = async() => {
    try {
    const respuesta = await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');

    console.log(respuesta);
    }
    catch(error) {
        console.log(error);
    }
}
obtenerPeliculas();

// pero ahora si simplificamos usando propiedades de axio. acomodamos el url con un segundo parametro q seria un objeto. 

// tambien se puede cambiar los parametros para comunicarse con api
// por ejemplo. podemos modificar GET por:
// POST: este se usa para marcar alguna pelicula como favorita
// PATCH: para actualizar
// DELETE: para eliminar objetos.
// etc.

const cargarPeliculas = async() => {
    try {

        const respuesta = await axios.get('https://api.themoviedb.org/3/movie/upcoming', {
        params: {
            api_key: '3cbb4970431a62c9dd95649867e4cf71',
            language: 'es-ESP'
            }
        });

        // const respuesta = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=3cbb4970431a62c9dd95649867e4cf71');
        // console.log(respuesta);

        if(respuesta.status === 200){

        // const datos = await respuesta.json();
        // console.log(datos);
        let titulos= '';
        respuesta.data.results.forEach(pelicula => { /* esta linea se modifica */
            titulos = titulos + `
            <div class="pelicula">
                <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
                <h3 class="titulo">${pelicula.title}</h3>
            </div>
            `;
        })
        document.getElementById('contenedor').innerHTML = titulos;
        }
        else if(respuesta.status === 404){
            console.log('la pelicula que buscas no existe');
        }
        else {
            console.log('hubo un error hay que verificar en la web que error es');
        }
    } catch(error){
        console.log(error);
    }
}

cargarPeliculas();

// Mostramos codigo completo señalando con comentarios, las diferencias.


