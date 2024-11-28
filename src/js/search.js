const searchButton = document.querySelector('button');
const searchInput = document.getElementById('searchinput');  // Asegúrate de que el id coincida

searchButton.addEventListener('click', () => {
    searchInput.classList.toggle('active');
    if (searchInput.classList.contains('active')) {
        searchInput.focus(); // Activa el foco automáticamente al input
    }
});
