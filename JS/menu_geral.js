document.addEventListener('DOMContentLoaded', function() {


    //mudando a cor do menu quando ocorrer um click
    let img=document.querySelector(".o_menu2")
    let menu=document.querySelector(".mudanca")
    let main =document.querySelector('main')
    let body=document.querySelector('body')
    console.log(main)
    //main.addEventListener('click', fora)
    body.addEventListener('click', fora)
    img.addEventListener('click', azul)
    h=0

    function azul(event){
        if(h==0){
            document.querySelector('.o_menu2').src=" ../Imagens/Menu2.png"
            h=1
            menu.style.visibility='visible'
            menu.animate([
                { transform: 'translate3D(-50%, 0, 0)' }, 
                { transform: 'translate3D(0%, 0%, 0)' }
              ], {
                duration: 700
              })
              menu.style.left='0'
        }
        else{
            document.querySelector('.o_menu2').src=" ../Imagens/menu3.png"
            h=0
            menu.animate([
                { transform: 'translate3D(50%, 0, 0)' }, 
                { transform: 'translate3D(-50%, 0%, 0)' }
              ], {
                duration: 1000
              })
            
            menu.style.left='-50%'}
            //menu.style.visibility='hidden'}
        event.stopPropagation()}
        
    
    function fora (){
        menu.style.visibility='hidden'
        document.querySelector('.o_menu2').src=" ../Imagens/menu3.png"
        h=0}

})