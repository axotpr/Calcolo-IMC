function calcolaIMC() {
    // Otteniamo i valori inseriti nei campi input
    let peso = document.getElementById("peso").value;
    let altezza = document.getElementById("altezza").value;
    let eta = document.getElementById("eta").value;

    // Verifica che tutti i campi siano stati compilati
    if (peso === "" || altezza === "" || eta === "") {
        alert("Per favore, inserisci tutti i parametri richiesti.");
        return;
    }

    // Convertiamo i valori in numeri
    peso = parseFloat(peso);
    altezza = parseFloat(altezza); // Altezza in cm
    eta = parseInt(eta);

    let errore = "";

    // Controllo dei valori per evitare errori di inserimento
    if (altezza > 220) {
        errore += "L'altezza non può superare i 220 cm.\n";
    }

    if (eta > 120) {
        errore += "L'età non può superare i 120 anni.\n";
    }

    if (peso > 650) {
        errore += "Il peso non può superare i 650 kg.\n";
    }

    // Se ci sono errori, mostriamo un messaggio di errore
    if (errore !== "") {
        alert(errore);
        return;
    }

    // Convertiamo l'altezza da cm a metri
    altezza /= 100;

    // Calcoliamo l'IMC usando la formula: peso (kg) / altezza (m)²
    let IMC = peso / Math.pow(altezza, 2);
    
    // Arrotondiamo l'IMC a 2 decimali
    let IMC_arrotondato = IMC.toFixed(2);

    // Determiniamo la categoria dell'IMC
    let categoria_IMC;
    if (IMC < 18.5) {
        categoria_IMC = "sottopeso";
    } else if (IMC < 25) {
        categoria_IMC = "normopeso";
    } else if (IMC < 30) {
        categoria_IMC = "sovrappeso";
    } else {
        categoria_IMC = "obeso";
    }

    // Verifica se la persona è maggiorenne o minorenne
    let statoEta = eta >= 18 ? "maggiorenne" : "minorenne";

    // Mostriamo il risultato
    let risultatoMsg = "Il tuo IMC è " + IMC_arrotondato + ", classificabile come soggetto " + categoria_IMC + ". Sei " + statoEta + ".";
    document.getElementById("risultato").innerText = risultatoMsg;
}