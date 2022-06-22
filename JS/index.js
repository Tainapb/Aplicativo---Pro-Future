document.addEventListener('DOMContentLoaded', function() {

    //iterações com os botões iniciais 

    let botao=document.querySelector('.Cursos')
    let botao2=document.querySelector('.Eventos')
    let botao3=document.querySelector('.Instituições')

    botao.addEventListener('touchstart', claro)
    botao.addEventListener('touchend', escuro)
    botao2.addEventListener('touchstart', claro2)
    botao2.addEventListener('touchend', escuro2)
    botao3.addEventListener('touchstart', claro3)
    botao3.addEventListener('touchend', escuro3)
    botao.addEventListener('mouseover', claro)
    botao.addEventListener('mouseout', escuro)
    botao2.addEventListener('mouseover', claro2)
    botao2.addEventListener('mouseout', escuro2)
    botao3.addEventListener('mouseover', claro3)
    botao3.addEventListener('mouseout', escuro3)
    function claro(){botao.style.backgroundColor='#90d3ee'}
    function escuro(){botao.style.backgroundColor='#3bacd9'}
    function claro2(){botao2.style.backgroundColor='#90d3ee'}
    function escuro2(){botao2.style.backgroundColor='#3bacd9'}
    function claro3(){botao3.style.backgroundColor='#90d3ee'}
    function escuro3(){botao3.style.backgroundColor='#3bacd9'}

    opcoes = document.querySelector(".opções")

    liss = opcoes.querySelectorAll("li")

    cursos = liss[0]
    inst = liss[1]
    even = liss[2]

    cursos.addEventListener("click", function(){

        window.location.href = "home_vocacional.html"

    })

    inst.addEventListener("click", function(){

        window.location.href = "home_instituicoes.html"

    })

    even.addEventListener("click", function(){

        window.location.href = "Eventos.html"

    })

})