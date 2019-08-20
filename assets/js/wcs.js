let api;
let url2 = "zipcode.xlsx";
let heatertype;
let groundTemp;
let model = [];

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

document.querySelector(".reset").addEventListener("click", reset1);
function reset1() {
  document.querySelector("#bootstrapForm").reset();
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
  var radios = document.getElementsByName('condensing');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      heatertype = radios[i].value;
      break;
    }
  }

  if( heatertype === condensing)
  {
    model.push("GQ-C3259WX-FF US (EZ111) (EZTR75)","")
  }

  else if( heatertype === noncondensing)
  {
    model.push("GQ-C3259WX-FF US (EZ111) (EZTR75)","")
  }

  else if( heatertype === condenboth)
  {
    model.push("GQ-C3259WX-FF US (EZ111) (EZTR75)","")
  }

  let model;
  let url = "https://compare.noritz.com/api/models/" + model[0]
  fetch(url)
    .then(function (r) {
      return r.json()
    })
    .then(function (data) {
      api = data;
      //console.log(JSON.stringify(data));
    })
    .catch(function (e) {
      console.error(e)
    })
}

//document.querySelector(".fixturecolumn1").addEventListener("click", showFixture1);

function hideFixture1() {
  let x = document.getElementsByClassName("fixturecolumn1")
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
hideFixture1();

function hideFixture2() {
  let x = document.getElementsByClassName("fixturecolumn2")
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
}
hideFixture2();

// document.querySelector(".next").addEventListener("click", showStep2);

// function showStep2()
// {
//   document.querySelector(".hidden2").style.display = "none";
// }

// function showStep3()
// {
//   document.querySelector(".hidden3").style.display = "none";
// }
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

    }

  }

  vForm.addClass('was-validated');

});