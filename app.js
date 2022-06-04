const form = document.querySelector(".quiz-form");
const result = document.querySelector(".popup-wrapper");
const span = document.querySelector(".text-primary");
const closePopup = document.querySelector(".popup-close");
const recomecar = document.querySelector(".recomecar");

const respostasCertas = ["B", "B", "B", "B"];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let score = 0;
  
  const userRespostas = [
    form.inputQuestion1.value,
    form.inputQuestion2.value,
    form.inputQuestion3.value,
    form.inputQuestion4.value,
  ];

  userRespostas.forEach((item, index) => {
    if (item === respostasCertas[index]) {
      score += 25;
    }
  });
  result.classList.remove("d-none");
  let counter = 0;

  const timer = setInterval(() => {
      if (counter === score) {
        clearInterval(timer);
  }

  span.textContent = `${counter}%`;
  counter++;
}, 10);
});

  closePopup.addEventListener("click", (event) => {
    event.preventDefault();
    result.classList.add("d-none");
  });



recomecar.addEventListener("click", function () {
  location.reload();
});
