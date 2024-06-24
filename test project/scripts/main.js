document.addEventListener('DOMContentLoaded', function() {
    console.log('Welcome to Fun Kids Learning!');
    
    // Add a class to the current page's nav item
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        if (item.getAttribute('href') === currentPage) {
            item.classList.add('active');
        }
    });
});