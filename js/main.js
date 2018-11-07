
function createElement(obj){
    let order_li =new Array();
    
    if(!obj.hasOwnProperty("name")){
        alert("can't create element");
        return;
    }
    let element = document.createElement(obj.name);

    if(obj.hasOwnProperty("class") == true){
        element.setAttribute("class",obj.class);
    }
    if(obj.hasOwnProperty("alt")){
        element.setAttribute("alt",obj.alt);
    }
    if(obj.hasOwnProperty("src")){
        element.setAttribute("src",obj.src);
    }
    if(obj.hasOwnProperty("style_bgColor")){
        element.style.backgroundColor = obj.style_bgColor;
    }
    if(obj.hasOwnProperty("value")){
        element.setAttribute("value",obj.value);
    }
    if(obj.hasOwnProperty("scriptsrc")){
        element.setAttribute("src",obj.scriptsrc);
    }
    if(obj.hasOwnProperty("bgImage")){
        element.style.backgroundImage = obj.bgImage;
    }
    
    
    
   
    return element;
}
// function createElement(obj){
// let atribut=null;
// let element = document.createElement(obj.name);
// swicth(atribut) {
// case obj.class : atribut = element.setAttribute("class",obj.class);
// case obj.alt : atribut = element.setAttribute("alt",obj.alt);
// case obj.src : atribut = element.setAttribute("src",obj.src);
// case obj.ap : atribut = obj.ap.appendChild(element);
// default : atribut = alert("can't create element");
// };
// }

