<script type="text/javascript">
    // Prepara variaveis
    var utm_source = "";
    var utm_medium = "";
    var utm_campaign = "";
    var utm_content = "";
    var params = "";
    var match = null;
    var url = "";
    var data = "";

    // Pega os dados do parametro da URL
    var endereco_da_pagina = window.location.href;
    
    // Se a URL não possuir parametros UTM, tenta puxar do cookie tracker do RD Station
    if( ! endereco_da_pagina.includes("utm_source") )
    {
        match = document.cookie.match(new RegExp('(^| )' + '__trf.src' + '=([^;]+)'));
        if (match){ 
            data = match[2];
            if( data.includes("encoded") )
            {
                data = data.replace("encoded_", "");
                data = JSON.parse(atob(data));
            }
            else{
                data = JSON.parse(data);
            }
            
            var current_session = data?.current_session?.value ? data?.current_session?.value : '';
            var first_session = data?.first_session?.value ? data?.first_session?.value : '';
            if( current_session !== '' )
                params = current_session;
            else if( first_session !== '' )
                params = first_session;

            if( endereco_da_pagina.includes('?') )
                endereco_da_pagina = endereco_da_pagina + '&' + params;
            else
                endereco_da_pagina = endereco_da_pagina + '?' + params;
        }
    }
    
    url = new URL(endereco_da_pagina);
    utm_source = url.searchParams.get('utm_source') ? url.searchParams.get('utm_source') : '';
    utm_medium = url.searchParams.get('utm_medium') ? url.searchParams.get('utm_medium') : '';
    utm_campaign = url.searchParams.get('utm_campaign') ? url.searchParams.get('utm_campaign') : '';
    utm_content = url.searchParams.get('utm_content') ? url.searchParams.get('utm_content') : '';

    document.querySelectorAll("form").forEach( function(element) {
        element.insertAdjacentHTML('afterbegin', '<input type="hidden" name="cf_utm_source" value="'+ utm_source +'"></input>');
        element.insertAdjacentHTML('afterbegin', '<input type="hidden" name="cf_utm_medium" value="'+ utm_medium +'"></input>');
        element.insertAdjacentHTML('afterbegin', '<input type="hidden" name="cf_utm_campaign" value="'+ utm_campaign +'"></input>');
        element.insertAdjacentHTML('afterbegin', '<input type="hidden" name="cf_utm_content" value="'+ utm_content +'"></input>');
    });
</script>
