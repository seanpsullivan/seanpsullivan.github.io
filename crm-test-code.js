window.onload = function(){
   console.log("JS is loaded");

    // Check for thank-you text
    var content = document.body.textContent || document.body.innerText;
    var hasText = content.indexOf("Your information has been submitted")!==-1;
    if(hasText){
      console.log("It's the thank-you page, that's what it says.")
    }


   // Check if the #createForm element exists
   var formPage = document.getElementById("createForm");
   if (formPage) {
     console.log("This is a form page");

//     var sendMessage = function (event) {
       // Send a postMessage to the parent page
  //     window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
    //   console.log("postMessage sent!");
    // };
       // Listen for an event after the form submits
//       window.addEventListener('beforeunload', sendMessage, false); // Desktop
  //     window.addEventListener('pagehide', sendMessage, false); //iOS

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
