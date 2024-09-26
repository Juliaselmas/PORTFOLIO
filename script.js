//Uppdatera länkar till projects!
//uppdatera texter till projects!

let competenceBox = document.getElementById("competence-box");
let showCompetenceBtn = document.getElementById("show-competence-button");
let textBox = document.querySelector("#text-box");
let showTextBtn = document.getElementById("show-text-button");

let projectCards = document.querySelectorAll(
  ".project-card, .project-card-notactive"
);
let projectTitle = document.getElementById("project-title");
let projectDescription = document.getElementById("project-description");
let linkContainer = document.getElementById("link-container-projects");

textBox.style.display = "block";
competenceBox.style.display = "none";

function showCompetence() {
  competenceBox.style.display = "block";
  textBox.style.display = "none";

  showCompetenceBtn.classList.remove("notActive");
  showTextBtn.classList.add("notActive");
}

function showText() {
  textBox.style.display = "block";
  competenceBox.style.display = "none";

  showTextBtn.classList.remove("notActive");
  showCompetenceBtn.classList.add("notActive");
}

showCompetenceBtn.addEventListener("click", showCompetence);
showTextBtn.addEventListener("click", showText);

let projects = [
  {
    title: "Pokemon Application",
    description: "This is a Pokemon App built using HTML, CSS, and JavaScript.",
    liveLink: "https://juliaselmas.github.io/POKEMON-APPLICATION/",
    repoLink: "https://github.com/Juliaselmas/POKEMON-APPLICATION",
    imageAlt: "Project Preview-PokemonApp",
  },
  {
    title: "Productivity App",
    description: "A productivity app to manage your daily tasks efficiently.",
    liveLink: "https://example.com/productivity-app",
    repoLink: "https://github.com/Juliaselmas/Productivity-App",
    imageAlt: "Project Preview-ProductivityApp",
  },
  {
    title: "Quiz Application",
    description: "A fun quiz app built with JavaScript and Bootstrap.",
    liveLink: "https://example.com/quiz-app",
    repoLink: "https://github.com/Juliaselmas/Quiz-App",
    imageAlt: "Project Preview-Quiz",
  },
];

function activateProject(index) {
  projectCards.forEach((card, i) => {
    if (i === index) {
      card.classList.remove("project-card-notactive");
      card.classList.add("project-card");
    } else {
      card.classList.remove("project-card");
      card.classList.add("project-card-notactive");
    }
  });

  let activeProject = projects[index];
  projectTitle.innerText = activeProject.title;
  projectDescription.innerText = activeProject.description;

  linkContainer.innerHTML = `
  <a href="${activeProject.liveLink}" target="_blank"><i class="fa-solid fa-desktop"></i></a>
  <a href="${activeProject.repoLink}" target="_blank"><img src="logos/Github-Logos/github-mark.png" alt="GitHub Repository"></a>
`;
}

projectCards.forEach((card, index) => {
  card.addEventListener("click", () => activateProject(index));
});

activateProject(0);
