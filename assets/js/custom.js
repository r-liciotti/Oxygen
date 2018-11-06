// Funzione per il collapse della navbar
 $(document).ready(function() {
 	$(window).scroll(function() {
   	if($(document).scrollTop() > 40) {
     	$('#nav').addClass('navbar-collapse');
     }
     else {
     $('#nav').removeClass('navbar-collapse');
     }
   });
 });

 if (!Modernizr.svg) {
   $("#video img").attr("src", "images/anyma.png");
 }

 
