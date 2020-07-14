window.onload = function(){
    setInterval(function(){ console.log("Script works!"); }, 3000);
    document.getElementById("submitCreateAccount").onclick = function() {
      console.log("Submit button was clicked!");
      window.parent.postMessage('Hello from the iframe', 'https://www.unb.ca');
    };
};
