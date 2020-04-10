const cardButton = document.querySelector("#cardButton");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close")


cardButton.addEventListener("click", function() {
    modal.classList.add("is-open");
})

close.addEventListener("click", function(){
    modal.classList.remove("is-open");
})

new WOW().init();

/*kam Erkrord tarberaky*/

/*function toggelModal (){
    modal.classList.toggle("is-open");
}

ev ays funciayi anuny dnel eventlistener-i functiayi poxaren erku texum el `

cardButton.addEventListener("click", toggelModal);

close.addEventListener("click", toggelModal);



*/