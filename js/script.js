 $(function() {
    var $win = $(window),
        $fv = $('.fv'),
        $header = $('.header')
        fvHeight = $fv.outerHeight(),
        fixedClass = 'sticky';
  
  $win.on('load scroll',function(){
    var value = $(this).scrollTop();
      // if($win.width()>768)
  
        if ( value > fvHeight) {
          $header.addClass(fixedClass);
        } else {
          $header.removeClass(fixedClass);
        }        
    });



    // humbarger
    $('.burger_btn').on('click',function(){
    $('.body').toggleClass('hidden');
    $('.bar').toggleClass('active');
    $('.gnav').fadeToggle();
  });
    // if('.bar'.hasclass('active')) {
    //   $('body').css('overflow','hidden');
    // } else {
    //   $('body').css('overflow','auto');
      
    // };

    
});