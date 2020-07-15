window.onload = function(){

//    document.getElementById("submitCreateAccount").onclick = function(event) {
//      event.preventDefault();
//      window.parent.postMessage('', 'https://www.unb.ca');

    function formSubmit(event) {
      window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
    }

    const form = document.getElementById('createForm');
    form.addEventListener('submit', formSubmit);
    };
};
