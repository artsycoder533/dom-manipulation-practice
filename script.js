// Add the following elements to the container using ONLY javascript and the DOM methods shown above.




const container = document.querySelector('.container');

//     a <p> with red text that says “Hey I’m red!”
const paragraph = document.createElement('P');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

//     an <h3> with blue text that says “I’m a blue h3!”
const headingThree = document.createElement('H3');
headingThree.textContent = "I'm a blue h3!";
headingThree.style.color = "blue";
container.appendChild(headingThree);

//     a <div> with a black border and pink background color with the following elements inside of it:
//         another <h1> that says “I’m in a div”
//         a <p> that says “ME TOO!”
//         Hint for this one: after creating the div with createElement, append the <h1> and <p> to it before adding it to the container.
const divTwo = document.createElement('DIV');
divTwo.style.backgroundColor = "pink";
divTwo.style.borderColor = "black";
divTwo.style.borderStyle = "dotted";
const headerOne = document.createElement('H1');
headerOne.textContent = "I'm in a div";
divTwo.appendChild(headerOne);
const paragraphTwo = document.createElement('P');
paragraphTwo.textContent = "ME TOO!";
divTwo.appendChild(paragraphTwo);
container.appendChild(divTwo);
