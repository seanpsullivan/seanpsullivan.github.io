setInterval(function(){ console.log("Script works!"); }, 3000);
document.getElementById("submitCreateAccount").onclick = function() {
  console.log("Successful click!");
  window.parent.postMessage('Hello from the iframe', 'https://www.unb.ca');
};
