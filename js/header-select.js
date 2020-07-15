// нашли контейнер с селектом
const selectAllElements = document.querySelectorAll("[data-select]");


selectAllElements.forEach(function(item){
    item.addEventListener("click", function(){
        const realSelect = this.nextElementSibling

        // если кликнули по пунктам в дропдауне
        if (event.target.hasAttribute("data-select-item")) {

            // нашли заголовок у данного дропдауна и записали его текстовое значение из дата атрибута data-select-item
            var itemTitle = event.target.getAttribute("data-select-item");
            this.querySelector("[data-select-title]").textContent = itemTitle;

            // скрываем дропдаун
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

            // связка с реальным селектом
            // изменяем значение  value у реального селекта
            if (realSelect) {
                realSelect.value = itemTitle;

            }

        } else {
            // если кликнули по заголовку
            // скрываем или открываем дропдаун
            this.querySelector(".header-select__dropdown").classList.toggle("hidden");

        }
    })
});


