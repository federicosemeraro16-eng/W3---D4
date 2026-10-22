/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/
const tabellone = document.querySelector("#tabellone");
const comandi = document.querySelector(".comandi");
const spanCronologia = document.querySelector("#cronologia");
const ultimoNumero = document.querySelector("#ultimo-numero");

let usciti = []; // array dei numeri già estratti

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/

window.onload = (e) => {
  rendiTabellone();
};

comandi.addEventListener("click", (e) => {
  if (e.target.id === "estrai") {
    estrai();
  } else if (e.target.id === "reset") {
    usciti = [];
    ultimoNumero.textContent = '';
    spanCronologia.textContent = "";
    tabellone.innerHTML = "";
    rendiTabellone();
  }
});

const rendiTabellone = () => {
  for (let i = 1; i <= 90; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("cella");
    newDiv.dataset.numero = i;
    const newSpan = document.createElement("span");
    newSpan.textContent = i;
    newDiv.appendChild(newSpan);
    tabellone.appendChild(newDiv);
    tabellone.classList.add("tabellone");
  }
};

const estrai = () => {
  if (usciti.length === 90) {
    alert("sono usciti tutti i numeri ludopatico");
    return;
  }
  const randomNumber = Math.floor(Math.random() * 90) + 1;

  if (usciti.includes(randomNumber)) {
    return estrai();
  }

  
  ultimoNumero.textContent = randomNumber;

  usciti.push(randomNumber);
  rendiCronologia(usciti)

  aggiornaTabellone(randomNumber);
};

const aggiornaTabellone = (numero) => {
  const celle = document.querySelector(`[data-numero="${numero}"]`);

  celle.classList.add("numero", "uscito");
};

const rendiCronologia = (array) => {
  
  spanCronologia.textContent = "";
  for (let i = 0; i < array.slice(-10).length; i++) {
    spanCronologia.textContent += array.slice(-10)[i]+' ';
  }
};
