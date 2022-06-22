document.addEventListener("DOMContentLoaded", function(){



    bot=document.querySelector('.forma')

    bot.addEventListener('mouseover', claro)
    bot.addEventListener('mouseout', escuro)

    function claro(){ bot.style.backgroundColor='#90d3ee'}
    function escuro(){bot.style.backgroundColor='#3bacd9'}



})


