let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let i=document.createElement("i");
    i.classList.add("material-icons");
    // i.innerText="&#xe872;"

    let delbtn=document.createElement("button");
      delbtn.innerText="delete";





    item.appendChild(delbtn);
    item.appendChild(i);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";

});



ul.addEventListener("click",function(event){
     console.dir(event.target.nodeName)
    if(event.target.nodeName=="I" || event.target.nodeName=="BUTTON"){
       let itemList=event.target.parentElement;
       itemList.remove();

    
    }

})

// let delbtns=document.querySelectorAll(".delete");
// for(delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par=this.parentElement;
//         console.log(par);
//         par.remove();

//     })
// }