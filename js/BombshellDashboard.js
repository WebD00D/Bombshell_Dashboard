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
    var StateCode = $(this).attr("data-state");
    var ZipCode = $(this).attr("data-zip");
    var City = $(this).attr("data-city");
    var Street = $(this).attr("data-street");

    $("#LocationName").text(theText);
    $("#txtLocationName").val(theText);
    $("#txtLocationPhone").val(Phone);
    $("#txtLocationStreet").val(Street);
    $("#txtLocationState").val(StateCode);
    $("#txtLocationCity").val(City)
    $("#txtLocationZip").val(ZipCode);
    $("#btnUpdateLocation").attr("data-whoami",LocationID);
    $("#LocationEditWindow").openModal();
  })

  $("#serviceUL").delegate(".collection-item","mouseover",function(){
    $(this).css("cursor","pointer");
  })
  $("#serviceUL").delegate(".collection-item","click",function(){
    $(".collection-item").removeClass("active");
    $(this).addClass("active");
    var Service = $(this).attr("data-serviceName");
    var ServiceType = $(this).attr("data-serviceType");
    var ServiceDescription = $(this).attr("data-serviceDescription");
    var ServiceID = $(this).attr("data-ServiceID");

    $("#txtUpdateServiceDescription").val(ServiceDescription);
    $("#txtUpdateServiceName").val(Service);

    $("#dlServiceType option").each(function () {
        if ($(this).text() == ServiceType) {
            $(this).attr("selected", "selected");
        }
    });
    $("#btnUpdateService").attr("data-whoami",ServiceID);
    $("#ServiceEditWindow").openModal();

  })

  $("#btnAddService").click(function(){
    var ServiceName = $("#txtServiceName").val();
    var ServiceType = $("#dlServiceType option:selected").text();
    var ServiceDescription = $("#txtServiceDescription").val();

    var Service = Parse.Object.extend("Services");
    var service = new Service();
    service.set("Service",ServiceName);
    service.set("ServiceType",ServiceType);
    service.set("Description",ServiceDescription);

    service.save(null, {
      success: function(service) {
        // Execute any logic that should take place after the object is saved.
        swal({
          confirmButtonColor: "#009688",
          title: "Save Successful!",
          text: "Service has been updated and saved.",
          type: "success",
          showCancelButton:false,
          confirmButtonColor:"#e91e63",
          confirmButtonText:"Cool",
          closeOnConfirm: false
        },
        function(){
          window.location.reload();
        });
      },
      error: function(service, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        swal("Uh oh!", error.message, "error")
      }
    });

  })

  $("#btnUpdateService").click(function(){

    var serviceID = $(this).attr("data-whoami");
    var Service = Parse.Object.extend("Services");
    var updatedService = new Service();
        updatedService.id = serviceID;
        updatedService.set("Service", $("#txtUpdateServiceName").val());
        updatedService.set("ServiceType",  $("#dlServiceType option:selected").text());
        updatedService.set("Description",$("#txtUpdateServiceDescription").val());
        updatedService.save();
        swal({
          confirmButtonColor: "#009688",
          title: "Save Successful!",
          text: "Service has been updated and saved.",
          type: "success",
          showCancelButton:false,
          confirmButtonColor:"#e91e63",
          confirmButtonText:"Cool",
          closeOnConfirm: false
        },
        function(){
          window.location.reload();
        });


  })

  $("#btnUpdateLocation").click(function(){
    var location = $(this).attr("data-whoami");
    var Locations = Parse.Object.extend("Locations");
    var updatedLocation = new Locations();
        updatedLocation.id = location;
        updatedLocation.set("Name",$("#txtLocationName").val());
        updatedLocation.set("LocationCode",$("#txtLocationState").val() + '_' + $("#txtLocationName").val());
        updatedLocation.set("Phone",$("#txtLocationPhone").val());
        updatedLocation.set("Street",$("#txtLocationStreet").val());
        updatedLocation.set("City",$("#txtLocationCity").val());
        updatedLocation.set("StateCode",$("#txtLocationState").val());
        updatedLocation.set("Zipcode",$("#txtLocationZip").val());
        updatedLocation.save();
        swal({
          confirmButtonColor: "#009688",
          title: "Save Successful!",
          text: "Location has been updated and saved.",
          type: "success",
          showCancelButton:false,
          confirmButtonColor:"#e91e63",
          confirmButtonText:"Cool",
          closeOnConfirm: false
        },
        function(){
          window.location.reload();
        });


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
    locations.set("City",locationCity);
    locations.set("Zipcode",locationZipcode);
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

  $(".addService").click(function(e){
    e.preventDefault();
    var theServiceType = $(this).attr("data-service");
    alert(theServiceType);
  })












}) // end doc ready
