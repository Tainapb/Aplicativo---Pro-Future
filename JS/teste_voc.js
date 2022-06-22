document.addEventListener("DOMContentLoaded", function(){

    form = document.querySelectorAll("form")

    form_1 = form[0]
    form_2 = form[1]
    form_3 = form[2]
    form_4 = form[3]

    input_1 = form_1.querySelector('input[type="text"]')
    input_2 = form_2.querySelector('input[type="text"]')
    input_3 = form_3.querySelector('input[type="text"]')
    input_4 = form_4.querySelector('input[type="text"]')

    botao = document.querySelector(".resultado")

    a = botao.querySelector("a")

    botao.addEventListener("click", function(){

        texto_1 = input_1.value
        texto_2 = input_2.value
        texto_3 = input_3.value
        texto_4 = input_4.value

        if (texto_1 == "" || texto_2 == "" || texto_3 == "" || texto_4 == "") {

            window.alert("Preencha todas as perguntas para continuar")

        }

        else {

            a.href = "Resultado_teste.html"

        }

    })

})