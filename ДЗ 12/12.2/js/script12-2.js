const container = document.querySelector('#container');

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    alert(`You clicked ${e.target.textContent}`);
  }
});