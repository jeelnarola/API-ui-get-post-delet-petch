
let id=-1
const disply=((data)=>{
    console.log(data)
    data.map((item)=>{
        let tr=document.createElement("tr")
        let td1=document.createElement("td")
        td1.innerHTML=item.username
        let td2=document.createElement("td")
        td2.innerHTML=item.password
        let td3=document.createElement("button")
        td3.innerHTML="DELETE"
        td3.setAttribute("class","button")
        td3.addEventListener("click",()=>{
            a(item.id);
            // console.log(item.id)
        })
        let btn=document.createElement("button")
        btn.innerHTML=`UPDET`
        btn.addEventListener("click",()=>{
          document.getElementById("username").value=item.username
          document.getElementById("password").value=item.password
          document.getElementById("sbtn").value="updet"
          id=item.id
         })
        btn.setAttribute("class","updet")
        tr.append(td1,td2,td3,btn)
        document.getElementById("disply").append(tr)
    })

})


let a = async (id) => {
    fetch(`http://localhost:8090/data/${id}`, {
        method: "DELETE"
    })

}

// 

document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    let tyep=document.getElementById("sbtn").value
    console.log(tyep);
    let data={
        username:document.getElementById("username").value,
        password:document.getElementById("password").value
    }
    console.log(data)

    // fetch("http://localhost:8090/data",{
    //     method:"POST",
    //     headers: { "Content-Type": "application/json" },
    //     body:JSON.stringify(data)
    // })
    // .then((res)=>res.json())
    // .then((data)=>console.log(data))

    if(tyep=="submit"){
        fetch("http://localhost:8090/data",{
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
    }
    else{
        fetch(`http://localhost:8090/data/${id}`,{
            method:"PATCH",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(data)
        })
        document.getElementById("username").value=""
        document.getElementById("password").value=""
        document.getElementById("sbtn").value="submit"

    }
})



fetch("http://localhost:8090/data")
.then((res)=>res.json())
.then((data)=>disply(data))