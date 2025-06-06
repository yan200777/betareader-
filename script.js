
const perguntas = [
  "Você sente inveja de quem ganha dinheiro fácil pela internet?",
  "Se você ganhasse R$500 por semana só lendo livros, você contaria pra alguém?",
  "Você quer ganhar dinheiro sem sair de casa, mesmo deitado no sofá?",
  "Se você tivesse acesso a uma técnica secreta que ninguém mais conhece, usaria?",
  "Você quer ganhar mais do que seus colegas ou até seu chefe?",
  "Você ficaria frustrado se outra pessoa aproveitasse isso no seu lugar?",
  "Se você pudesse ganhar dinheiro com livros sobre qualquer tema que ama, qual escolheria?"
];

let index = 0;
let dinheiro = 0;

const quiz = document.getElementById("quiz");
const btn = document.getElementById("next");
const dinheiroSpan = document.getElementById("dinheiro");
const somVenda = document.getElementById("somVenda");

function mostrarPergunta() {
  if (index < perguntas.length) {
    quiz.innerHTML = `<h2>${perguntas[index]}</h2>`;
    btn.innerText = "Responder";
  } else {
    window.location.href = "https://pay.kirvano.com/r/481d9c0d-7021-47eb-83a3-02934dd97a51";
  }
}

btn.addEventListener("click", () => {
  if (index < perguntas.length) {
    dinheiro += Math.floor(Math.random() * 200 + 100);
    dinheiroSpan.textContent = "R$" + dinheiro;
    somVenda.play();
    index++;
    mostrarPergunta();
  }
});

mostrarPergunta();
