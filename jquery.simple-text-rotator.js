/* ===========================================================
 * jquery-simple-text-rotator.js v1
 * ===========================================================
 * Copyright 2013 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * A very simple and light weight jQuery plugin that 
 * allows you to rotate multiple text without changing 
 * the layout
 * https://github.com/peachananr/simple-text-rotator
 *
 * ========================================================== */

!function($){
  
  var defaults = {
    animation: "dissolve",
    separator: ",",
    speed: 2000,
    repeat: true,
    text: null,
    onFinish: function () { }
  };
  
  $.fx.step.textShadowBlur = function(fx) {
    $(fx.elem).prop('textShadowBlur', fx.now).css({textShadow: '0 0 ' + Math.floor(fx.now) + 'px black'});
  };
  
  $.fn.textrotator = function(options){
    var settings = $.extend({}, defaults, options);
    
    return this.each(function(){
      var el = $(this)
      var array = [];

      var text = settings.text || el.text();

      $.each(text.split(settings.separator), function(key, value) { 
        array.push(value); 
      });
      el.text(array[1]);
      
      var index;
      var checkIndexOverflow = function () {
          index = $.inArray(el.text(), array)
          if ((index + 1) == array.length) {
              index = -1;

              if (settings.repeat == false) {
                  clearInterval(timerId);
                  settings.onFinish();
                  return false;
              }
          }
          return true;
      };

      // animation option
      var rotate = function() {
        switch (settings.animation) { 
          
          case 'flipUp':
            if(el.find(".back").length > 0) {
              el.html(el.find(".back").html())
            }
          
            var initial = el.text();
            checkIndexOverflow();
            
            el.html("");
            $("<span class='front'>" + initial + "</span>").appendTo(el);
            $("<span class='back'>" + array[index + 1] + "</span>").appendTo(el);
            el.wrapInner("<span class='rotating' />").find(".rotating").hide().addClass("flip up").show().css({
              "-webkit-transform": " rotateX(-180deg)",
              "-moz-transform": " rotateX(-180deg)",
              "-o-transform": " rotateX(-180deg)",
              "transform": " rotateX(-180deg)"
            })
            
          break;
          
        }
      };

      var timerId = setInterval(rotate, settings.speed);
    });
  }
  
}(window.jQuery);