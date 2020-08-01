
    $(function () {
        $("#btn_search").click(function () {
            $("#ModalSearch").modal('show');
        });
    });

    $(function () {
        $("#btn_fav").click(function () {
            $("#ModalFav").modal('show');
        });
    });

    $(function () {
        $("#btn_bag").click(function () {
            $("#ModalBag").modal('show');
        });
    });

    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();

      $(function (){
            $('#btn_rem1').click(function(){
                $('#con_rem1').remove();
            });
        });
        
        $(function (){
            $('#btn_rem2').click(function(){
                $('#con_rem2').remove();
            });
        });

        $(function (){
            $('#btn_rem3').click(function(){
                $('#con_rem3').remove();
            });
        });

        $(function (){
            $('#btn_rem_all').click(function(){
                $('#cont_rem').remove();
            });
        });

        $(function (){
            $('#add_cart').click(function(){

            $('#cart_counter').load('/ #cart_counter')
        
          });
        });

        
        
      
      