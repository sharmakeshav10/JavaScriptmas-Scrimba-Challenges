const greeting = document.getElementById("greeting")
const btn = document.getElementById("btn")
btn.addEventListener("click", fix)

function fix() {
  // Task:
  // - Write a function to fix the UI problems with this Christmas message (make it Christmassy!)
  // - Run the function when the Fix button is clicked.
    greeting.textContent = "🎅 Merry Christmas 🎄🎁"
    greeting.style.fontFamily = "Algerian";
    btn.style.fontFamily = "Montserrat";
}


//Stretch goals:
// - Add an extra theme, and the option to switch between them.
// - Change the message and theme to a New Year’s one automatically on December 31st.







