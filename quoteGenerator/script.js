$(document).ready(function(){
  getQuote();
  $("#newQuote").on('click', getQuote);
});

function getQuote(){
  //");
//   $.ajax({url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand",
//         success: function(data){
//           $("#quote").append(data[0].content);
//           console.log(data[0].content);
// }         });
    $.ajax({ url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',
    success: function(r) {
      currentQuote = r[0].content;
      currentAuthor = r[0].title;
      $("#quote").animate({opacity: 0}, 500, function() {
        $(this).animate({opacity: 1}, 500);
          $('#quote').html(currentQuote);
        });
        $("#author").animate({opacity: 0}, 500, function() {
          $(this).animate({opacity: 1}, 500);
        $("#author").html("-"+currentAuthor);
})
    }
  });
}
