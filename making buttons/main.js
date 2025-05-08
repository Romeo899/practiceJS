/* 
Pseudo Code:

button onclick change background image to something from an API.

*/


// 
const button = document.querySelector('#button');

button.addEventListener('click', () => {
    document.body.style.backgroundImage = `url('./img/img1.jpg')`;
});


// It works now I want to toggle states 

// if already applied turn it back to blank