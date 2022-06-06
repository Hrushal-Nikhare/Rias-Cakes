// var msg  = document.title;
//       var speed = 100;
//       var endChar = "  ||  ";
//       var pos = 0;
      
//       function moveTitle()
//       {
//        	var ml = msg.length;
      		
//       	title = msg.substr(pos,ml) + endChar + msg.substr(0,pos);
//     	document.title = title;
      	
//         pos++;
//     	if (pos > ml) pos=0;
//         window.setTimeout("moveTitle()",speed);
//       }
// import Cookies from 'js-cookie';
//       moveTitle();

/*
Here's what the selected code is doing:
1.The sleep() function will wait for the specified number of milliseconds before returning.
2. The Date.now() function returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
3. The do..while loop will run as long as the condition (currentDate - date < milliseconds) remains true.

The code will
*/
function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
// sleep(x) is command to use it ^

    // document.getElementById("switch").addEventListener("click", darkSwitch);
    
    // checking if cookie exists
    var cookieState = Cookies.get('darkMode');
 
    // First visit - cookieState is undefined
    // If cookie exists we are parsing it to get a boolean
    if(cookieState === undefined){
        var isDarkmodeEnabled = false;
    }else{
        var isDarkmodeEnabled = JSON.parse(cookieState)
    };
 
    // Cookie doesn't exist: darkMode = false 
    // Cookie exists: darkMode = true/false
    var darkMode = isDarkmodeEnabled;
 
    // Add dark mode classes and elements' classes
    // newDarkClass - a name of a class with dark mode attributes 
    // defaultClass - a class of an element a new class will be added to
    var darkClasses = [
 
        { newDarkClass: 'bg_dark', defaultClass: 'body'},
        { newDarkClass: 'h2_dark', defaultClass: 'h2'},  
 
    ];
 
 
    // Adding classes on page load if darkmode is enabled
    window.onload = addClassesOnLoad();
 
    // Changing darkMode state and adding or removing classes
    function darkSwitch(){
 
        // Setting darkMode to its opposite value
        console.log('ta')
        darkMode = !darkMode;
 
        if(darkMode === true){
            // Looping through an array and deleting classes
            darkClasses.forEach(item => {
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.add(item.newDarkClass))
            });
        }
        else{
            // Looping through an array and deleting classes
            darkClasses.forEach(item => {
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.remove(item.newDarkClass))
            });  
        };
        // Saving darkMode state to the cookie
        Cookies.set('darkMode', darkMode);
        }
 
    // Adding classes on page load if darkmode is enabled
    function addClassesOnLoad(){
 
        if(darkMode === true){
                
            document.getElementById("switch").checked = true;
 
            darkClasses.forEach(item =>{ 
                var element = document.querySelectorAll(`.${item.defaultClass}`)
                element.forEach(h => h.classList.add(item.newDarkClass))   
            });
        };
    }
    let keyPress = 84  //"T" has been pressed
    window.addEventListener("keydown", checkKeyPress);

    function checkKeyPress(key) {
    if (key.keyCode === keyPress) {
        console.log('Dark mode is toggled');
        darkSwitch();
    }
    }