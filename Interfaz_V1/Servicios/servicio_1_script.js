document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const opinionBtn = document.querySelector('.opinion-btn');
    const commentForm = document.getElementById('comment-form');
    const commentSection = document.querySelector('.comment-section');
    
    // Modal Elements
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    const modalClose = document.querySelector('.modal-close');

    // Abre el modal con la imagen ampliada al hacer clic en una miniatura
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            fullImage.src = this.src;
            modal.style.display = 'flex';
        });
    });

    // Cierra el modal al hacer clic en el botón de cierre o fuera de la imagen
    modalClose.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Manejo de opiniones
    opinionBtn.addEventListener('click', function() {
        commentForm.classList.toggle('hidden');
    });

    commentForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value || 'Usuario Anónimo';
        const email = document.getElementById('email').value;
        const comment = document.getElementById('comment').value;

        if (email && comment) {
            if (validateEmail(email)) {
                const newComment = document.createElement('div');
                newComment.classList.add('comment');
                newComment.innerHTML = `
                    <p><strong>${username}:</strong> ${comment}</p>
                    <button class="like">Me gusta</button>
                    <button class="dislike">No me gusta</button>
                `;
                commentSection.appendChild(newComment);
                commentForm.reset();
                commentForm.classList.add('hidden');
            } else {
                alert('Correo inválido.');
            }
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
