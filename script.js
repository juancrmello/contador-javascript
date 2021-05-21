let count = 0;

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        const button = e.currentTarget.classList;
        
        if (button.contains("decrease")) {
            count--;
        } else if (button.contains("increase")) {
            count++
        } else {
            count = 0;
        }

        if (count > 0) {
            value.style.color = "#18A558";
        } else if (count < 0) {
            value.style.color = "#E7625F";
        } else {
            value.style.color = "rgb(240, 248, 255)"
        }

        value.textContent = count;
    });
});