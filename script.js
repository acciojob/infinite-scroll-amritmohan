//your code here!

document.addEventListener("DOMContentLoaded", () => {
    let containerList = document.getElementById("infi-list");

    function createListItem(index) {
        let listItem = document.createElement("li");
        listItem.textContent = `Item ${index}`;
        return listItem;
    }

    function loadInitialItems() {
        for (let i = 1; i <= 10; i++) {
            listContainer.appendChild(createListItem(i));
        }
    }

    function addMoreItems() {
        const currentItems = containerList.children.length;
        for (let i = 1; i <= 2; i++) {
            containerList.appendChild(createListItem(currentItems + i));
        }
    }

    function handleScroll() {
        if (containerList.scrollTop + containerList.clientHeight >= containerList.scrollHeight - 10) {
            addMoreItems();
        }
    }

    containerList.addEventListener("scroll", handleScroll);

    loadInitialItems();
});

