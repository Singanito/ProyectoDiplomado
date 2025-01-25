document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('ideasTable'); 

    function loadMovies() {
        fetch('json/peliculas.json') 
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; 
                data.forEach(movie => {
                    tableBody.innerHTML += `
                        <tr>
                            <td>${movie.id}</td>
                            <td>${movie.titulo}</td>
                            <td>${movie.genero}</td>
                            <td>${movie.calificacion}</td>
                            <td>${movie.comentarios}</td>
                            <td>
                                <button class="btn btn-warning btn-sm editBtn" data-id="${movie.id}">Editar</button>
                                <button class="btn btn-danger btn-sm deleteBtn" data-id="${movie.id}">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }

    loadMovies(); 
});
