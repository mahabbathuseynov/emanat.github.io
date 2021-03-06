let dateFunctions = {
    
    addZero:(m)=>{
        if (m < 10) {m = "0" + m};
        return m;
    },
    
    show_clock :  function() {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();  
        setInterval(this.show_clock,500);   
        let calculatedDate=dateFunctions.addZero(m);  
        document.getElementsByTagName("span")[0].innerHTML = `${h} : ${calculatedDate} <br>`;
    },
    
    show_date : function() {
        var date = new Date();
        var d = date.getDate();
        var months = ["yanvar","fevral","mart","aprel","may","iyun","iyul",
        "avqust","sentyabr","oktyabr","noyabr","dekabr"];
        document.getElementsByTagName("span")[1].innerHTML = d + " " + months[date.getMonth()] + "<br>";
    },
    
    show_day : function(){
        var date = new Date();
        var days = ["bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı",
         "cümə", "şənbə", "bazar"]
        document.getElementsByTagName("span")[2].innerHTML = days[date.getDay()-1];
        }
    }
    