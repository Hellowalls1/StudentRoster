import { getCohorts } from "./CohortProvider.js";
import { CohortList } from "./CohortList.js"; //going to render  
import CohortForm from "./CohortForm.js";

//cant do anything with the data until we get the data
getCohorts().then(CohortList) //get the data then use the data

//render the cohort form
CohortForm()