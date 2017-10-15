class Article {
  constructor(title, description, url) {
    this.title = title;
    this.description = description;
    this.url = url;

  }
  show() {
    let txt = '<li class="" style="opacity: 1;">';
    txt+= '<a href='+ this.url +'>'+ this.url+' </a>';
    txt += '<p class = "title collapsible-header">' + this.title + "</p>";
    txt += '<p class = "description collapsible-body white-text">' + this.description + "</p>";
    txt += '</li>'
    $("#arts").append(txt);
    $("li").hover(
      function() {
        $(this).addClass('active');
        $(this).children(".description").css("display", "block");
      },
      function() {
        $(this).removeClass('active');
        $(this).children(".description").css("display", "none");
      }
    );
  }

}
