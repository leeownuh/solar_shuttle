function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// By default, show the Project Overview section
showSection('project-overview');
var toggleButton = document.getElementById("toggleNavButton");
toggleButton.addEventListener("click", toggleNav);
