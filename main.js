'use strict';

class Square extends HTMLElement {

    count = 0;

    connectedCallback(){
        // this.innerHTML = `<div class="a">Hey</div>`;
        this.addEventListener("click", () => {

            if(this.count > 6) {
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
            case 2:
                this.classList.add("pink")
                break
            case 3:
                this.classList.add("blue")
                break
            case 4:
                this.classList.add("green")
                break
            case 5:
                this.classList.add("yellow")
                break
            case 6:
                this.classList.add("turq")
                break
            case 7:
                this.classList.add("sp-green")
                break
            default:
                return
        }
    }
}

window.customElements.define('sq-r', Square);

