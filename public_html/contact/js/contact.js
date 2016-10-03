$(function(){
  
  // contact
  if(document.getElementById('bodyContact')) {
    /*var inputreq = $('input:required');
    inputreq.each(function() {
      var $this = $(this);
      var flg = 0;
      //changeColor($this);
      $this.blur(function(){
        changeColor($this);
      });
      $this.change(function(){
        inputreq.each(function() {
          if($(this).val()) {
            flg = 1;
          } else {
            flg = 0;
            return false;
          }
        });
        if(flg > 0){
          $('#submitBtn button').prop("disabled", false);
        } else {
          $('#submitBtn button').prop("disabled", true);
        }
      });
      function changeColor(element) { 
        var backgroundColor;
        if (element.val()) { 
          backgroundColor = '#ffffff';
        } else {
          backgroundColor = '#f9eaea';
        }
        element.css({backgroundColor: backgroundColor});
      }
    });*/
  }
  
  // thanks
  if(document.getElementById('bodyThanks')) {
    var nowSY = 0;
    $('#closeBtn').on('click', function(){
      nowSY = $('body', parent.document).css('top');
      nowSY = nowSY.replace('-', '');
      $('#contactFrame', parent.document).removeClass('show');
      $('#contactBlock', parent.document).delay(500).fadeOut(500);
      $('body,html', parent.document).removeClass('fixed').removeAttr('style').animate({scrollTop: nowSY}, 0);
    });
  }
    
});