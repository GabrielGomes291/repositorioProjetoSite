document.addEventListener("DOMContentLoaded", ()=> {
    const menuResponsivo = document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nev-menu");
    menuResponsivo.addEventListener("click", () =>{
        navMenu.classList.toggle("active");
    })
}); //Fechamento do evento carregar página.