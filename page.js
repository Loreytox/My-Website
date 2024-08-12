function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });

  // Show the selected page
  document.getElementById(pageId).style.display = "block";
}

function changeLanguage() {
  const language = document.getElementById("languageSelector").value;

  const translations = {
    en: {
      homeText:
        "This website was created by me to showcase some of my work. I’ve always been interested in computer science since I was a teenager. I loved watching hackers in movies, and I still do to this day. Being a science-fiction enthusiast also influenced my decision to pursue this career. I’m proficient in HTML, CSS, and JS, as I enjoy designing new websites in my free time. Additionally, I work well with C# and PowerShell, having developed numerous applications for school and personal projects. I’ve also learned how to use SQL databases, including SQLite. With these languages, I have the ability to create a wide range of things. Personally, I enjoy working out and eating. I play volleyball and pool, and I’m a fan of badminton and basketball. While I’m interested in paintball and airsoft, I haven’t had the chance to try either of them yet. Sometimes, I like to take a nice walk in nature to clear my head from the daily stress.",
    },
    de: {
      homeText:
        "Diese Website wurde von mir erstellt, um einige meiner Arbeiten zu präsentieren. Ich war schon immer an Informatik interessiert, seit ich ein Teenager war. Ich liebte es, Hacker in Filmen zu sehen, und das tue ich bis heute. Als Science-Fiction-Enthusiast beeinflusste dies auch meine Entscheidung, diesen Beruf zu ergreifen. Ich beherrsche HTML, CSS und JS, da ich es liebe, in meiner Freizeit neue Websites zu entwerfen. Darüber hinaus arbeite ich gut mit C# und PowerShell und habe zahlreiche Anwendungen für Schul- und persönliche Projekte entwickelt. Ich habe auch gelernt, wie man SQL-Datenbanken, einschließlich SQLite, verwendet. Mit diesen Sprachen kann ich eine breite Palette von Dingen erstellen. Persönlich mag ich es, Sport zu treiben und zu essen. Ich spiele Volleyball und Billard und bin ein Fan von Badminton und Basketball. Obwohl ich an Paintball und Airsoft interessiert bin, hatte ich noch keine Gelegenheit, sie auszuprobieren. Manchmal gehe ich gerne in der Natur spazieren, um meinen Kopf vom täglichen Stress freizubekommen.",
    },
    fr: {
      homeText:
        "Ce site Web a été créé par moi pour présenter certains de mes travaux. J'ai toujours été intéressé par l'informatique depuis mon adolescence. J'adorais regarder des pirates dans des films, et je le fais encore aujourd'hui. Être un passionné de science-fiction a également influencé ma décision de poursuivre cette carrière. Je maîtrise HTML, CSS et JS, car j'aime concevoir de nouveaux sites Web pendant mon temps libre. De plus, je travaille bien avec C# et PowerShell, ayant développé de nombreuses applications pour l'école et des projets personnels. J'ai également appris à utiliser des bases de données SQL, y compris SQLite. Avec ces langages, je suis capable de créer une large gamme de choses. Personnellement, j'aime faire de l'exercice et manger. Je joue au volleyball et au billard, et je suis fan de badminton et de basketball. Bien que je sois intéressé par le paintball et l'airsoft, je n'ai pas encore eu l'occasion d'essayer l'un ou l'autre. Parfois, j'aime faire une belle promenade dans la nature pour me vider la tête du stress quotidien.",
    },
  };

  document.getElementById("homeText").innerText =
    translations[language].homeText;
}

function toggleDarkMode() {
  const body = document.body;
  const header = document.querySelector("header");
  const links = document.querySelectorAll("nav ul li a");
  const select = document.querySelector("nav ul li select");
  const images = document.querySelectorAll("#projects img");

  // Toggle the dark-mode class on the body element
  body.classList.toggle("dark-mode");
  header.classList.toggle("dark-mode");
  select.classList.toggle("dark-mode");

  // Toggle the dark-mode class on all links and images
  links.forEach((link) => link.classList.toggle("dark-mode"));
  images.forEach((img) => img.classList.toggle("dark-mode"));

  // Save the user's preference to localStorage
  const isDarkMode = body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

// Load the user's dark mode preference on page load
window.onload = function () {
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.getElementById("darkModeToggle").checked = true;
    toggleDarkMode(); // Apply dark mode
  }
};