function createHeader(config,dateFunctions){
    
   let header = createElement({name:"header",class:"relative"});
   
   let header_img = createElement({name:"img",src:"img/index_up.png",class:"header-image img"});
   let header_logo = createElement({name:"img",src:"img/logo.png",class:"header-logo absolute img"});
   let header_info = createElement({name:"img",src:"img/info.svg",class:"header-info absolute img"});

   //    created date

    let date_div =  createElement({name:"div",class:"date-div absolute"});

   let clock = document.createElement("span");
   let date = document.createElement("span");
   let day = document.createElement("span"); 

   date_div.appendChild(clock);
   date_div.appendChild(date);
   date_div.appendChild(day);

   

    
   
    

    // added flags

    let flag_div = createElement({name:"div",class:"absolute flag-pos"});

    let img_az   =   createElement({name:"img",src:config.azeFlag, class:"flag"});
    let img_ru   = createElement({name:"img",src:config.rusFlag, class:"flag" });


    let img_eng   = createElement({name:"img",src:config.engFlag, class:"flag"});
    
    flag_div.appendChild(img_az);
    flag_div.appendChild(img_ru);
    flag_div.appendChild(img_eng);
    
    

    // added header in html and added divs in header

    header.appendChild(header_img);
    header.appendChild(flag_div);
    header.appendChild(date_div);

    document.body.appendChild(header);
    document.body.appendChild(header_img);
    document.body.appendChild(header_logo);
    document.body.appendChild(header_info);

    // show date
    // azerbaijan lang
    img_az.addEventListener("click",function(){
        dateFunctions.show_clock();
        dateFunctions.show_date();
        dateFunctions.show_day(); 
        var bodyaz = document.getElementsByClassName("bodyText");
        for(let i = 0; i <= bodyaz.length; i++){
            bodyaz[i].innerHTML = baseConfig.bodyProviders[i].text;
        }
    })
    // russian lang
    img_ru.addEventListener('click', function () { 
        localStorage.setItem("btn","Удалить");
        localStorage.setItem("btn1","Вперед");
        localStorage.setItem("home","Главная Страница")
        let date = new Date();
        let d = date.getDate();
        let monthsRu = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + monthsRu[date.getMonth()] + "<br>";
        let daysRu = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
        document.getElementsByTagName("span")[2].innerHTML = daysRu[date.getDay()-1];
        if(date.getDay() == 0){
            document.getElementsByTagName("span")[2].innerHTML = "Воскресенье";
        };
        var bodyRu = document.getElementsByClassName("bodyText");
        for(let i = 0; i <= bodyRu.length; i++){
            bodyRu[i].innerHTML = baseConfig.bodyProviders[i].ruText;
        }
        
        
        });
        // english lang
    img_eng.addEventListener('click', function () {
        localStorage.setItem("btn","Delete");
        localStorage.setItem("btn1","Next");
        localStorage.setItem("home","Home");
        let date = new Date();
        let d = date.getDate();
        let monthsEng = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + monthsEng[date.getMonth()] + "<br>";
        let daysEng = ["monday", "tuesday", "wednesday", "thursday", "friday","saturday", "sunday"];
        document.getElementsByTagName("span")[2].innerHTML = daysEng[date.getDay()-1];
        if(date.getDay() == 0){
            document.getElementsByTagName("span")[2].innerHTML = "sunday";
        }
        var bodyEng = document.getElementsByClassName("bodyText");
        for(let i = 0; i <= bodyEng.length; i++){
            bodyEng[i].innerHTML = baseConfig.bodyProviders[i].engText;
        }
        });

        localStorage.setItem("btn","Sil");
        localStorage.setItem("btn1","Ireli");
        localStorage.setItem("home","Ana Sehife");
        dateFunctions.show_clock();
        dateFunctions.show_date();
        dateFunctions.show_day(); 
   
}
function objectLength(obj){
    let count = 0;
    for(let f in obj){
        count++;
    }
    return count;
}
// create top 7 providers
function createTopProviders(config){
   
    let divContainer = createElement({name:"div",class:"top-element-container"});

    let count = objectLength(config);
    let totalItemwidth = (100/count)-1;


    
    for(let topItem in config){

     let obj = config[topItem];

    let btn_div = createElement({name:"div",class:"top-img-container",style_bgColor:obj.bgColor});
    let btn_img = createElement({name:"img",src:obj.image,class:"btn-img"});
    let btnProviderSrc = createElement({name:"script",scriptsrc:obj.scriptsrc});



    btn_div.style.width = (totalItemwidth-1)+"%";
    btn_div.style.height = "130px";
    baseConfig.topProviders.sort(function(a,b){
        return a.order - b.order;
    })
    btn_div.addEventListener('click',function(){
         document.location.href = "provider.html";
       
            localStorage.setItem("src",btnProviderSrc.getAttribute("src"));
            
        
    });
    
    divContainer.appendChild(btn_div);
    btn_div.appendChild(btn_img);
    }
    document.body.appendChild(divContainer);
    
}
// create main of website
function createBody(obj){
  let bodyContainer = createElement({name:"div",class:"body-container"})
 for(let f=0;f<9;f++){
     let body_providers = createElement({name:"div",class:"body-main",style_bgColor:obj[f].bgColor});
     let body_Text = createElement({name:"p",class:"bodyText"})
     body_Text.innerHTML = obj[f].text;
     
     let body_icon = createElement({name:"i",class:obj[f].iconClass});
     
     body_providers.appendChild(body_icon);
     body_providers.appendChild(body_Text);

     document.body.appendChild(bodyContainer);
     bodyContainer.appendChild(body_providers);

     
 }
    var utility = document.querySelector(".body-container div:first-child");
    utility.addEventListener("click",function(){
     document.location.href = "inside.html";
    });
    var mobile = document.querySelector(".body-container div:nth-child(2)");
    mobile.addEventListener("click",function(){
     document.location.href = "inside.html";
    });
    var internet = document.querySelector(".body-container div:nth-child(6)");
    internet.addEventListener("click",function(){
     document.location.href = "inside.html";
    });
    

     let leftAd = createElement({name:"div",class:"leftad",bgImage:baseConfig.ads[0].bgImage});
     let rightAd = createElement({name:"div",class:"rightad",bgImage:baseConfig.ads[1].bgImage});
document.body.appendChild(leftAd);
document.body.appendChild(rightAd); 
let leftIcon = createElement({name:"div",class:"lefticon"});
let left_icon = createElement({name:"i",class:"left_icon fas fa-chevron-left"});
let rightIcon = createElement({name:"div",class:"righticon"})
rightIcon.addEventListener("click",function(){
    bodyContainer.style.transform = "translate(-130%,0px)";
    bodyContainer.style.transition = "1s ease-in-out";
    rightIcon.style.display = "none";
    leftIcon.style.display = "inline-block";
    leftIcon.style.animation = "fadeIn 2s ";
    
})
leftIcon.addEventListener("click",function(){
    bodyContainer.style.transform = "translate(0,0)";
    bodyContainer.style.transition = "1s ease-in-out";
    leftIcon.style.display = "none";
    rightIcon.style.display = "inline-block";
    rightIcon.style.animation = "fadeIn 2s ";
   
})
let right_icon =  createElement({name:"i",class:"right_icon fas fa-chevron-right"});

rightIcon.appendChild(right_icon);
leftIcon.appendChild(left_icon);
document.body.appendChild(rightIcon); 
document.body.appendChild(leftIcon);
}
