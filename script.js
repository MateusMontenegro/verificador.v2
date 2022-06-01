function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length  == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente !')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
               img.setAttribute('src','bebe.jpg')
            } else if(idade >= 10 && idade < 50){
                //adulto
                img.setAttribute('src','homem-adulto.jpg')
            } else{
                //idoso
                img.setAttribute('src','homem-idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero ='Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebemulher.jpg')
            } else if(idade >= 10 && idade < 50){
                //adulto
                img.setAttribute('src','mulheradulta.jpg')
            } else{
                //idoso
                img.setAttribute('src','mulheridosa.jpg')
            }
        }
        res.innerHTML = `Detectamos: ${genero} com ${idade} anos`
        res.style.textAlign = 'center'
        res.appendChild(img) //appendChild serve para adicionar um elemento
    }
}
