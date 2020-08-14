window.onload = function(){
  // Is the script loaded?
  console.log('Code is loaded');
  // Check if the #createForm element exists
  var formPage = document.getElementById("createForm");
  if (formPage) {

    // Prep our function
    var sendMessage = function (event) {
      window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
    };
    // Log the current URL
    let currentPage = location.href;
    console.log(currentPage);
    // Set an interval
    setInterval(function() {
        if (currentPage != location.href) {
          sendMessage();
        }
      }, 500);

    // Listen for an event after the form submits
    // Pausing these for now as it's buggy!
    //  window.addEventListener('beforeunload', sendMessage, false); // Desktop
    //  window.addEventListener('pagehide', sendMessage, false); //iOS


    // Force postal code to uppercase
    // https://www.the-art-of-web.com/html/input-field-uppercase/
    function forceInputUppercase(e)
    {
      var start = e.target.selectionStart;
      var end = e.target.selectionEnd;
      e.target.value = e.target.value.toUpperCase();
      e.target.setSelectionRange(start, end);
    }
    document.getElementById("address1_postalcode").addEventListener("keyup", forceInputUppercase, false);

  } // end if

}; // end onload
