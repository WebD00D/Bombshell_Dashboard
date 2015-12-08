$(document).ready(function(){
  Parse.initialize("6lwXuEam4Zl0heDrMSPQtRx2xcaLM792aRNjw1gF", "hvatZD2xQvA6mmL77SDQsc9T6kqrqLo8PbUmDswC");

  $(".button-collapse").sideNav();
  $('.parallax').parallax();
  $('select').material_select();


  $("#locationUL").delegate(".collection-item","mouseover",function(){
    $(this).css("cursor","pointer");
  })
  $("#locationUL").delegate(".collection-item","click",function(){
    $(".collection-item").removeClass("active");
    $(this).addClass("active");
    var theText = $(this).text();
    var LocationID = $(this).attr("data-locationID");
    var Phone = $(this).attr("data-phone");
    var StateCode = $(this).attr("data-stateCode");
    var Street = $(this).attr("data-street");
    var CityStateZip = $(this).attr("data-citystatezip");

    $("#LocationName").text(theText);
    $("#txtLocationName").val(theText);
    $("#txtLocationPhone").val(Phone);
    $("#txtLocationStreet").val(Street);
    $("#txtLocationState").val(StateCode);
    $("#LocationEditWindow").openModal();
  })






  // ADD LOCATION JS

  $("#btnAddLocation").click(function(){
    var locationName = $("#txtLocationName").val();
    var locationPhone = $("#txtLocationPhone").val();
    var locationStreet = $("#txtLocationStreet").val();
    var locationCity = $("#txtLocationCity").val();
    var locationStateAbbr = $("#txtLocationState").val();
    var locationZipcode = $("#txtLocationZip").val();


    var Locations = Parse.Object.extend("Locations");
    var locations = new Locations();
    locations.set("Name",locationName);
    locations.set("LocationCode",locationStateAbbr + '_' + locationName);
    locations.set("Phone",locationPhone);
    locations.set("Street",locationStreet);
    locations.set("CityStateZip",locationCity + ', ' + locationStateAbbr + ' ' + locationZipcode);
    locations.set("StateCode",locationStateAbbr);

    locations.save(null, {
      success: function(locations) {
        // Execute any logic that should take place after the object is saved.
        swal("Save Successful!", "The location has been added and saved.", "success")
      },
      error: function(locations, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        swal("Uh oh!", error.message, "error")
      }
    });




  })









  // END LOCATION JS



})
