$(document).ready(() => {
    // Your existing hamburger-menu toggle
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active');
        $('#nav-menu').toggleClass('active');
    });

    // Your existing color-menu toggle
    $('#color-menu').click(() => {
        $('#color-menu').toggleClass('active');
        $('#nav-menu2').toggleClass('active');
        $('#cog').toggleClass('bx-spin');
    });

    // Added language dropdown toggle
    $('.language-selected').on('click', function() {
        $('#language-dropdown').slideToggle('fast');
    });

    // Added hide dropdown on outside click
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.language').length) {
            $('#language-dropdown').slideUp('fast');
        }
    });

    // Your existing mode toggle
    const body = document.querySelector("body"),
    modeToggle = body.querySelector(".mode");
    let getMode = localStorage.getItem("mode");
    if(getMode && getMode === "dark"){
        body.classList.toggle("dark");
    }
    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
        if(body.classList.contains("dark")){
            localStorage.setItem("mode", "dark");
        }else{
            localStorage.setItem("mode", "light");
        }
    });
});
