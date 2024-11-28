// Obtener el <li> y la modal
var modal = document.getElementById("myModal");
var li = document.getElementById("encuesta-li");

// Obtener el botón de cerrar (la "X")
var span = document.getElementsByClassName("close")[0];

// Cuando el usuario hace clic en el <li>, abre la modal
li.onclick = function() {
    modal.style.display = "block";
}

// Cuando el usuario hace clic en la "X", cierra la modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando el usuario hace clic fuera de la modal, también la cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
