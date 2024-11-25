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