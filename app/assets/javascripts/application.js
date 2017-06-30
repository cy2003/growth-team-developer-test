// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

// $(function(){
//   var starImages = [
//     "images/star-blue.png",
//     "images/star-gray.png"
//   ]
//   var star = $(".found-gem").find("img").attr("src")
//
//
// })

$(document).ready(function(){
  $("#star-pic").on("click", function(){
    if("images/star-blue.png"){
      $("#star-pic").attr("src", "path/to/images/star-gray.png")
    }
    else("images/star-gray.png"){
      $("#star-pic").attr("src", "path/to/images/star-blue.png")
    }
  })
})
