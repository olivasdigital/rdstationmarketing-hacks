<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function(event) {
    // Substitui input text por select
    document.querySelectorAll('input[name="job_title"]').forEach( function(element) {
        var id = element.id;
        element.outerHTML =' <select id="'+ id +'" name="job_title" class="bricks-form__input " data-use-type="STRING">' +
            '<option value="">Selecione</option>' +
            '<option value="Sócio/diretor">Sócio/diretor</option>' +
            '<option value="Gerente Geral">Gerente Geral</option>' +
            '<option value="Gerente de Marketing/Comercial">Gerente de Marketing/Comercial</option>' +
            '<option value="Coordenador de Marketing">Coordenador de Marketing</option>' +
            '<option value="TI">TI</option>' +
            '<option value="Compras">Compras</option>' +
            '<option value="Outro">Outro</option>' +
        '</select>';
    });
});
</script>
