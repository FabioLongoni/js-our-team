
const memberTeam = {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
}

function createMemberTeam(name,position,img) {
    const memberTeam = {
        name: name,
        position: position,
        img: img,
    }
    return memberTeam;
}

const membersTeam = [
    memberTeam,
    createMemberTeam('Angela Caroll','Chief Editor','angela-caroll-chief-editor.jpg'),
    createMemberTeam('Walter Gordon','Office Manager','walter-gordon-office-manager.jpg'),
    createMemberTeam('Angela Lopez','Social Media Manager','angela-lopez-social-media-manager.jpg'),
    createMemberTeam('Scott Estrada','Developer','scott-estrada-developer.jpg'),
    createMemberTeam('Barbara Ramos','Graphic Designer','barbara-ramos-graphic-designer.jpg'),
]

console.log(membersTeam);

//recupero elemento del DOM
const memberListEl = document.querySelector('.member_team_wrapper');

//concateno oggetti dell'array all'elemento del DOM
membersTeam.forEach((memberTeam) => {
    const liMemberTeam = document.createElement('li');
    console.log(liMemberTeam);
    liMemberTeam.append(memberTeam.name, memberTeam.position, memberTeam.img);
    memberListEl.append(liMemberTeam);
});


// memberListEl.innerHTML += `<li>${memberTeam.name} ${memberTeam.position} ${memberTeam.img}</li>`