
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flipButton");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    if(i){    
         coin.style.animation = "spin-coin__front 3s forwards";
    } else{
         coin.style.animation = "spin-coin__back 3s forwards";    
    }
    
});