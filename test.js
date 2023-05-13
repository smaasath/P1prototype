

function handleSubmit(event) {
    event.preventDefault(); // Prevent form submission

    // Access form elements by their IDs
    var name = document.getElementById('navinput').value;
    var home = document.getElementById('homeinput').value;
    var featuters = document.getElementById('feainput').value;
    var price = document.getElementById('priinput').value;
    var bold = document.getElementById('flexCheckDefault');
    // document.getElementById('xxx').checked
    
    
    // Print the data in HTML
    document.getElementById("output").innerText = name;
    document.getElementById("home").innerHTML =home;
    document.getElementById("Features").innerHTML = featuters;
    document.getElementById("Pricing").innerHTML = price;
    
    // const newDiv = document.querySelector('#output');

    if(bold.checked){      
      document.getElementById("output").style.fontWeight="bold"
      // newDiv.setAttribute('style',"font-weight:bold;");
      
    }else{
      document.getElementById("output").style.fontWeight=400

      // newDiv.setAttribute('style',"font-weight:400;");
    }
    // document.getElementById("output").innerHTML = newDiv;
    console.log(name);
  }

  var form = document.getElementById('myForm');
  form.addEventListener('submit', handleSubmit);
