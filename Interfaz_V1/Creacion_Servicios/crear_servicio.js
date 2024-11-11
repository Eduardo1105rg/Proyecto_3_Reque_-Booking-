document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('create-service-form');
    const activityType = document.getElementById('activity-type');
    const paymentAccount = document.getElementById('payment-account');
    const imagesInput = document.getElementById('images');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const images = imagesInput.files;
        if (images.length < 5) {
            Swal.fire({
                title: 'Error',
                text: 'Debe agregar al menos 5 imágenes.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!activityType.value) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, seleccione un tipo de actividad.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        if (!paymentAccount.value) {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, ingrese una cuenta de pago válida.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        Swal.fire({
            title: 'Enviado',
            text: 'Servicio enviado para revisión.',
            icon: 'success',
            confirmButtonText: 'OK'
        });
        form.reset();
        window.location.href = "../Empresas/PerfilSoloEmpresa.html";
    });

    document.querySelector('.cancel').addEventListener('click', function() {
        Swal.fire({
            title: '¿Está seguro de que desea cancelar?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                form.reset();
                window.location.href = "../Empresas/PerfilSoloEmpresa.html";
            }
        });
    });




    
});

