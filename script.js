var H = moment().format('H')
var timeBlock = $('.timeblock')
for(let i = 0; i < localStorage.length; i++){
    $('.'+localStorage.key(i).trim()).siblings('textarea').val(localStorage.getItem(localStorage.key(i)))
}

$('#currentDay').text(moment().format('MMMM Do YYYY'))
var saveBtn = $('.saveBtn')

$('.saveBtn').click(function(e){
e.preventDefault()
localStorage.setItem($(this).siblings('p').text(), $(this).siblings('textarea').val())
})

$(document).ready(function(){
    for (i = 9; i <= 17; i++) {
      var timeBlock = parseInt($('#'+i).attr('id'))
      var currentTime = parseInt(moment().format('H'));
    
  if (timeBlock < currentTime) {
    $('#'+i).siblings('textarea').addClass('past')
  }
  else if (timeBlock > currentTime) {
    $('#'+i).siblings('textarea').addClass('future')
  }
  else if (timeBlock = currentTime) {
    $('#'+i).siblings('textarea').addClass('present')
  }
  }
  });