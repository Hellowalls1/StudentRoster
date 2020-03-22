// Responsible for getting all of the Cohorts and putting each one on the DOM

import { useCohorts } from "./CohortProvider.js"
import { CohortHTML } from "./Cohort.js" //renders the HTML


const cohortContainer = document.querySelector(".cohort_list")
const eventHub = document.querySelector(".container")

// add an event listener on the eventHub that listens for the cohortStateChanged custom event
eventHub.addEventListener("cohortStateChanged", () => {

//when the cohort state changes clear out the container and render the cohort list again
    cohortContainer.innerHTML = ""

//when the ccohorts state chagnged, render the cohort list again which contains a bunch of new cohorts
    render() //what we want to do whebn the cohort state is changed which is post all of the new cohorts

}
 )
//the function that renders the cohort lists (and does all the things)

const render = () => {
    // needs to use the data to put each cohort on the DOM
    const allCohorts = useCohorts()

    // iterate through all of the cohorts and put each one on the dom
    for (const singleCohort of allCohorts) { //for each single cohort put it on the page
       cohortContainer.innerHTML += CohortHTML(singleCohort) //for each individual cohort print out a single cohort inside that container
 }
}

//the function that invokes the render method for the cohort list
export const CohortList = () => {
    render()


}