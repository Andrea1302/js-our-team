
// Richiamo il div all interno del quale vorrò scrivere 
const containerTeam = document.querySelector(".team-container");

// Richiamo il pulsante add 
const aggiungi = document.getElementById("addMemberButton");

// Richiamo variabili per poi leggere gli input
const nomeInput = document.getElementById("name");
const ruoloInput = document.getElementById("role");
const immagineInput = document.getElementById("image");


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
// nuovo oggetto 

// eseguo funzione 
addMembers();

// funzione al click
aggiungi.addEventListener("click",function(){
    let nuovoOggetto = {
        "nome" : nomeInput.value,
        "immagine" : immagineInput.value,
        "ruolo" : ruoloInput.value
    }
    cards.push(nuovoOggetto)

    aggiungiMembro(nomeInput.value,immagineInput.value,ruoloInput.value)

})









// Funzione per inserire il mio array di oggetti nell html 
function addMembers (){
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
}
// Funzione aggiungi membro 
function aggiungiMembro(nomeMembroToAdd,immagineToAdd,ruoloToAdd){
    

    let newMembers = {
        "nome" : nomeMembroToAdd,
        "immagine" : immagineToAdd,
        "ruolo" : ruoloToAdd
    }
    cards.push(newMembers)
    let NewobjectMember = cards[cards.length - 1];
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
}