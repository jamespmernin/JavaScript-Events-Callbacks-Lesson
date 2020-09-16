// First, select each button.
let buttons = document.querySelectorAll('a');

// Second, write an event listener for each of the buttons you selected. You can use callback functions or anonymous functions.
buttons.forEach((circle) => {
  circle.addEventListener('click', () => {
    document.body.className = circle.className;
  })
})