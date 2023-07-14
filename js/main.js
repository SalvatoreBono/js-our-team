"use strict"
const listTeam = [
    {
        member: "Wayne Barnett",
        role: "Founder & CEO",
        img: "wayne-barnett-founder-ceo.jpg",
    },
    {
        member: "Angela Caroll",
        role: "Chief Editor",
        img: "angela-caroll-chief-editor.jpg",
    },
    {
        member: "Walter Gordon",
        role: "Founder & CEO",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        member: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        member: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        member: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
]
for (let i = 0; i < listTeam.length; i++) {
    console.log(`Membro: ${listTeam[i].member}, Ruolo: ${listTeam[i].role}, Img: ${listTeam[i].img}`);
    const team = document.querySelector(".row");
    team.innerHTML += `<div class="card m-2" style="width: 18rem;">
    <img src="img/${listTeam[i].img}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${listTeam[i].member}, ${listTeam[i].role}</p>
    </div>
  </div>`;
}