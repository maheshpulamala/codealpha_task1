const images = [
  "https://tse1.mm.bing.net/th?id=OIP.PhJUo9g0Qd6_0InY4xEZyAHaFj&pid=Api&P=0&h=220",
  "https://artoflondon.co.uk/content/images/_1200x630_crop_center-center_82_none/P7103_018-pr.jpg?mtime=1601551417",
  "https://tse2.mm.bing.net/th?id=OIP.LGNAgH5MkZZA60YcdSBwrgHaE7&pid=Api&P=0&h=220",
  "https://www.pixelstalk.net/wp-content/uploads/2016/07/Wallpapers-pexels-photo.jpg"
];

let currentIndex = 0;

const currentImage = document.getElementById("current-image");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const thumbnails = document.querySelectorAll(".thumbnail");

function updateImage() {
  currentImage.src = images[currentIndex];
  prevBtn.disabled = currentIndex === 0;
  nextBtn.disabled = currentIndex === images.length - 1;

  thumbnails.forEach((thumbnail, index) => {
    thumbnail.style.border = index === currentIndex ? "2px solid #007BFF" : "2px solid #ccc";
  });
}

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
});

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentIndex = index;
    updateImage();
  });
});

updateImage();
