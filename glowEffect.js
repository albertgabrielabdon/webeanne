document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.querySelector('.stars-container');


  function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Randomize size and position
    const size = Math.random() * 2 + 1; // Size between 1 and 3
    const top = Math.random() * 100; // Position from 0% to 100%
    const left = Math.random() * 100; // Position from 0% to 100%

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.top = `${top}%`;
    star.style.left = `${left}%`;

    starsContainer.appendChild(star);

  }

  function createShootingStar() {
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');

    // Randomize position and animation duration
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const duration = Math.random() * 2 + 1; // Duration between 1s and 3s

    shootingStar.style.top = `${top}%`;
    shootingStar.style.left = `${left}%`;
    shootingStar.style.animation = `shoot ${duration}s linear infinite`;

    starsContainer.appendChild(shootingStar);
  }

  // Create multiple stars
  for (let i = 0; i < 500; i++) { // Adjust number of stars as needed
    createStar();
  }

  // Create shooting stars
  for (let i = 0; i < 20; i++) { // Adjust number of shooting stars
    createShootingStar();
  }

  // Add the 'glow' class to each <h1> element
  const headers = document.querySelectorAll('h1');
  headers.forEach(header => {
    header.classList.add('glow');
  });

  // Add the 'glow' class to each playlist iframe
  const playlists = document.querySelectorAll('.playlist iframe');
  playlists.forEach(playlist => {
    playlist.classList.add('glow');
  });
});
