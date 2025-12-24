/* Messages */
const lines = [
  " Happy Birthday to you, my love 🎈",
  "May God bless you with endless joy and smiles 💖 💓",
  "You deserve all the happiness in the world 💕",
  "Just saying... you're insanely pretty 😍💕",
  "Just saying... ..you are very pretty 💕",
  "And completely amazing 💓",
  "Awesome 💓",
  " ",

  "You're one of the closest and most special people",
  "in my life ✨✨",
  "Love you more than 3000 😘💞😜",
  "😘",
  "😘😘",
  "Love uhhh so much !!!",
  "Tumhara Sukoon 🤞🤞💖💕😘"
 ];

let index = 0;
function startMessages() {
  const btn = document.getElementById("touchBtn");
  btn.style.display = "none";

  const audio = document.getElementById('bg-music');
  if (audio.paused) {
    audio.play();
  }


  if (index < lines.length) {
    const div = document.createElement("div");
    div.className = "message";
    div.innerHTML = lines[index];
    document.getElementById("messages").appendChild(div);
    index++;
    setTimeout(startMessages, 1200);
  }
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 15 + Math.random() * 20 + "px";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

document.addEventListener("DOMContentLoaded", () => {
  const tree = document.getElementById("heart-tree");

  for (let y = 0; y < 14; y++) {
    for (let x = 0; x < 14; x++) {
      const heart = document.createElement("div");
      heart.className = "tree-heart";
      heart.innerHTML = "❤";

      const dx = x - 7;
      const dy = y - 7;
      const formula =
        (dx * dx + dy * dy - 10) ** 3 - dx * dx * dy * dy * dy;

      if (formula <= 0) {
        heart.style.left = x * 20 + "px";
        heart.style.top = (13 - y) * 20 + "px"; // flipped heart
        heart.style.color = Math.random() > 0.5 ? "#ff4d6d" : "#ff99ac";
        tree.appendChild(heart);
      }
    }
  }
});



