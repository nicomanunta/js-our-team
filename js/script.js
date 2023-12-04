// MILESTONE 0 array di oggetti
let dipendenti = [
    {
        nome: "Wayne Bamett",
        ruolo: "Founder & CEO",
        foto: "wayne-bamett-founder-ceo.jpg angela-caroll-chief-editor.jpg"
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
document.getElementById("dipendente1").innerHTML = dipendenti[0].nome +" "+ dipendenti[0].ruolo +" "+ dipendenti[0].foto 
document.getElementById("dipendente2").innerHTML = dipendenti[1].nome +" "+ dipendenti[1].ruolo +" "+ dipendenti[1].foto 
document.getElementById("dipendente3").innerHTML = dipendenti[2].nome +" "+ dipendenti[2].ruolo +" "+ dipendenti[2].foto 
document.getElementById("dipendente4").innerHTML = dipendenti[3].nome +" "+ dipendenti[3].ruolo +" "+ dipendenti[3].foto 
document.getElementById("dipendente5").innerHTML = dipendenti[4].nome +" "+ dipendenti[4].ruolo +" "+ dipendenti[4].foto 
document.getElementById("dipendente6").innerHTML = dipendenti[5].nome +" "+ dipendenti[5].ruolo +" "+ dipendenti[5].foto 




