/**
 * Document
 *
 * @summary list 
 * @author Kauê de matos olvieira
 *
 * Created at     : 2023-09-03 19:57:20 
 * Last modified  : 2023-09-03 20:41:00
 */

let itemList = [];

const form = document.getElementById("form-itens");
const itemInput = document.getElementById("item-input");
const ulItems = document.getElementById("item-list");
const ulItemsPurchase = document.getElementById("itens-comprados");
const listRecupetarion = localStorage.getItem('listItems');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    saveItem();
    displayItems();

    try {
        itemList = JSON.parse(listRecupetarion);
        displayItems();
    } catch (error) {
        console.error("Erro ao analisar JSON:", error);
    }
});

function saveItem() {
    const newItem = itemInput.value;
    const isDuplicate = itemList.some((element) => element.value.toUpperCase() === newItem.toUpperCase());
    
    if (!isDuplicate) {
        itemList.push({
            value: newItem,
            check: false
        });

        localStorage.setItem("listItems", JSON.stringify(itemList));
    } 
    
    if (isDuplicate) {
        alert("Item already exists.");
    }
}

function createListItem(element, index) {
    const listItem = document.createElement("li");
    listItem.className = "item-purchase is-flex is-justify-content-space-between";
    listItem.setAttribute("data-value", index);

    const div1 = document.createElement("div");
    
    const checkbox = createCheckbox(element.check);
    const textInput = createTextInput(element.value);

    div1.appendChild(checkbox);
    div1.appendChild(textInput);

    const deleteIcon = createDeleteIcon();
    deleteIcon.addEventListener('click', () => handleDeleteClick(listItem, index));

    listItem.appendChild(div1);
    listItem.appendChild(deleteIcon);

    return listItem;
}

function createCheckbox(checked) {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "is-clickable";
    checkbox.checked = checked;
    checkbox.addEventListener('click', handleCheckboxClick);
    return checkbox;
}

function createTextInput(value) {
    const textInput = document.createElement("input");
    textInput.type = "text";
    textInput.className = "is-size-5";
    textInput.value = value;
    return textInput;
}

function createDeleteIcon() {
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash is-clickable delete";
    return deleteIcon;
}

function handleCheckboxClick(event) {
    const checkbox = event.target;
    const listItem = checkbox.parentElement.parentElement;
    const index = parseInt(listItem.getAttribute("data-value"));
    itemList[index].check = checkbox.checked;

    if (checkbox.checked) {
        const listItemClone = listItem.cloneNode(true);
        ulItemsPurchase.appendChild(listItemClone);
    } else {
        ulItemsPurchase.querySelector(`[data-value="${index}"]`).remove();
    }
}

function handleDeleteClick(listItem, index) {
    if (itemList[index].check) {
        ulItems.removeChild(listItem);
    }
}

function displayItems() {
    ulItems.innerHTML = "";
    ulItemsPurchase.innerHTML = "";

    itemList.forEach((element, index) => {
        const listItem = createListItem(element, index);
        ulItems.appendChild(listItem);
    });
}


