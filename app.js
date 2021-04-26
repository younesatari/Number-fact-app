document.getElementById('input').addEventListener('keyup', e=> getFact(e));

// Get Fact
function getFact(e) {
   // Input Value
   let inputValue = e.target.value;
   // Create a new XMLHttpRequest
   const xhr = new XMLHttpRequest();
   // Open a Request
   xhr.open('GET', `http://numbersapi.com/${inputValue}`, true);
   // Add Fact
   xhr.onload = function() {
      if(this.status === 200) {
         const fact = this.responseText;
         if(inputValue === '') {
            document.getElementById('fact').innerHTML = '';
         } else {
            document.getElementById('fact').innerHTML = fact;
            document.getElementById('num').innerHTML = inputValue;
         }
      }
   }
   // Send The Request
   xhr.send();
}      