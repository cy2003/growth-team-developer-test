// This is a manifest file that"ll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin"s vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It"s not advisable to add code directly here, but if you do, it"ll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .


$(document).ready(function(){

  var favorites = []

  function changeStar(){
    if($(this).attr("src") == "/assets/star-gray.png"){
      $(this).attr("src", "/assets/star-blue.png")
      favorites.push($(this).closest("div").first().text().replace(/\s+/g, ''))
      localStorage.setItem("rubygems", JSON.stringify(favorites))
    }
    else{
      $(this).attr("src", "/assets/star-gray.png")
      favorites = favorites.filter(item => item !== $(this).closest("div").first().text().replace(/\s+/g, ''))
      localStorage.setItem("rubygems", JSON.stringify(favorites))
    }
  }

  $(".star-pic").on("click", changeStar)

})
