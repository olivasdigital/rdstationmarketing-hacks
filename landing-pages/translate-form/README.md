# Traduzindo label de campos do formulário
Caso sua empresa atue com clientes internacionais, apresentar os labels do formulário no idioma do usuário aumentará suas taxas de conversão e evita cadastro de informações incorretas.
A solução que apresentamos abaixo é feita via Google Tag Manager, mas você pode adaptar os scripts para cadastrar manualmente se preferir.

## Passo 1: Setup de variável do idioma do GTM
Crie uma variável personalizada no Google Tag Manager do tipo javascript personalizado chamada Browser Language.
Esta variável tem a função de identificar a configuração de idioma do browser do usuário. Ou seja, mesmo que o seu usuário esteja no Brasil mas utiliza o Chrome como ingles como idioma preferencial, verá os campos em ingles. Não utilizaremos a localização do usuário para determinar o idioma e sim o idioma do browser utilizado - até para evitar problemas de privacidade e uso de ferramentas exter nas e mais complexas.

Abra seu GTM e siga as etapas
1. Variáveis
2. Na parte debaixo (Variáveis definidas pelo usuário), clique em Nova
3. Defina o nome "Browser language" e o tipo JavaScript personalizado
4. No campo de código coloque o seguinte script:

```
function(){
  var language = window.navigator.userLanguage || window.navigator.language;
  return language;
}
```

5. Salve

## Passo 2: Acionador para LPs quando o idioma for ingles
Agora vamos criar um acionador que irá disparar nosso código de tradução apenas em LPs do RD Station quando o idioma do usuário for em ingles.

Voltando ao GTM siga as etapas:
1. Acionadores > Novo
2. Nomeie seu acionador como "RD - Landing Page - en"
3. Tipo de acionador: DOM Pronto
4. Selecione "Alguns eventos DOM prontos"
5. Disparar acionador quando:
- Page hostname é igual a "(coloque o dominio das suas LPs, ex: info.empresa.com)"
- Browser langague começa com "en"
6. Salve

## Passo 3: Tag de tradução
Agora sim vamos publicar o script que irá traduzir os campos, apenas para usuários com navegadores em ingles

Ainda no GTM siga as etapas:
1. Tags > Nova
2. Nomeie como "RD - translate form - en"
3. Tipo de tag: "HTML personalizado"
4. HTML: abra o script_pt2en.js e coloque o conteúdo aqui
5. Acionamento, selecione o que acabamos de criar "RD - Landing Page - en"
6. Salve
7. Publique seu container
