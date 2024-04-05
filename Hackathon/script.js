document.addEventListener("DOMContentLoaded", function() {
    // Get the form element
    var form = document.getElementById("tb");

    // Add submit event listener to the form
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Get form inputs
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var income = document.getElementById("income").value;
        var investment = document.getElementById("investment").value;
        var duration = document.getElementById("duration").value;

        // Log values to console
        console.log("Name: " + name);
        console.log("Age: " + age);
        console.log("Monthly Income: " + income);
        console.log("Amount to be Invested: " + investment);
        console.log("Time Duration: " + duration);

        var result;
        if(age >= 20 && investment >= 14787) {
            result = "investing in Jeevan Labh is the best option for you .In this policiy at an investment of 14787/- per month you will get a lupsum of 3330000/- after 16 years";
        } else if (age >= 30 && investment >= 10494) {
            result = "investing in Jeevan Utsav is the best option for you .In this policiy at an investment of 14787/- per month you will get a lupsum of 3330000/- after 16 years";
        } 
        
        else {
            result = "investing in Jeevan Anand is the best option for you .In this policiy at an investment of 14787/- per month you will get a lupsum of 3330000/- after 16 years";
        }

        // Display the result in the h1 element
        document.getElementById("result").textContent = "According to your specific circumstances " + result;
    });
});

