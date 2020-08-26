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
     document.body.innerHTML = document.body.innerHTML.replace( /Request Information/g, "");
     // Find and replace "Contact Information" header
     document.body.innerHTML = document.body.innerHTML.replace( /Contact Information/g, "");
    // Set country to Canada
    $('#datatel_address1countryid').val('9acdfc65-203d-e811-80d8-02da73f1e652');
    // Set student type to High School
    //$('#unb_inquirytype').val('122810000');
    // Needs to be modified to trigger High School dropdown

    // Placeholder for date
    document.getElementsByName('birthdate')[0].setAttribute("placeholder", "MM/DD/YYYY");

    // Add CSS file
      var head = document.getElementsByTagName('HEAD')[0];
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = 'crm-unb-css.css';
      // Append link element to HTML head
      head.appendChild(link);


     // CSS changes to form
    $('body').css('font-family', 'Nunito Sans');
    $('.container').css('width', '100%');
    $('.condensed').css('background-color', 'transparent');
    $('.elcn-content').css('border-radius', '0').css('box-shadow', 'none').css('margin','0');
    $('.container.elcn-widget').css('width', '100%');
  //  $('input').css('border', '0').css('background-color', '#eee').css('padding', '10px 10px').css('margin-bottom', '15px').css('font-size', '16px');
  //  $('select').css('border', '0').css('background-color', '#eee').css('padding', '10px 10px').css('margin-bottom', '15px').css('font-size', '16px');

    $('.col-md-6.field').css('max-width', '98%');
    $('label, .label').css('font-size', '14px');
    $('#9112ebb6-a2ee-15e4-da3a-6b60b5426587').css('font-size','16px')

    // Add contest link
  //  $( ".submit-createaccount-button").after( "<br/><div><p><a href=''>See full contest rules</p></div>");


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
