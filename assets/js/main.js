const app = {
  init: function (evt) {
        if ( window.svgDocument == null ) {
          svgDoc = evt.target.ownerDocument;
        }
        let datas = [];

        //evt.path[0]).children gets all the states path...
        const states = Array.from(evt.path[0].children);
        //console.log(states);

        // get the state name ready
        const stateName = document.getElementById("stateName");

        //list all the stats available in unorder list
        const stats_container = document.getElementById("stats_container");
        const lists = Array.from(stats_container.querySelectorAll(".stats"));
        //console.log(lists);

        //a function that get data from json file.....
        function getData(){
          datas = [
            {"minLat": 4810, "name": "Abia", "capital": "Umuahia", "latitude": 5435, "minLong": 7150, "maxLat": 6191, "longitude": 7247, "maxLong": 7963},
            {"minLat": 7452, "name": "Adamawa", "capital": "Yola", "latitude": 9325, "minLong": 1139, "maxLat": 1094, "longitude": 1243, "maxLong": 1369},
            {"minLat": 4478, "name": "Akwa Ibom", "capital": "Uyo", "latitude": 4929, "minLong": 7460, "maxLat": 5530, "longitude": 7879, "maxLong": 8341},
            {"minLat": 5692, "name": "Anambra", "capital": "Awka", "latitude": 6275, "minLong": 6613, "maxLat": 6779, "longitude": 7683, "maxLong": 7355},
            {"minLat": 1025, "name": "Bauchi", "capital": "Bauchi", "latitude": 1031, "minLong": 9779, "maxLat": 1033, "longitude": 9849, "maxLong": 9864},
            {"minLat": 6442, "name": "Benue", "capital": "Makurdi", "latitude": 7351, "minLong": 7489, "maxLat": 8149, "longitude": 8836, "maxLong": 9911},
            {"minLat": 1003, "name": "Borno", "capital": "Maiduguri", "latitude": 1150, "minLong": 1162, "maxLat": 1341, "longitude": 1121, "maxLong": 1073},
            {"minLat": 4439, "name": "Bayelsa", "capital": "Yenagoa", "latitude": 4999, "minLong": 5001, "maxLat": 5139, "longitude": 5891, "maxLong": 6999},
            {"minLat": 6001, "name": "Cross River", "capital": "Calabar", "latitude": 6999, "minLong": 7999, "maxLat": 6999, "longitude": 8586, "maxLong": 9486},
            {"minLat": 5999, "name": "Delta", "capital": "Asaba", "latitude": 5624, "minLong": 5999, "maxLat": 6195, "longitude": 5001, "maxLong": 6911},
            {"minLat": 5539, "name": "Ebonyi", "capital": "Abakaliki", "latitude": 6973, "minLong": 7131, "maxLat": 6093, "longitude": 7999, "maxLong": 8269},
            {"minLat": 5799, "name": "Edo", "capital": "Benin", "latitude": 6811, "minLong": 4529, "maxLat": 7479, "longitude": 5001, "maxLong": 6601},
            {"minLat": 7599, "name": "Ekiti", "capital": "Ado-Ekiti", "latitude": 7899, "minLong": 3081, "maxLat": 4911, "longitude": 5505, "maxLong": 5959},
            {"minLat": 6852, "name": "Enugu", "capital": "Enugu", "latitude": 6667, "minLong": 7458, "maxLat": 6669, "longitude": 7998, "maxLong": 7199},
            {"minLat": 8675, "name": "Federal Capital Territory", "capital": "Abuja", "latitude": 8688, "minLong": 6935, "maxLat": 9659, "longitude": 7399, "maxLong": 6156},
            {"minLat": 1056, "name": "Gombe", "capital": "Gombe", "latitude": 1028, "minLong": 1112, "maxLat": 1037, "longitude": 1167, "maxLong": 1179},
            {"minLat": 5701, "name": "Imo", "capital": "Owerri", "latitude": 5533, "minLong": 6699, "maxLat": 5665, "longitude": 6999, "maxLong": 7109},
            {"minLat": 1225, "name": "Jigawa", "capital": "Dutse", "latitude": 1215, "minLong": 8938, "maxLat": 1283, "longitude": 8589, "maxLong": 8964},
            {"minLat": 1066, "name": "Kaduna", "capital": "Kaduna", "latitude": 1067, "minLong": 7999, "maxLat": 1963, "longitude": 7679, "maxLong": 7508},
            {"minLat": 1591, "name": "Kebbi", "capital": "Birnin Kebbi", "latitude": 1241, "minLong": 3841, "maxLat": 1342, "longitude": 5454, "maxLong": 6723},
            {"minLat": 1163, "name": "Kano", "capital": "Kano", "latitude": 1214, "minLong": 8999, "maxLat": 1216, "longitude": 8599, "maxLong": 8765},
            {"minLat": 6999, "name": "Kogi", "capital": "Lokoja", "latitude": 7891, "minLong": 5376, "maxLat": 8238, "longitude": 6387, "maxLong": 2179},
            {"minLat": 1299, "name": "Katsina", "capital": "Katsina", "latitude": 1233, "minLong": 7098, "maxLat": 1394, "longitude": 7346, "maxLong": 7.601},
            {"minLat": 7501, "name": "Kwara", "capital": "Ilorin", "latitude": 8995, "minLong": 2843, "maxLat": 1084, "longitude": 4426, "maxLong": 6591},
            {"minLat": 6419, "name": "Lagos", "capital": "Ikeja", "latitude": 6793, "minLong": 3732, "maxLat": 7984, "longitude": 9257, "maxLong": 9999},
            {"minLat": 9181, "name": "Nasarawa", "capital": "Lafia", "latitude": 5151, "minLong": 4008, "maxLat": 9002, "longitude": 8441, "maxLong": 9724},
            {"minLat": 9999, "name": "Niger", "capital": "Minna", "latitude": 1999, "minLong": 6932, "maxLat": 1645, "longitude": 8277, "maxLong": 1477},
            {"minLat": 6999, "name": "Ogun", "capital": "Abeokuta", "latitude": 6333, "minLong": 2432, "maxLat": 7999, "longitude": 3626, "maxLong": 4951},
            {"minLat": 5381, "name": "Ondo", "capital": "Akure", "latitude": 7333, "minLong": 4346, "maxLat": 9106, "longitude": 4333, "maxLong": 4999},
            {"minLat": 6976, "name": "Osun", "capital": "Osogbo", "latitude": 7843, "minLong": 4612, "maxLat": 8999, "longitude": 4426, "maxLong": 5619},
            {"minLat": 7899, "name": "Oyo", "capital": "Ibadan", "latitude": 7285, "minLong": 3377, "maxLat": 9933, "longitude": 3933, "maxLong": 3624},
            {"minLat": 8639, "name": "Plateau", "capital": "Jos", "latitude": 9817, "minLong": 4271, "maxLat": 7241, "longitude": 2673, "maxLong": 6639},
            {"minLat": 9999, "name": "Rivers", "capital": "Port Harcourt", "latitude": 9767, "minLong": 6301, "maxLat": 5789, "longitude": 6999, "maxLong": 9998},
            {"minLat": 1248, "name": "Sokoto", "capital": "Sokoto", "latitude": 1667, "minLong": 5084, "maxLat": 1393, "longitude": 5893, "maxLong": 5289},
            {"minLat": 6899, "name": "Taraba", "capital": "Jalingo", "latitude": 7755, "minLong": 9009, "maxLat": 9999, "longitude": 1098, "maxLong": 1199},
            {"minLat": 1052, "name": "Yobe", "capital": "Damaturu", "latitude": 1212, "minLong": 9665, "maxLat": 1133, "longitude": 1294, "maxLong": 1247},
            {"minLat": 10.854616, "name": "Zamfara", "capital": "Gusau", "latitude": 1159, "minLong": 5099, "maxLat": 1911, "longitude": 6947, "maxLong": 7999}
          ]
          return datas;
        }

        //function that display the stats....
        function displayName() {
          let $this = this;
          //console.log(states.indexOf(this));
          getData();
          //console.log(datas);
          stateName.innerHTML = datas[states.indexOf($this)].name;
          lists[0].innerHTML = datas[states.indexOf($this)].latitude;
          lists[1].innerHTML = datas[states.indexOf($this)].maxLat;
          lists[2].innerHTML = datas[states.indexOf($this)].maxLong;
          lists[3].innerHTML = datas[states.indexOf($this)].minLat;
          lists[4].innerHTML = datas[states.indexOf($this)].minLong;

        //  console.log(datas[states.indexOf($this)], states.indexOf($this));
        /*lists.forEach(function(list){
            lists.indexOf(list)
            for (let property in datas[states.indexOf($this)]) {
              //return all properties
              console.log(property);
            }
            console.log(list);
            //list.innerHTML = datas[states.indexOf($this)].population;
          });*/
        }

        states.forEach(function(state){
          //add eventlistener to each states
          state.addEventListener('mouseover', displayName);
        });

      },
      radioToggler: function(){
        //get fieldsets and radios ready.....
        const fieldsets = Array.from(document.querySelectorAll("fieldset"));
        const radios = Array.from(document.getElementsByName("details"));

        if (fieldsets == null) {
          return;
        }

        //event handler
        function changeHandler(){
          //toggle the second filedset
          fieldsets[1].classList.toggle("hidden");
        }

        radios.forEach(function(radio){
          radio.addEventListener('change', changeHandler);
        });
      },

      selectHandler: function(){

        const parentOpt = document.getElementById("parent_option");
        const childOpt = document.getElementById("child_option");

        if (parentOpt == null) {
          return;
        }

       let childrenList = {
          Airports : {
            kaduna : "Kaduna",
            abuja : "Abuja"
          },
          Banking : {
            uba : "UBA",
            gtb : "GTB"
          }
       }


       //GET DATA HERE...........
       function getData(){
         const xhr = new XMLHttpRequest();
         xhr.open('GET', 'URL HERE.....');
         xhr.onload = function() {
             xhr.status === 200 ? childrenList = JSON.parse(xhr.responseText) : console.log('Request failed.  Returned status of ' + xhr.status);
         };
         xhr.send();
       }


        //clear child options.....
        function removeOpts(){
          //clear child options first.....
          let childOptions = Array.from(childOpt.children);

          //begin from index 1 rather.....
          for (let i = 1; i < childOptions.length; i++) {
              childOpt.removeChild(childOptions[i]);
          }
        }

        //function to append select options.....
        function appendOpts(selected){

          //check data object for a match
          for (let key in childrenList){
            if (key.includes(selected)) {
              //if key matches, loop in to object....
                for(var options in childrenList[selected]){
                  let optionValues = document.createElement("option");
                  optionValues.innerHTML = childrenList[selected][options];
                  //append child to childopt....
                  childOpt.appendChild(optionValues);
                }
            }
          }

        }

        //event handler when parent select changes.....
        function optHandler(e){

          //remove old options.
          removeOpts();

          //add new options
          appendOpts(this.selectedOptions[0].textContent);
        }

        parentOpt.addEventListener('change', optHandler);

      },
      datepicker: function(){
        const thisdate = document.getElementById("date");
        if (thisdate == null) {
          return;
        }
        new Pikaday(
        {
          field: thisdate
        });
      },
      textTruncator: function(){
        var showChar = 120;
        var ellipsestext = "...";
        var moretext = "more";
        var lesstext = "less";

        if($(".more") == null){
          return;
        }    
            
        $('.more').each(function() {
            var content = $(this).html();

            if(content.length > showChar) {

                var c = content.substr(0, showChar);
                var h = content.substr(showChar-1, content.length - showChar);

                var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink red-text">' + moretext + '</a></span>';

                $(this).html(html);
            }

        });

        

        $(".morelink").click(function(){
            if($(this).hasClass("less")) {
                $(this).removeClass("less");
                $(this).html(moretext);
            } else {
                $(this).addClass("less");
                $(this).html(lesstext);
            }
          $(this).parent().prev().toggle();
      
            $(this).prev().toggle();
            
            return false;
        });
      },
      customSelect: function(){
        if($('.selectpicker')){
          $('.selectpicker').select2({
                placeholder: "Select a state"
          });
        }
        else{return;}
      }
}
