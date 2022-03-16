<script type="text/javascript">
$(document).ready(function(){
  setTimeout(function() {
    // Altera label do campo Nome para Nome completo
    if( $("input[name='name']").length )
    {
        $("input[name='name']").parent().children('label').html('Nome completo:*');
    }

  }, 100);
}
</script>
