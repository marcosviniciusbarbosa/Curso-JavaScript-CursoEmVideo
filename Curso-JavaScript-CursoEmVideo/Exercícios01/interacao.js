function carregar(){
    var meg = document.querySelector('#texto')
    var img = document.querySelector('#foto')
    var agora = new  Date()
    var hora = agora.getHours()
    var min = agora.getMinutes()
    var seg = agora.getSeconds()
    meg.innerHTML = `${hora} Hrs ${min} Min ` 
    if ( hora >= 0 && hora<12 ){
        img.src = './image/manhã.jpg'
    } else if(hora >= 12 && hora<18){
        img.src = './image/tarde.jpg'
    } else {
        img.src = './image/noite01.jpg'
    }

} 
