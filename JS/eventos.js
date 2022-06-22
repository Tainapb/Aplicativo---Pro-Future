document.addEventListener("DOMContentLoaded", function(){

    form = document.querySelectorAll("form")

    form_1 = form[0]

    form_2 = form[1]

    input_1 = form_1.querySelector('input[type="text"]')

    input_2 = form_2.querySelector('input[type="text"]')

    a_1 = form_1.querySelector("a")

    a_2 = form_2.querySelector("a")

    imagem_1 = a_1.querySelector("img")

    imagem_2 = a_2.querySelector("img")

    imagem_1.addEventListener("click", function(){

        texto = input_1.value

        if (texto == "") {

            window.alert("Digite algo para pesquisar")

        }

        else {

            a_1.href = "Eventos_engmecanica.html"

        }

    })

    imagem_2.addEventListener("click", function(){

        window.alert("Não há o que ver aqui")

    })

})