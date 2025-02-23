//your code here!

document.addEventListener("DOMContentLoaded", function () {
    const listContainer = document.getElementById("infi-list");

    if (!listContainer) {
        console.error("Element with id 'infi-list' not found.");
        return;
    }

    function createListItem(index) {
        const listItem = document.createElement("li");
        listItem.textContent = `Item ${index}`;
        return listItem;
    }

    function loadInitialItems() {
        for (let i = 1; i <= 10; i++) {
            listContainer.appendChild(createListItem(i));
        }
    }

    function addMoreItems() {
        const currentItems = listContainer.children.length;
        for (let i = 1; i <= 2; i++) {
            listContainer.appendChild(createListItem(currentItems + i));
        }
    }

    function handleScroll() {
        if (listContainer.scrollTop + listContainer.clientHeight >= listContainer.scrollHeight - 10) {
            addMoreItems();
        }
    }

    listContainer.addEventListener("scroll", handleScroll);

    loadInitialItems();
});
