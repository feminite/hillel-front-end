const container = document.querySelector('#container');

parent.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    alert(`You clicked ${e.target.textContent}`);
  }
});