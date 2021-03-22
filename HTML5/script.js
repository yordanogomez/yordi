var btnMenu = document.getElementById('btn-menu');
var nav = document.getElementById('nav');

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('mostrar')
})
$(document).ready(function(){
    $('#icon').click(function(){
      $('ul').toggleClass('show');
    });
  });


  // JavaScript Document
 $(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});
