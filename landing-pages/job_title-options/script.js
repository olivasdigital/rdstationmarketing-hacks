<script type="text/javascript">
    $(document).ready(function(){
    	setTimeout(function() {
		    // Altera Cargo para select
		    if( $("input[name='job_title']").length )
		    {
			// Altera o label
			$("input[name='job_title']").parent().children('label').html('Qual sua função ou cargo?');

			// Substitui input text por select
			var id = $("input[name='job_title']").attr("id");
			$("input[name='job_title']").replaceWith(' <select id="'+ id +'" name="job_title" class="bricks-form__input " data-use-type="STRING">' +
			    '<option value="">Selecione</option>' +
			    '<option value="Sócio/diretor">Sócio/diretor</option>' +
			    '<option value="Gerente Geral">Gerente Geral</option>' +
			    '<option value="Gerente de Marketing/Comercial">Gerente de Marketing/Comercial</option>' +
			    '<option value="Coordenador de Marketing">Coordenador de Marketing</option>' +
			    '<option value="TI">TI</option>' +
			    '<option value="Compras">Compras</option>' +
			    '<option value="Outro">Outro</option>' +
			    '</select>');
		    }
	    }, 100);
    });
</script>
