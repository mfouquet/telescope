var url = "https://api.nasa.gov/planetary/apod?api_key=" + key;
var title_link = $(".card__title__link").first();
var title_text = $(".card__title__text").first();
var cardImage = $(".card__image").first();
var cardTitle = $(".card__title").first();
var fullscreenBg = $('.fullscreen-background').first();


$.ajax({
  url: url,
  success: handleResult
});


function handleResult(result){
  var url;

  if(result.media_type != "image") {
    title_link.show().text(result.title);
    url = result.url;
  } else {
    title_text.show().text("TELESCOPE");
    url = grabRandomImage();
  }

  loadImage(url);
}


function grabRandomImage() {
  var randomNumber = Math.floor(Math.random() * 11) + 1;
  var randomFile =  "images/" + randomNumber.toString() + ".jpg";

  return randomFile
}


function loadImage(url) {
  cardImage.attr("src", url);
  cardImage.load(function(){
    $(".card").addClass("card--shown");
  });



  cardImage.click(function() {
    if (cardTitle.is(':hidden')) {
      fullscreenBg.one('animationend', function(e) {
        cardImage.removeClass('card__image--zoom-out');
        fullscreenBg.removeClass('fullscreen-background--hidden');
        cardImage.removeClass('card__image--zoom-in');
        fullscreenBg.removeClass('fullscreen-background--shown');
        cardTitle.slideDown(250);
      });
      cardImage.addClass('card__image--zoom-out');
      fullscreenBg.addClass('fullscreen-background--hidden');

    } else {
      fullscreenBg.one('animationend', function(e) {
        cardImage.removeClass('card__image--zoom-out');
        fullscreenBg.removeClass('fullscreen-background--hidden');
      });

      cardTitle.slideUp(250, function () {
        cardImage.addClass('card__image--zoom-in');
        fullscreenBg.addClass('fullscreen-background--shown');
      });
    }
  });
}
