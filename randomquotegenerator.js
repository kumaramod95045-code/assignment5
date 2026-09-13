let btn=document.querySelector("button");
btn.addEventListener("click",async()=>{
    let quote=await getQuotes();
    let div=document.querySelector("#qplace");
    div.innerText=quote;
});
let url= "https://dummyjson.com/quotes/random";
async function getQuotes(){
    try{
        let res=await axios.get(url);
        return res.data.quote;
    }
    catch(e){
        console.log("error-",e);
        return "No quote found";
    }
}