document.addEventListener('DOMContentLoaded', function() {


    let botao= document.querySelector('.aa')

    botao.addEventListener('mouseover', claro)
    botao.addEventListener('mouseout', escuro)
    function claro(){botao.style.backgroundColor='#90d3ee'}
    function escuro(){botao.style.backgroundColor='#3bacd9'}




})