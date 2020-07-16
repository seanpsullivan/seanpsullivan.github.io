window.onload = function(){
  // send postMessage after form is submitted
  function formSubmit(event) {
    setTimeout(function(){
      console.log('counting down from 5!')
      window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
    }, 5000);
  }
  const form = document.getElementById('createForm');

  form.addEventListener('submit', formSubmit);

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
};
