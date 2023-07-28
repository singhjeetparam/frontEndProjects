// FETCHING ALL ELEMENTS
const ratings = document.querySelectorAll(".rating");
const submit = document.querySelector(".submit-btn");
const beforeSubmit = document.querySelector(".before-submit");
const afterSubmit = document.querySelector(".after-submit");
const submittedRating = document.querySelector(".submitted-rating");

//VARIABLES
let ratingValue;
let ratingBool = false;

// ADDING CLICK EVENT ON EACH RATING ELEMENT
for (const rating of ratings) {
  rating.addEventListener("click", (e) => {
    //adding active state to element that is clicked
    e.target.classList.toggle("active");

    //storing rating value in variable
    ratingValue = rating.innerText;

    //displaying rating to html
    submittedRating.innerHTML = `<p>You selected ${ratingValue} out of 5</p>`;

    //checking if rating has been provided or not
    e.target.classList.contains("active")
      ? (ratingBool = true)
      : (ratingBool = false);

    //removing active state to elements that are not clicked
    for (const unactiveRating of ratings) {
      if (unactiveRating !== e.target) {
        unactiveRating.classList.remove("active");
      }
    }

    //changing the boolean value of ratingBool
    ratingBool = true;
  });
}

// CLICK EVENT ON SUBMIT BUTTON
submit.addEventListener("click", () => {
  // HIDING AND SHOWING SCREENS
  if (ratingBool) {
    beforeSubmit.classList.add("hide");
    afterSubmit.classList.remove("hide");
  }

  //    SHOW AN ALERT IF RATING HAS NOT BEEN PROVIDED
  else {
    alert("Please enter a rating");
  }
});
