import { addItem, updateItemName } from "./app.js";
export function createForm(editId, item) {
  const form = document.createElement("form");
  const value = item ? item.name : "";
  form.innerHTML = `
    <h2>grocery bud</h2>
    <div class="form-control">
      <input type="text" class="form-input" placeholder="e.g. eggs" value="${value}" />
      <button type="submit" class="btn">
        ${editId ? "edit" : '<i class="fa-solid fa-plus"></i> add item'}
      </button>
    </div>
  `;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = form.querySelector(".form-input");
    const value = input.value.trim();
    if (!value) {
      alert("Please provide value");
      return;
    }
    if (editId) {
      updateItemName(value)
    }
    else {
      addItem(value)
    }
    input.value = "";
  });

  return form;
}
