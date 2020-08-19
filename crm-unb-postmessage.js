window.onload = function(){
   console.log("CRM JS has loaded");

   // Check page for thank-you text
   var content = document.body.textContent || document.body.innerText;
   var hasText = content.indexOf("Your information has been submitted")!==-1;
   if(hasText){
     console.log("This is a thank-you page.")
     window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
   }

   // Check if the #createForm element exists
   var formPage = document.getElementById("createForm");
   if (formPage) {
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
