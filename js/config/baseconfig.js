let baseConfig = {
    "azeFlag" : "img/az.png",
    "rusFlag" : "img/rus.png",
    "engFlag" : "img/eng.png",
     "topProviders" : 
     
     [
          { // Azercell deymiriyik.
        name: "Azercell",
        order : 1,
        bgColor : "#664981",
        image : "top7/img/azercell_log.png",
        scriptsrc: "js/config/provider/lang/aze/azercell.js"
    },
     {
        name: "Alfanet",
        order : 2,
        bgColor : "#ae3fe6",
        image : "top7/img/alfanetpen.png",
        scriptsrc: "js/config/provider/lang/aze/alfanet.js"
    },
    
     {
        name: "Bakcell",
        order : 3,
        bgColor : "#891818",
        image : "top7/img/bakcell.png",
        scriptsrc: "js/config/provider/lang/aze/bakcell.js"
    },
     {
        name: "AzeriQaz",
        order : 4,
        bgColor : "#004dcd",
        image : "top7/img/azeriqaz.png",
        scriptsrc: "js/config/provider/lang/aze/azeriqaz.js"
    },
     {
        name: "AzerSu",
        order : 5,
        bgColor : "#0080c9",
        image : "top7/img/azersu-logo.png",
        scriptsrc: "js/config/provider/lang/aze/azersu.js"
    },
     {
        name: "Nar",
        order : 6,
        bgColor : "#92278f",
        image : "top7/img/azerfon.png",
        scriptsrc: "js/config/provider/lang/aze/azerfon.js"
    },
     {
        name: "Baki Elektrik Sebeke",
        order : 7,
        bgColor : "#170c51",
        image : "top7/img/bakielektriksebeke.png",
        scriptsrc: "js/config/provider/lang/aze/bakielektriksebeke.js"
    }
],
"bodyProviders" : [
  {
      name: "komunal",
      order: 1,
      bgColor :"#175DB3",
      iconClass : "fas fa-fire",
      text:"Komunal <br> odenisleri",
      ruText :"Коммунальные <br> Услуги",
      engText : "<br> Utility"

  },
  {
    name: "mobile",
    order: 2,
    bgColor :"#FFAA01",
    iconClass : "fas fa-mobile-alt",
    text:"Mobil <br> operatorlar",
    ruText :"Мобильная <br> Связь",
    engText : "Mobile <br> Operators"

},
{
    name: "bank",
    order: 3,
    bgColor :"#3D1E7B",
    iconClass : "fas fa-money-bill-alt",
    text:"Bank <br> xidmetleri",
    ruText :"<br> Банка",
    engText : "<br> Bank"

},
{
    name: "belediyye",
    order: 4,
    bgColor :"#B11DA5",
    iconClass : "fas fa-university",
    text:"Dovlet ve <br> Belediyye",
    ruText :"<br> Правительство",
    engText : "<br> Government"

},
{
    name: "tv",
    order: 5,
    bgColor :"#44801C",
    iconClass : "fas fa-tv",
    text:"<br> TV",
    ruText :"<br> ТВ",
    engText : "<br> TV"

},
{
    name: "internet",
    order: 6,
    bgColor :"#F03A24",
    iconClass : "fas fa-wifi",
    text:"<br> Internet",
    ruText :"<br> Интернет",
    engText : "<br> Internet"

},
{
    name: "kart",
    order: 7,
    bgColor :"#0187C4",
    iconClass : "fas fa-credit-card",
    text:"Odenis <br>  kartlari",
    ruText :"Кредитная <br>  карта",
    engText : "Credit <br>  cards"

},
{
    name: "game",
    order: 8,
    bgColor :"#B11E48",
    iconClass : "fas fa-gamepad",
    text:"Eylence ve <br>  oyunlar",
    ruText :" <br> Игра",
    engText : "<br> Games"

},
{
    name: "e-pulqabi",
    order: 9,
    bgColor :"#B57720",
    iconClass : "fas fa-wallet",
    text:"Komunal <br> odenisleri",
    ruText:"<br> Е-портмоне",
    engText:"<br> E-wallet"


}

],
"ads" : 
[
   {
       name:"leftAd",
       bgImage:"url(img/ad1.jpg)"
   },
   {
    name:"rightAd",
    bgImage:"url(img/ad2.jpg)"
}
]
}

