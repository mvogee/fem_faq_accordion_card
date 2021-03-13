var btns = document.querySelectorAll(".dropdown-header");

function buttonClicked() {
    console.log(this.classList[0]);
    this.classList.toggle("header-inactive");
    this.firstElementChild.classList.toggle("dropdown-arrow-active");
    // if (this.classList.contains("header-inactive")) {
    //     this.firstElementChild.style.transform = 'rotate(0)';
    //     this.firstElementChild.style.paddingTop = '7px';
    //     //next grab the body text and show it
    // } // this element is nactive
    // else {
    //     this.firstElementChild.style.transform = 'rotate(180deg)';
    // }

}

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", buttonClicked);
}