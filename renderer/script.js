document.addEventListener('DOMContentLoaded', () => {
function getTime() {
const current = document.getElementById('dateElement');
const present = new Date();

// Configuring time
const dayOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric' }

// Formatting
const formattedDate = present.toLocaleDateString(undefined, dayOptions);
const formattedTime = present.toLocaleTimeString(undefined, timeOptions);


current.textContent = `${formattedDate}, ${formattedTime}`;

}

getTime();
setInterval(getTime, 1000);

});