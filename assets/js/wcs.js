// let url= "https://compare.noritz.com/api/models/NRC711-DV"
// fetch(url)
// .then(function(r)
// {
//   return r.json
// })
// .then(function(data)
// {
//   console.log(data)
// })
// .catch(function(e)
// {
//   console.error(e)
// })


function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  // document.querySelector(".next").addEventListener("click", showStep2);
  

  // function showStep3()
  // {
  //   document.querySelector(".hidden3").style.display = "none";
  // }
$("#bootstrapForm").submit(function(event) {
  event.preventDefault();
  // make selected form variable
  var vForm = $(this); 
  if (vForm[0].checkValidity() === false) {
    event.preventDefault()
    event.stopPropagation()
  } else {
    event.preventDefault()
    document.querySelector(".next").addEventListener("click", foo());
    function foo()
    {
      document.querySelector(".hidden2").style.display = "block";
      document.querySelector(".next").disabled = true;
    }
  
  }
  
  vForm.addClass('was-validated');
  
});