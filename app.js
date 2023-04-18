// DOM Events Exercise
/*
1a. Select the 1st button element and set it to a const variable called button1
1b. Using the ONCLICK event property, have an alert that says "You clicked the first button! Congrats!" pop up 
    when you click on the button
2a. Select the h3 and set it to a const variable called h3
2b. Using addEventListener, have an alert that says "You hovered over the h3 element! Congrats!" pop up when you
    hover over the h3
3a. Select the form element/tag and set it to a const variable called form
3b. Using addEventListener, display the value in the text input with an alert when the submit input in the form is 
    clicked.
*/

const button1 = document.querySelector('#one');

button1.onclick = function (){
    alert("You clicked the first button! Congrats!");
}

const h3 = document.querySelector('h3');

h3.addEventListener('mouseover', function(){
    alert("You hovered over the h3 element! Congrats!");
});

const form = document.querySelector('form');

form.addEventListener('submit', function(){
    alert(form.elements.entry.value);
});



// BONUS
/*
4a. Select the Dark Mode button and set it to a const variable called darkMode
4b. Using addEventListener, TOGGLE the "dark-mode" CSS class On/Off for EVERY element when the Dark Mode 
    Button is clicked
5a. Select the "CAN ONLY CLICK A CERTAIN NUMBER OF TIMES" button and set it to a const variable called times
5b. Using addEventListener, have an alert that says "You clicked the last button! Congrats!" pop up when you 
    click on the button. However, have this setup so that when the button is clicked a third time have the 
    following alert display instead of the "You clicked the last button! Congrats!" alert. New alert 
    "OH NO! This button is NOT going to work anymore". And finally, when the button is clicked a fourth, fifth, 
    sixth, etc. time have it do nothing (AKA Disable the button).
*/
