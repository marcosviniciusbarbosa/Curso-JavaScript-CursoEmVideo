 var agora = new Date()
 var diaSem = agora.getDay()
 var hora = agora.getHours()
 var min = agora.getMinutes()
 var seg = agora.getSeconds()
 switch(diaSem){
    case 0:
        console.log(`Domingo às ${hora}:${min}:${seg}`)
        break
    case 1:
        console.log(`Segunda às ${hora}:${min}:${seg}`)
        break
    case 2: 
        console.log(`Terça às ${hora}:${min}:${seg}`)
        break
    case 3: 
        console.log(`Quarta às ${hora}:${min}:${seg}`)
        break
    case 4: 
        console.log(`Quinta às ${hora}:${min}:${seg}`)
        break
    case 5:
        console.log(`Sexta às ${hora}:${min}:${seg}`)
        break
    case 6: 
        console.log(`Sabado às ${hora}:${min}:${seg}`)
    default:
        console.log(`[ERRO] Dia invalido`)
 } 
 
 /*
    0 = Domingo
    1 = Segunda
    2 = Terça 
    3 = Quarta
    4 = Quinta 
    5 = Sexta   
    6 = Sabado 

*/ 