var url = "https://api.nasa.gov/planetary/apod?api_key=" + key;

$.ajax({
  url: url,
  success: handleResult
});


function handleResult(result){
  var url;

  if(result.media_type != "image") {
    $(".card__title__text").text(result.title);
    url = result.url;
  } else {
    $(".card__title__text").text("TELESCOPE");
    url = grabRandomImage();
  }

  loadImage(url);
}


function grabRandomImage() {
  var randomNumber = Math.floor(Math.random() * 12) + 1;
  var randomFile =  "images/" + randomNumber.toString() + ".jpg";

  return randomFile
}


function loadImage(url) {
  $(".card__image").attr("src", url);
  $('.card__image').load(function(){
    $(".card").addClass("card--shown");
  });

  $( ".card__image" ).click(function() {
    $('.card__title').slideUp(250, function () {
      $('.card__image').addClass('card__image--zoom');
      $('.fullscreen-background').addClass('fullscreen-background--shown');
    });
  });
}
