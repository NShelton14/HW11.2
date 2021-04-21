const textsize = document.getElementById('textsize');
const textcolor = document.getElementById('textcolor');
const p = document.createElement('p');
const min = document.getElementById('min');
const max = document.getElementById('max');
const size = document.getElementById('size');

document.getElementById('para').appendChild(p);

p.setAttribute('id', 'textout');
const textout = document.getElementById('textout');

console.log(min, max);

document
  .querySelector('input[type="range"]')
  .addEventListener('input', event => {
    textsize.innerText = event.target.value;
    textout.style.fontSize = `${event.target.value}px`;
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

min.addEventListener('submit', event => {
  event.preventDefault();
});

max.addEventListener('submit', event => {
  event.preventDefault();
  size.max = event.target.elements[0].value;
});
