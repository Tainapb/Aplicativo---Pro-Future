document.addEventListener('DOMContentLoaded', function() {

    // body = document.querySelector("body")

    // main = body.querySelector("main")

    // ul = main.querySelector("ul")

    espacos = document.querySelectorAll('.espaco')

    for (esp of espacos) {
        
        img_conversa = esp.querySelector('.mensagem')
        console.log(esp)

        esp.addEventListener('click', function(event) {
            console.log('olá')

            event.stopPropagation()
            esp_atual = event.currentTarget
            console.log(esp_atual)
            nome = esp_atual.querySelector('h1')
            localStorage.setItem('h1', nome.innerHTML)

            img_usuario = esp_atual.querySelector('img') 
            localStorage.setItem('img', img_usuario.src)
           
            
        })
    }


    // espacos = document.querySelectorAll('.espaco')

    // for (esp of espacos){

    //     esp.addEventListener('click', function(event){
    //         esp_atual = event.currentTarget

    //         nome = esp_atual.querySelector('h1').innerHTML
    //         localStorage.setItem('h1',nome)


    //         // profilepic = esp_atual.querySelector('.usuario')['src']
    //         // localStorage.setItem('src',profilepic)

    //         // alt = esp_atual.querySelector('.usuario')['alt']
    //         // localStorage.setItem('alt',alt)

    //         // console.log(nome)
    //         // console.log(profilepic)
    //     })
    // }



})
