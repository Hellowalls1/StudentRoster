import { getCohorts } from "./CohortProvider.js";
import { CohortList } from "./CohortList.js"; //going to render  
import CohortForm from "./CohortForm.js";

getCohorts().then(CohortList) //get the data then use the data

CohortForm()