<script type="text/javascript">
    if (typeof $ == 'function' ) {
        setTimeout(function() {
            // Campo Name > Nome
            $("input[name='name']").parent().children('label').html('Nome completo:*');
            $("input[name='name']").attr("placeholder", "Nome completo");

            // Campo Company > Empresa
            $("input[name='company']").parent().children('label').html('Empresa:*');
            $("input[name='company']").attr("placeholder", "Empresa");

            // Campo celular mobile_phone
            $("input[name='mobile_phone']").parent().parent().children('label').html('Celular:*');
        }, 100);
    }
</script>
