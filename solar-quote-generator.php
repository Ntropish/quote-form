<?php
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );
/*
Plugin Name: Solar Quote Form
Description: A form for generating solar package quotes
Version:     1.5
Author:      Justin Stone
*/

function html_form_code() {
  <?php
echo "<form id=\"quote-gen\">\n";
echo "<label>How many panels do you have?</label>\n";
echo "<input type=\"number\" name=\"panel-count\" min=\"1\" max=\"71\"><br>\n";
echo "\n";
echo "<p>\n";
echo "1-8 Panels: $14 Per Panel<br>\n";
echo "9-20 Panels: $12 Per Panel <br>\n";
echo "21-30 Panels: $8 Per Panel <br>\n";
echo "31-49 Panels: $7 Per Panel <br>\n";
echo "50-70 Panels: $5 Per Panel <br>\n";
echo "71+ Panels: Commercial. Contact us for estimate. </p>\n";
echo "\n";
echo "<br><label>What type of structure are your solar panels installed on?</label>  <br>\n";
echo "<input type=\"radio\" name=\"structure\" value=\"home\" id=\"home-panels\">Home Roof Top<br>\n";
echo "<input type=\"radio\" name=\"structure\" value=\"commercial\">Commercial Building Roof Top<br>\n";
echo "<input type=\"radio\" name=\"structure\" value=\"packing-covers\">Packing Covers<br>\n";
echo "<input type=\"radio\" name=\"structure\" value=\"ground\">Ground<br>\n";
echo "<div id=\"quote-gen-story-input\" style=\"display: none\">\n";
echo "  <br><label>What story are they mounted on?</label> <br>\n";
echo "  <input type=\"radio\" name=\"level\" value=\"1\">1st<br>\n";
echo "  <input type=\"radio\" name=\"level\" value=\"2\">2nd<br>\n";
echo "  <input type=\"radio\" name=\"level\" value=\"3\">3rd<br>\n";
echo "  <input type=\"radio\" name=\"level\" value=\"4\">4th<br>\n";
echo "</div>\n";
echo "<br><label>Is there access to a water spigot/faucet?</label> <br>\n";
echo "<input type=\"radio\" name=\"water\" value=\"access\">Yes<br>\n";
echo "<input type=\"radio\" name=\"water\" value=\"no-access\">No<br>\n";
echo "<br><label>How often do you want your solar panels cleaned?</label> <br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"bi-monthly\">Bi-Monthly (Every 2 weeks)<br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"monthly\">Monthly<br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"quarterly\">Quarterly (Every 3 months)<br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"semi-annualy\">Semi-Annualy (Twice a year)<br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"annualy\">Annualy (Once a year)<br>\n";
echo "<input type=\"radio\" name=\"frequency\" value=\"whenever\">Whenever Needed<br>\n";
echo "<br><label>Where did you here from us?</label> <br>\n";
echo "<input type=\"text\" name=\"referrer\"><br>\n";
echo "<br><label>Additional Details?</label> <br>\n";
echo "<input type=\"text\" name=\"additional-details\"><br>\n";
echo "</form>\n";
echo "<h1 id=\"quote-gen-price\"> </h1>\n";
echo "\n";
echo "<script>\n";
echo "$('#quote-gen').on('change', function(e){\n";
echo "\n";
echo "  var number = $('input[name=\"panel-count\"]').val();\n";
echo "  var structure = $('input[name=\"structure\"]:checked').val();\n";
echo "  var level = $('input[name=\"level\"]:checked').val();\n";
echo "  var water = $('input[name=\"water\"]:checked').val();\n";
echo "  var frequency = $('input[name=\"frequency\"]:checked').val();\n";
echo "  var referrer = $('input[name=\"referrer\"]').val();\n";
echo "  var details = $('input[name=\"additional-details\"]').val();\n";
echo "\n";
echo "  console.log(number, structure, level, water, frequency, referrer, details);\n";
echo "\n";
echo "  if (structure === 'home') {\n";
echo "    $('#quote-gen-story-input').attr('style', '');\n";
echo "    console.log('show');\n";
echo "  } else {\n";
echo "    $('#quote-gen-story-input').attr('style', 'display: none');\n";
echo "    console.log('hide');\n";
echo "  }\n";
echo "\n";
echo "  if\n";
echo "  (\n";
echo "    number && water && frequency &&\n";
echo "    ((structure === 'home' && level) || (structure))\n";
echo "  ) {\n";
echo "\n";
echo "    var total = 120;\n";
echo "    if (number <= 8) {\n";
echo "      total += number * 14;\n";
echo "    } else if (number <= 20) {\n";
echo "      total += number * 12;\n";
echo "    } else if (number <= 30) {\n";
echo "      total += number * 8;\n";
echo "    } else if (number <= 49) {\n";
echo "      total += number * 7;\n";
echo "    } else if (number <= 70) {\n";
echo "      total += number * 5;\n";
echo "    } else {\n";
echo "      $('#quote-gen-price').text('Contact us for a commercial estimate.');\n";
echo "      return;\n";
echo "    }\n";
echo "    if (water === 'no-access') {\n";
echo "      total += 120;\n";
echo "    }\n";
echo "    if (structure === 'home') {\n";
echo "      var levelCosts = {\n";
echo "        '1':0,\n";
echo "        '2':100,\n";
echo "        '3':150,\n";
echo "        '4':200\n";
echo "      }\n";
echo "      total += levelCosts[level];\n";
echo "    }\n";
echo "    $('#quote-gen-price').text('$'+total);\n";
echo "\n";
echo "  }\n";
echo "});\n";
echo "</script>\n";
?>
}
