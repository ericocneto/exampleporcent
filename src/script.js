let btn = document.getElementsByTagName('input')[2]
let btnclick = btn.addEventListener('click', calc)

/* sem utilizar parâmetros */
function calc() {
    const porcent = document.getElementById('ipor').value
    const num = document.getElementById('inum').value
    if(porcent.length==0 || num.length==0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
    alert(porcent*num/100)
    }
}
