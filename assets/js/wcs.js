let url= "https://compare.noritz.com/api/models/NRC711-DV"
//let url= "http://api.urbandictionary.com/v0/define?term=dog"
fetch(url)
.then(function(r)
{
  return r.json()
})
.then(function(data)
{
  console.log(data)
  //console.log(JSON.stringify(data));
})
.catch(function(e)
{
  console.error(e)
})


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

function application()
{
  let x = document.getElementById("inputState")
  let y = x.options[x.selectedIndex].text.toLowerCase();
  let application = y.replace(/ .*/,'');
  console.log(application)
  let z = document.getElementsByClassName(application)
  console.log(z)
    for (let i = 0; i < z.length; i++) {
      z[i].style.display = "flex";
    }
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
  // make selected form variable
  var vForm = $(this);
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

    }

  }

  vForm.addClass('was-validated');

});