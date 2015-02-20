
$(document).ready(function(){


$(function() {


  $("#search-form").submit(function(event) {
    event.preventDefault();
    $("#search-results").empty();
    var searchTerm = $('#query').val();
    search(searchTerm)
  });


  function search(term) {

    var query = {
      key: "AIzaSyCdfadHd-MS-pAihYaStxo9-g6k9EMeYb0",
      part: "snippet",
      type:'video',
      q: term
    }

    $.getJSON("https://www.googleapis.com/youtube/v3/search", query, function(data) {
      var resultsArray = data.items;
      var arrayLength = resultsArray.length;
      var url='';
      var html='https://www.youtube.com/watch?v=';
    // console.log(resultsArray[0].snippet);

       $.each(resultsArray, function(index,value){
      url=html+resultsArray[index].id.videoId;
      $('#search-results').append('<a href='+url+'><img src='+resultsArray[index].snippet.thumbnails.high.url+'></a>')
      console.log(url);
    })


 //    html+=resultsArray[0].id.videoId;
  //   console.log(html);
    }

  )};

});

});