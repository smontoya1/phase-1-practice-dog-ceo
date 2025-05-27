document.addEventListener("DOMContentLoaded", function() {
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => console.log(response))
})