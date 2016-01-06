// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
});

// var goDecide = function(e) {

//   var toTranslate = $('#pirate-speak').value();
//   console.log(toTranslate);

//     // append data to the DOM
//     // $(".form-container").hide()
//     // $("#status").text("and the winner is ...");
//     // $("#decision-text").text(data['choice']);
//     // $("#score").text('... with a score of ' + data['score'] + '');
//     // $("#decision-text").fadeIn();
//     // $("#score").fadeIn();
//     // $("#again").show();
//   });
// }

$('#search-submit').on('click', function (e) {
  e.preventDefault();
  console.log('firing');
  var toTranslate = $('#pirate-speak').val().toLowerCase().trim();
  console.log(toTranslate)
  var toTranslate = $('#pirate-speak').val().trim();
  console.log(toTranslate);
  var payload = {toTranslate:toTranslate};
  console.log(payload);
  $.post('/pirate', payload, function(data) {
    console.log(data);
    $('#result').append(data.translated_text.toLowerCase());

  });
});


//   var phrase = $('#to-translate').val().toLowerCase().trim();
//   payload = {
//     phrase:phrase,
//     inputLang:inputLang,
//     outputLang:outputLang
//     };

//    //show tranlated word
//   $.post('/api/translate', payload, function(data) {
//     $('#result').append(data.translated_text.toLowerCase());
//   });
// }); //end translate for practice
