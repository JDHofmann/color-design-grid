'use strict';

let squares = document.querySelectorAll("div")


squares.forEach(sq => {sq.addEventListener("click", (e) => console.log("clicked me"))
})


class Square extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `<div>Hey</div>`
    }
}

window.customElements.define('sq-r', Square);


// document.querySelector("main").innerHTML = <sq-r></sq-r>
