let currentIndex = 0
let skins = []

        async function fetchSkins() {
            const response = await fetch('https://bymykel.github.io/CSGO-API/api/en/skins.json')
            skins = await response.json()
            skins = skins.sort(() => Math.random() - 0.5)
            updateCarousel()
        }

   
        function updateCarousel() {
            const carousel = document.getElementById('carousel')
            carousel.innerHTML = ''
            for (let i = currentIndex; i < currentIndex + 6; i++) {
                if (i < skins.length) {
                    const skin = skins[i]
                    let skinContainer = document.createElement('div')
                    skinContainer.classList.add('skin-container')
                    skinContainer.addEventListener('click', () => redirectToDetails(skin))
                    
                    let img = document.createElement('img')
                    img.src = skin.image
                    img.alt = skin.name
                    
                    let name = document.createElement('p')
                    name.innerText = skin.name
                    
                    skinContainer.appendChild(img)
                    skinContainer.appendChild(name)
                    carousel.appendChild(skinContainer)
                }
            }
        }

        function nextSkins() {
            if (currentIndex + 6 < skins.length) {
                currentIndex += 6
                updateCarousel()
            }
        }

        function prevSkins() {
            if (currentIndex - 6 >= 0) {
                currentIndex -= 6
                updateCarousel()
            }
        }

        function redirectToDetails(skin) {
            localStorage.setItem('selectedSkin', JSON.stringify(skin))
            window.location.href = 'detalhes.html'
        }


        function searchSkin() {
            let input = document.getElementById('skinInput').value.toLowerCase()
            let foundSkin = skins.find(skin => skin.name.toLowerCase().includes(input))
    let     imageBox = document.getElementById('skinImageBox')
            if (foundSkin) {
                imageBox.innerHTML = `<img src="${foundSkin.image}" alt="${foundSkin.name}">`;
                imageBox.onclick = () => redirectToDetails(foundSkin)
            } else {
                imageBox.innerHTML = "Skin não encontrada"
            }
        }

        function redirectToDetails(skin) {
            localStorage.setItem('selectedSkin', JSON.stringify(skin));
            window.location.href = 'detalhes.html';
        }

        fetchSkins();
