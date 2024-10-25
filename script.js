const fileInput = document.getElementById("input-file");
const uploadedPic = document.getElementById("uploaded-pic");
const selectCard1 = document.getElementById("sel-c1");
const selectCard2 = document.getElementById("sel-c2");
const selectCard3 = document.getElementById("sel-c3");
let cardTitle = document.getElementById("title");
let cardDescription = document.getElementById("description");
const submitBtn = document.getElementById("submit");

const card1pic = document.getElementById("pic1");
const card2pic = document.getElementById("pic2");
const card3pic = document.getElementById("pic3");
const card1 = document.getElementById("card1");
const card2 = document.getElementById("card2");
const card3 = document.getElementById("card3");

let currentSelectCard = card1;

let image = currentSelectCard.querySelector(".card-pic");
let title = currentSelectCard.querySelector(".card-title h3");
let description = currentSelectCard.querySelector(".card-description p");

let fileUrl;

// Event listener for file input
fileInput.addEventListener("change", (event) => {
    console.log("Image changed");
    fileUrl = URL.createObjectURL(fileInput.files[0]) || "No file chosen";
    uploadedPic.src = fileUrl;
});

// General function to handle selection and styling
const selectImageCard = (selectedCard, button) => {
    console.log("Change current card");
    // Reset background colors of all selection buttons
    [selectCard1, selectCard2, selectCard3].forEach(btn => btn.style.backgroundColor = "");

    // Set the current card and apply the background color to the selected button
    currentSelectCard = selectedCard;
    button.style.backgroundColor = "#03DAC6";

    // Update image, title, and description to match the selected card
    image = currentSelectCard.querySelector(".card-pic");
    title = currentSelectCard.querySelector(".card-title h3");
    description = currentSelectCard.querySelector(".card-description p");
};

// Function to apply changes to the selected card
const changeCard = () => {
    console.log("Card changed");
    if (fileUrl) image.src = fileUrl;
    if (cardTitle.value) title.textContent = cardTitle.value;
    if (cardDescription.value) description.textContent = cardDescription.value;
};

// Assign click events using the new function
selectCard1.onclick = (event) => {
    event.preventDefault();
    selectImageCard(card1, selectCard1);
};

selectCard2.onclick = (event) => {
    event.preventDefault();
    selectImageCard(card2, selectCard2);
};

selectCard3.onclick = (event) => {
    event.preventDefault();
    selectImageCard(card3, selectCard3);
};


// Attach the function to submit button
submitBtn.onclick = (event) => {
    event.preventDefault(); 
    changeCard(); 
};