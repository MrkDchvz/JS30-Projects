const buttons = document.querySelectorAll(".button");


// buttons.forEach((btn) => btn.addEventListener("keydown", (event) => {
//     const keyName = event.key;
//     if (keyName == 'a') {
//         console.log(event.key);
//     }
// }))

document.addEventListener("keydown", (event) => {
    // Make key case insensitive
    const keyName = event.key.toUpperCase();
    const btn = document.querySelector(`div[data-key='${keyName}']`);
    if (btn != null) {
        triggerAnimationDown(btn);
        
    }

})

document.addEventListener("keyup", (event) => {
    // Make key case insensitive
    const keyName = event.key.toUpperCase();
    const btn = document.querySelector(`div[data-key='${keyName}']`);
    if (btn != null) {
        triggerAnimationUp(btn);
        playAudio(btn);
    }

})




function triggerAnimationDown(btn) {
    btn.classList.add('animate');
}

function triggerAnimationUp(btn) {
    btn.classList.remove('animate');
}

function playAudio(btn) {
    const key = btn.dataset.key.toUpperCase();

    const audio = document.querySelector(`audio[data-key='${key}']`);

    audio.currentTime = 0;
    audio.play();
    
    
}
// Create a keydown function
// Pull the data-key of each button
// transform the data-key into a charcode
// use charcode in an if statement to trigger
