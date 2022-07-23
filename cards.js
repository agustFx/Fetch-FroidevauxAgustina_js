const URL = "./data/cards.json";


function mostrarCards(cards){
    const contenedorCards = document.getElementById("cards");

    cards.forEach(card => {
        const cards = document.createElement("div");

        cards.innerHTML = `
        <div class="card-item">
        <h2 class="h2-card">${card.titulo}</h2>
        <img src="${card.imagen}" alt="img-card" class="img-card">
        <p class="p-card">${card.descripcion}</p>
        </div>
        `;

        contenedorCards.appendChild(cards);
    })
}

fetch(URL)
   .then(respuesta => respuesta.json())
   .then(data => {mostrarCards(data)}) 
