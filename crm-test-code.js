let myLocation = location.href;
console.log("URL is" + location.href);

if (window.location.href.indexOf("unbca") > -1) {
   console.log("This is a confirmed submission page");
//   window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
 }

window.onload = function(){
  console.log('loaded');
//   Check if the #createForm element exists
  var formPage = document.getElementById("createForm");
  if (formPage) {
  //  var sendMessage = function (event) {
      // Send a postMessage to the parent page
  //    window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
  //  };
      // Listen for an event after the form submits


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
