document.getElementById('E-logo').addEventListener('click', function() {
  var email = 'goraisubhajit53@gmail.com';
  var mailtoLink = 'mailto:' + email;
  window.location.href = mailtoLink;
});



 
// <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
// <script>
//   (function() {
//     emailjs.init("blUyoOkdSD28OsJQw");
//   })();
// </script>
// <script>
//     document.getElementById('submit').addEventListener('click', function() {
//         var email = document.getElementById('email').value;
//         var message = document.getElementById('msg').value;
      
//         if (email && message) {
//           emailjs.send("service_gkgrv0q", "template_9luynmw", {
//             to_email: 'goraisubhajit53@gmail.com',
//             from_email: email,
//             message: message
//           })
//           .then(function(response) {
//             alert('Email sent successfully!');
//             document.getElementById('email').value = '';
//             document.getElementById('msg').value = '';
//           }, function(error) {
//             alert('Failed to send email. Please try again later.');
//           });
//         } else {
//           alert('Please fill in both the email and message fields.');
//         }
//       });
      
// </script> 



// <form method="POST" id="form">

// <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE">

// <input type="text" name="name" required>
// <input type="email" name="email" required>
// <textarea name="message" required></textarea>
// <input type="checkbox" name="botcheck" class="hidden" style="display: none;">

// <button type="submit">Submit Form</button>

// <div id="result"></div>

// </form>

// <script>
// const form = document.getElementById('form');
// const result = document.getElementById('result');

// form.addEventListener('submit', function(e) {
// e.preventDefault();
// const formData = new FormData(form);
// const object = Object.fromEntries(formData);
// const json = JSON.stringify(object);
// result.innerHTML = "Please wait..."

// fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//         },
//         body: json
//     })
//     .then(async (response) => {
//         let json = await response.json();
//         if (response.status == 200) {
//             result.innerHTML = "Form submitted successfully";
//         } else {
//             console.log(response);
//             result.innerHTML = json.message;
//         }
//     })
//     .catch(error => {
//         console.log(error);
//         result.innerHTML = "Something went wrong!";
//     })
//     .then(function() {
//         form.reset();
//         setTimeout(() => {
//             result.style.display = "none";
//         }, 3000);
//     });
// });
// </script>