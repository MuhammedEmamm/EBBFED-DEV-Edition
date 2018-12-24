function S (){
var d = new Date();
var todaysDate = d.getDate();
var target = $('#calendar .week .day .date');

target.each(function(){
  var day = $(this).html();
  if (todaysDate == day) {
    $(this).addClass('today');
  }
  if (todaysDate < day){
    $(this).parent().addClass('future');
  }
  if (todaysDate >= day){
    $(this).parent().addClass('past')
  }
});

// handle clicks on days

$('.day').click(function(){
  if ($(this).hasClass('future')){
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html("<h2>Ne legyél telhetetlen . </h2> <p>Ez a nap még nem elérhető!</p>");
  }
  if ($(this).hasClass('past')){
    var content = $(this).children('.surprise').html();
    $('#modal').addClass('active');
    $('#modal .wrapper .content .box').html('');
    $('#modal .wrapper .content .box').html(content);
  }
})

// close modal

$('.close').click(function(){
  var ultimateParent = $(this).parent().parent().parent();
  ultimateParent.addClass('moveOut');
  setTimeout(function(){
    ultimateParent.removeClass('moveOut').removeClass('active');
  },250);
})

// snow effect customizations

// $(document).snowfall({flakeCount : 100,collection : '.collectonme',  maxSpeed : 10});
}