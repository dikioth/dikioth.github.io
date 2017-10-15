$(document).ready(function() {
  let searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=';
  let randomLink = "https://en.wikipedia.org/wiki/Special:Random";
  $("#search").keypress(function(e) {
    if (e.which == 13) {
      var value = $("#search").val();
      searchArticle(value);
    }
  });

  //$("#shuffle").hover(function(){$(this).animate({fontSize:'30px'})});
  $("#shuffle").click(function(){window.open(randomLink)});

  function searchArticle(value) {
    $(".collapsible").html("");
    var articles = [];
    var url = searchUrl + value;

    $.getJSON(url, '&callback=?', function(file) {
      var varname = file[0];
      var titles = file[1];
      var descriptions = file[2];
      var urls = file[3];
      var len = titles.length;

      for (var i = 0; i < len; i++) {
        var article = new Article(titles[i], descriptions[i], urls[i]);
        articles.push(article);
      }
      articles.forEach(function(art) {
        art.show();
      });
    });
  }


});
