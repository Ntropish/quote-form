jQuery('#quote-gen').on('change', function(e){

  var number = jQuery('input[name="panel-count"]').val();
  var structure = jQuery('input[name="structure"]:checked').val();
  var level = jQuery('input[name="level"]:checked').val();
  var water = jQuery('input[name="water"]:checked').val();
  var frequency = jQuery('input[name="frequency"]:checked').val();
  var referrer = jQuery('input[name="referrer"]').val();
  var details = jQuery('textarea[name="additional-details"]').val();


  if (structure === 'home') {
    jQuery('#quote-gen-story-input').attr('style', '');
  } else {
    jQuery('#quote-gen-story-input').attr('style', 'display: none');
  }

  if
  (
    number && water && frequency &&
    ((structure === 'home' && level) || (structure))
  ) {

    var total = 120;
    if (number <= 8) {
      total += number * 14;
    } else if (number <= 20) {
      total += number * 12;
    } else if (number <= 30) {
      total += number * 8;
    } else if (number <= 49) {
      total += number * 7;
    } else if (number <= 70) {
      total += number * 5;
    } else {
      jQuery('#quote-gen-price').text('Contact us for a commercial estimate.');
      return;
    }
    if (water === 'no-access') {
      total += 120;
    }
    if (structure === 'home') {
      var levelCosts = {
        '1':0,
        '2':100,
        '3':150,
        '4':200
      }
      total += levelCosts[level];
    }
    var finalText = '';
    if (frequency==='bi-monthly') {
      finalText = 'Cost: $'+total+' per clean, twice a month';
      total = Math.ciel(total * 0.8);
    } else if (frequency==='monthly') {
      finalText = 'Cost: $'+total+' per clean, once a month';
      total = Math.ciel(total * 0.82);
    } else if (frequency==='quarterly') {
      finalText = 'Cost: $'+total+' per clean, four times per year';
      total = Math.ciel(total * 0.85);
    } else if (frequency==='semi-annually') {
      finalText = 'Cost: $'+total+' per clean, two times per year';
      total = Math.ciel(total * 0.9);
    } else if (frequency==='annually') {
      finalText = 'Cost: $'+total+' per clean, once per year';
      total = Math.ciel(total * 0.95);
    } else if (frequency==='whenever') {
      finalText = 'Cost: $'+total+' per clean, as needed';
      total = Math.ciel(total * 0.8);
    }
    jQuery('#quote-gen-price').text(finalText);

  }
});
