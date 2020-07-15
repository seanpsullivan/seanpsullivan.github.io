window.onload = function(){
  function formSubmit(event) {
    window.parent.postMessage('postMessage says hello!', 'https://www.unb.ca');
  }

  const form = document.getElementById('createForm');
  form.addEventListener('submit', formSubmit);
  };
};
