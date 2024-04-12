
function gerarNumero(){
 const min = Math.ceil(document.querySelector('.minimo').value)
 const max = Math.floor(document.querySelector('.maximo').value)
 const valor = Math.floor(Math.random() * (max - min + 1)) + min;
 alert(valor)
}

