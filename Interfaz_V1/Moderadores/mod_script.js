document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.details-btn');
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const modal = document.getElementById('details-modal');
    const closeButton = document.querySelector('.close-button');
    const searchBar = document.getElementById('search-bar');
    const requests = document.querySelectorAll('.request');
    const redireccionBTN = document.getElementById("redireccion");

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.remove('hidden');
        });
    });

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.style.backgroundColor = '#d4edda'; // Cambiar color de fondo al aceptar
            this.innerText = 'Asignada';
            this.disabled = true; // Deshabilitar el botón después de aceptar
            Swal.fire({
                title: 'Asignando solicitud...',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            });




        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    searchBar.addEventListener('input', function() {
        const filter = searchBar.value.toLowerCase();
        requests.forEach(request => {
            const text = request.textContent.toLowerCase();
            if (text.includes(filter)) {
                request.style.display = '';
            } else {
                request.style.display = 'none';
            }
        });
    });
    
    redireccionBTN.addEventListener("click", function() {
        window.location.href = "../Moderadores_Rvision_Solicitudes/mod_solicitudes.html";
    });

});
