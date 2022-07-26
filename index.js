const form = document.querySelector("form");

const storeList = () => {
  window.localStorage.todoList = list.innerHTML;
};

function getTodos() {
  if (window.localStorage.todoList) {
    list.innerHTML = window.localStorage.todoList;
  } else {
    list.innerHTML = `<li>Cliquez sur un element pour le supprimer</li>`;
  }
}

window.addEventListener("load", getTodos);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  list.innerHTML += `<li>${item.value}</li>`;
  item.value = "";
  storeList();
});

list.addEventListener("click", (e) => {
  if (e.target.classList.contains("selected")) {
    e.target.remove();
  } else {
    e.target.classList.add("selected");
  }
  storeList();
});
