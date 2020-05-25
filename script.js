$(document).ready(function(){
  var input = document.querySelector('input');
  var removed = document.querySelectorAll('.removed');
  var name = prompt('What is your name:')
  alert('Hi '+name+'!'+' What do you want to do?');
  $('input').keypress(function(event){
    if (event.which === 13) {
      let capitalized = input.value.charAt(0).toUpperCase() + input.value.slice(1).toLowerCase();
      $('ul').append("<li><span class=removed><img src='delete-icon.png'></span> "+capitalized+"</li>");
    }
  })
  // What occurs when you click on the cross symbol
  $('input').css('display','none');
  $('#add img').click(function () {
    $('input').slideToggle(200,'linear');
    input.value = '';
  })
  // TODO list
  // when you mouseenter
  $('ul').on('mouseenter','li',function(){
    $(this).addClass('completed');
    $(this).children().fadeIn(100,'swing');
    })
    // when you mouseleave
    $('ul').on('mouseleave','li',function(){
      $(this).removeClass('completed');
      $(this).children().fadeOut(100,'swing');
    })

  // what occurs onces you click on the remove/delete symbol
  $('ul').on('click','.removed',function(evt){
    evt.stopPropagation();
    $(this).parent().remove();
  })
})
