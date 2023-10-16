# Campo do tipo rating (NPS)

Modelo de como transformar um campo select em campo no formato rating, muito util para landing pages de NPS.
Usamos a biblioteca [jQuery Bar Rating](https://antennaio.github.io/jquery-bar-rating/) para manipular o campo e gerar o front.
No modelo abaixo customizamos as cores para o NPS, deixando os números de 1-6 em vermelhor, 7-8 em laranja e 9-10 em verde, deixando mais intuitivo para o usuário a escala de graduação das notas.

![Exemplo de formulário com bar rating](https://github.com/olivasdigital/rdstationmarketing-hacks/assets/13876797/79955677-aa4b-413d-8a80-86e67b0873e0)

## Instalação
1. Crie um campo de personalizado no RD para registrar a resposta. Coloque o nome do campo como "nps_score" e no enunciado "Você recomendaria XXX para um amigo ou colega?"
2. Acrescente o campo à landing page
3. Nesta LP, na opção de Edição avançada acrescente os conteúdos dos arquivos css.css, head.js e body.js nos respectivos campos CSS, JavaScript em HEAD e JavaScript em BODY.
4. Dependendo da versão do modelo de LP que você utilizou, o campo nps_score vai ser colocado com o ID do campo ou pelo nome. Procure o nome do input nps_score e customize os modelos de códigos fornecidos, substituindo "custom_fields[1013787]" pelo nome do campo correto.
