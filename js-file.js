// your javascript file
const container = document.querySelector('#container'); //get reference to container that already exists in html

const content = document.createElement('div'); //create new div and store it in variable called content
content.classList.add('content'); //add class
content.textContent = 'This is the glorious text-content!'; //add text
container.appendChild(content); //append div to container

// 'Hey I'm red'
const para = document.createElement('p');
para.classList.add('p');
para.textContent = "Hey I'm red";
para.style.color = 'red';
container.appendChild(para);

// 'I'm a blue h3!'
const header = document.createElement('h3');
header.classList.add('h3');
header.textContent = "I'm a blue h3";
header.style.color = 'blue';
container.append(header);

// div with black border and pink bg colour with h1 and p inside
const divider = document.createElement('div');
divider.classList.add('divider');
divider.style.backgroundColor = 'pink';
divider.style.border = 'black';

const imInDiv = document.createElement('h1');
imInDiv.classList.add('h1');
imInDiv.textContent = "I'm in a div";
divider.append(imInDiv);

const anotherPara = document.createElement('p');
anotherPara.classList.add('p');
anotherPara.textContent = 'ME TOO!';
divider.append(anotherPara);

container.append(divider);

// Method 1 of DOM Events using function
function alertFunction() {
  alert('Hello World - All Methods Using Function');
}

// Method 2 of DOM Events
const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert('Hello World -  Method 2');
// Method 2 using function
btn2f.onclick = alertFunction;

// Method 3 of DOM Events
// this method is good as it separates concerns and allows multiple event listeners if needed
// this method is more complex but more flexible and powerful
const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
  alert('Hello World - Method 3');
});

// Method 3 using function
btn3f.addEventListener('click', alertFunction);

// Method 4 (e) - callback from addEventListener
btn4.addEventListener('click', function (e) {
  console.log(e);
});

// Method 5 e.target - references the event itself in console
// can be used to access many useful properties and functions such as
// which mouse button or key was pressed or info about the event's target - the DOM node that was clicked
btn5.addEventListener('click', function (e) {
  console.log(e.target);
});

// Method 6 e.target.style.background
// turns colour of button to blue
btn6.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

// NOTE - THE SECTION BELOW AFFECTS ALL THE BUTTONS INCLUDING THE ONES ABOVE

// Adding listeners to groups of nodes
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});
