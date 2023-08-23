function filterObjects(c) {
  var x, i;
  x = document.getElementsByClassName("col"); // Get all elements with class "col"

  for (i = 0; i < x.length; i++) {
    if (c === "all" || x[i].classList.contains(c)) {
      x[i].style.display = "block"; // Display elements that belong to the selected category or when "all" is selected
    } else {
      x[i].style.display = "none"; // Hide elements not in the selected category
    }
  }
}


  
  
  // This function adds a CSS class to an element
  function addClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" "); // Get the element's current classes
    arr2 = name.split(" "); // Get the classes to add
    for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) { // If the class is not already present
        element.className += " " + arr2[i]; // Add the class
      }
    }
  }
  
  // This function removes a CSS class from an element
  function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" "); // Get the element's current classes
    arr2 = name.split(" "); // Get the classes to remove
    for (i = 0; i < arr2.length; i++) {
      while (arr1.indexOf(arr2[i]) > -1) { // While the class is still present
        arr1.splice(arr1.indexOf(arr2[i]), 1); // Remove the class
      }
    }
    element.className = arr1.join(" "); // Update the element's classes
  }
  
  // This part handles the "active" class for filter buttons
  var btnContainer = document.getElementById("buttons"); // Get the element with the ID "buttons"
  var btns = btnContainer.getElementsByClassName("btn"); // Get all elements with class "btn"
  for (var i = 0; i < btns.length; i++) { // Go through each button
    btns[i].addEventListener("click", function () {
      var current = btnContainer.getElementsByClassName("active"); // Get the currently active button
      current[0].className = current[0].className.replace(" active", ""); // Remove "active" class from the current button
      this.className += " active"; // Add "active" class to the clicked button
    });
  }
  
  


/*
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".btn-outline-success");

    addToCartButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const notificationCard = button.parentElement.querySelector(".notification-card");
            //notificationCard.style.display = "block";
            
            setTimeout(function () {
                notificationCard.style.display = "none";
            }, 2000);
            
        });
    });
});


const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

*/

let count = 0; // Shared state that both functions can see

let productPrice=39.0;

$("#plus-button").click(function (){
    count++;
    $("#count").text(count);

  

   updatePrice=count * productPrice; 

   $("#product-price").text(updatePrice.toFixed(2));

});

$("#minus-button").click(function (){
  count--
  count= count<=1 ?  1 : count--;
  $("#count").text(count);



   updatePrice=count * productPrice ;

    $("#product-price").text(updatePrice.toFixed(2));


});



/*
const countEl = document.querySelector('.count');
console.log(countEl)

const plusButton = document.getElementById('plus-button');
console.log(plusButton.value)
const minusButton = document.getElementById('minus-button');
const addToCartBtn = document.getElementById('buy-button');

plusButton.addEventListener('click', () => countEl.textContent++);
console.log("count = ",countEl)
minusButton.addEventListener('click', () => countEl.textContent = Math.max(0, countEl.textContent - 1));

addToCartBtn.addEventListener('click', () => {
  const productQuantity = parseInt(countEl.textContent);
  // You can perform further actions here
  console.log(`Buying ${productQuantity} items.`);
});
*/





