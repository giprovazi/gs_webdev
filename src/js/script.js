function alert("Bem-vindo ao Site GreenWind Solar!");

function trocar(cor) {
    document.body.style.backgroundColor = cor;
}

function instagram() {
    alert("Nosso instagram: @greenwindsolar_oficial");
}

function twitter() {
    alert("Nosso twitter: @greenwindsolar_oficial");
}

let imagens = [
    "src/assets/img1_home.jpg",
    "src/assets/img2_home.jpg",
    "src/assets/img3_home.jpg"
];

let i = 0;
let time = 3000;

function slideShow() {
    document.getElementById("image").src = imagens[i];
    i++;
    if (i == imagens.length) {
        i = 0;
    }
    setTimeout(slideShow, time);
}

slideShow();

const form = document.getElementById("form");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const senha = document.getElementById("senha");

form.addEventListener("submit", (e) => {
    e.preventDefault(); 
    if (checarCampos()) {
        setTimeout(() => {
            window.location = "index.html"; 
        }, 1000);
    }
});

function checarCampos() {
    const nomeValor = nome.value.trim();
    const emailValor = email.value.trim();
    const senhaValor = senha.value.trim();
    let valida = true;

    if (nomeValor === "") {
        validarErro(nome, "Preencha o campo nome");
        valida = false;
    } else {
        validarSucesso(nome);
    }

    if (emailValor === "") {
        validarErro(email, "Preencha o campo e-mail");
        valida = false;
    } else if (!emailValor.endsWith(".com")) {
        validarErro(email, "O e-mail deve terminar com .com");
        valida = false;
    } else {
        validarSucesso(email);
    }

    if (senhaValor === "") {
        validarErro(senha, "Preencha o campo senha");
        valida = false;
    } else if (senhaValor.length < 8) {
        validarErro(senha, "A senha deve ter mais que 8 caracteres");
        valida = false;
    } else {
        validarSucesso(senha);
    }

    return valida;
}

function validarErro(input, message) {
    const controle = input.parentElement;
    const small = controle.querySelector("small");
    small.innerText = message;
    controle.className = "controle error";
}

function validarSucesso(input) {
    const controle = input.parentElement;
    controle.className = "controle sucesso";
}

function telefone() {
    alert("Nosso telefone fixo é 11-98786-6300");
}

function emailContato() {
    alert("O nosso email é GreenWind@gmail.com");
}

function wpp() {
    alert("Nosso Whatsapp é 11-91384-1530");
}

function insta() {
    alert("Nosso instagram é @GreenWind_br");
}
