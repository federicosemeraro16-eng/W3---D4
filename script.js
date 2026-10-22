/*
  REGOLE
  - Solo const/let, mai var.
  - DOM con querySelector / querySelectorAll.
  - Eventi con addEventListener (mai onclick inline nell'HTML).
*/

let usciti = []; // array dei numeri già estratti

/* SCRIVI QUI LE TUE FUNZIONI E I TUOI LISTENER:
   1. rendiTabellone()  — crea 90 div, evidenzia i numeri usciti
   2. estrai()          — pesca un numero casuale tra i non usciti
   3. rendiCronologia() — mostra gli ultimi 10 estratti
   4. Listener click su #estrai e #reset
   EXTRA: conteggio, animazione di estrazione, localStorage
*/
const tabellone = document.querySelector('#tabellone');

window.onload = (e) => {
  rendiTabellone();
};

const rendiTabellone = () => {
  for (let i = 1; i <= 90; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add('cella')
    const newSpan = document.createElement('span');
    newSpan.textContent = i;
    newDiv.appendChild(newSpan);
    tabellone.appendChild(newDiv);
    tabellone.classList.add('tabellone');
  }
};
