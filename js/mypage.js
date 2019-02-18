$(function() {
  let flag = false;
  let k = $(window).height();
  $('.next').click(function(event) {
    $.fn.fullpage.moveSectionDown();
  });
  $('#fullpage').fullpage({
    navigation: true,
    scrollingspeed: 1200,
    keyboardScrolling: true,
    onLeave: function(index, nextIndex, direction) {
      $('.next').fadeOut();
      if (flag === false && nextIndex === 2) {
        if (index === 1 && nextIndex === 2) {

          $('.search').show().animate({
            'right': 370
          }, 1500, 'easeOutBack', function() {
            $('.word').animate({
              'opacity': 1
            }, 500, function() {
              $('.search').hide();
              $('.search-word').show().animate({
                'height': 30,
                'right': 250,
                'bottom': 452
              }, 1000, function() {
                flag = true;
              });
              $('.sofas').show().animate({
                'height': 218
              }, 1000, 'easeInOutQuart');
              $('.words-02').animate({
                'opacity': 1
              }, 500, function() {
                $('.next').fadeIn();
              })
            })
          })
        }
      };


      if (index === 2 && nextIndex === 3) {
        $('.sofa2').show().animate({
          'bottom': -(k - 250),
          'width': 207,
          'left': 260
        }, 2000, function() {
          $('.img-01-a').animate({
            'opacity': 1
          }, 500, function() {
            $('.btn-01-a').animate({
              'opacity': 1
            }, 500, function() {
              $('.next').fadeIn();
            })
          })
        })
        $('.cover').show();
      };


      if (index === 3 && nextIndex === 4) {
        $('.sofa2').hide();
        $('.t1f').show().animate({
          'bottom': -((k - 250)), //'bottom': -((k - 250) + 50),
          'left': 260
        }, 2000, function() {
          $(this).hide();
          $('.car-img').show();
          $('.car').animate({
            'left': '150%'
          }, 3000, 'easeInElastic', function() {
            $('.note').show();
            $('.note-img,.word-04-a').animate({
              'opacity': 1
            }, 1000, function() {
              $('.next').fadeIn();
            })
          })
        })
      };


      if (index === 4 && nextIndex === 5) {
        $('.hand-05').animate({
          'bottom': 0
        }, 2000, function() {
          $('.mouse-05-a').animate({
            'opacity': 1
          });
          $('.t1f-05').show().animate({
            'bottom': 70
          }, 1000, function() {
            $('.order-05').animate({
              'bottom': 390
            }, function() {
              $('.words-05').addClass('words-05-a');
              $('.next').fadeIn();

            })
          })
        })
      };


      if (index === 5 && nextIndex === 6) {
        $('.t1f-05').animate({
          'bottom': -(k - 500),
          'left': '40%',
          'width': 65
        }, 1500, function() {
          $('.t1f-05').hide();
        })
        $('.box-06').animate({
          'left': '38%'
        }, 1500, function() {
          $(this).animate({
            'bottom': 40
          }, 500, function() {
            $(this).hide();
            $('.section6').animate({
              'backgroundPositionX': '100%'
            }, 4000, function() {
              $('.boy').animate({
                'height': 305,
                'bottom': 116
              }, 1000, function() {
                $(this).animate({
                  'right': 500
                }, 500, function() {
                  $('.door').animate({
                    'opacity': 1
                  }, 200, function() {
                    $('.girl').show().animate({
                      'right': 350,
                      'height': 306
                    }, 500, function() {
                      $('.pop-07').show();
                      $('.next').fadeIn();
                    })
                  })
                })
              })
            })

            $('.words-06-a').show().animate({
              'left': '30%'
            }, 2000, 'easeOutElastic');

            $('.pop-06').show();

          })
        })
      };


      if (index === 6 && nextIndex === 7) {
        setTimeout(function() {
          $('.star').animate({
            'width': 120
          }, 500, function() {
            $('.good-07').show();
            $('.next').fadeIn();
          })
        }, 2000)
      }

      if (index === 7 && nextIndex === 8) {
        $('.beginShoping').hover(function() {
          $('.btn-08-a').toggle();
        });

        $(document).mousemove(function(e) {
          var x = e.pageX - $('.hand-08').width() / 2;
          var y = e.pageY + 10;
          var minY = k - 449;
          if (y < minY) {
            y = minY;
          }

          $('.hand-08').css({
            'left': x,
            'top': y
          });
        });
        $('.next').fadeIn();
        $('.again').click(function(e) {
          $.fn.fullpage.moveTo(1);
          $('img,.move').attr('style', '');
          flag = false;
        })

      }










    }
  });
})
