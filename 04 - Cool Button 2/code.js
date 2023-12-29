// DEFAULT DECLARATIONS
const pointer = document.querySelector('.pointer');
const buttonBox = document.querySelectorAll('.button-box');


// BUTTON EVENT
buttonBox.forEach(buttonBox =>{
  buttonBox.addEventListener('mousemove', (e) => {
    const position = buttonBox.getBoundingClientRect();
    const x = e.pageX - position.left - position.width / 2;
    const y = e.pageY - position.top - position.height  / 2;

    buttonBox.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    buttonBox.children[0].style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    pointer.classList.add('button-hover');
  })

  buttonBox.addEventListener('mouseout', () => {
    buttonBox.style.transform = `translate(0, 0)`;
    buttonBox.children[0].style.transform = `translate(0, 0)`;
    pointer.classList.remove('button-hover');
  })
})


// POINTER EVENT
window.addEventListener('mousemove', (e) => {
  pointer.style.left = e.clientX + "px";
  pointer.style.top = e.clientY + "px";
});
