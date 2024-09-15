var farms = document.getElementById("farms");
var i = 0;

function validateInputs() {
  let farmName = document.getElementById("name").value;
  let farmPrice = document.getElementById("price").value;
  let farmPicture = document.getElementById("picture").value;

  if (!farmName || !farmPrice || !farmPicture) {
    alert("Please fill out all fields.");
    return false;
  }
  if (isNaN(farmPrice)) {
    alert("Price must be a number.");
    return false;
  }
  return true;
}

function saveFarm() {
  if (!validateInputs()) return;

  farmName = document.getElementById("name").value;
  farmPrice = document.getElementById("price").value;
  farmPicture = document.getElementById("picture").value;

  i++;
  farms.innerHTML +=
    `
  <div class="col-lg-3 col-md-6 col-sm-6 col-12">
  <img
    src="` +
    farmPicture +
    `"
    alt="farm"
    class="img-fluid"
  />
  <h3 class="mt-3" id="carName1">` +
    farmName +
    `</h3> <p id="priceCar1"> $` +
    farmPrice +
    `</p>
  <p>
    <a href="#" class="btn-view-details btn btn-success w-100">View Details</a>
    <a href="" class="mt-2 btn btn-secondary w-100">Book Now</a>
  </p>
</div>`;
  farmName = document.getElementById("name").value = "";
  farmPrice = document.getElementById("price").value = "";
  farmPicture = document.getElementById("picture").value = "";
}
