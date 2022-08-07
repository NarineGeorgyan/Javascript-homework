const users = JSON.parse(localStorage.getItem("users")) || [];
const addModal = document.getElementById("add-modal");
const modalWrapper = document.getElementById("modal-wrapper");
const buttonContainer = document.createElement("div");
const modalContainer = document.createElement("div");
modalContainer.className = "modal-container";
const firstName = document.createElement("input");
firstName.placeholder = "First Name";
const lastName = document.createElement("input");
lastName.placeholder = "Last Name";
const email = document.createElement("input");
email.placeholder = "Email";
const addButton = document.createElement("button");
addButton.innerHTML = "Add";
const delateButton = document.createElement("button");
delateButton.innerHTML = "Delete";
const AddModalTitle = document.createElement("h2");
AddModalTitle.innerText = "Add Modal";
const addElement = document.querySelector("thead td");

addModal.onclick = () => {
  modalWrapper.append(modalContainer);
  modalWrapper.style.display = "flex";
  console.log(addElement.innerHTML);
  for (let i = 0; i < users.length; i++) {
    addElement.innerHTML;
  }
  addButton.onclick = () => {
    users.push(getInputValues());
    clearValues();
    modalWrapper.style.display = "none";
    modalWrapper.innerHTML = "";
  };
  delateButton.onclick = () => {
    console.log("jo");
  };
  console.log(users);
};
modalContainer.append(
  AddModalTitle,
  firstName,
  lastName,
  email,
  buttonContainer
);
buttonContainer.append(addButton, delateButton);
function getInputValues() {
  return {
    id: Math.floor(Math.random() * 100),
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
  };
}
function clearValues() {
  firstName.value = "";
  lastName.value = "";
  email.value = "";
}
