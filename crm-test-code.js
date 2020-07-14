window.onload = function(){
    document.getElementById("submitCreateAccount").onclick = function(event) {
      event.preventDefault();
      window.parent.postMessage('Hello from the iframe; submit button was clicked', 'https://www.unb.ca');
    };
};
