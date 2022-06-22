document.addEventListener('DOMContentLoaded', function() {

    let us = document.querySelector('.usuario')
    us.addEventListener('mouseover', azul)
    us.addEventListener('mouseout', preto)
    function preto(){document.querySelector('.usuario').src=" ../Imagens/usuario.png"}
    function azul(){document.querySelector('.usuario').src=" ../Imagens/usuario22.png"}
})