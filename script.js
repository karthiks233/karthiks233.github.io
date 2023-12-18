
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function result(){
document.getElementById('result').innerText = ' Sentiment';
}

$(document).ready(function () {
  $('#myForm').submit(function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get form data
      var formData = $(this).serialize();

      // Perform AJAX submission
      $.ajax({
          type: 'POST',
          url: '{{ url_for('submit_form') }}',
          data: formData,
          success: function (data) {
              // Update your page with the result if needed
              // Example: $('#resultContainer').html(data);
          }
      });
  });
});
