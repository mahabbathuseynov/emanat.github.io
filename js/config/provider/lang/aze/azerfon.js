let obj = baseConfig.topProviders;
function createBody(e){
let container =  createElement({name:"div",class:"container"});
let logo_div = createElement({name:"div",class:"logo-div"});

let logo = createElement({name:"img",src:obj[5].image,class:"provider-logo"});
let providerInput = createElement({name:"input",class:"provider-input",value:" "});
let providerBtn = createElement({name:"button",class:"provider-btn",value:"delete"});
let btnZero = createElement({name:"button",class:"btn-zero",value:"0"});
btnZero.innerHTML = "0";

btnZero.addEventListener('click',function(){
    
    providerInput.value+=btnZero.value;       
})
let home = createElement({name:"div",class:"home"});
let homeText = createElement({name:"p",class:"home-text"});
let homeIcon = createElement({name:"i",class:"home-icon fas fa-home"})

homeText.innerHTML = localStorage.getItem("home");
home.addEventListener("click",function(){
    document.location.href = "index.html";
})

providerBtn.innerText = localStorage.getItem("btn");
providerBtn.addEventListener('click',function(){
    providerInput.value = providerInput.value.slice(0,-1);
})


let buttonsContainer = createElement({name:"div",class:"btn-container"});
let row = createElement({name:"div",class:"row"});
for(let i=1; i<=9;i++){
    
    let buttons = createElement({name:"button",class:"btns",value:i});
    buttons.innerHTML = i;
    buttonsContainer.appendChild(row);
    row.appendChild(buttons);
    buttons.addEventListener('click',function(){
      providerInput.value+=buttons.value;
         
        if(providerInput.value.length==10){
       
         var con = createElement({name:"button",class:"con"});
         container.appendChild(con);
         con.innerHTML = localStorage.getItem("btn1");
        }
        else if(providerInput.value.length>=10){
            buttons.value=" ";
        }
              
    })

    let linebreak = createElement({name:"br"});
    if(i%3==0){
       row.appendChild(linebreak);

    }
    
}
if(providerInput.value.length==10){
    
}

logo_div.appendChild(logo);

container.appendChild(logo_div);
container.appendChild(providerInput);
container.appendChild(providerBtn);
container.appendChild(buttonsContainer);
row.appendChild(btnZero);
row.appendChild(home);
home.appendChild(homeText);
home.appendChild(homeIcon);
document.body.appendChild(container);


}   
createBody(baseConfig);