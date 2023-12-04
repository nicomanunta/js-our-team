// MILESTONE 0 array di oggetti
let dipendenti = [
    {
        nome: "Wayne Bamett",
        ruolo: "Founder & CEO",
        foto: "wayne-bamett-founder-ceo.jpg"
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
    
    for (let key in dipendenti[i]){
        
        console.log(dipendenti[i].nome)
        console.log(dipendenti[i].ruolo)
        console.log(dipendenti[i].nome)
    }
}
// MILESTONE 2 STAMPERE NEL DOM
dipendenti[0].foto.search = "wayne-bamett-founder-ceo.jpg"
document.getElementById("dipendente1").innerHTML = dipendenti[0].nome +" "+ dipendenti[0].ruolo +" "+ `<img src="./img/wayne-barnett-founder-ceo.jpg" alt="">`
document.getElementById("dipendente2").innerHTML = dipendenti[1].nome +" "+ dipendenti[1].ruolo +" "+ `<img src="./img/angela-caroll-chief-editor.jpg" alt="">` 
document.getElementById("dipendente3").innerHTML = dipendenti[2].nome +" "+ dipendenti[2].ruolo +" "+ `<img src="./img/walter-gordon-office-manager.jpg" alt="">` 
document.getElementById("dipendente4").innerHTML = dipendenti[3].nome +" "+ dipendenti[3].ruolo +" "+ `<img src="./img/angela-lopez-social-media-manager.jpg" alt="">` 
document.getElementById("dipendente5").innerHTML = dipendenti[4].nome +" "+ dipendenti[4].ruolo +" "+ `<img src="./img/scott-estrada-developer.jpg" alt="">`
document.getElementById("dipendente6").innerHTML = dipendenti[5].nome +" "+ dipendenti[5].ruolo +" "+ `<img src="./img/barbara-ramos-graphic-designer.jpg" alt="">`






