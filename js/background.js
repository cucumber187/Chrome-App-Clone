const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * 3)];

console.log(chosenImage);

const bgImage = document.createElement("img");
console.log(bgImage);

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background-img");
document.body.appendChild(bgImage);

