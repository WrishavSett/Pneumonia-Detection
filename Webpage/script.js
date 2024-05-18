document.getElementById("uploadButton").addEventListener("click", function() {
    document.getElementById("fileInput").click();
  });
  
  document.getElementById("fileInput").addEventListener("change", function(e) {
    const image = document.getElementById("uploadedImage");
    image.src = URL.createObjectURL(e.target.files[0]);
    image.style.display = "block";
    document.getElementById("detectButton").style.display = "block";
    document.getElementById("result").style.display = "none";
  });
  
  document.getElementById("detectButton").addEventListener("click", function() {
    // You should add code here to send the image to your model for detection
    // Display the result using: document.getElementById("result").innerText = "Result message";
    // Adjust the display of the result accordingly
  });
  