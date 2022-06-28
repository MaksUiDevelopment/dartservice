$(function () {

   var header = $("#header"),
      introH = $("#intro").innerHeight(),
      scrollOffset = $(window).scrollTop();


   /* Fixed Header */
   /* Collapse */
   $("[data-collapse]").on("click", function (event) {
      event.preventDefault();

      var $this = $(this),
         blockId = $this.data('collapse');

      $this.toggleClass("active");
   });

});