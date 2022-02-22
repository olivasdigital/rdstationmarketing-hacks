<script type="text/javascript">
    $(document).ready(function(){
    	setTimeout(function() {
		    // Altera o label
            $("input[name='job_title']").parent().children('label').html('Qual seu cargo?');

            // get id
            var id = $("input[name='job_title']").attr("id");

            // Substitui input text por select
            $("input[name='job_title']").replaceWith(' <select id="'+ id +'" name="job_title" class="bricks-form__input " data-use-type="STRING">' +
		          '<option value="">Selecione</option>' +
		          '<option value="Diretor/Sócio">Diretor/Sócio</option>' +
		          '<option value="Gerente de Marketing">Gerente de Marketing</option>' +
		          '<option value="Gerente Financeiro">Gerente Financeiro</option>' +
		          '<option value="Coordenador ou Analista">Coordenador ou Analista</option>' +
		          '<option value="Estagiário/Estudante">Estagiário/Estudante</option>' +
		          '<option value="Outro">Outro</option>' +
		        '</select>');
	    }, 100);
    });
</script>
