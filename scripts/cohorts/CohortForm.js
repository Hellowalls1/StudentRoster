//First create the HTML of the form
//Then make it create (POST) a cohort 

import { createCohort } from "./CohortProvider.js"


const formContainer = document.querySelector(".cohort_form ") //where the form is going in the dom

//add an event listener to the form container
formContainer.addEventListener("click", (theEvent) => {
//check to see if they clicked on the "Add New Cohort" button
if (theEvent.target.id === "saveCohort") {
//then take the values of the input fields and create a new cohort object
  const newCohort = { //defining the variable for where the new cohort will live
    name: document.querySelector("#input_cohort_name").value //when the user hits the SAVE COHORT BUTTON thats when we go to the DOM and query for the input field and take the value
  }

  //send newly created cohort object to our database. JSON API
  createCohort(newCohort) //sending a new cohort defined above as a new argument sending it in the CohortProvider POST call
}
})


const render = () => {  //new function that renders the HTML representation of a form
    formContainer.innerHTML = `
       <div class="form">
        <form>
          <fieldset>
            <label for="noteText">Cohort Name:</label>
            <input type="text" id="input_cohort_name">   
          </fieldset>
        </form>
        <label for="criminal">Criminal:</label>
        <button id="saveCohort">Add New Cohort</button>
       </div>
    `
}

const CohortForm = () => { //variable that calls the HTML representation of the new form
    render()
}

export default CohortForm