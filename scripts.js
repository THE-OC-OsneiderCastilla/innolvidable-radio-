
const imagenesAnimadas = [
  "https://i.postimg.cc/J0vvnNHF/giphy-1.gif",
  "https://i.postimg.cc/Nf2ZnzWv/giphy.gif",
  "https://i.postimg.cc/7ZgdHTHB/giphy-3.gif",
  "https://i.postimg.cc/FRKBVWjq/headphones-20287-256.gif"
];
let anterior = "";
const cover = document.getElementById("album-cover");

function cambiarImagen() {
  const nuevas = imagenesAnimadas.filter(img => img !== cover.src);
  cover.src = nuevas[Math.floor(Math.random() * nuevas.length)];
}
setInterval(cambiarImagen, 20000);
