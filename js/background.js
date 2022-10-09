const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgIamge = document.createElement("img");

bgIamge.src = `img/${chosenImage}`;

document.body.appendChild(bgIamge);
