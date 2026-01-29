let url = '';

const btnEnter = document.querySelector('#enterLink');
const btnGo = document.querySelector('#followLink');

btnEnter.addEventListener('click', () => {
  url = prompt('Enter link:');
});

btnGo.addEventListener('click', () => {
  if (url) {
    location.assign(url);
  } else {
    alert('Enter the link!');
  }
});