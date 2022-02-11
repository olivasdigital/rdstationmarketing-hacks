<script type="text/javascript">
    $(document).ready(function(){
    	setTimeout(function() {
		    var endereco_da_pagina = window.location.href;
            var url = new URL(endereco_da_pagina);

            // Popula formulário com campos ocultos repassando as UTMs recebidas

            // UTM source
            var utm_source = url.searchParams.get('utm_source');
            if (utm_source != null && utm_source != 'null')
                $('#conversion-form').append('<input type="hidden" name="cf_utm_source" value="'+ utm_source +'"></input>');
            
            // UTM source
            var utm_medium = url.searchParams.get('utm_medium');
            if (utm_medium != null && utm_medium != 'null')
                $('#conversion-form').append('<input type="hidden" name="cf_utm_medium" value="'+ utm_medium +'"></input>');

            // UTM campaign
            var utm_campaign = url.searchParams.get('utm_campaign');
            if (utm_campaign != null && utm_campaign != 'null')
                $('#conversion-form').append('<input type="hidden" name="cf_utm_campaign" value="'+ utm_campaign +'"></input>');
            
            // UTM content
            var utm_content = url.searchParams.get('utm_content');
            if (utm_content != null && utm_content != 'null')
                $('#conversion-form').append('<input type="hidden" name="cf_utm_content" value="'+ utm_content +'"></input>');
	    }, 100);
    });
</script>
