function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('active');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    var dropdown = document.querySelector('.nav .dropdown');
    if (!event.target.matches('.dropdown') && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
    }
}

