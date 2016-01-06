

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
    $("#apod_vid_id").css("display", "none");
    $("#image_obj").attr("src", result.url);
  }

  //$("#reqObject").text(url);
  $("#returnObject").text(JSON.stringify(result, null, 4));
  $("#apod_explaination").text(result.explanation);
  $("#header_obj").text(result.title);
}
