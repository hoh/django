'use strict';
{
    const toggleNavSidebar = document.getElementById('toggle-nav-sidebar');
    if (toggleNavSidebar !== null) {
        const navLinks = document.querySelectorAll('#nav-sidebar a');
        function disableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = -1;
            }
        }
        function enableNavLinkTabbing() {
            for (const navLink of navLinks) {
                navLink.tabIndex = 0;
            }
        }
        function disableNavFilterTabbing() {
            document.getElementById('app-filter').tabIndex = -1;
        }
        function enableNavFilterTabbing() {
            document.getElementById('app-filter').tabIndex = 0;
        }

        const main = document.getElementById('main');
        let navSidebarIsOpen = localStorage.getItem('django.admin.navSidebarIsOpen');
        if (navSidebarIsOpen === null) {
            navSidebarIsOpen = 'true';
        }
        if (navSidebarIsOpen === 'false') {
            disableNavLinkTabbing();
            disableNavFilterTabbing();
        }
        main.classList.toggle('shifted', navSidebarIsOpen === 'true');

        toggleNavSidebar.addEventListener('click', function() {
            if (navSidebarIsOpen === 'true') {
                navSidebarIsOpen = 'false';
                disableNavLinkTabbing();
                disableNavFilterTabbing();
            } else {
                navSidebarIsOpen = 'true';
                enableNavLinkTabbing();
                enableNavFilterTabbing();
            }
            localStorage.setItem('django.admin.navSidebarIsOpen', navSidebarIsOpen);
            main.classList.toggle('shifted');
        });
    }
}
