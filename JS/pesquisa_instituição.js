document.addEventListener("DOMContentLoaded", function(){

    form = document.querySelector("form")

    input = form.querySelector('input[type="text"]')

    a = form.querySelector("a")

    imagem = a.querySelector("img")

    imagem.addEventListener("click", function(){

        texto = input.value

        if (texto == "") {

            window.alert("Digite algo para pesquisar")

        }

        else {

            a.href = "Lista_Instituições.html"

        }

    })

})