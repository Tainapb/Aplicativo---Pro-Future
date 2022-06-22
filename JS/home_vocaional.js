document.addEventListener('DOMContentLoaded', function() {


    let botao= document.querySelector('.botao')

    botao.addEventListener('mouseover', claro)
    botao.addEventListener('mouseout', escuro)
    function claro(){botao.style.backgroundColor='#90d3ee'}
    function escuro(){botao.style.backgroundColor='#3bacd9'}

    let menuu= document.querySelector('.o_menu')
    let mud=document.querySelector('.mudanca')
    menuu.addEventListener('click', desce)
    h=0
    function desce(){
        if(h==0){
            mud.style.visibility='visible'
        }

    }

    formulário = document.querySelector("form")

    input = formulário.querySelector('input[type="text"]')

    pesquisa = document.querySelector(".des")

    imagem = pesquisa.querySelector("img")

    imagem.addEventListener("click", function(){

        texto = input.value

        if (texto == "") {

            window.alert("Digite algo para pesquisar")

        }

        else {

            pesquisa.href = "infos.html"

        }

    })





})