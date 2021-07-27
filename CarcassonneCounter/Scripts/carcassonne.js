    function countTotal() {
      var total = 0;

      $('table td span').each(function(){
        total += parseInt( $(this).html() );
      });
      $('#total').html(total);
    }

    $(document).ready(function(){
      countTotal();

      $('td').on('click', function(e){
        var el = $(this).find('span');
        var old = el.html();

        if (e.shiftKey) {
          var newv = 0 + parseInt(old) + 1;
          el.html(newv);

          if (newv != 0) {
            $(this).css('opacity', '1');
          }
	} else  {
          var newv = 0 + old - 1;
          if (newv > -1) {
            el.html(newv);
          }

          if (newv == 0) {
            $(this).css('opacity', '0.25');
          }
        }
        countTotal();
      });
    });