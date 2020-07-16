window.onload = function(){
  window.addEventListener('beforeunload', function (e) {
    window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
  });


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
