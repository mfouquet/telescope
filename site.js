

var url = "https://api.nasa.gov/planetary/apod?api_key=" + key;


$.ajax({
  url: url,
  success: handleResult
});



function handleResult(result){

  if(result.media_type == "video") {
    $("#apod_img_id").css("display", "none");
    $("#apod_vid_id").attr("src", result.url);
  }
  else {

    $("#image_obj").attr("src", result.url);
    var randomNumber = Math.floor(Math.random() * 10) + 1;


    //$("#image_obj").attr("src", "images/" + randomNumber.toString() + ".jpg");

    $('#image_obj').load(function(){
      $(".image__container").addClass("image__container--shown");
    });

    $( "#image_obj" ).click(function() {
      $('.header').slideUp(250, function () {
        $('#image_obj').addClass('image--zoom');
        $('.explanation').addClass('explanation--black');

      });//addClass('header--hide');
    });

    $( "#image_obj" ).click(function() {

    });

  }

  //$("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));
  $("#apod_explaination").text(result.explanation);
  $("#header_obj").text(result.title);
}
