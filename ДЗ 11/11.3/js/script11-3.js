const img = document.getElementById('pic');

function changePic() {
  const num = Math.floor(Math.random() * 9) + 1;
  img.src = `img/${num}.png`;
}