function carregar(){
    var meg = document.querySelector('#texto')
    var img = document.querySelector('#imagem')
    var agora = new  Date()
    var hora = agora.getHours()
    meg.innerHTML = `Agora são ${hora} horas` 
    
    if ( hora >= 0 && hora < 12 ){
        img.src = 'manhã.jpg'
    } else if(hora >= 12 && hora < 18){
        img.src = 'tarde.jpg'
    } else {
        img.src = 'noite01.jpg'
    }

} 
