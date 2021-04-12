const textsize = document.getElementById('textsize');
const textcolor = document.getElementById('textcolor');
const textout = document.getElementById('textout');

document
  .querySelector('input[type="range"]')
  .addEventListener('input', event => {
    textsize.innerText = event.target.value;
    textout.style.fontSize = `${event.target.value  }px`;
  });

document
  .querySelector('input[type="color"]')
  .addEventListener('input', event => {
    textcolor.innerText = event.target.value;
    textout.style.color = event.target.value;
  });

document
  .querySelector('input[type="text"]')
  .addEventListener('input', event => {
    textout.innerText = event.target.value;
  });
