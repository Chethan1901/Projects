
import axios from "axios"
import readlinesync from "readline-sync";

function fetchAPI() {
    let nameEntered = readlinesync.question(`Enter username:- `)
    let keys = {
        auth: {
          
username:"Chethan1901",
password: "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"
        }
    }
    axios.get(`https://api.github.com/users/${nameEntered}`, keys)
    
        .then((res) => {
          
            let data = res.data;
            console.log(`fullname:- `,data.name);
            console.log(`bio:- `,data.bio);
            console.log(`followers:- `,data.followers);
            console.log(`following:- `,data.following);

                
            axios.get(`https://api.github.com/users/${nameEntered}/repos`, keys)
    
            .then((res) => {
              
                let data = res.data;
                let reponame = data.map((repo)=>{
                    return repo.name
                })
                // console.log(reponame)
                var arr =[]
                if(reponame.length > 5){
                    for(let i=0;i<5;i++){
                        arr.push(reponame[i])
                    }
                    console.log(arr)
                }
                else{
                    console.log(reponame)
                }
             

            })
            .catch((err) => {
                console.error(err)
            })

          
        })
        .catch((err) => {
            console.error(err.response.status);
            console.error(err.response.data);
            console.error(err)
        })
}

fetchAPI();
