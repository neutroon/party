$(function () {
  // navBar --------------------------------------------------------------------------------------
  $("#openNav").click(function () {
    let navWidt = 260;
    $(this).css("left", navWidt + 16);
    $("nav").width(260);
    $('header .content').css({
        marginLeft: navWidt
    })
  });
  $("nav #close").click(function () {
    $("#openNav").css("left", 16);
    $("nav").width(0);
    $('header .content').css({
        marginLeft: 0
    })
  });


  $('nav ul li').click(function () {

    let secId = $(this).attr('data-secId')
    let toSection = $(secId).offset().top

    $('html, body').animate({
        scrollTop: toSection
    },1000)
    
   })


  // ----------------------------------------------------------------------------------------

  // signers section -------------------------------------------------------------------------
  $("#singers .singer > :nth-child(1)").click(function () {
    $(this).next().slideToggle(500);
    $("#singers .singer > :nth-child(1)").not(this).next().slideUp(500);
  });
  // ----------------------------------------------------------------------------------------

  // counter section -------------------------------------------------------------------------

  //   $('#counter div span')
  let daysInWeek = [
    "Sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  function timer() {
    let endTime = new Date("10 sep 2023 11:59:00 pm");
    endTime = Date.parse(endTime) / 1000;

    let now = new Date();
    now = Date.parse(now) / 1000;

    let timeLeft = endTime - now;

    let days = Math.floor(timeLeft / 86400);
    let hours = Math.floor((timeLeft - days * 86400) / 3600);
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
      hours = "0" + hours;
    }
    if (minutes < "10") {
      minutes = "0" + minutes;
    }
    if (seconds < "10") {
      seconds = "0" + seconds;
    }
    $("#counter .row span").eq(0).html(days);
    $("#counter .row span").eq(1).html(hours);
    $("#counter .row span").eq(2).html(minutes);
    $("#counter .row span").eq(3).html(seconds);
  }
  setInterval(timer, 1000);
  // ----------------------------------------------------------------------------------------

  // contact section -------------------------------------------------------------------------
  $('#contact textarea').on('input', function () { 


        let charCount = $('#contact textarea').val().length;
        if(charCount <= 100 ){
            $('#contact textarea').next('h5').find('span').html(100 - charCount)
            document.querySelector('#contact textarea + h5 >span').nextSibling.nodeValue = ' character remaining'

        }else{
            $('#contact textarea').next('h5').find('span').html('your available character finished')
            document.querySelector('#contact textarea + h5 >span').nextSibling.nodeValue = ''
        }

   })
  // ----------------------------------------------------------------------------------------



});
