$(document).ready(function(){
  $('#Content #App').prepend('<h4></h4>'); 
  //
  $(".one h4").append("<dfn>&#9733</dfn>");
  $(".two h4").append("<dfn>&#9733&#9733</dfn>");
  $(".three h4").append("<dfn>&#9733&#9733&#9733</dfn>");
  // 
  $('<b>الحجم</b>').appendTo('#App div p:nth-child(1)');
  $('<b>التقييم</b>').appendTo('#App div p:nth-child(2)');
  // Stores  => المتاجر $('.').html('<button></button>');
  $('<b>التنزيل من متجر </b>').insertAfter( ".Store" );;
  $('.APKPure').html('<button>APKPure</button>');
  $('.GooglePlay').html('<button>Google Play</button>');
  $('.Uptodown').html('<button>Uptodown</button>');
  
  
});

/*
$(function() {
  
}); */
