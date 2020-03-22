//First create the HTML of the form
//Then make it create (POST) a cohort 


const formContainer = document.querySelector(".cohort_form ") //where the form is going in the dom


const render = () => {  //new function that renders the HTML representation of a form
    formContainer.innerHTML = `
       <div class="form">
        <form>
          <fieldset>
            <label for="noteText">Cohort Name:</label>
            <input type="text" id="form_cohort_ name">   
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