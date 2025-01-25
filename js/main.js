document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('ideasTable');
    function loadIdeas() {
        fetch('json/ideas.json')
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = '';
                data.forEach(idea => {
                    tableBody.innerHTML += `
                        <tr>
                            <td>${idea.id}</td>
                            <td>${idea.sector}</td>
                            <td>${idea.estilo}</td>
                            <td>Bs${idea.presupuesto}</td>
                            <td>${idea.habilidades}</td>
                            <td>
                                <button class="btn btn-warning btn-sm editBtn" data-id="${idea.id}">Editar</button>
                                <button class="btn btn-danger btn-sm deleteBtn" data-id="${idea.id}">Eliminar</button>
                            </td>
                        </tr>
                    `;
                });
            })
            .catch(error => console.error('Error al cargar los datos:', error));
    }

    loadIdeas();
});