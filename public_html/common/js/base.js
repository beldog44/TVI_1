$(function(){
  
  // base
  var win = $(window);
  
  // scroll
  $('a[href^=#]').on('click', function(){
    var speed = 800;
    var href= $(this).attr('href');
    var target = $(href === '#' || href === '' ? 'html' : href);
    var position = target.offset().top;
    if(position <= 100) {
      $('html, body').animate({scrollTop:position}, speed, 'swing');
    } else {
      $('html, body').animate({scrollTop:position-100}, speed, 'swing');
    }
    return false;
  });
  
  function SY() {
		return document.documentElement.scrollTop || document.body.scrollTop;
  }
  
  // pagetop
  var pagetop = $('#pageTop');
  pagetop.css({'opacity':0});
  win.on('load scroll', function(){
    // show hide
    if( SY() > 100 && !pagetop.hasClass('show') ) {
      pagetop.addClass('show').stop().animate({'opacity':1}, 300);
    } else if( SY() <= 100 && floatingNav.hasClass('show') ) {
      pagetop.removeClass('show').stop().animate({'opacity':0}, 300);
    }
  });
  
  // floating globalNav
  var floatingNav = $('#floatingNav'), duation = 300;
  if(floatingNav.length > 0) {
    var cloneItem = $('#header').html();
    floatingNav.append('<div id="floatingInner">' + cloneItem + '</div>');
    win.on('load scroll', function(){
      // show hide
      if( SY() > 100 && !floatingNav.hasClass('show') ) {
        floatingNav.addClass('show').stop().animate({'top':0}, duation);
      } else if( SY() <= 100 && floatingNav.hasClass('show') ) {
        floatingNav.removeClass('show').stop().animate({'top':'-150px'}, duation);
      }
    });
  }
  
  // contact
  var contactTrigger = $('.contactBtn a');
  var contactBlock = $('#contactBlock');
  var nowSY = 0;
  contactTrigger.on('click', function(){
    nowSY = SY();
    if(contactBlock) {
      $('html').addClass('fixed').css({overflow:'hidden'});
      $('body').addClass('fixed').css({top: -nowSY});
      contactBlock.fadeIn(1000, function(){
        $('#contactFrame').addClass('show');
      });
    }
  });
  $('#contactClose').on('click', function(){
    $('#contactFrame').removeClass('show');
    contactBlock.delay(500).fadeOut(500);
    $('body,html').removeClass('fixed').removeAttr('style').animate({scrollTop:nowSY}, 0);
  });
  
  // index
  if(document.getElementById('bodyIndex')) {
    var newsSlider = $('#newsSlide').bxSlider({
      auto: true,
      pause: 4000,
      autoHover: false
    });
    $('#topNews .bx-controls a').on('click', function(){ newsSlider.stopAuto(); newsSlider.startAuto(); });
  }
  
  // solution
  if(document.getElementById('bodySolution')) {
	 
	var slider = $('#checkSlider').bxSlider({
   pager: false,
      auto: true,
      pause: 4000,
      autoHover: false
});

//.tv枠にhover時ストップ
$('.tv').hover((function () { slider.stopAuto(); }),(function () { slider.startAuto(); })

);
	  
	  
  }
  
  // news
  if(document.getElementById('bodyNews')) {
    var newsItem = $('#newsInner .newsList li');
    newsItem.matchHeight();
    $('#newsControl .newsSelect').on({
        'mouseenter': function(){
          $(this).find('ul').stop().slideDown(300);
        },
        'mouseleave': function(){
          $(this).find('ul').stop().slideUp(200);
        }
    });
    $('#newsControl .selectList li').on('click', function(){
      $(this).parent().hide();
      if($(this).hasClass('year')) {
        location.href = $(this).data('linkurl');
      } else {
        var category = $(this).attr('id');
        var crTxt = $(this).html();
        if(category === 'cat-all') {
          newsItem.stop().animate({'opacity':0}, 500, function(){
            newsItem.css({'display':'block'}).stop().animate({'opacity':1}, 500);
            $.fn.matchHeight._apply(newsItem);
          });
        } else {
          newsItem.stop().animate({'opacity':0}, 500, function(){
            newsItem.hide();
            $('#newsInner').find('.'+category).css({'display':'block'}).stop().animate({'opacity':1}, 500);
            $.fn.matchHeight._apply($('#newsInner').find('.'+category));
          });
        }
        $(this).closest('.newsSelect').find('.selectCr span').html(crTxt);
      }
    });
  }
  
  // recruit
  if(document.getElementById('bodyRecruit')) {
    $('.recruitList .accordion').hide();
    $('.recruitList h3').on('click', function(){
      if($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).next('.accordion').stop().slideUp(500);
      } else {
        $(this).addClass('open');
        $(this).next('.accordion').stop().slideDown(500);
      }
    });
  }
    
});

jQuery.event.add(window,'load',function() {
  $('#loading').delay(500).fadeOut(500, function(){ $(this).remove(); });
  if(document.getElementById('bodyIndex')) {
    $('#mainCatch').hide();
    $('#mainAnimation').delay(1500).animate({'opacity':0},3000, function(){ $(this).remove();  });
	$('#mainCatch').delay(1500).fadeIn(3000);
  }
});