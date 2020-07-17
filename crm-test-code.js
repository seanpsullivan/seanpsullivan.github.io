window.onload = function(){
  // Check if the #createForm element exists
  var formPage = document.getElementById("createForm");

  if (formPage) {
    console.log ('i see the form!');

    var sendMessage = function (event) {
      // Send a postMessage to the parent page
      console.log('message sending');
      window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');// Do something...
    };
    // Listen for the beforeunload event after the form submits
      window.addEventListener('beforeunload', sendMessage, false);
      window.addEventListener('pagehide', sendMessage, false);


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
