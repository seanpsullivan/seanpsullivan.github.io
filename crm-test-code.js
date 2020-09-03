// Start with GTM

// Load GTM

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

   // Form pages only
   // Check if the #createForm element exists
   var formPage = document.getElementById("createForm");
   if (formPage) {
     console.log("This is a form page");

     // Find and remove "Request Information" header
     $("h4:contains('Request Information')").remove();
     // Find and replace "Contact Information" header
$    ("h3:contains('Contact Information')").remove();
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

    // Add contest link to bottom of page
    $('.instructions ').after('<div><a style="font-size:18px; margin-top:20px" href="https://www.unb.ca/admissions/contest_rules.html" target="_blank">See contest rules</a></div>');

    // Move privacy and rules after submit button
    $("#685c6142-3767-a320-e711-0ab14ca0b67d").appendTo(".submit-createaccount-button");

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

     // Track form abandonment
     // https://www.simoahava.com/analytics/track-form-abandonment-with-google-tag-manager/
     (function() {
        var formSelector = 'form'; // Modify this CSS selector to match your form. Default is first form on the page.
        var attribute = 'name';
        var history = [];
        window.addEventListener('beforeunload', function() {
          if (history.length) {
            window.dataLayer.push({
              'event' : 'formAbandonment',
              'eventCategory' : 'Form Abandonment',
              'eventAction' : history.join(' > ')
            });
          }
        });
        window.addEventListener('pagehide', function() {
          if (history.length) {
            window.dataLayer.push({
              'event' : 'formAbandonment',
              'eventCategory' : 'Form Abandonment',
              'eventAction' : history.join(' > ')
            });
          }
        });

        document.querySelector(formSelector).addEventListener('change', function(e) {
          history.push(e['target'].getAttribute(attribute));
        });
      })();


   } // end formpage if

  }; // end onload
