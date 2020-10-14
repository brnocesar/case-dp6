// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

// Google Analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');
// console.log('Página visualizada: ' + window.location.pathname);
// End Google Analytics


document.getElementsByClassName("menu-lista-contato")[0].addEventListener("click", function() {
    // console.log('Todas as páginas: entrou em contato pelo menu')
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });
});

document.getElementsByClassName("menu-lista-download")[0].addEventListener("click", function() {
    // console.log('Todas as páginas: fez download do pdf')
    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });
});

function eventoPaginaAnalise(conteudo) {
    // console.log('Botão clicado na página \'analise.html\': ' + conteudo)
    ga('send', {
        hitType: 'event',
        eventCategory: 'analise',
        eventAction: 'ver_mais',
        eventLabel: conteudo
    });
}

function preencheuCampo(nomeCampo) {
    // console.log('Preencheu campo na página \'sobre.html\': ' + nomeCampo)
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: nomeCampo,
        eventLabel: 'preencheu'
    });
}

function enviaFormulario() {
    // console.log("Enviou formulário da página 'sobre.html'")
    ga('send', {
        hitType: 'event',
        eventCategory: 'contato',
        eventAction: 'enviado',
        eventLabel: 'enviado'
    });
}