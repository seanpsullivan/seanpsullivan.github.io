window.onload = function(){
   console.log("JS is loaded");

    // Check for thank-you text
    var content = document.body.textContent || document.body.innerText;
    var hasText = content.indexOf("Your information has been submitted")!==-1;
    if(hasText){
      console.log("It's the thank-you page, that's what it says.")
      window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
      console.log("postMessage sent!");
    }

   // Check if the #createForm element exists
   var formPage = document.getElementById("createForm");
   if (formPage) {
     console.log("This is a form page");

     // Find and remove "Request Information" header
     $("h3:contains('Request Information')").remove();
     //document.body.innerHTML = document.body.innerHTML.replace( /Request Information/g, "");
     // Find and replace "Contact Information" header
$    ("h3:contains('Contact Information')").remove();
     //document.body.innerHTML = document.body.innerHTML.replace( /Contact Information/g, "");
    // Set country to Canada
    $('#datatel_address1countryid').val('9acdfc65-203d-e811-80d8-02da73f1e652');

    // Focus on first field
    $("#firstname").focus();

    // Add class to the list of programs so we can style text
    $( "#9112ebb6-a2ee-15e4-da3a-6b60b5426587" ).addClass( "programs" );

    // Placeholders
    //    document.getElementsByName('firstname')[0].setAttribute("placeholder", "Your first name");
    //  document.getElementsByName('lastname')[0].setAttribute("placeholder", "Your last name");
    document.getElementsByName('birthdate')[0].setAttribute("placeholder", "MM/DD/YYYY");
    //  document.getElementsByName('emailaddress1')[0].setAttribute("placeholder", "Your email");



    // Add CSS file
      var head = document.getElementsByTagName('HEAD')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'https://seanpsullivan.github.io/crm-unb-css.css';
      // Append link element to HTML head
      head.appendChild(link);


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
