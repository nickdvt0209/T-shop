document.addEventListener("DOMContentLoaded", function () {
    const menuOpen = document.querySelector(".header__toggle");
    const menuClose = document.querySelector(".menu-close");
    const menu = document.querySelector(".menu");
    if (!menuOpen || !menuClose || !menu) return;
    menuOpen.addEventListener("click", function () {
        console.log("oke")
        menu.classList.add("active")
    });
    menuClose.addEventListener("click", function () {
        menu.classList.remove("active")
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var header = document.querySelectorAll('header.header');
    var header = header[0];
    window.addEventListener("scroll", function () {
        var x = pageYOffset;
        if (x > 95) {
            header.classList.add('header__fixed');
            document.getElementById("rocket").style.display = 'block';
        }
        else {
            header.classList.remove('header__fixed');

            document.getElementById("rocket").style.display = 'none';
        }

    })
})