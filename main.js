'use strict';

class Square extends HTMLElement {

    count = 0;

    connectedCallback(){
        // this.innerHTML = `<div class="a">Hey</div>`;
        this.addEventListener("click", () => {
            console.log("counter running ", this.count)
            if(this.count > 2) {
                this.count = 0
            } else {
                this.count += 1;
            }
            this.checkCount(this.count)
            console.log(this.count)
        })
    }

    checkCount(count){
        this.className = "";
        switch(count){
            case 1:
                this.classList.add("red")
                break
            default:
                return
        }
    }
}

window.customElements.define('sq-r', Square);

