$(document).ready(function() {

    //declaracion de variables
    var enlaceMenuMobile = $("a#enlace-menu-mobile")[0];
    var menuMobile = $("#menu-mobile");
    var arrProjects = document.querySelectorAll('.project');







    enlaceMenuMobile.addEventListener('click', function(event) {
        event.preventDefault();

        if (menuMobile.css('display') == 'none') {
            menuMobile.show(1000);


        } else {
            menuMobile.hide(1000);
        }
    });

    verscroll();

    function verscroll() {

        // var windowHeight = $(window).height();
        //variable para el alto de la ventana


        $(window).scroll(function() {

            var scroll = $(window).scrollTop();

            for (var i = 0; i < arrProjects.length; i++) {
                let altura = arrProjects[i].offsetTop;

                if ((scroll + 350) > altura) {

                    arrProjects[i].classList.add('animacionProject');
                    arrProjects[i].style.opacity = "1";
                }

            }

        });

    }

});