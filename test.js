

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Access form elements by their IDs
    var name = document.getElementById('navinput').value;
    var home = document.getElementById('homeinput').value;
    var featuters = document.getElementById('feainput').value;
    var price = document.getElementById('priinput').value;
    
    
    // Print the data in HTML
    document.getElementById("output").innerHTML = name;
    document.getElementById("home").innerHTML =home;
    document.getElementById("Features").innerHTML = featuters;
    document.getElementById("Pricing").innerHTML = price;
  }

  var form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);