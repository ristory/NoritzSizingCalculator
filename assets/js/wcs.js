function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }


  function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 120 : value;
    value++;
    document.getElementById('number').value = value;
  }
  
  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 120 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }

  // document.querySelector(".next").addEventListener("click", showStep2);
  

  // function showStep3()
  // {
  //   document.querySelector(".hidden3").style.display = "none";
  // }
$("#bootstrapForm").submit(function(event) {

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