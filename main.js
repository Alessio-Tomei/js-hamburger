const openButton = document.querySelector('.header-right a .fas.fa-bars');
openButton.addEventListener('click' , function() {
    document.querySelector('.hamburger-menu').className = document.querySelector('.hamburger-menu').classList + " active";
});

document.querySelector('.hamburger-menu a.close .fas.fa-times').addEventListener('click' , function() {
    document.querySelector('.hamburger-menu').classList.remove("active");
});