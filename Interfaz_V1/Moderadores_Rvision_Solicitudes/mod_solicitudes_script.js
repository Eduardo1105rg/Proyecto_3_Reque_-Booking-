document.addEventListener('DOMContentLoaded', function() {
    const detailsButtons = document.querySelectorAll('.view-details-btn');
    const acceptButtons = document.querySelectorAll('.accept-btn');
    const rejectButtons = document.querySelectorAll('.reject-btn');
    const closeButton = document.querySelectorAll('.close-button');
    const generateReportButton = document.querySelector('.generate-report-btn');
    const submitReportButton = document.querySelector('.submit-report-btn');
    const cancelReportButton = document.querySelector('.cancel-report-btn');
    const detailsModal = document.getElementById('details-modal');
    const reportModal = document.getElementById('report-modal');

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            detailsModal.classList.remove('hidden');
        });
    });

    acceptButtons.forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Propuesta aceptada',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            this.parentElement.style.backgroundColor = '#d4edda'; // Cambiar color de fondo al aceptar
        });
    });

    rejectButtons.forEach(button => {
        button.addEventListener('click', function() {
            Swal.fire({
                title: 'Propuesta rechazada',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            this.parentElement.style.backgroundColor = '#f8d7da'; // Cambiar color de fondo al rechazar
        });
    });

    closeButton.forEach(button => {
        button.addEventListener('click', function() {
            detailsModal.classList.add('hidden');
            reportModal.classList.add('hidden');
        });
    });

    generateReportButton.addEventListener('click', function() {
        detailsModal.classList.add('hidden');
        reportModal.classList.remove('hidden');
    });

    cancelReportButton.addEventListener('click', function() {
        reportModal.classList.add('hidden');
    });

    submitReportButton.addEventListener('click', function() {
        const status = document.getElementById('status').value;
        const annotations = document.getElementById('report-annotations').value;

        if (status && annotations) {
            Swal.fire({
                title: 'Informe generado y enviado para revisión',
                icon: 'success',
                confirmButtonText: 'OK'
            });
            reportModal.classList.add('hidden');
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

