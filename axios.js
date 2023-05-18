// agrega los codigos por ti mismo

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