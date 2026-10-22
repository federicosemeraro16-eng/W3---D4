# W3---D4

Al caricamento della pagina viene eseguita la funzione rendiTabellone(), richiamata tramite l'evento window.onload. La funzione utilizza un ciclo for tradizionale che va da 1 a 90 e, per ogni iterazione, crea dinamicamente una cella composta da un div contenente uno span con il numero corrispondente. In questo modo viene generato il tabellone completo della tombola.

Per la gestione dei controlli è stato implementato un sistema di event delegation, applicando un eventListener al contenitore padre dei pulsanti. Quando viene premuto il pulsante con id="estrai", viene eseguita la funzione estrai().
Prima di accettare il numero estratto vengono effettuati alcuni controlli preventivi:

Se l'array usciti contiene già 90 elementi, significa che tutti i numeri sono stati estratti. In questo caso viene mostrato un messaggio di avviso tramite alert() e la funzione termina con return.
Se il numero generato è già presente nell'array usciti, la funzione richiama sé stessa ricorsivamente per effettuare una nuova estrazione.

Quando il numero risulta valido:

Viene mostrato nell'elemento dedicato all'ultimo numero estratto.
Viene aggiunto all'array usciti tramite push().
Vengono aggiornate la cronologia e la visualizzazione del tabellone.

Per evidenziare i numeri estratti sul tabellone è stata realizzata una funzione separata che identifica la cella corretta tramite l'attributo data-numero. La funzione viene richiamata al termine di ogni estrazione passando come argomento il numero appena generato.

È stata inoltre implementata una funzione dedicata alla cronologia delle estrazioni. Questa utilizza il metodo slice(-10) per mostrare soltanto gli ultimi 10 numeri usciti. Il metodo non modifica l'array originale ma restituisce una copia contenente esclusivamente gli ultimi elementi richiesti. La funzione viene richiamata dopo ogni push() nell'array usciti, passando come argomento l'intero array aggiornato
Manipolazione del DOM (createElement, appendChild, textContent)
Event Delegation
Event Listener
Cicli for
Array e metodo push()
Metodo includes()
Metodo slice()
Ricorsione
Attributi personalizzati data-*
Generazione di numeri casuali con Math.random() e Math.floor()
Controlli preventivi con if e return
