document.addEventListener('DOMContentLoaded', function() {
    const checkAvailabilityButtons = document.querySelectorAll('.check-availability');
    const reserveButtons = document.querySelectorAll('.reserve');
    const buyButtons = document.querySelectorAll('.buy');
    const modal = document.getElementById('payment-modal');
    const closeButton = document.querySelector('.close-button');
    const cancelButton = document.querySelector('.cancel');
    const paymentForm = document.getElementById('payment-form');

    checkAvailabilityButtons.forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Consultando disponibilidad...',
                icon: 'info',
                timer: 1500,
                showConfirmButton: false
            });
        });
    });

    reserveButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dateIn = document.getElementById('dateI').value;
            const dateOut = document.getElementById('dateF').value;
            if (dateIn && dateOut) {
                Swal.fire({
                    title: 'Servicio reservado',
                    html: `Fecha de entrada: ${dateIn}<br>Fecha de salida: ${dateOut}`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error',
                    text: 'Por favor, ingrese ambas fechas.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    });

    buyButtons.forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Redirigiendo a PayPal para el pago...',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            });
            modal.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    cancelButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    paymentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const cardNumber = document.getElementById('card-number').value;
        const cardOwner = document.getElementById('card-owner').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const securityCode = document.getElementById('security-code').value;

        if (cardNumber && cardOwner && expiryDate && securityCode) {
            Swal.fire({
                title: 'Redirigiendo a PayPal para el pago...',
                icon: 'info',
                timer: 2000,
                showConfirmButton: false
            });
            // Redirigir a PayPal
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Por favor, complete todos los campos.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    });
});


