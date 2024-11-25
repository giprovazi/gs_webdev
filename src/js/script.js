alert('Bem-vindo ao Site GreenWind Solar!')

function trocar(cor){
    document.body.style.background = cor
}

function instagram() {
    alert("Nosso instagram: @greenwindsolar_oficial")
}

function twitter() {
    alert("Nosso twitter: @greenwindsolar_oficial")
}

let imagens =[
    "src/assets/img1_home.jpg",
    "src/assets/img2_home.jpg",
    "src/assets/img3_home.jpg"
];

let i = 0;
let time = 3000;

function slideShow(){
    document.getElementById('image').src=imagens[i]
    i++;
    if(i == imagens.length) {i = 0;}
    setTimeout('slideShow()', time)
}
slideShow();

// Script Login

// Declarando as variáveis

const form =document.getElementById("form")
const nome =document.getElementById("nome")
const email =document.getElementById("email")
const senha =document.getElementById("senha")

// Evento que vai pegar o que acontece no formulário

form.addEventListener('submit',(e)=>{
    // Previne qualquer alteração no formulário
    e.preventDefault()

    // Chamar a função que vai checar os campos
    if (checarCampos()) {
        // Se todos os campos forem válidos, aguarda 3 segundos antes de redirecionar
        setTimeout(() => {
            window.location = "quiz.html"
        }, 3000) // 3000 milisegundos = 3 segundos
    }
})

// Função checarCampos
function checarCampos(){
    // Declarando as variáveis
    // O método trim remove os espaços em branco no início e no fim do texto
    const nomeValor = nome.value.trim()
    const emailValor = email.value.trim()
    const senhaValor = senha.value.trim()

    // Flag para verificar se todos os campos estão corretos
    let valida = true

    // Se o campo "nome" estiver vazio

    if(nomeValor === ""){
        validarErro(nome,"Preencha o campo nome")
        valida = false // Marca como inválido
    }
    else{
        validarSucesso(nome)
    }

    // Se o campo "email" estiver vazio

    if(emailValor === ""){
        validarErro(email, "Preencha o campo e-mail")
        valida = false // Marca como inválido

    } else if(!emailValor.endsWith(".com")) {
        validarErro(email,"Preencha o campo e-mail")
        valida = false // Marca como inválido
    }
    
    else {
        validarSucesso(email)
    }

    // Se o campo "senha" estiver vazio

    if(senhaValor === ""){
        validarErro(senha, "Preencha o campo senha")
        valida = false // Marca como inválido
    }
    else if(senhaValor.length < 8)
    {
        validarErro(senha,"A senha deve ter mais que 8 caracteres")
        valida = false // Marca como inválido
    }else {
        validarSucesso(senha)
    }

    // Retorna true se todos os campos forem válidos, caso contrário retorna false
    return valida
}

    // Validar error

    function validarErro(input, message){
        // Retorna para o elemento pai
        const controle = input.parentElement;
        // Pega o primeiro elemento small que o seletor encontrar
        const small = controle.querySelector('small')
        // Pega a mensagem no campo em caso de erro
        small.innerText = message
        // Pega as configurações de CSS da classe controle e error
        controle.className = "controle error"
    }


    // Validar sucesso

    function validarSucesso(input){
        // Retorna para o elemento pai
        const controle = input.parentElement;
        // Pega a classe do controle sucesso
        controle.className = 'controle sucesso'
    }