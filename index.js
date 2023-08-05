const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".emoji");
const colors = ["red" , "darkorange" , "yellow" , "green" , "blue"]
updaterating(0);
starsEl.forEach((starsEl , index)=> {
    starsEl.addEventListener("click", ()=>{
        updaterating(index)
    })
});

function updaterating (index) {
    starsEl.forEach((starsEl , idx)=>{
        if (idx < index + 1) {
            starsEl.classList.add("active");
        }
        else{
            starsEl.classList.remove("active")
        }
    });


    emojisEl.forEach(emojiEl=>{
    emojiEl.style.transform = `translateX(-${index* 52}px)`;
    emojiEl.style.color = colors[index];
})
}