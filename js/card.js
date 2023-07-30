$(document).ready(function() {
  // Function to update the card color
  function updateCardColor() {
    var color = $('#color_front').val();
    $('.style-I6XLc').css('background-image', 'none');
    $('.style-I6XLc').css('background-color', color);
  }

  // Function to reinitialize the minicolors plugin
  function initializeMinicolors() {
    $('.colorpick').minicolors({
      control: 'hue',
      position: 'bottom',
      format: 'hex',
      theme: 'bootstrap',
      swatchPosition: 'left',
      defaultValue: '#000',
      change: function(value, opacity) {
        updateCardColor();
      },
    });
  }

  // Event handler for color change
  $('#color_front').on('change', function() {
    updateCardColor();
  });

  // Event handler for logo upload
  $('#logo_upload').on('change', function() {
    var file = this.files[0];
    if (file && file.type.startsWith('image/')) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#card_logo').html('<img src="' + e.target.result + '" alt="Logo">');
      };
      reader.readAsDataURL(file);
    } else {
      // Clear the logo
      $('#card_logo').html('<span id="style-7MoSN" class="style-7MoSN">YOUR LOGO</span>');
    }
  });

  // Flip the card on hover
  $('.credit-card').hover(
    function() {
      $(this).toggleClass('flipped');
    },
    function() {
      $(this).toggleClass('flipped');
    }
  );

  // Preview button click event
  $('#previewDesign').on('click', function() {
    updateCardColor();
    var logo = $('#logo_upload').prop('files')[0];
    if (logo && logo.type.startsWith('image/')) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#card_logo').html('<img src="' + e.target.result + '" alt="Logo">');
      };
      reader.readAsDataURL(logo);
    } else {
      // Clear the logo
      $('#card_logo').html('<span id="style-7MoSN" class="style-7MoSN">YOUR LOGO</span>');
    }
  });

  // Initialize the minicolors plugin
  initializeMinicolors();
});
