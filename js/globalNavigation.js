var $miniCartPanel = $('#mini-cart-panel');

$('#show-mini-cart').on('click', function() {
  $miniCartPanel.slideDown();
});

$('#hide-mini-cart').on('click', function() {
  $miniCartPanel.slideUp();
});
