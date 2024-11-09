document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('create-service-form');
    const activityType = document.getElementById('activity-type');
    const paymentAccount = document.getElementById('payment-account');
    const imagesInput = document.getElementById('images');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const images = imagesInput.files;
        if (images.length < 5) {
            alert('Debe agregar al menos 5 imágenes.');
            return;
        }

        if (!activityType.value) {
            alert('Por favor, seleccione un tipo de actividad.');
            return;
        }

        if (!paymentAccount.value) {
            alert('Por favor, ingrese una cuenta de pago válida.');
            return;
        }

        alert('Servicio enviado para revisión.');
        form.reset();
    });

    document.querySelector('.cancel').addEventListener('click', function() {
        if (confirm('¿Está seguro de que desea cancelar?')) {
            form.reset();
        }
    });
});
