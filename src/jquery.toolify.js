jQuery.fn.toolify = function () {
  $(this).hover(function (){
    var title = $(this).attr('data-original-title');
    $(this).data('tipText', title).removeAttr('data-original-title');
    $('<p class="toolify_tooltip"></p>').html(title).appendTo('body').show();
  }, function() {
  // Hover out code
    $(this).attr('data-original-title', $(this).data('tipText'));
    $('.toolify_tooltip').remove();
  }).mousemove(function(e) {
    var mousex = e.pageX; //Get X coordinates
    var mousey = e.pageY; //Get Y coordinates
    $('.toolify_tooltip').css({ top: mousey, left: mousex })
  });
};