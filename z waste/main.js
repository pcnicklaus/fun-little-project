$(document).ready(function(){

  $("form").on('submit', function (event){
    event.preventDefault();
    getRequest();
  });

  var getRequest = function () {
    var pirateIn = $("#search-term").val().trim();
    // var pirateCom = pirateIn.split(' ');
    // var pirateOut = pirateCom.join('%20');
    // console.log(pirateOut);
    // $.ajax({
    //   url: "http://isithackday.com/arrpi.php?text=" + pirateIn + '?',
    //     success: function (result){
    //       console.log(result);
    //     }
    //   });
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://isithackday.com/arrpi.php?text=" + pirateIn + '?', true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "false");
    xhr.onload = function () {
        console.log(xhr.responseText);
    };
    xhr.send();



      // data: {
      //   format: "jsonp"
      // },
      // dataType: "jsonp",


    };
});
