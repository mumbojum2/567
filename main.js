const searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const games = Array.from(document.getElementsByClassName('game'));

    // Filter games based on the search term
    const matchedGames = games.filter(game => game.innerText.toLowerCase().includes(searchTerm));

    // Clear the visible games
    games.forEach(game => game.style.display = 'none'); // Hide all games

    // Show matched games
    matchedGames.forEach(game => {
        game.style.display = 'block'; // Show matched games
    });
});



window.addEventListener("keydown", function (e) {
  if (e.key === "q" || e.key === "Q") {
      // Change the title and favicon
      document.title = "Gmail"; // Set the new title
      
      // Create a new link element for the favicon
      let link = document.createElement('link');
      link.rel = 'icon';
      link.href = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gmail_icon_%282020%29.svg/768px-Gmail_icon_%282020%29.svg.png'; // URL to Google's favicon
      document.head.appendChild(link);
      
      // Open Google Classroom in a new tab
      window.location.href("https://drive.google.com", "_blank");
  }
});



document.onkeydown = function (e) {
  if (e.key === "Enter") {
      splashText();
  }
};document.querySelector('button').addEventListener('click', () => {
  while (true) {}
});

var says = [];
fetch('https://raw.githubusercontent.com/Nintendoboi222/games/refs/heads/main/says.txt')
  .then(response => response.text())
  .then(text => {
    says = text.split('\n').filter(line => line.trim() !== '');
    splashText();
  });


function splashText() {
  document.querySelector(".Index-SplashText").innerHTML =
    says[Math.floor(Math.random() * says.length)];
}

document.addEventListener("DOMContentLoaded", (event) => {
  splashText();
  
  fetch("https://ipv4.wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
        proxylocation = data.YourFuckingLocation;
        ipAddress = data.YourFuckingIPAddress;
        isp = data.YourFuckingISP;
        says.push(`Sending missile to ${proxylocation}😈`);
        says.push(`umm your ip is ${ipAddress}`);
        says.push(`nice isp, "${isp}"`);
        splashText();
    });
  fetch("https://discord.com/api/guilds/1288933489818865784/widget.json")
    .then((response) => response.json())
    .then((data) => {
      invite = data.instant_invite;
      says.push(`Join? "${invite}"`);
      splashText();
    });
});
