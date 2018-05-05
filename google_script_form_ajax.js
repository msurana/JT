var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbwBspSPI6iXNDikx_GX9bzzbiCcGKFmC4eVeOvvlggbl-74F7Y/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})