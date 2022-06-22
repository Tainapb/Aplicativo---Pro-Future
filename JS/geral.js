document.addEventListener('DOMContentLoaded', function() {


    let seta = document.querySelector('.a_seta')
    
    seta.addEventListener('mouseover', azul1)
    seta.addEventListener('mouseout', preto)
    function azul1(){document.querySelector('.a_seta').src=" ../Imagens/Seta2.png"}
    function preto(){document.querySelector('.a_seta').src=" ../Imagens/Seta.png"}
    
    //mudando a cor do menu quando ocorrer um click
    let img=document.querySelector('.o_menu')
    let menu=document.querySelector(".mudanca")
    img.addEventListener('click', muda)
    h=0
    function muda(){
        if (h==0){
            document.querySelector('.o_menu').src=" ../Imagens/Menu2.png"
            h=1}
        else{
            document.querySelector('.o_menu').src=" ../Imagens/menu3.png"
            h=0}}
})