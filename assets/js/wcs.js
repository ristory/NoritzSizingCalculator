let api;
let url2 = "zipcode.xlsx";
let heatertype;
let locate;
let groundTemp;
let model = [];
let NCC199CDV = ["NCC199CDV", "GQ-C3259WZ-FF US", "18000", "199900", "96", "11.1"]
let NCC199DVC = ["NCC199DVC", "GQ-2857WZ-FFA US", "18000", "199900", "84", "9.8"]
let NC199OD = ["NC199OD", "GQ-2857WZ US", "11000", "199900", "84", "9.8"]
let NCC300OD = ["NCC300OD", "GQ-C5032WZ-FF US", "15000", "300000", "97", "13.2"]
let NCC300DV = ["NCC300DV", "GQ-C3259WZ-FF US", "18000", "199900", "97", "13.2"]
let NC380SV = ["NC380-SV-ASME", "NC380-SV-ASME", "22500", "380000", "80", "13.2"]


window.onload = function () {
  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.querySelector(".reset").addEventListener("click", reset1);
  function reset1() {
    document.querySelector("#bootstrapForm").reset();
    document.querySelector(".next").disabled = false;
    document.getElementById("groundTemp").value = 120;
    hideFixture();
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  function application() {
    let x = document.getElementById("inputState")
    let y = x.options[x.selectedIndex].text.toLowerCase();
    let application = y.replace(/ .*/, '');
    let z = document.getElementsByClassName(application)

    for (let i = 0; i < z.length; i++) {
      z[i].style.display = "flex";
    }
  }

  function condensing() {
    let radios = document.getElementsByName('condensing');
    let radios1 = document.getElementsByName('location');

    for (var i = 0, length = radios.length; i < length; i++) {
      if (radios[i].checked) {
        heatertype = radios[i].value;
        break;
      }
    }

    for (var i = 0, length = radios1.length; i < length; i++) {
      if (radios1[i].checked) {
        locate = radios1[i].value;
        break;
      }
    }
    function filterLocation1(b) {
      if (b === "indoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NCC300DV[0]
        document.getElementById("model22").innerHTML = NCC300DV[0]
        document.getElementById("modelNumber2").innerHTML = NCC300DV[1]
        document.getElementById("efficiency2").innerHTML = NCC300DV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NCC300DV[2] + " TO MAX " + NCC300DV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NCC300DV[2]
        document.getElementById("maxBtu2").innerHTML = NCC300DV[3]
        document.getElementById("maxFlow2").innerHTML = NCC300DV[5]
      }

      else if (b === "outdoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NCC300OD[0]
        document.getElementById("model22").innerHTML = NCC300OD[0]
        document.getElementById("modelNumber2").innerHTML = NCC300OD[1]
        document.getElementById("efficiency2").innerHTML = NCC300OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NCC300OD[2] + " TO MAX " + NCC300OD[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NCC300OD[2]
        document.getElementById("maxBtu2").innerHTML = NCC300OD[3]
        document.getElementById("maxFlow2").innerHTML = NCC300OD[5]
      }


      else if (b === "inoutboth") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";
        document.querySelector(".recommend3").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NCC300DV[0]
        document.getElementById("model22").innerHTML = NCC300DV[0]
        document.getElementById("modelNumber2").innerHTML = NCC300DV[1]
        document.getElementById("efficiency2").innerHTML = NCC300DV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NCC300DV[2] + " TO MAX " + NCC300DV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NCC300DV[2]
        document.getElementById("maxBtu2").innerHTML = NCC300DV[3]
        document.getElementById("maxFlow2").innerHTML = NCC300DV[5]

        document.getElementById("model31").innerHTML = NCC300OD[0]
        document.getElementById("model32").innerHTML = NCC300OD[0]
        document.getElementById("modelNumber3").innerHTML = NCC300OD[1]
        document.getElementById("efficiency3").innerHTML = NCC300OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax3").innerHTML = "MINIMUM " + NCC300OD[2] + " TO MAX " + NCC300OD[3] + " BTUH"
        document.getElementById("minBtu3").innerHTML = NCC300OD[2]
        document.getElementById("maxBtu3").innerHTML = NCC300OD[3]
        document.getElementById("maxFlow3").innerHTML = NCC300OD[5]
      }

    }

    function filterLocation2(b) {
      if (b === "indoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199DVC[0]
        document.getElementById("model12").innerHTML = NCC199DVC[0]
        document.getElementById("modelNumber1").innerHTML = NCC199DVC[1]
        document.getElementById("efficiency1").innerHTML = NCC199DVC[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199DVC[2] + " TO MAX " + NCC199DVC[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199DVC[2]
        document.getElementById("maxBtu1").innerHTML = NCC199DVC[3]
        document.getElementById("maxFlow1").innerHTML = NCC199DVC[5]

        document.getElementById("model21").innerHTML = NC380SV[0]
        document.getElementById("model22").innerHTML = NC380SV[0]
        document.getElementById("modelNumber2").innerHTML = NC380SV[1]
        document.getElementById("efficiency2").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NC380SV[2]
        document.getElementById("maxBtu2").innerHTML = NC380SV[3]
        document.getElementById("maxFlow2").innerHTML = NC380SV[5]
      }

      else if (b === "outdoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";

        document.getElementById("model11").innerHTML = NC199OD[0]
        document.getElementById("model12").innerHTML = NC199OD[0]
        document.getElementById("modelNumber1").innerHTML = NC199OD[1]
        document.getElementById("efficiency1").innerHTML = NC199OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NC199OD[2] + " TO MAX " + NC199OD[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NC199OD[2]
        document.getElementById("maxBtu1").innerHTML = NC199OD[3]
        document.getElementById("maxFlow1").innerHTML = NC199OD[5]

        document.getElementById("model21").innerHTML = NC380SV[0]
        document.getElementById("model22").innerHTML = NC380SV[0]
        document.getElementById("modelNumber2").innerHTML = NC380SV[1]
        document.getElementById("efficiency2").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NC380SV[2]
        document.getElementById("maxBtu2").innerHTML = NC380SV[3]
        document.getElementById("maxFlow2").innerHTML = NC380SV[5]
      }


      else if (b === "inoutboth") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";
        document.querySelector(".recommend3").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199DVC[0]
        document.getElementById("model12").innerHTML = NCC199DVC[0]
        document.getElementById("modelNumber1").innerHTML = NCC199DVC[1]
        document.getElementById("efficiency1").innerHTML = NCC199DVC[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199DVC[2] + " TO MAX " + NCC199DVC[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199DVC[2]
        document.getElementById("maxBtu1").innerHTML = NCC199DVC[3]
        document.getElementById("maxFlow1").innerHTML = NCC199DVC[5]

        document.getElementById("model21").innerHTML = NC199OD[0]
        document.getElementById("model22").innerHTML = NC199OD[0]
        document.getElementById("modelNumber2").innerHTML = NC199OD[1]
        document.getElementById("efficiency2").innerHTML = NC199OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NC199OD[2] + " TO MAX " + NC199OD[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NC199OD[2]
        document.getElementById("maxBtu2").innerHTML = NC199OD[3]
        document.getElementById("maxFlow2").innerHTML = NC199OD[5]

        document.getElementById("model31").innerHTML = NC380SV[0]
        document.getElementById("model32").innerHTML = NC380SV[0]
        document.getElementById("modelNumber3").innerHTML = NC380SV[1]
        document.getElementById("efficiency3").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax3").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu3").innerHTML = NC380SV[2]
        document.getElementById("maxBtu3").innerHTML = NC380SV[3]
        document.getElementById("maxFlow3").innerHTML = NC380SV[5]
      }

    }

    function filterLocation3(b) {
      if (b === "indoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";
        document.querySelector(".recommend3").style.display = "flex";
        document.querySelector(".recommend4").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NCC300DV[0]
        document.getElementById("model22").innerHTML = NCC300DV[0]
        document.getElementById("modelNumber2").innerHTML = NCC300DV[1]
        document.getElementById("efficiency2").innerHTML = NCC300DV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NCC300DV[2] + " TO MAX " + NCC300DV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NCC300DV[2]
        document.getElementById("maxBtu2").innerHTML = NCC300DV[3]
        document.getElementById("maxFlow2").innerHTML = NCC300DV[5]

        document.getElementById("model31").innerHTML = NCC199DVC[0]
        document.getElementById("model32").innerHTML = NCC199DVC[0]
        document.getElementById("modelNumber3").innerHTML = NCC199DVC[1]
        document.getElementById("efficiency3").innerHTML = NCC199DVC[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax3").innerHTML = "MINIMUM " + NCC199DVC[2] + " TO MAX " + NCC199DVC[3] + " BTUH"
        document.getElementById("minBtu3").innerHTML = NCC199DVC[2]
        document.getElementById("maxBtu3").innerHTML = NCC199DVC[3]
        document.getElementById("maxFlow3").innerHTML = NCC199DVC[5]

        document.getElementById("model41").innerHTML = NC380SV[0]
        document.getElementById("model42").innerHTML = NC380SV[0]
        document.getElementById("modelNumber4").innerHTML = NC380SV[1]
        document.getElementById("efficiency4").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax4").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu4").innerHTML = NC380SV[2]
        document.getElementById("maxBtu4").innerHTML = NC380SV[3]
        document.getElementById("maxFlow4").innerHTML = NC380SV[5]
      }

      else if (b === "outdoor") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";
        document.querySelector(".recommend3").style.display = "flex";
        document.querySelector(".recommend4").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NC199OD[0]
        document.getElementById("model22").innerHTML = NC199OD[0]
        document.getElementById("modelNumber2").innerHTML = NC199OD[1]
        document.getElementById("efficiency2").innerHTML = NC199OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NC199OD[2] + " TO MAX " + NC199OD[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NC199OD[2]
        document.getElementById("maxBtu2").innerHTML = NC199OD[3]
        document.getElementById("maxFlow2").innerHTML = NC199OD[5]

        document.getElementById("model31").innerHTML = NCC300OD[0]
        document.getElementById("model32").innerHTML = NCC300OD[0]
        document.getElementById("modelNumber3").innerHTML = NCC300OD[1]
        document.getElementById("efficiency3").innerHTML = NCC300OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax3").innerHTML = "MINIMUM " + NCC300OD[2] + " TO MAX " + NCC300OD[3] + " BTUH"
        document.getElementById("minBtu3").innerHTML = NCC300OD[2]
        document.getElementById("maxBtu3").innerHTML = NCC300OD[3]
        document.getElementById("maxFlow3").innerHTML = NCC300OD[5]

        document.getElementById("model41").innerHTML = NC380SV[0]
        document.getElementById("model42").innerHTML = NC380SV[0]
        document.getElementById("modelNumber4").innerHTML = NC380SV[1]
        document.getElementById("efficiency4").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax4").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu4").innerHTML = NC380SV[2]
        document.getElementById("maxBtu4").innerHTML = NC380SV[3]
        document.getElementById("maxFlow4").innerHTML = NC380SV[5]
      }


      else if (b === "inoutboth") {
        document.querySelector(".recommend1").style.display = "flex";
        document.querySelector(".recommend2").style.display = "flex";
        document.querySelector(".recommend3").style.display = "flex";
        document.querySelector(".recommend4").style.display = "flex";
        document.querySelector(".recommend5").style.display = "flex";
        document.querySelector(".recommend6").style.display = "flex";

        document.getElementById("model11").innerHTML = NCC199CDV[0]
        document.getElementById("model12").innerHTML = NCC199CDV[0]
        document.getElementById("modelNumber1").innerHTML = NCC199CDV[1]
        document.getElementById("efficiency1").innerHTML = NCC199CDV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax1").innerHTML = "MINIMUM " + NCC199CDV[2] + " TO MAX " + NCC199CDV[3] + " BTUH"
        document.getElementById("minBtu1").innerHTML = NCC199CDV[2]
        document.getElementById("maxBtu1").innerHTML = NCC199CDV[3]
        document.getElementById("maxFlow1").innerHTML = NCC199CDV[5]

        document.getElementById("model21").innerHTML = NCC300DV[0]
        document.getElementById("model22").innerHTML = NCC300DV[0]
        document.getElementById("modelNumber2").innerHTML = NCC300DV[1]
        document.getElementById("efficiency2").innerHTML = NCC300DV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax2").innerHTML = "MINIMUM " + NCC300DV[2] + " TO MAX " + NCC300DV[3] + " BTUH"
        document.getElementById("minBtu2").innerHTML = NCC300DV[2]
        document.getElementById("maxBtu2").innerHTML = NCC300DV[3]
        document.getElementById("maxFlow2").innerHTML = NCC300DV[5]

        document.getElementById("model31").innerHTML = NCC300OD[0]
        document.getElementById("model32").innerHTML = NCC300OD[0]
        document.getElementById("modelNumber3").innerHTML = NCC300OD[1]
        document.getElementById("efficiency3").innerHTML = NCC300OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax3").innerHTML = "MINIMUM " + NCC300OD[2] + " TO MAX " + NCC300OD[3] + " BTUH"
        document.getElementById("minBtu3").innerHTML = NCC300OD[2]
        document.getElementById("maxBtu3").innerHTML = NCC300OD[3]
        document.getElementById("maxFlow3").innerHTML = NCC300OD[5]

        document.getElementById("model41").innerHTML = NCC199DVC[0]
        document.getElementById("model42").innerHTML = NCC199DVC[0]
        document.getElementById("modelNumber4").innerHTML = NCC199DVC[1]
        document.getElementById("efficiency4").innerHTML = NCC199DVC[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax4").innerHTML = "MINIMUM " + NCC199DVC[2] + " TO MAX " + NCC199DVC[3] + " BTUH"
        document.getElementById("minBtu4").innerHTML = NCC199DVC[2]
        document.getElementById("maxBtu4").innerHTML = NCC199DVC[3]
        document.getElementById("maxFlow4").innerHTML = NCC199DVC[5]

        document.getElementById("model51").innerHTML = NC199OD[0]
        document.getElementById("model52").innerHTML = NC199OD[0]
        document.getElementById("modelNumber5").innerHTML = NC199OD[1]
        document.getElementById("efficiency5").innerHTML = NC199OD[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax5").innerHTML = "MINIMUM " + NC199OD[2] + " TO MAX " + NC199OD[3] + " BTUH"
        document.getElementById("minBtu5").innerHTML = NC199OD[2]
        document.getElementById("maxBtu5").innerHTML = NC199OD[3]
        document.getElementById("maxFlow5").innerHTML = NC199OD[5]

        document.getElementById("model61").innerHTML = NC380SV[0]
        document.getElementById("model62").innerHTML = NC380SV[0]
        document.getElementById("modelNumber6").innerHTML = NC380SV[1]
        document.getElementById("efficiency6").innerHTML = NC380SV[4] + " PERCENT EFFICIENCY"
        document.getElementById("minMax6").innerHTML = "MINIMUM " + NC380SV[2] + " TO MAX " + NC380SV[3] + " BTUH"
        document.getElementById("minBtu6").innerHTML = NC380SV[2]
        document.getElementById("maxBtu6").innerHTML = NC380SV[3]
        document.getElementById("maxFlow6").innerHTML = NC380SV[5]

      }

    }
    function filterHeater(a) {
      if (a === "condensing") {
        filterLocation1(locate);
      }

      else if (a === "noncondensing") {
        filterLocation2(locate)
      }

      else if (a === "condenboth") {
        filterLocation3(locate)
      }
    }
    filterHeater(heatertype)
    console.log(model)

    // let url = "https://compare.noritz.com/api/models/" + model[0]
    // fetch(url)
    //   .then(function (r) {
    //     return r.json()
    //   })
    //   .then(function (data) {
    //     api = data;
    //     //console.log(JSON.stringify(data));
    //   })
    //   .catch(function (e) {
    //     console.error(e)
    //   })
  }

  //document.querySelector(".fixturecolumn1").addEventListener("click", showFixture1);

  function hideFixture() {
    let x = document.getElementsByClassName("fixturecolumn1")
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    let y = document.getElementsByClassName("fixturecolumn2")
    for (let i = 0; i < y.length; i++) {
      y[i].style.display = "none";
    }
  }

  // document.querySelector(".next").addEventListener("click", showStep2);

  // function hiddenStep2()
  // {
  //   document.querySelector(".hidden2").style.display = "none";
  // }

  function hiddenStep3() {
    //document.querySelector(".hidden3").style.display = "none";
    document.querySelector(".recommend1").style.display = "none";
    document.querySelector(".recommend2").style.display = "none";
    document.querySelector(".recommend3").style.display = "none";
    document.querySelector(".recommend4").style.display = "none";
    document.querySelector(".recommend5").style.display = "none";
    document.querySelector(".recommend6").style.display = "none";
  }

  hideFixture();
  hiddenStep3();

  $("#bootstrapForm").submit(function (event) {
    event.preventDefault();
    // make selected form letiable
    let vForm = $(this);
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      document.querySelector(".next").addEventListener("click", foo());
      function foo() {
        event.preventDefault();
        document.querySelector(".hidden2").style.display = "block";
        document.querySelector(".next").disabled = true;
        application();
        condensing();
        /* set up async GET request */
        let req = new XMLHttpRequest();
        req.open("GET", url2, true);
        req.responseType = "arraybuffer";

        req.onload = function (e) {
          let data = new Uint8Array(req.response);
          let workbook = XLSX.read(data, { type: "array" });

          let first_sheet_name = workbook.SheetNames[0];
          /* Get worksheet */
          let worksheet = workbook.Sheets[first_sheet_name];
          api = XLSX.utils.sheet_to_json(worksheet)
          for (let i = 0; i < api.length; i++) {
            if (api[i].ZIPCODE.toString() === document.getElementById("inputZipcode").value) {
              groundTemp = api[i].GROUNDTEMP;
              console.log(groundTemp);
              document.getElementById("groundTemp").value = parseInt(groundTemp);
            }
          }
        }
        req.send();

        //this.contact_number.value = Math.random() * 100000 | 0;
        emailjs.sendForm('hoangcao-email', 'test_report1', this);
      }

    }

    vForm.addClass('was-validated');

  });


  $("#bootstrapForm1").submit(function (event) {
    event.preventDefault();
    // make selected form letiable
    let vForm = $(this);
    if (vForm[0].checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()

    }
    vForm.addClass('was-validated');

  });
}