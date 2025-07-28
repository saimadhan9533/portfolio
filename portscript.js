const skills = [
  { name: "HTML", icon: "https://img.icons8.com/color/96/html-5.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/96/css3.png" },
  { name: "JavaScript", icon: "https://img.icons8.com/color/96/javascript.png" },
  { name: "React", icon: "https://img.icons8.com/color/96/react-native.png" },
  { name: "Node.js", icon: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000" },
  { name: "MySQL", icon: "https://img.icons8.com/ios/100/mysql.png" },
  {name:"Matlab",icon:"https://img.icons8.com/?size=100&id=r5Y16PcDkoWI&format=png&color=000000"},
  { name: "VLSI", icon: "https://cdn.freebiesupply.com/logos/large/2x/vlsi-logo-png-transparent.png" }
];

const container = document.getElementById("skills-container");

skills.forEach(skill => {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = skill.icon;
  img.alt = skill.name;

  const title = document.createElement("p");
  title.textContent = skill.name;
  title.style.margin = "10px 0 0";
  title.style.fontWeight = "bold";

  card.appendChild(img);
  card.appendChild(title);
  container.appendChild(card);
});
