const text = document.getElementById('text');
const btn = document.getElementById('button');

btn.onclick = () => {
  text.classList.toggle('highlight');
};