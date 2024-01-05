document.getElementById('mobile-menu').addEventListener('click', function () {
    document.querySelector('.dash_links').classList.toggle('active');
    const submenu = document.querySelector('.submenu');
  
    nav.classList.toggle('active');
    submenu.style.display = 'none'; // Hide sub-menu when toggling the main menu
  
    // Toggle the display of sub-menu
  });
  
  
  
