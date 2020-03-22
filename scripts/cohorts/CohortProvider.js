//Responsible for managing all of the Cohorts Data. Holds all of the tools

// a copy of our cohort data

let cohorts = []


//the function that makes a copy of our copy of our cohort data
export const useCohorts = () => cohorts.slice() //because .slice() returns the copy of the cohorts array and you need to return it

//the eventHub in which all evemts are heard
const eventHub = document.querySelector(".container")

// sends a message out to the application via eventHub that the state of the Cohorts has changed

const dispatchStateChangeEvent = () => {
    const cohortStateChangedEvent = new CustomEvent("cohortStateChanged")

    eventHub.dispatchEvent(cohortStateChangedEvent)
}

//Method that gets the Cohorts (fetch)

export const getCohorts = () => {
    return fetch("http://localhost:8088/cohorts") //grabs the data from the API
    .then((response) => response.json()) //turns the JSON into Javascript
    .then((parsedCohorts) => { // turns the data into a string
         cohorts = parsedCohorts // sets parsed cohorts to the copy of the array of cohorts represented in line 5
 })
}

//Method that creates (posts) cohorts


export const createCohort= () => {
    return fetch('http://localhost:8088/cohorts', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cohortObj)
    })
    .then(getCohorts) //gets all the cohorts again defined on line 18
    .then(dispatchStateChangeEvent) 
}




//after creating (POSTING) a new cohort that means the state of the cohort data has changed 
//so if you want the application to know about this new cohort you have to get the new cohort again
// you can't use the cohorts data in the until you get the cohorts
//call getCohorts then call useCohorts