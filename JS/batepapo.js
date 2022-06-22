document.addEventListener("DOMContentLoaded", function (){

    lista = document.querySelector('.lista')
    img_perfil= lista.querySelector('img')
    nome=lista.querySelector('h1')
    img_perfil.src =  localStorage.getItem('img')
    //console.log(img_perfil)

    nome.innerHTML=localStorage.getItem('h1')

    enviar = document.querySelector(".enviar2");


    //console.log(enviar)

    enviar.addEventListener("click", function(event){

        texto = document.querySelector('input[type = "text"]')

        if (texto.value != "") {

        horas = new Date().toLocaleTimeString()
        horário = document.createElement("p")    
        horário.innerHTML = horas
        //horário.classList.add("voce")

        espaço = document.createElement("section")
        voce = document.createElement("p")
        voce.innerHTML = "Você"
        voce.style.fontWeight = "bold"
        voce.classList.add("voce")
        balao = document.createElement("div")
        mensagem = document.createElement("p")
        balao.classList.add("boxers1")
        lista=document.querySelectorAll(".boxers1")
        console.log(lista)
        mensagem.innerHTML = texto.value

        balao.appendChild(mensagem)
        espaço.appendChild(voce)
        espaço.appendChild(balao)
        espaço.appendChild(horário)

        espaço.classList.add("espaço")

        main = document.querySelector("main")

        main.appendChild(espaço)
        $('main').animate({scrollTop: $('main').prop("scrollHeight")}, 500);
        texto.value=''
        if (lista.length==0){
            espaço2 = document.createElement("section")
            voce2 = document.createElement("p")
            voce2.innerHTML = localStorage.getItem('h1')
            voce2.classList.add("voce")
            console.log('testando')
            let resposta=document.createElement('p')
            resposta.innerHTML='Bem Vindo ao Pro Future, meu nome é'+ localStorage.getItem('h1')+ ' e será um prazer te ajudar!'
            //main.appendChild(resposta)
            resposta.classList.add("resposta")
            espaço2.classList.add('espaço2')


            setTimeout(function(){
                horas_2 = new Date().toLocaleTimeString()
                horário2 = document.createElement("p")    
                horário2.innerHTML = horas_2
                //horário2.classList.add("voce")
                espaço2.appendChild(voce2)
                espaço2.appendChild(resposta)
                espaço2.appendChild(horário2)
                main.appendChild(espaço2)
                },1000)
            }
    
    }
    else{
        window.alert('Digite uma mensagem para ser encaminhada😅')
    }
    
        event.preventDefault()


    })

    document.addEventListener("keydown", function(event){
        
        if (event.code==='Enter'){

        

        texto = document.querySelector('input[type = "text"]')

        if (texto.value != "") {

        horas = new Date().toLocaleTimeString()
        horário = document.createElement("p")    
        horário.innerHTML = horas
        //horário.classList.add("voce")

        espaço = document.createElement("section")
        voce = document.createElement("p")
        voce.innerHTML = "Você"
        voce.style.fontWeight = "bold"
        voce.classList.add("voce")
        balao = document.createElement("div")
        mensagem = document.createElement("p")
        balao.classList.add("boxers1")
        lista=document.querySelectorAll(".boxers1")
        console.log(lista)
        mensagem.innerHTML = texto.value

        balao.appendChild(mensagem)
        espaço.appendChild(voce)
        espaço.appendChild(balao)
        espaço.appendChild(horário)

        espaço.classList.add("espaço")

        main = document.querySelector("main")

        main.appendChild(espaço)
        $('main').animate({scrollTop: $('main').prop("scrollHeight")}, 500);
        texto.value=''
        if (lista.length==0){
            espaço2 = document.createElement("section")
            voce2 = document.createElement("p")
            voce2.innerHTML = localStorage.getItem('h1')
            voce2.classList.add("voce")
            console.log('testando')
            let resposta=document.createElement('p')
            resposta.innerHTML='Bem Vindo ao Pro Future, meu nome é'+ localStorage.getItem('h1')+ ' e será um prazer te ajudar!'
            //main.appendChild(resposta)
            resposta.classList.add("resposta")
            espaço2.classList.add('espaço2')


            setTimeout(function(){
                horas_2 = new Date().toLocaleTimeString()
                horário2 = document.createElement("p")    
                horário2.innerHTML = horas_2
                //horário2.classList.add("voce")
                espaço2.appendChild(voce2)
                espaço2.appendChild(resposta)
                espaço2.appendChild(horário2)
                main.appendChild(espaço2)
                },1000)
            }
    
    }
    else{
        window.alert('Digite uma mensagem para ser encaminhada😅')
    }
    
        event.preventDefault()
    }   

    })


})