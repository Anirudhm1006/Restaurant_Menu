let forms = document.querySelector('#forms');

function submit(){
    let header = document.getElementById('foodname').value;
    let picture = document.getElementById('foodpic').value;
    let allergens = "Allergens include " + document.getElementById('foodallergens').value;
    let calories = document.getElementById('foodcalories').value + " kcal per 100g";

    let FinalArray = [header, picture, allergens, calories];

    // Save the data to sessionStorage as a string
    sessionStorage.setItem('formData', JSON.stringify(FinalArray));

    // Redirect to the original page (e.g., index.html)
    window.location.href = '../index.html';
    
    

}

let submit_button = document.createElement("button");
submit_button.innerHTML = "Submit";
submit_button.onclick = submit;
forms.appendChild(submit_button);




