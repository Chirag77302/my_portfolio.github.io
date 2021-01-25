
    
    $(function () {
        $(document).scroll(function () {
            var $nav = $("#mainnav");
            var $sec1 = $("#intro")
            $nav.toggleClass("scrolled", $(this).scrollTop() > $sec1.height());
            $nav.toggleClass("shadow",$(this).scrollTop() > $sec1.height());
        });
    });

  
          mybutton = document.getElementById("myBtn");

          window.onscroll = function() {scrollFunction()};

          function scrollFunction() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
              mybutton.style.display = "block";
            } else {
              mybutton.style.display = "none";
            }
          }

          function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0; 
          }
