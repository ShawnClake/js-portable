var scrollMoveOld = 0;
var originalTop = 0;
var element = '#sidebar';

$( window ).load(function() {
    originalTop = parseInt($(element).css('top'));
});

$(window).scroll(function() {

    var currentScroll = $(window).scrollTop();

    var scrollDiff = scrollMoveOld - currentScroll;

    var newHeight = parseInt($(element).css('top')) + scrollDiff;

    if(newHeight < 0)
      newHeight = 0;

    if(newHeight > originalTop)
      newHeight = originalTop;

    if(scrollDiff < 0 || currentScroll <= originalTop)
      $(element).css('top', newHeight);

    scrollMoveOld = $(window).scrollTop();
});
