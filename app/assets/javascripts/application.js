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

  var favoriteGems = JSON.parse(localStorage.getItem("rubygems")) || []

  function checkFavorites(){
    var storage = JSON.parse(localStorage.getItem("rubygems"))
    for(var i = 0; i < storage.length; i++){
      if($("div").hasClass(storage[i])){
        $("." + storage[i]).replaceWith('<div class="' +storage[i]+ '"><a target="_blank" href="https://rubygems.org/gems/'+storage[i]+'">' +storage[i]+ '</a><img class="star-pic" src="/assets/star-blue.png" alt="star pic"/></div>')
      }
    }
  }

  checkFavorites()

  function changeStar(){
    var targetItem = $(this).closest("div").first().text().replace(/\s+/g, '')
    if($(this).attr("src") == "/assets/star-gray.png"){
      $(this).attr("src", "/assets/star-blue.png")
      favoriteGems.push(targetItem)
      localStorage.setItem("rubygems", JSON.stringify(favoriteGems))
    }
    else if ($(this).attr("src") == "/assets/star-blue.png"){
      $(this).attr("src", "/assets/star-gray.png")
      favoriteGems = favoriteGems.filter(item => item !== targetItem)
      localStorage.setItem("rubygems", JSON.stringify(favoriteGems))
      $("#result").remove("."+ targetItem)
      location.reload()
    }
  }


  $(".star-pic").on("click", changeStar)

})
