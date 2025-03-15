const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "images/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "images/miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "images/tonkotsu.jpg", rating: 3, comment: "Rich broth!" },
    { id: 4, name: "Gyukotsu Ramen", restaurant: "Gyukotsu House", image: "images/gyukotsu.jpg", rating: 4, comment: "Savory and delicious!" },
    { id: 5, name: "Kojiro Ramen", restaurant: "Kojiro Ramen", image: "images/kojiro.jpg", rating: 5, comment: "Amazing flavors!" },
    { id: 6, name: "Naruto Ramen", restaurant: "Naruto's Ichiraku", image: "images/naruto.jpg", rating: 5, comment: "Tasty and nostalgic!" },
    { id: 7, name: "Nirvana Ramen", restaurant: "Ramen Nirvana", image: "images/nirvana.jpg", rating: 4, comment: "A peaceful delight!" }
];

document.addEventListener("DOMContentLoaded", () => {
    displayRamens();
    addSubmitListener();
});

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = ""; 
    ramens.forEach(ramen => {
        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => displayRamenDetails(ramen));
        menu.appendChild(img);
    });
}

function displayRamenDetails(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-img").src = ramen.image;
    document.getElementById("ramen-rating").textContent = ramen.rating;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    document.getElementById("new-ramen-form").addEventListener("submit", (event) => {
        event.preventDefault();
        
        const newRamen = {
            name: document.getElementById("new-name").value,
            restaurant: document.getElementById("new-restaurant").value,
            image: document.getElementById("new-image").value,
            rating: document.getElementById("new-rating").value,
            comment: document.getElementById("new-comment").value
        };
        
        ramens.push(newRamen);
        displayRamens();
        event.target.reset();
    });
}
