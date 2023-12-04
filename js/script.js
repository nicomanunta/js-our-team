// MILESTONE 0 array di oggetti
let dipendenti = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome: "Angela Caroll",
        ruolo: "Chief Editor",
        foto: "angela-caroll-chief-editor.jpg",
    },
    {
        nome: "Walter Gordon",
        ruolo: "Office manager",
        foto: "walter-gordon-office-manager.jpg",
    },
    {
        nome: "Angela Lopez",
        ruolo: "Social media manager",
        foto: "angela-lopez-social-media-manager.jpg",
    },
    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "scott-estrada-developer.jpg",
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "barbara-ramos-graphic-designer.jpg",
    }
]
console.log(dipendenti)
// MILESTONE 1 stampare in console
for(let i = 0; i<dipendenti.length; i++){
    
    console.log(dipendenti[i].nome)
    console.log(dipendenti[i].ruolo)
    console.log(dipendenti[i].foto)
}


let dipendente_card = document.getElementById("dipendente-card")
// MILESTONE 2 STAMPERE NEL DOM
 for(let i = 0; i<dipendenti.length; i++){

    let div = document.createElement("div")
    div.classList.add("card", "mx-2")

    div.innerHTML = `<img src="./img/${dipendenti[i].foto}" class="card-img-top dimensioni-img" alt=""> `

    let dati = document.createElement("div")
    dati.classList.add("card-body")

    let nome = `<h5 class="card-title">${dipendenti[i].nome}</h5>`
    let ruolo = `<p class="card-text">${dipendenti[i].ruolo} </p> `
    
    dati.innerHTML = nome + ruolo
 
    div.appendChild(dati)
    dipendente_card.appendChild(div)

   


 }





