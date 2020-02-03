function start() {

   // Toggle button between pause and play.
   (function changeButton(){
      const buttonClicked = event.target
      if (buttonClicked.innerHTML === 'play'){
         document.getElementById('play').innerHTML = 'pause'
      } else {
         document.getElementById('play').innerHTML = 'play'
      }
   
   })()

   const buttonClicked = event.target
   if(buttonClicked.innerHTML === 'pause'){

      // Get current value of milliseconds, seconds, and minute from the app.
      let milliseconds = parseInt(document.querySelector("#milliseconds").innerHTML)
      let seconds = parseInt(document.querySelector("#seconds").innerHTML)
      let minute = parseInt(document.querySelector("#minute").innerHTML)

      let millisec = document.querySelector("#milliseconds")
      let sec = document.querySelector("#seconds")
      let min = document.querySelector("#minute")

      // Start the stop watch.
      const set = setInterval(function(){
         milliseconds++
         if(milliseconds === 100){
            seconds++
            milliseconds = 0
         } else if(seconds === 60){
            minute++
            seconds = 0
         }

         millisec.innerHTML = milliseconds
         sec.innerHTML = seconds
         min.innerHTML = minute

         // Pause the stop watch.
         if(buttonClicked.innerHTML === 'play'){
            clearInterval(set)
         }         
      
      }, 10);

   }

}

// Reset the stop watch to the default values.
function reset() {
   
   let millisec = document.querySelector("#milliseconds")
   let sec = document.querySelector("#seconds")
   let min = document.querySelector("#minute")

   millisec.innerHTML = "00"
   sec.innerHTML = "00"
   min.innerHTML = "00"

   // Clear all displayed lap times. 
   const ol = document.querySelector("ol")
   while(ol.firstChild) {
      ol.removeChild(ol.firstChild)
   }
   
}

// Create and display the lap times on the app.
function lap() {
   let milliseconds = parseInt(document.querySelector("#milliseconds").innerHTML)
   let seconds = parseInt(document.querySelector("#seconds").innerHTML)
   let minute = parseInt(document.querySelector("#minute").innerHTML)

   const ol = document.querySelector("ol")
   const li = document.createElement("li")
   const addLap = document.createTextNode(`${minute}": ${seconds}": ${milliseconds}`)
   
   li.appendChild(addLap)
   ol.appendChild(li)
}

// Switch between Light and Dark Modes.
function nightMode(){

   // Toggle button between Light and Dark Mode.
   (function changeButton(){
      const buttonClicked = event.target
      if (buttonClicked.innerHTML === 'Dark Mode'){
         document.getElementById('switch').innerHTML = 'Light Mode'
      } else {
         document.getElementById('switch').innerHTML = 'Dark Mode'
      }
   })()

   // Change the display depending on the Mode selected.
   const buttonClicked = event.target
   if(buttonClicked.innerHTML === "Light Mode") {
      
      document.querySelector('.container').style.backgroundColor = "black"
      document.querySelector('.container').style.color = "white"
      document.querySelector('.circle').style.borderColor = "red"
   } else {

      document.querySelector('.container').style.backgroundColor = "white"
      document.querySelector('.container').style.color = "black"
      document.querySelector('.circle').style.borderColor = "black"      
   }
}

