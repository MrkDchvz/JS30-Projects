// Todos
// 1. Add event listners on all input
// 1.1 Create a shift key hold logic [Done!]
// 1.2 Pull the index of the checkbox when shift is selected

const checkboxes = document.querySelectorAll("input");
const checkboxesArr = [...checkboxes];
let isShiftHold = false;
let startingCheckbox = 0;

function holdShift(event) {
  isShiftHold = event.shiftKey;
}

document.addEventListener("keydown", holdShift);
document.addEventListener("keyup", holdShift);

checkboxes.forEach((element) => {
  element.addEventListener("change", (event) => {
    const index = checkboxesArr.indexOf(element);
    if (isShiftHold) {
        let right = Math.max(startingCheckbox, index);
        let left = Math.min(startingCheckbox, index);
      for (i = left; i < right; i++) {
        checkboxesArr[i].checked = true;
      }
    } else {
        startingCheckbox = index;
    }
  });
});
