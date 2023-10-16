<!-- NPS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-bar-rating/1.2.2/jquery.barrating.min.js" integrity="sha512-nUuQ/Dau+I/iyRH0p9sp2CpKY9zrtMQvDUG7iiVY8IBMj8ZL45MnONMbgfpFAdIDb7zS5qEJ7S056oE7f+mCXw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript">
    window.addEventListener('DOMContentLoaded', function(event) {
        // Substitui input text por select
        document.querySelectorAll('input[name="custom_fields[1013787]"]').forEach( function(element) {
            var id = element.id;
            element.outerHTML =' <select id="'+ id +'" name="custom_fields[1013787]" class="bricks-form__input " data-use-type="STRING">' +
                '<option value="">Selecione</option>' +
                '<option value="0">0</option>' +
                '<option value="1">1</option>' +
                '<option value="2">2</option>' +
                '<option value="3">3</option>' +
                '<option value="4">4</option>' +
                '<option value="5">5</option>' +
                '<option value="6">6</option>' +
                '<option value="7">7</option>' +
                '<option value="8">8</option>' +
                '<option value="9">9</option>' +
                '<option value="10">10</option>' +
            '</select>';
        });
        $('select[name="custom_fields[1013787]"]').barrating('show', {
            theme: 'bars-square',
            showValues: true,
            showSelectedRating: false,
            deselectable: false
        });
    });
</script>
<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function(event) {
    var endereco_da_pagina = window.location.href;
    if( endereco_da_pagina.includes("email") )
    {
        var url = new URL(endereco_da_pagina);
        var email = url.searchParams.get('email') ? url.searchParams.get('email') : '';
        document.querySelectorAll("input[name='email']").forEach( function(frmElement) {
            if( frmElement.value == "" )
            {
                frmElement.value = email;
                $("input[name='email']").parent().hide();
            }
        });
    }
});
</script>
