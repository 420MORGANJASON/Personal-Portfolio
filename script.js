// Get current date and time 
let now = new Date()
let time = now.toLocaleString();

// Insert date and time into HTML
document.getElementById("datetime").innerHTML = time;