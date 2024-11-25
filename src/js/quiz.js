// Adicionando alert para introduzir o quiz
alert('Vamos testar seus conhecimentos sobre Energia Híbrida!');

// Trocar cor de fundo do site
function trocar(cor) {
    document.body.style.background = cor;
}

// Array de objetos contendo as perguntas e respostas corretas do quiz
const perguntas = [
    { 
        pergunta: "1. O que é um sistema de geração de energia híbrida? \na) Um tipo de rede elétrica convencional \nb) Uma usina movida exclusivamente por energia solar. \nc) Um sistema que combina duas ou mais fontes de energia.", 
        resposta: "c" 
    },
    { 
        pergunta: "2. Quais fontes de energia são frequentemente usadas em sistemas híbridos? \na) Solar e eólica. \nb) Carvão e petróleo. \nc) Energia nuclear exclusivamente.", 
        resposta: "a" 
    },
    { 
        pergunta: "3. Qual é a principal vantagem dos sistemas híbridos? \na) Eles operam apenas em climas ensolarados. \nb) Eles eliminam a necessidade de manutenção. \nc) Eles garantem maior eficiência e estabilidade energética.", 
        resposta: "c" 
    },
    { 
        pergunta: "4. Como sistemas híbridos contribuem para a sustentabilidade? \na) Reduzindo o uso de combustíveis fósseis. \nb) Aumentando a emissão de CO2. \nc) Exigindo mais recursos naturais.", 
        resposta: "a" 
    },
    { 
        pergunta: "5. Qual é um componente essencial em sistemas híbridos para armazenar energia? \na) Transformadores. \nb) Baterias.  \nc) Geradores mecânicos.", 
        resposta: "b" 
    },
    { 
        pergunta: "6. Como os sistemas híbridos podem fornecer energia em locais remotos? \na) Combinando fontes locais, como solar e eólica, com armazenamento em baterias. \nb) Transportando energia de redes tradicionais. \nc) Utilizando exclusivamente combustíveis fósseis.", 
        resposta: "a" 
    },
    { 
        pergunta: "7. Qual é o impacto econômico dos sistemas híbridos? \na) Redução de custos a longo prazo devido ao uso de fontes renováveis. \nb) Aumento constante nos custos operacionais. \nc) Nenhum impacto nos custos gerais.", 
        resposta: "a" 
    },
    { 
        pergunta: "8. O que é necessário para integrar fontes renováveis em um sistema híbrido? \na) Inversores e sistemas de controle inteligente. \nb) Apenas geradores a combustíveis fósseis. \nc) Transformadores convencionais.", 
        resposta: "a" 
    },
    { 
        pergunta: "9. Por que sistemas híbridos são importantes para o futuro energético? \na) Eles promovem a diversificação de fontes e reduzem a dependência de uma única tecnologia. \nb) Eles eliminam completamente a necessidade de energia renovável. \nc) Eles são mais simples e baratos que outras alternativas.", 
        resposta: "a" 
    },
    { 
        pergunta: "10. Qual tecnologia é essencial para gerenciar sistemas híbridos? \na) Geradores mecânicos simples.  \nb) Sensores e sistemas de monitoramento em tempo real. \nc) Apenas cabos de alta tensão.", 
        resposta: "b" 
    }
];

// Declarando a variável que conta o número de acertos
let acertos = 0;

// Loop que percorre todas as perguntas
for (let i = 0; i < perguntas.length; i++) {
    const respostaUsuario = prompt(perguntas[i].pergunta);

    if (respostaUsuario.toLowerCase() === perguntas[i].resposta.toLowerCase()) {
        acertos++;
    }
}

// Determinar a mensagem com base no número de acertos
let mensagem;

if (acertos <= 3) {
    mensagem = "Você precisa estudar mais sobre o assunto!";
} else if (acertos <= 6) {
    mensagem = "Você tem certo conhecimento sobre Energia Híbrida!";
} else if (acertos <= 9) {
    mensagem = "Você tem bom conhecimento sobre Energia Híbrida!";
} else {
    mensagem = "Você tem total conhecimento sobre Energia Híbrida!";
}

// Exibir resultado no elemento com id "msg"
document.getElementById("msg").innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas! ${mensagem}`;
