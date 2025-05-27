//console.log('%c HI', 'color: firebrick')

// Challenge 1

// URLs
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all"

// Selectors
const dogImageContainer = document.querySelector('#dog-image-container')
const dogBreedsContainer = document.querySelector('#dog-breeds')
const breedDropdown = document.querySelector('#breed-dropdown')

// Variables
let allBreeds = []

// Functions
function fetchDogImages () {
    fetch(imgUrl)
        .then(response => response.json())
        .then(data => data.message.forEach(dog => {
            const img = document.createElement('img')
            img.src = dog
            img.style.width = '100px' 
            img.style.height = '100px'
            dogImageContainer.append(img)
        }))
}

function fetchBreeds () {
    fetch(breedUrl)
        .then(response => response.json())
        .then(data => {
            allBreeds = Object.keys(data.message)
            renderBreeds(allBreeds)
        })
}

function renderBreeds (breeds) {
    dogBreedsContainer.innerHTML = ''
    breeds.forEach(breed => {
        const list = document.createElement('li') // creates element
        list.innerText = breed // populates element
        list.addEventListener('click', function() {
            list.style.color = 'green'
        }) // adds color 
        dogBreedsContainer.append(list)  // adds to DOM
    })
}

function handleFilter(event) {
    const selectedLetter = event.target.value;
    const filteredBreeds = allBreeds.filter(breed => breed.startsWith(selectedLetter));
    renderBreeds(filteredBreeds);
}


// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    fetchDogImages()
    fetchBreeds()
    breedDropdown.addEventListener('change', handleFilter)
})