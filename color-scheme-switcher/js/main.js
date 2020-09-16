// First, select each button.
let buttons = document.querySelectorAll('.js-buttons li');

// Second, write an event listener for each of the buttons you selected. You can use callback functions or anonymous functions.
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = buttons[i].querySelector('a').className;
  })
}