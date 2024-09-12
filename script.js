const table = document.getElementById("table");
let input = document.getElementsByClassName("input");
const selectStatus = document.getElementById("selectStatus");

const addSoldierBtn = document.getElementById("addPersonal");
const homePage = document.getElementById("homePage");

const editPage = document.getElementById("editPage");
const editPersonaBtn = document.getElementById("editPersona");
const removePersonaBtn = document.getElementById("removePersona");

let inputs = document.getElementsByClassName("inputs");
const editSelectStatus = document.getElementById("editSelectStatus");

const sortBtn = document.getElementById("sortBtn");

let rowToEdit = null;

addSoldierBtn.addEventListener("click", function (event) {
  event.preventDefault();
  addedSoldier();
});
editPersonaBtn.addEventListener("click", function (event) {
  event.preventDefault();
  editRow();
});
removePersonaBtn.addEventListener("click", function (event) {
  event.preventDefault();
  clearInputs();
});
sortBtn.addEventListener("click", function (event) {
  event.preventDefault();
  sortNames();
});

function addedSoldier() {
  addedRowToTable();
  saveDataToLocalStorage();
  clearInputs();
}
function clearInputs() {
  inputs[0].value = "";
  inputs[1].value = "";
  inputs[2].value = "";
  inputs[3].value = "";
  inputs[4].value = "";

  input[0].value = "";
  input[1].value = "";
  input[2].value = "";
  input[3].value = "";
  input[4].value = "";

  editSelectStatus.value = "Active";
}

function addedRowToTable() {
  let newRow = table.insertRow();

  let nameCell = newRow.insertCell(0);
  let rankCell = newRow.insertCell(1);
  let positionCell = newRow.insertCell(2);
  let platoonCell = newRow.insertCell(3);
  let statusCell = newRow.insertCell(4);
  let actionCell = newRow.insertCell(5);

  nameCell.textContent = input[0].value;
  rankCell.textContent = input[1].value;
  positionCell.textContent = input[2].value;
  platoonCell.textContent = input[3].value;
  statusCell.textContent = selectStatus.value;

  let btnEdit = document.createElement("button");
  let btnDelete = document.createElement("button");
  let btnMission = document.createElement("button");

  btnEdit.className = "edit-btn";
  btnDelete.className = "delete-btn";
  btnMission.className = "mission-btn";
  btnEdit.textContent = "Edit";
  btnDelete.textContent = "Delete";
  btnMission.textContent = "Mission";

  actionCell.appendChild(btnEdit);
  actionCell.appendChild(btnDelete);
  actionCell.appendChild(btnMission);

  //בלחיצה על כפתור עריכה
  btnEdit.addEventListener("click", () => {
    rowToEdit = newRow;
    homePage.style.display = "none";
    editPage.style.display = "flex";
    inputs[0].value = nameCell.textContent;
    inputs[1].value = rankCell.textContent;
    inputs[2].value = positionCell.textContent;
    inputs[3].value = platoonCell.textContent;
    editSelectStatus.value = statusCell.textContent;
  });

  //בלחיצה על כפתור מחיקה
  btnDelete.addEventListener("click", () => {
    nameCell.remove();
    rankCell.remove();
    positionCell.remove();
    platoonCell.remove();
    statusCell.remove();
    actionCell.remove();

    input.value = "";
    saveDataToLocalStorage();
  });
}

function editRow() {
  let cells = rowToEdit.getElementsByTagName("td");
  cells[0].textContent = inputs[0].value;
  cells[1].textContent = inputs[1].value;
  cells[2].textContent = inputs[2].value;
  cells[3].textContent = inputs[3].value;
  cells[4].textContent = editSelectStatus.value;
  homePage.style.display = "flex";
  editPage.style.display = "none";
  saveDataToLocalStorage();
}
