const input = document.querySelector("#favchap");
const list = document.querySelector("#list");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    if (input.value.trim() != "") {
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        li.textContent = input.value;
        deleteButton.textContent = "❌";

        li.appendChild(deleteButton);
        list.appendChild(li);

        input.value = "";
        input.focus();
    } else {
        input.focus();
    }
});

list.addEventListener("click", function (e) {
    if (e.target.tagName === "BUTTON"); {
        const li = e.target.parentElement;
        list.removeChild(li);
        input.focus();
    }
});

// I would love to add scipture passages below scriptures verses to increase usability if only would be possible.