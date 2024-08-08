// Add an event on sliders sliders / color picker
const sliderBlur = document.querySelector("#input--blur");
const sliderSpacing = document.querySelector("#input--spacing");
const colorPicker = document.querySelector("#input--color");
const screen = document.querySelector(".screen");

// Get root element to access the variables in it
const root = document.documentElement;
// Pull the 
const computedStyles = getComputedStyle(root);


// event Listener that blurs the screen upon change in slider valuee
sliderBlur.addEventListener('input', (event) => {
    // Set new Slider value
    let sliderValue = event.target.value + 'px';
    // Set the value of CSS Variable --blur with the new sliderValue
    root.style.setProperty('--blur', sliderValue);

})

sliderSpacing.addEventListener('input', (event) => {
    let sliderValue = event.target.value + '%';
    root.style.setProperty('--spacing', sliderValue);
})


colorPicker.addEventListener('input', (event) => {
    let colorValue = event.target.value;
    root.style.setProperty('--bg-color', colorValue);
    console.log(event.target.value);
})


// Create a function that modifies the css variable 
// add the function to the event on the sliders/ color picker