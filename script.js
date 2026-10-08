let input = document.getElementById("input");
let todolist = document.getElementById("list");

let list = [];

let todoapp = {
  additem() {
    if (input.value.trim() !== "") {
      list.push(input.value);
      input.value = "";
      this.render();
    }
  },

  render() {
    todolist.innerHTML = "";

    list.forEach((value, index) => {
      todolist.innerHTML += `
                <li onclick="todoapp.toggle(this)">
                    ${value}
                    <button class="delete_btn" onclick="event.stopPropagation(); todoapp.delete(${index})">X</button>
                </li>
            `;
    });
  },

  delete(index) {
    list.splice(index, 1);
    this.render();
  },

  toggle(element) {
    element.classList.toggle("checked");
  },
};

// Enter key support
input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    todoapp.additem();
  }
});
