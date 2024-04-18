/*1. Crea una funzione che controlli due numeri interi. Ritorna se uno dei due è 50 0 se la somma
dei due è 50.
ho utilizzato un if7 else e creato la funzione che mi restituisse un booleano nel caso in cui uno dei due numeri o la somma dei due fosse 50*/

const x = 20;
const y = 30;


function numeroIncognita(x, y) {
    if (x === 50 || y === 50) {
        return true;
    } else if ( x + y === 50){
        return true;
    } else return false;
}
let risultato = numeroIncognita(x, y);
console.log(risultato);


/*2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa. Passa la
stringa e la posizione come parametri e ritorna la stringa modificata. Ho utilizzato il mio nome, composto da sei lettere. Ho preso in considerazione il metodo splice
 che rimuove la lettera numero cinque del mio nome tramite l'if. Se la posizione è compresa nella lunghezza del mio nome allora la lettera numero cinque sarà 
 eliminata e verrà restituita una nuova stringa*/ 

let nome = "Carmen";
let letteraEliminata = 5;
function rimuoviLettera (stringa, posizione) {
    if (posizione < 0 || posizione >= stringa.length) {
        return stringa;
    } else {
        return stringa.slice(0, posizione) + stringa.slice(posizione + 1);
    }
}
let nomeModificato = rimuoviLettera(nome, letteraEliminata);
console.log(nomeModificato);

/*3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 0 tra 70 e 100 i
trues se rispecchiano queste condizioni, altrimenti ritorna 'false'. Come nell'esercizio numero 1 ho personalmente preferito il metodo if per leggibilità anche se 
avrei potuto utilizzare il metodo switch con i vari case*/
let numero1 = 7;
let numero2 = 74;

function checkNumb(numero1, numero2) {
    if (((numero1 >= 40 && numero1 <= 60) || (numero1 >= 70 && numero1 <= 100)) &&
        ((numero2 >= 40 && numero2 <= 60) || (numero2 >= 70 && numero2 <= 100))) {
        return true;
    } else {
        return false;
    }
}

let ris = checkNumb(numero1, numero2);
console.log(ris);



/* 4. Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con
"Los" o "New", altrimenti ritorni *false  In questo caso ho reso tutte le lettere dei nomi città in minuscolo e poi ho utilizzato il metodo slice per estrapolare
le prime 3 lettere della città. Poi ho usato lo switch per andare a creare le casistiche come richiesto dall'esercizio.*/

function nomeCitta(nome) {
    nome = nome.toLowerCase();
    let inizioNome = nome.slice(0, 3);

    switch(inizioNome) {
        case "los":
        case "new":
            return nome;
        default:
            return false;
    }
}
console.log(nomeCitta("New York")); 
console.log(nomeCitta("Chieti")); 


/*5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
L'array deve essere passato come parametro. Per prima cosa ho definito un array di numeri casuali, ho creato la funzione per sommarli ed
ho ritornato il risultato*/

let array = [1, 2, 6, 8, 135];

function sommaArray(array) {
    let somma = 0;
    for (let element of array) {
        somma += element;
    }
    return somma;
}

let result = sommaArray(array);
console.log(result); 


/*User
6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene ritorna 'true', altrimenti ritorna *false
In questo esercizio ho creato un array di numeri random ed ho verificato se sono inclusi i numeri 1 e 3. Nel caso in cui l'array ne contenesse almeno 1
ritorna false, altrimenti se non sono presenti, ritorna true*/ 

let array2 = [1, 8, 45,]
function controllaArray(array2) {
    if (array2.includes(1) || array2.includes(3)) {
        return false; 
    } else {
        return true; 
    }
}
console.log(controllaArray(array2));

/*7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
Angolo acuto: meno di 900 ritorna "acuto"
Angolo ottuso: tra i 900 e i 1800 gradi ritorna "ottuso"
Angolo retto: 900 ritorna "retto"
Angolo Piatto: 1800 ritorna "piatto"*/

let angolo = 156;

function tipoDiAngolo(gradi) {
    if (gradi < 90) {
        return "acuto";
    } else if (gradi === 90) {
        return "retto";
    } else if (gradi > 90 && gradi < 180) {
        return "ottuso";
    } else if (gradi === 180) {
        return "piatto";
    } else {
        return "Valore non valido";
    }
}

console.log(tipoDiAngolo(angolo));

/*8. Crea una funzione che crei un acronimo a partire da una frase. Es. "Fabbrica Italiana Auto
Torino" deve ritornare "FIAT".  Per prima cosa ho creato la funzione che prende come valore la frase da modificare, ho utilizzato il metodo split
con lo spazio per splittare le parole da cui è formata e successivamente ho unito, se la lunghezza della parola è > di 0, l'iniziale della parola
 [indice 0] in maiuscolo al resto ed ho ritornato l'acronimo formato*/

function myAcronimo(frase) {
    let parole = frase.split(" ");
    let acronimo = "";
    for (let parola of parole) {
        if (parola.length > 0) {
            acronimo += parola[0].toUpperCase();
        }
    }
    return acronimo;
}

let acronimo = myAcronimo("Ciao mi chiamo Carmen");
console.log(acronimo);

/*Esercizi extra*/
/*Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.*/

function caratterePiùUsato(stringa){
    let counter = {};
    for(let lettera of stringa) {
       counter[lettera] = (counter[lettera] || 0) + 1;
    }
    let caratterePiùUsato;
    let maxCounter = 0;

    for (let lettera in counter){
        if (counter[lettera] > maxCounter) {
            caratterePiùUsato = lettera;
            maxCounter = counter[lettera];
        }
    }
    return caratterePiùUsato;
}

let stringa = "odddiiiochooooooooooofameeeeeeeeeeeeeeeeeeeeeeee";
console.log(caratterePiùUsato(stringa)); 

/*2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. Ignora punteggiatura e spazi e ricordate di 
rendere la stringa tutta in minuscolo. 
Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`. */

