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
let dipendente = document.getElementById("dipendente")
// MILESTONE 2 STAMPERE NEL DOM
 for(let i = 0; i<dipendenti.length; i++){
    let div = document.createElement("div")
    div.innerHTML = dipendenti[i].nome +" "+ dipendenti[i].ruolo +" "+ dipendenti[i].foto +" "+ `<img class="dimensioni-img" src="./img/${dipendenti[i].foto}" alt="">`
    dipendente.appendChild(div)
    
    
 }







