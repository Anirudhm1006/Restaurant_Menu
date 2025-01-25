//Import

//Array Definition

let Food_Items = [
    ["Masala Dosa", "./pictures/masala_dosa.jpg", "Allergens include nuts, diary, and gluten", "100 kcal per 100g"],
    ["Idli", "./pictures/idli.jpg", "Allergens include yeast", "135 kcal per 100g"],
    ["Vada", "./pictures/vada.jpg", "Allergens include nuts, diary, gluten, and shellfish (sometimes)", "230 kcal per 100g"],
    ["Vangi Bath", "https://shorturl.at/exaka", "No known allergens", "173 kcal per 100g"],
]

let class_list = ["header", "picture", "allergens", "calories"];


// Variable Definition and Initialization

let body = document.querySelector("body");
let MainDiv = document.createElement("div");
MainDiv.setAttribute("id", "maindiv");
body.appendChild(MainDiv);


let AddButton = document.createElement("button");
AddButton.innerHTML = "Want to add more? Click here!";
AddButton.onclick = Redirect;

// Function Definition
function Redirect() {
    window.open("./AddItem_Page/additem.html", "_blank");
    while(processData()){
        processData();
    }
}


function AddItem(array){
    Food_Items.push(array);
}
/*
function AddItem(array) {

    let header = prompt("What is your dish called?");
    let picture = prompt("Please paste a link to the image of your dish");
    let allergens = "Allergens include " + prompt("Are there any known allergens associated with your dish?");

    if (allergens == "Allergens include" || allergens == "Allergens include No" || allergens == "Allergens include no") {
        allergens = "No known allergens";
    }

    let calories = prompt("How many calories does your dish contain (per 100g)?");

    let pastLength = Food_Items.length-1;

    let NewArray = [header, picture, allergens, calories + " kcal per 100g"]
    Food_Items.push(NewArray);

    RefreshPage(pastLength+1);
}*/

function processData() {
    // Check if data exists in sessionStorage
    let savedData = sessionStorage.getItem('formData');
    if (savedData) {
        // Parse the stored JSON string into an array
        let FinalArray = JSON.parse(savedData);

        // Example: Perform some processing with the array
        console.log('Retrieved Data:', FinalArray);

        // Example: Using the array in another function
        AddItem(FinalArray);

        // Optional: Clear sessionStorage if you don't need it anymore
        sessionStorage.removeItem('formData');
    } else {
        console.log('No data found in sessionStorage.');
    }
}


function headerInsert(item,i,j) {
    let title = document.createElement("div");
    let titlediv = document.createElement("div");
    let content = document.createElement("h1");
    titlediv.setAttribute("id", "titlediv");
    content.innerHTML = Food_Items[i][j];
    title.setAttribute("class", "header");
    titlediv.appendChild(content);
    title.appendChild(titlediv);
    item.appendChild(title);

}

function pictureInsert(item,i,j) {
    let image = document.createElement("img");
    image.setAttribute("class", "picture");
    image.setAttribute("src", Food_Items[i][j]);
    item.appendChild(image);
}

function allergenInsert(item,i,j) {
    let allergens = document.createElement("div");
    allergens.setAttribute("class", "allergens");
    allergens.innerHTML = Food_Items[i][j];
    item.appendChild(allergens);
}

function calorieInsert(item,i,j) {
    let calories = document.createElement("div");
    calories.setAttribute("class", "calories");
    calories.innerHTML = Food_Items[i][j];
    item.appendChild(calories);
}

function RefreshPage(x) {

    for (let i = x; i < Food_Items.length; i++) {
        let item = document.createElement("div");
        item.setAttribute("class", "grid-container");
        item.setAttribute("id", "Item");
        MainDiv.appendChild(item);

        for (let j = 0; j < Food_Items[i].length; j++) {

            if (class_list[j] == "header") {
                headerInsert(item,i,j);
            }

            if (class_list[j] == "picture") {
                pictureInsert(item,i,j);
            }

            if (class_list[j] == "allergens") {
                allergenInsert(item,i,j);
            }

            if (class_list[j] == "calories") {
                calorieInsert(item,i,j);
            }

        }
    }

    
    MainDiv.appendChild(AddButton);


}

//Implementation
MainDiv.setAttribute("id", "maindiv");
body.appendChild(MainDiv);
window.onload = processData();

RefreshPage(0);





