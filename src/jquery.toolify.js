Toolify = {
  createTooltip: function(element){
    var title = $(element).attr('data-original-title');
    $(element).attr('tipText', title).removeAttr('data-original-title');
    $('<p class="toolify_tooltip"></p>').html(title).appendTo('body')
    .show();
  },
  positionTooltip: function(event){
    $('.toolify_tooltip').css({ top: event.pageY, left: event.pageX })
  },
  removeTooltip: function(element){
    $(element).attr('data-original-title', $(element).attr('tipText'));
    $('.toolify_tooltip').remove();
  }
}

jQuery.fn.toolify = function () {
  $(this).hover(function (){
    Toolify.createTooltip(this);
  }, function() {
    Toolify.removeTooltip(this);
  }).mousemove(function(e) {
    Toolify.positionTooltip(e);
  });
};

