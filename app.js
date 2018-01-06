let introDiv = document.getElementById("intro");
let projectsDiv = document.getElementById("projects");
let aboutDiv = document.getElementById("about");

function clickProjects() {
  projectsDiv.style.display = "block";
  introDiv.style.display = "none";
  aboutDiv.style.display = "none";
};

function clickAbout() {
  aboutDiv.style.display = "block";
  introDiv.style.display = "none";
  projectsDiv.style.display = "none";
};
