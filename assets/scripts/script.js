const words = ["scales", "streamlines", "visualizes"];
const earthEmojis = ["🌎", "🌍", "🌏"];
let i = 0;
let j = 0;

const _changeText = () => {
  i = (i + 1) % words.length;
  let spins = document.getElementsByClassName("spin");
  const windowWidth = window.innerWidth;
  if (windowWidth < 425) {
    spins[0].innerHTML = "";
    spins[1].innerHTML = words[i];
  } else {
    spins[0].innerHTML = words[i];
    spins[1].innerHTML = "";
  }
};

setInterval("_changeText()", 1200);

const _changeEarth = () => {
  j = (j + 1) % earthEmojis.length;
  document.getElementById("earth-spin").innerHTML = earthEmojis[j];
};

setInterval("_changeEarth()", 750);
