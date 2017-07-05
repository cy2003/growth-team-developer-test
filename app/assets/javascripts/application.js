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

  function changeStar(){
    if($(this).attr("src") == "/assets/star-gray.png"){
      $(this).attr("src", "/assets/star-blue.png")
      favoriteGems.push($(this).closest("div").first().text().replace(/\s+/g, ''))
      localStorage.setItem("rubygems", JSON.stringify(favoriteGems))
    }
    else{
      $(this).attr("src", "/assets/star-gray.png")
      favoriteGems = favoriteGems.filter(item => item !== $(this).closest("div").first().text().replace(/\s+/g, ''))
      localStorage.setItem("rubygems", JSON.stringify(favoriteGems))
    }
  }

  $(".star-pic").on("click", changeStar)

  // var arrayGems = localStorage.getItem("rubygems")
  // JQuery.ajax()

  function checkFavorites(){
    var storage = JSON.parse(localStorage.getItem("rubygems"))
    for(var i = 0; i < storage.length; i++){
      if($("div").hasClass(storage[i])){
        $("." + storage[i]).replaceWith(`<a target="_blank" href="https://rubygems.org/gems/${storage[i]}">${storage[i]}</a><img class="star-pic" src="/assets/star-blue.png" alt="star pic"/>`)
      }
    }
  }

  checkFavorites()


  // function checkFavorites(){
  //   var storage = JSON.parse(localStorage.getItem("rubygems"))
  //   var gems = []
  //   $(".ruby-gem a").map(function(){
  //     gems.push($(this).text())
  //   })
  //   for (var i = 0; i < gems.length; i++){
  //     if(storage.includes(gems[i])){
  //       var gemFavorite = gems[i]
  //       var findDiv = $("a:contains("+ gemFavorite + ")")
  //       var findSrc = findDiv.next().attr("src")
  //       var findImgClass = findDiv.next().attr("class")
  //       if(findSrc == "/assets/star-gray.png"){
  //         debugger
  //         $("." + gemFavorite).attr("src", "/assets/star-blue.png")
  //       }
  //     }
  //   }
  // }

})
