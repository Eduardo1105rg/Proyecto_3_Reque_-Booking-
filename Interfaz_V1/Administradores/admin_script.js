document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const detailsButtons = document.querySelectorAll('.view-report, .view-request');
    const modal = document.getElementById('details-modal');
    const closeButton = document.querySelector('.close-button');
    const approveButton = document.querySelector('.approve');
    const rejectButton = document.querySelector('.reject');
    const cancelButton = document.querySelector('.cancel');
    const searchReports = document.getElementById('search-reports');
    const searchRequests = document.getElementById('search-requests');
    const reports = document.querySelectorAll('.report');
    const requests = document.querySelectorAll('.request');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabContents.forEach(content => content.classList.remove('visible'));
            document.getElementById(this.dataset.tab).classList.add('visible');
        });
    });

    detailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            modal.classList.remove('hidden');
        });
    });

    closeButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    cancelButton.addEventListener('click', function() {
        modal.classList.add('hidden');
    });

    approveButton.addEventListener('click', function() {
        alert('Solicitud aprobada.');
        modal.classList.add('hidden');
    });

    rejectButton.addEventListener('click', function() {
        alert('Solicitud rechazada.');
        modal.classList.add('hidden');
    });

    searchReports.addEventListener('input', function() {
        const filter = searchReports.value.toLowerCase();
        reports.forEach(report => {
            const text = report.textContent.toLowerCase();
            if (text.includes(filter)) {
                report.style.display = '';
            } else {
                report.style.display = 'none';
            }
        });
    });

    searchRequests.addEventListener('input', function() {
        const filter = searchRequests.value.toLowerCase();
        requests.forEach(request => {
            const text = request.textContent.toLowerCase();
            if (text.includes(filter)) {
                request.style.display = '';
            } else {
                request.style.display = 'none';
            }
        });
    });
});
