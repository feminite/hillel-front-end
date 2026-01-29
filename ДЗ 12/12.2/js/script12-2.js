const container = document.querySelector('#container');

container.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    console.log(`${event.target.textContent}`);
  }
});