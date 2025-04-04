document.getElementById("business-card-form").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Get the values from the form inputs
    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const company = document.getElementById("company").value;
  
    // Display the virtual business card
    document.getElementById("card-name").innerText = name;
    document.getElementById("card-title").innerText = title;
    document.getElementById("card-email").innerText = email;
    document.getElementById("card-phone").innerText = phone;
    document.getElementById("card-company").innerText = company;
  
    // Show the business card section
    document.getElementById("business-card").style.display = "block";
  });
  