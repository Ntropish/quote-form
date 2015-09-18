
(function(){
  function updatePrice(){



      if (structure === 'home') {
        jQuery('#quote-gen-story-input').attr('style', '');
      } else {
        jQuery('#quote-gen-story-input').attr('style', 'display: none');
      }

      if
      (
        number && water &&
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
        jQuery('button[name="frequency"]').filter('[value="bi-monthly"]').children('h4').text('$'+Math.ceil(total*0.8));
        jQuery('button[name="frequency"]').filter('[value="monthly"]').children('h4').text('$'+Math.ceil(total*0.82));
        jQuery('button[name="frequency"]').filter('[value="quarterly"]').children('h4').text('$'+Math.ceil(total*0.85));
        jQuery('button[name="frequency"]').filter('[value="semi-annually"]').children('h4').text('$'+Math.ceil(total*0.9));
        jQuery('button[name="frequency"]').filter('[value="annually"]').children('h4').text('$'+Math.ceil(total*0.95));
        jQuery('button[name="frequency"]').filter('[value="whenever"]').children('h4').text('$'+Math.ceil(total));
        if (frequency) {
          if (frequency==='bi-monthly') {
            total = Math.ceil(total * 0.8);

            finalText = 'Cost: $'+total+' per clean, twice a month.';
          } else if (frequency==='monthly') {
            total = Math.ceil(total * 0.82);

            finalText = 'Cost: $'+total+' per clean, once a month.';
          } else if (frequency==='quarterly') {
            total = Math.ceil(total * 0.85);

            finalText = 'Cost: $'+total+' per clean, four times per year.';
          } else if (frequency==='semi-annually') {
            total = Math.ceil(total * 0.9);

            finalText = 'Cost: $'+total+' per clean, two times per year.';
          } else if (frequency==='annually') {
            total = Math.ceil(total * 0.95);

            finalText = 'Cost: $'+total+' per clean, once per year.';
          } else if (frequency==='whenever') {
            total = Math.ceil(total * 1);

            finalText = 'Cost: $'+total+' per clean, as needed.';
          }
          jQuery('#quote-gen-price').text(finalText);
          quotePrice = total;
        }
      }
  }

  var quotePrice = 0;
  var frequency = null;
  var number = null;
  var structure = null;
  var level = null;
  var water = null;
  var referrer = null;
  var details = null;

  jQuery('button[name="frequency"]').on('click', function(e){
    frequency = e.target.value;
    jQuery('button[name="frequency"]:not([value="'+frequency+'"])').attr('style', '');
    jQuery('button[name="frequency"]').filter('[value="'+frequency+'"]').attr('style', 'border: 8px solid rgb(242,102,33)');
    updatePrice();
  });

  jQuery('#quote-gen').on('change', function(e){

    number = jQuery('input[name="panel-count"]').val();
    structure = jQuery('input[name="structure"]:checked').val();
    level = jQuery('input[name="level"]:checked').val();
    water = jQuery('input[name="water"]:checked').val();
    referrer = jQuery('input[name="referrer"]').val();
    details = jQuery('textarea[name="additional-details"]').val();
    updatePrice();

  });

  jQuery('.quote-gen-contact-us').on('click', function(){
    jQuery('.quote-gen-contact-details').attr('style', '');
    jQuery('.quote-gen-contact-us').attr('style', 'display: none');
  });

  jQuery('.quote-gen-submit').on('click', function(){
    var number = jQuery('input[name="panel-count"]').val();
    var structure = jQuery('input[name="structure"]:checked').val();
    var level = jQuery('input[name="level"]:checked').val();
    var water = jQuery('input[name="water"]:checked').val();
    var frequency = jQuery('input[name="frequency"]:checked').val();
    var referrer = jQuery('input[name="referrer"]').val();
    var details = jQuery('textarea[name="additional-details"]').val();

    var name = jQuery('.quote-gen-name').val();
    var address = jQuery('.quote-gen-address').val();
    var phone = jQuery('.quote-gen-number').val();
    var email = jQuery('.quote-gen-email').val();

    if (!name) {
      jQuery('.quote-gen-message').text('You are missing a name.');
    } else if (!address) {
      jQuery('.quote-gen-message').text('You are missing an address.');
    } else if (!phone) {
      jQuery('.quote-gen-message').text('You are missing a phone number.');
    } else if (!email) {
      jQuery('.quote-gen-message').text('You are missing an E-Mail.');
    } else if (!number) {
      jQuery('.quote-gen-message').text('You are missing the panel count.');
    } else if (!structure) {
      jQuery('.quote-gen-message').text('You are missing the structure the panels are mounted on.');
    } else if (structure === 'home' && !level) {
      jQuery('.quote-gen-message').text('You are missing the level the panels are mounted on.');
    } else if (!water) {
      jQuery('.quote-gen-message').text('You are missing the water access.');
    } else if (!frequency) {
      jQuery('.quote-gen-message').text('You are missing the cleaning frequency.');
    } else {
      var message = '<h3>Quote Report</h3><ul style="list-style: none">' +
        '<li>Number of panels:'+number+'</li>'+
        '<li>Type of Structure:'+structure+'</li>'+
        '<li>Mounting Level:'+level+'</li>'+
        '<li>Water Access:'+water+'</li>'+
        '<li>Cleaning Frequency:'+frequency+'</li>'+
        '<li>Referrer:'+referrer+'</li>'+
        '<li>Aditional Information:'+details+'</li>'+
        '<li>Customer Name:'+name+'</li>'+
        '<li>Customer Address:'+address+'</li>'+
        '<li>Customer Phone Number:'+phone+'</li>'+
        '<li>Customer EMail:'+email+'</li></ul>' +
        '<h4>Quote: $'+quotePrice+'</h4>';

      jQuery.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
          'key': 'yBiwQSj8pLLqjl5S1K9sUg',
          'message': {
            'from_email': 'sales@solarmaintenanceco.com',
            'to': [
                {
                  'email': 'sales@solarmaintenanceco.com',
                  'name': 'solar',
                  'type': 'to'
                }
              ],
            'autotext': 'true',
            'subject': 'Quote Report',
            'html': message
          }
        }
      }).done(function(response){
        if (response[0].status === 'sent') {
          jQuery('#quote-gen-price').text('Your information was recieved!');
        }
      });
    }
  });  //src="https://rawgit.com/Ntropish/quote-form/master/form-script.js"
})();
