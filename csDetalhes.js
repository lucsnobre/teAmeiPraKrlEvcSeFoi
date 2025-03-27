document.addEventListener("DOMContentLoaded", () => {
    const skin = JSON.parse(localStorage.getItem('selectedSkin'))

    if (skin) {
        document.getElementById('skinImage').src = skin.image
        document.getElementById('skinName').innerText = skin.name
        document.getElementById('skinDescription').innerText = skin.description

        
        const rarityElement = document.getElementById('skinRarity')
        rarityElement.innerText = skin.rarity.name
        rarityElement.style.color = skin.rarity.color

        
        document.getElementById('skinCollection').innerText = skin.collections && skin.collections.length > 0 ? skin.collections[0].name : "Desconhecida"
        document.getElementById('skinCategory').innerText = skin.category ? skin.category.name : "Desconhecido"

        document.getElementById('skinWeapon').innerText = skin.weapon.name || "Desconhecido"

        
        const cratesList = document.getElementById('cratesList')
        const noCrates = document.getElementById('noCrates')

        if (skin.crates && skin.crates.length > 0) {
            noCrates.style.display = 'none';
            cratesList.innerHTML = "" 

            skin.crates.slice(0, 6).forEach(crate => {  
                let crateItem = document.createElement('div')
                crateItem.classList.add('crate-item')
                crateItem.innerHTML = `
                    <img src="${crate.image}" alt="${crate.name}">
                    <p>${crate.name}</p>
                `
                cratesList.appendChild(crateItem)
            })
        } else {
            noCrates.style.display = 'block'
        }
    }
})
