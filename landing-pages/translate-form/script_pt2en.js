<script type="text/javascript">
    if (typeof $ == 'function' ) {
        setTimeout(function() {
            // Campo Nome
            $("input[name='name']").parent().children('label').html('Full name:*');
            $("input[name='name']").attr("placeholder", "Full name");

            // Campo Empresa
            $("input[name='company']").parent().children('label').html('Company:*');
            $("input[name='company']").attr("placeholder", "Company");

            // Campo Cargo
            $("input[name='job_title']").parent().children('label').html('Job Title:*');
            $("input[name='job_title']").attr("placeholder", "Job Title");

            // Campo Celular
            $("input[name='mobile_phone']").parent().parent().children('label').html('Mobile Phone:*');

        }, 100);
    }
</script>
