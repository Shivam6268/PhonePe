function randomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const a = Math.random().toFixed(2);

    return `rgba(${r}, ${g}, ${b}, ${a})`
}

setInterval(()=>{
    const div = document.querySelector(".phonePe-imageWrapper");
    div.style.backgroundImage = ` linear-gradient(${randomColor()}, ${randomColor()}, ${randomColor()})` ;
}, 1000)