$(window).resize(function () {
  var h = $(window).height(),
    offsetTop = 200; // Calculate the top offset

  $('#mapCanvas').css('height', (h - offsetTop));
}).resize();

$(function() {

  CartoDbLib.initialize();
  var autocomplete = new google.maps.places.Autocomplete(document.getElementById('search_address'));

  $(':checkbox').click(function(){
    CartoDbLib.doSearch();
  });

  $('#btnSearch').click(function(){
    CartoDbLib.doSearch();
  });

  $('#findMe').click(function(){
    CartoDbLib.findMe();
    return false;
  });

  $('#reset').click(function(){
    $.address.parameter('address','');
    $.address.parameter('radius','');
    $.address.parameter('id','');
    CartoDbLib.initialize();
    return false;
  });

  $("#search_address").keydown(function(e){
      var key =  e.keyCode ? e.keyCode : e.which;
      if(key == 13) {
          $('#btnSearch').click();
          return false;
      }
  });

  $('select').select2();

  var language_data = [{ id: 0, text: 'spanish language emphasized' }, { id: 1, text: 'asl or other assistance for hearing impaired' }];

  var insurance_data = [{ id: 0, text: 'sliding fee scale' }, { id: 1, text: 'private health insurance' }, { id: 2, text: 'military insurance' }, { id: 3, text: 'medicare' }, { id: 4, text: 'medicaid' }];

  $(".js-example-data-array-language").select2({
    data: language_data
  });

  $(".js-example-data-array-insurance").select2({
    data: insurance_data
  });

});