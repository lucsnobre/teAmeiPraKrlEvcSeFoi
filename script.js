let currentIndex = 0;
let skins = [];

async function fetchSkins() {
    const response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json');
    skins = await response.json();
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.getElementById('carousel');
    carousel.innerHTML = '';
    for (let i = currentIndex; i < currentIndex + 5; i++) {
        if (i < skins.length) {
            const skin = skins[i];
            let img = document.createElement('img');
            img.src = skin.image;
            img.alt = skin.name;
            carousel.appendChild(img);
        }
    }
}

document.getElementById('prevBtn').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});
document.getElementById('nextBtn').addEventListener('click', () => {
    if (currentIndex < skins.length - 5) {
        currentIndex++;
        updateCarousel();
    }
});

document.getElementById('buscar').addEventListener('click', () => {
    const input = document.getElementById('skinInput').value.toLowerCase();
    const foundSkin = skins.find(skin => skin.name.toLowerCase().includes(input));
    if (foundSkin) {
        document.getElementById('skinImage').src = foundSkin.image;
        document.getElementById('skinImage').alt = foundSkin.name;
    } else {
        alert('Skin não encontrada!');
    }
});

fetchSkins();