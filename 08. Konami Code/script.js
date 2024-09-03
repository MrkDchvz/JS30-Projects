const konami = ["arrowup","arrowup","arrowdown","arrowdown","arrowleft","arrowright","arrowleft","arrowright","a","b"];
let pointer = 0;
let konamiLength = konami.length

document.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() == konami[pointer]) {
        pointer += 1
        console.log(e.key.toLowerCase());
    }  else {
        pointer = 0
    }
    if (pointer == konamiLength) {
        console.log("KONNAMMIII");
    }
})