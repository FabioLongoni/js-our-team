

const memberTeam = {
    name: 'Wayne Barnett',
    position: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
}

for (let key in memberTeam) {
    console.log(memberTeam[key]);
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