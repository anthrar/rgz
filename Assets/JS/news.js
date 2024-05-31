function expandNews(e) {
    const el = e.target;
    const contentElement = el.parentElement.getElementsByClassName("news-content")[0];
    if (contentElement.classList.contains("hidden")) { // Содержимое новости спрятано, открываем
        contentElement.classList.remove("hidden");
        el.innerHTML = "Показать меньше";
    } else {
        contentElement.classList.add("hidden");
        el.innerHTML = "Показать больше";
    }
};

