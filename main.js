
// Selfwork DOM 3
// Crea una pagina html con le seguenti caratteristiche:

//     crea un input dove potrai inserire un tot di secondi.
//     un pulsante che, al click, fara' partire un countdown (dai secondi selezionati a zero).
//     un pulsante che, al click, mettera' in pausa il countdown.
//     un pulsante che, al click, pulira' l’input e azzerera' il countdown.


// EXTRA:

//     se il timer viene stoppato (non azzerato), il click sul tasto di avvio fara' riprendere il timer da quel punto


// Portiamo i valori in Js
let secondsInput = document.querySelector("#secondsInput");
let startButton = document.querySelector("#startButton");
let pauseButton = document.querySelector("#pauseButton");
let resetButton = document.querySelector("#resetButton");
//scritta di output
let timerOutput = document.querySelector("#timerOutput");
let redMessage = document.querySelector("#redMessage");


// Variabili
let countdown;
let remainingTime;
let isPaused = false;

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsFormatted = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsFormatted).padStart(2, '0')}`;
}

function updateTimer() {
    timerOutput.textContent = formatTime(remainingTime);
}

function startCountdown() {
    const totalSeconds = secondsInput.value;

    if ( totalSeconds <= 0) {
        alert("Inserisci un numero valido di secondi.");
        return;
    }


    remainingTime = totalSeconds;
    updateTimer();

    countdown = setInterval(() => {
        if (remainingTime > 0) {
            remainingTime--;
            updateTimer();
        } else {
            redMessage.innerHTML="Countdown terminato!";
            clearInterval(countdown);
            countdown = null;
 
        
        }
    }, 1000);

    startButton.disabled = true;
    pauseButton.disabled = false;


} // fine startCountdown

let timeFormatted = formatTime(secondsInput.value);


// Se premo il pulsante AVVIA
startButton.addEventListener("click", () => {
    if (isPaused) {
        // Riprendi il countdown da dove è stato interrotto - Maledetta Pausa
        startCountdown();
        isPaused = false;
    } else {
        // Inizia un nuovo countdown
        startCountdown();
    }


});


pauseButton.addEventListener("click", ()=> {
    clearInterval(countdown);
        countdown = null;
        isPaused = true;
        startButton.disabled = false;
        pauseButton.disabled = true;

});


resetButton.addEventListener("click", ()=> {
    clearInterval(countdown);
        countdown = null;
        isPaused = false;
        startButton.disabled = false;
        pauseButton.disabled = true;
        secondsInput.value = '';
        timerOutput.textContent = '00:00';
    redMessage.innerHTML=""; // reset messaggio

});