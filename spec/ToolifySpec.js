describe('Toolify', function(){
  describe('call to .toolify', function(){
    beforeEach(function() {
      setUpHTMLFixture();
    });
    it('should show paragraph on hover in', function(){
      $("#check_tooltip").toolify();
      $("#check_tooltip").trigger("hover");
      // expect($('.toolify_tooltip').toBe("sample text"));
      expect($('.toolify_tooltip')).toHaveText("sample text");
    });
    it('should remove paragraph on hover out', function(){
      
    });
    it('should fill paragraph with original-title', function(){
      
    });
  });
});
