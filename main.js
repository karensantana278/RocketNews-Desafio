//check a valid email submit form
let formSubmit = document.getElementById('form')
let inputEmail = document.getElementById('email')

function checkEmail(event) {
    event.preventDefault()
    if(inputEmail.value){
        alert('Seu cadastro foi efetuado com sucesso!')
    }else{
        alert('Por favor insira um email válido!')
    }
}

form.addEventListener('submit', checkEmail)
