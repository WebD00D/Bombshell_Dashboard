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
    var Booking = $(this).attr("data-booking");
    var Giftcard = $(this).attr("data-giftcard");

    $("#LocationName").text(theText);
    $("#txtLocationName").val(theText);
    $("#txtLocationPhone").val(Phone);
    $("#txtLocationStreet").val(Street);
    $("#txtLocationState").val(StateCode);
    $("#txtLocationCity").val(City)
    $("#txtLocationZip").val(ZipCode);
    $("#txtBookingLink").val(Booking);
    $("#txtGiftCardLink").val(Giftcard);

    $("#btnUpdateLocation").attr("data-whoami",LocationID);
    $("#LocationEditWindow").openModal();
  })


  $("#btnAddCareer").click(function(){
    var Position = $("#txtPositionTitle").val();
    var JobLocation = $("#txtPositionLocation").val();


    var Careers = Parse.Object.extend("Careers");
    var career = new Careers();
    career.set("Title",Position);
    career.set("Location",JobLocation);

    career.save(null, {
      success: function(career) {
        // Execute any logic that should take place after the object is saved.
        swal({
          confirmButtonColor: "#009688",
          title: "Save Successful!",
          text: "Position has been successfully added.",
          type: "success",
          showCancelButton:false,
          confirmButtonColor:"#e91e63",
          confirmButtonText:"Cool",
          closeOnConfirm: true
        });
      },
      error: function(career, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        swal("Uh oh!", error.message, "error")
      }
    });
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
  $("#locationULL").delegate(".collection-item","click",function(){
    $(".collection-item").removeClass("active");
    $(this).addClass("active");
    var Service = $(this).attr("data-serviceName");
    var ServiceDescription = $(this).attr("data-serviceDescription");
    var ServiceID = $(this).attr("data-ServiceID");

    $("#txtUpdateServiceDescription").val(ServiceDescription);
    $("#txtUpdateServiceName").val(Service);
    $("#btnDeleteSpecial").attr("data-whoami",ServiceID);
      $("#btnUpdateSpecial").attr("data-whoami",ServiceID);
    $("#SpeciallocationName").text($(this).attr("data-name"));
    $("#ServiceEditWindow").openModal();

  })

  $("#btnDeleteSpecial").click(function(){
      var specialID = $(this).attr("data-whoami");
      var Specials = Parse.Object.extend("Specials");
      var updatedService = new Specials();
      updatedService.id = specialID;
      updatedService.destroy({
        success: function(updatedService) {
    // The object was deleted from the Parse Cloud.
    swal({
      confirmButtonColor: "#009688",
      title: "Delete Successful!",
      text: "Special has been deleted.",
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
    error: function(updatedService, error) {
    // The delete failed.
    // error is a Parse.Error with an error code and message.
  }
  });
  })

  $("#btnUpdateSpecial").click(function(){
    var who = $(this).attr("data-whoami");
    var specialID = $(this).attr("data-whoami");
    var Specials = Parse.Object.extend("Specials");
    var updatedService = new Specials();
        updatedService.id = specialID;
        updatedService.set("Special", $("#txtUpdateServiceName").val());
        updatedService.set("Description",$("#txtUpdateServiceDescription").val());
        updatedService.save();
        swal({
          confirmButtonColor: "#009688",
          title: "Save Successful!",
          text: "Special has been updated and saved.",
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
        updatedLocation.set("bookingLink",$("#txtBookingLink").val());
        updatedLocation.set("giftcardLink",$("#txtGiftCardLink").val());
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
    var giftCardLink = $("#txtGiftCardLink").val();
    var bookingLink = $("#txtBookingLink").val();


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
    locations.set("bookingLink",bookingLink);
    locations.set("giftcardLink",giftCardLink);

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
    $("#AddServiceName").text(theServiceType);
    //load Services by type.
    var Service = Parse.Object.extend("Services")
    var query = new Parse.Query(Service);
      query.equalTo("ServiceType",theServiceType);
      query.find({
        success: function(results) {
          $("#dlServiceName").empty();
          // Do something with the returned Parse.Object values
          for (var i = 0; i < results.length; i++) {
            var object = results[i];
              var listItem = "<option value='"+ object.id +"'>"+ object.get('Service') +"</option>"
              $(listItem).appendTo("#dlServiceName");

          }
          var disabledOption = "<option value='zzz' disabled selected>Select service </option>"
          $(disabledOption).prependTo("#dlServiceName");
        },
        error: function(error) {
          alert("Error: " + error.code + " " + error.message);
        }
      });
    $("#ServiceAddWindow").openModal();

  })

  $("#dlServiceName").change(function(){
    var selectedService = $(this).val();
    $("#btnAddServicetoLocation").attr("data-selectedService",selectedService);
  })

  $("#btnAddServicetoLocation").click(function(){
    var selectedServiceOption = $("#dlServiceName option:selected").val();
    if (selectedServiceOption === 'zzz'){
      $("#btnAddServicetoLocation").removeClass("pink").addClass("red").text("Invalid Selection");
      return;
    } else {
      $("#btnAddServicetoLocation").removeClass("red").addClass("pink").text("Save");
      var selectedService = $(this).attr("data-selectedService");
      //check to see if this service has already been added at this location.
      var selectedLocation = $("#BombshellLocation").attr("data-location");

      // POINTER
      var Services = Parse.Object.extend("Services");
      var services = new Services();
      services.id = selectedService;

      var checkService = Parse.Object.extend("ServicesOffered")
      var checkServiceQuery = new Parse.Query(checkService);
          checkServiceQuery.equalTo("Location",selectedLocation);
          checkServiceQuery.equalTo("ServiceID",services);
          checkServiceQuery.find({
            success: function(results) {
            if (results.length != 0){
              swal({
                confirmButtonColor: "#009688",
                title: "Duplicate found!",
                text: "The selected service is already on the menu at this location.",
                type: "error",
                showCancelButton:false,
                confirmButtonColor:"#808080",
                confirmButtonText:"OK",
                closeOnConfirm: true
              })
            } else {

              //check Price
              if ( $.trim($("#txtAddServicePrice").val()).length == 0 ){
                swal({
                  confirmButtonColor: "#009688",
                  title: "Invalid Price!",
                  text: "Please make sure price is of numerical value. ",
                  type: "error",
                  showCancelButton:false,
                  confirmButtonColor:"#808080",
                  confirmButtonText:"OK",
                  closeOnConfirm: true
                })
                return;

              } else {

                //add this service to the service menu.
                var ServicesOffered = Parse.Object.extend("ServicesOffered");
                var servicesoffered = new ServicesOffered();

                servicesoffered.set("ServiceID", services);
                servicesoffered.set("Location", selectedLocation);
                servicesoffered.set("Price", $("#txtAddServicePrice").val());

                servicesoffered.save(null, {
                  success: function(servicesoffered) {
                    // Execute any logic that should take place after the object is saved.
                    swal({
                      confirmButtonColor: "#009688",
                      title: "Save Successful!",
                      text: "Service successfully added.",
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
                  error: function(servicesoffered, error) {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                      swal("Uh oh!", error.message, "error")
                  }
                });
              }
            }
            },
            error: function(error) {
              alert("Error: " + error.code + " " + error.message);
            }
          });
    }

  }) //btnAddServiceLocation end click function


  // $("#txtAddServicePrice").keydown(function(e){
  //   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
  //             // Allow: Ctrl+A, Command+A
  //            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
  //             // Allow: home, end, left, right, down, up
  //            (e.keyCode >= 35 && e.keyCode <= 40)) {
  //                 // let it happen, don't do anything
  //                 return;
  //        }
  //        // Ensure that it is a number and stop the keypress
  //        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
  //            e.preventDefault();
  //        }
  // })

  // $("#txtEditServicePrice").keydown(function(e){
  //   if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
  //             // Allow: Ctrl+A, Command+A
  //            (e.keyCode == 65 && ( e.ctrlKey === true || e.metaKey === true ) ) ||
  //             // Allow: home, end, left, right, down, up
  //            (e.keyCode >= 35 && e.keyCode <= 40)) {
  //                 // let it happen, don't do anything
  //                 return;
  //        }
  //        // Ensure that it is a number and stop the keypress
  //        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
  //            e.preventDefault();
  //        }
  // })










}) // end doc ready
