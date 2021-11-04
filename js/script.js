/* Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
- Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. (nel nostro file js)
Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo tutte le card del nostro team.
- Utilizziamo poi gli input presenti nella pagina per permettere all’utente di aggiungere nuovi membri del team.
*/

// 1 creo oggetto  che dovrà contenere nome, immagine e ruolo 

// 2. creo un array dove all interno inserirò gli oggetti da me creati inizialmente ( in seguito li aggiungerò attraverso un push );


// 4. devo sostituire al posto dell immagine, del nome e del paragrafo , i valori che abbiamo nell oggetto selezionato 
    // 4.1 Attraverso un ciclo for seleziono l oggetto che voglio e creo le variabile in cui salvo i valori di quell oggetto.
    // 5 stampo sull html l output finale
    // 5.1 creo una variabile globale dove poi vorrò inserire l html
    // 5.2 assegno alla mia variabile una stringa dove inserirò ciò che vorrò nell html

    // 5.3 sostituisco i valori delle variabili create alla relativa parte della stringa che vorrò inserire nell html .

// 6. Creo un oggetto che dovrà essere aggiunto al nostro array di oggetti
// 7 il valore di quell oggetto sarà generato dall input dell utente
    //7.1  creo una variabile in cui andararmi a salvare l elementoValue richiesto dopo il click
    // 7.2 Richiamo il bottone add e lo salvo in una variabile.
    // 7.3 Al suo click andrò a salvarmi in ogni variabile la sua value.
    // 7.4 sostituisco la variabile al valore dell oggetto
// 8. Aggiungo l oggetto al mio array con il push



// Richiamo il div all interno del quale vorrò scrivere 
const containerTeam = document.querySelector(".team-container");

// Richiamo il pulsante add 
const aggiungi = document.getElementById("addMemberButton");

// Richiamo variabili per poi leggere gli input
const nomeInput = document.getElementById("name");
const ruoloInput = document.getElementById("role");
const immagineInput = document.getElementById("image");
aggiungi.addEventListener("click", function(){
    let NomeMembroAdd = nomeInput.value;
    let ruoloMembroAdd = ruoloInput.value;
    let immagineMembroAdd = immagineInput.value;

    let newMembers = {
        "nome" : NomeMembroAdd,
        "immagine" : `img/${immagineMembroAdd}`,
        "ruolo" : ruoloMembroAdd
    }
    cards.push(newMembers)
    let NewobjectMember = cards[cards.length - 1];
    console.log(NewobjectMember);
    let nomeMembro = NewobjectMember.nome;
    let ruoloMembro = NewobjectMember.ruolo;
    let immagineMembro = NewobjectMember.immagine
    
    // creo stringa inner dove scriverò l html da inserire all interno del mio team container
    let innerMembers = ` 
    <div class="team-card">
        <div class="card-image">
        <img
            src="${immagineMembro}"
            alt="${nomeMembro}"
        />
        </div>
        <div class="card-text">
        <h3>${nomeMembro}</h3>
        <p>${ruoloMembro}</p>
        </div>
    </div>`
    // richiamo la variabile dove vorrò inserire questo html 
    containerTeam.innerHTML += innerMembers;
// }
})

// Array di cards membri 
const cards = [
    {
        "nome" : "Wayne Barnett",
        "immagine": "img/wayne-barnett-founder-ceo.jpg",
        "ruolo" : "Founder & CEO"
    },
    {
        "nome" : "Angela Caroll",
        "immagine": "img/angela-caroll-chief-editor.jpg",
        "ruolo" : "Chief Editor"
    },
    {
        "nome" : "Walter Gordon",
        "immagine": "img/walter-gordon-office-manager.jpg",
        "ruolo" : "Office Manager"
    },
    {
        "nome" : "Angela Lopez",
        "immagine": "img/angela-lopez-social-media-manager.jpg",
        "ruolo" : "Social Media Menager"
    },
    {
        "nome" : "Scott Estrada",
        "immagine": "img/scott-estrada-developer.jpg",
        "ruolo" : "Developer"
    },
    {
        "nome" : "Barbara Ramos",
        "immagine": "img/barbara-ramos-graphic-designer.jpg",
        "ruolo" : "Graphic Designer"
    }

]


//  creo ciclo for per scorrere all interno dell array

for ( let i =  0 ; i < cards.length ; i++){
    let objectMember = cards[i];
    let nomeMembro = objectMember.nome;
    let ruoloMembro = objectMember.ruolo;
    let immagineMembro = objectMember.immagine

    // creo stringa inner dove scriverò l html da inserire all interno del mio team container
    let innerMembers = ` 
    <div class="team-card">
        <div class="card-image">
        <img
            src="${immagineMembro}"
            alt="${nomeMembro}"
        />
        </div>
        <div class="card-text">
        <h3>${nomeMembro}</h3>
        <p>${ruoloMembro}</p>
        </div>
    </div>`
    // richiamo la variabile dove vorrò inserire questo html 
    containerTeam.innerHTML += innerMembers;
}
