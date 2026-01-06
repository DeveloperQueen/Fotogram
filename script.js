let pics = [
  "pic_1.jpg",
  "pic_2.jpg",
  "pic_3.jpg",
  "pic_4.jpg",
  "pic_5.jpg",
  "pic_6.jpg",
  "pic_7.jpg",
  "pic_8.jpg",
  "pic_9.jpg",
  "pic_10.jpg",
  "pic_11.jpg",
  "pic_12.jpg",
  "pic_13.jpg",
  "pic_14.jpg",
];

function init() {
  loadGallery();
}

function loadGallery() {
  let gallery = document.getElementById("photo-gallery");

  for (let i = 0; i < pics.length; i++) {
    gallery.innerHTML += galleryClickHtml(i);
  }
}

let currentIndex = 0;

function openDialog(index) {
  currentIndex = index;

  const dialogRef = document.getElementById("photoDialog");
  const dialogImg = document.getElementById("dialogImages");
  const titleRef = document.getElementById("dialog-title");
  const photoNumRef = document.getElementById("photo-num");

  photoNumRef.innerText = `${currentIndex + 1}/${pics.length}`;
  titleRef.innerText = `Mein Bild ${pics[currentIndex]}`;
  dialogImg.src = `./img/${pics[currentIndex]}`;
  dialogRef.showModal();
}

function closeDialog() {
  const dialogRef = document.getElementById("photoDialog");
  dialogRef.close();
}

function showPreviousPhoto() {
  currentIndex--;
  if (currentIndex < 0) currentIndex = pics.length - 1;
  document.getElementById("dialogImages").src = `./img/${pics[currentIndex]}`;
  document.getElementById("photo-num").innerText = `${currentIndex + 1}/${pics.length}`;
  document.getElementById("dialog-title").innerText = `Mein Bild ${pics[currentIndex]}`;
}

function showNextPhoto() {
  currentIndex++;
  if (currentIndex >= pics.length) currentIndex = 0;
  document.getElementById("dialogImages").src = `./img/${pics[currentIndex]}`;
  document.getElementById("photo-num").innerText = `${currentIndex + 1}/${pics.length}`;
  document.getElementById("dialog-title").innerText = `Mein Bild ${pics[currentIndex]}`;
}


function galleryClickHtml(index) {
  return `
            <a onclick="openDialog(${index})">
            <div class="photo-item">
                <img src="./img/${pics[index]}" alt="Photo ${index + 1}">
            </div>
            </a>
        `;
}
