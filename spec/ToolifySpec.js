describe('Toolify', function(){
  describe('call to .toolify', function(){
    beforeEach(function() {
      setUpHTMLFixture();
      Toolify.createTooltip($("#check_tooltip"));
    });

    it('should create tooltip', function(){
      expect($('#check_tooltip').attr('data-original-title'))
        .toEqual("sample text");
      expect($('.toolify_tooltip').length).toEqual(1);
    });

    it('should position tooltip as per mousemove', function(){
      obj= {pageY: 30, pageX: 40};
      Toolify.positionTooltip(obj);
      expect($('.toolify_tooltip').css("top")).toEqual("30px");
      expect($('.toolify_tooltip').css("left")).toEqual("40px");
    });

    it('should remove tooltip', function(){
      Toolify.removeTooltip($("#check_tooltip"));
      expect($('.toolify_tooltip').length).toEqual(0);
    });
  });
});
