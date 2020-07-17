function carregar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var nas = document.getElementById('txtidade')
    var res = document.querySelectorAll('div#res')
    if (nas.value.length == 0 || Number(nas.value) > ano) {
        document.alert('[ERRO] Verifique os dados e tente novamente ')
    } else {
        var sexo = document.getElementsByName('radsexo')  
        var idade = ano - Number(nas.value)
        res.innerHTML = `Detectamos Homen com ${idade} anos.`
    }
} 