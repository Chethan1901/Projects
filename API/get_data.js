import axios from "axios";

async function fetchAPI(){
    
axios.get(`https://api.instantwebtools.net/v1/airlines`)

.then((res)=>{

    let data = res.data
    let Countryname = data.map((country=>{
        console.log(country.country)
    }))

})


}

fetchAPI()
