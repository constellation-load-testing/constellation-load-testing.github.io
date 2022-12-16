const words = ["streamlines", "simplifies", "visualizes"];
const earthEmojis = ["🌎", "🌍", "🌏"];
let i = 0;
let j = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  document.getElementsByClassName("spin")[0].innerHTML = words[i];
};

setInterval("_changeText()", 1200);

const _changeEarth = () => {
  j = (j + 1) % earthEmojis.length;
  document.getElementById("earth-spin").innerHTML = earthEmojis[j];
};

setInterval("_changeEarth()", 750);
