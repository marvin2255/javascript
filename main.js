let kitchenInput = document.getElementById("kitchen-input");
let addBtn = document.getElementById("add-btn");
let kitchenItemsList = document.getElementById("kitchen-items-list");
let kitchenItemsArray = []; // Array to store kitchen items

// Add kitchen items
function addKitchenItems() {
  let kitchenInputData = kitchenInput.value;

  //if (kitchenInputData.trim() !== "") {
    // Create DOM elements
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    li.style.cssText = "animation-name: slideIn";
    kitchenItemsList.appendChild(li);
    kitchenInput.value = "";

    // Push the value to the array
    kitchenItemsArray.push(kitchenInputData);
    kitchenInput.focus();
    let trashBtn = document.createElement("i");
    trashBtn.classList.add("fas", "fa-trash");
    li.appendChild(trashBtn);



   
  }
//}
function deleteKitchenItem(event){
    if(event.target.classList[0]==='fas'){
        let item=event.target.parentElement;
       // console.log(event.target.classList[0]);
item.remove();

    }

}

// Event listener for "Add now" button click
addBtn.addEventListener("click", addKitchenItems);
kitchenItemsList.addEventListener("click",deleteKitchenItem);

// Event listener for Enter key press
kitchenInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addKitchenItems();
  }
});
