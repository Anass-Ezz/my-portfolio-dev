var colors = {
    color_1 : {
        soft : "#F4ECE9",
        dark : "#F0E2DD",
        border_color :"#C1C1C1",
        card_color :"#e0d0c8",
        film_color :"#ffe9dd",
    },
    color_2 : {
        soft : "#192734",
        dark : "#15202B",
        border_color :"#0f6c7a",
        card_color :"#243749",
        film_color :"#314f6b",
        
    },
    color_3 : {
        dark : "#313131",
        soft : "#202020",
        border_color :"#1D1520",
        card_color :"#242323",
        film_color :"#242323",
    },
    color_4 : {
        dark : "#46344E",
        soft : "#382A3F",
        border_color :"#1D1520",
        card_color :"#2a1733",
        film_color :"#532e66",
    },
  
}

var root = document.querySelector(":root")
root.style.setProperty("--screen-width", window.screen.width+"px");

function handleColor(color){
    if (localStorage.getItem("color") != color){
        console.log("yeah")
        localStorage.setItem("color", color)
        setColor()
    }
}

function setColor(){
    var color_buttons = document.querySelectorAll(".colors")
    var logo_white = document.querySelectorAll(".logo-white")
    var logo_black = document.querySelectorAll(".logo-black")
    var picked_color = localStorage.getItem("color")
    console.log(picked_color)
    if(!picked_color){
        localStorage.setItem("color", "color_2")
    }
    color_buttons.forEach(color_button =>{
        if (color_button.id == picked_color){
            color_button.style.boxShadow = "0px 0px 10px 0px #0ff"
        }else{
            color_button.style.boxShadow = ""
            color_button.style.border = "solid 1px black"

        }
        
    })
    
    
    if (picked_color == "color_1"){
        root.style.setProperty("--text-color",  "#10344C");
        logo_black.forEach(Element=>{

            Element.hidden = false
        })
        logo_white.forEach(Element=>{

            Element.hidden = true
        })
        
    }
    
    else{
        
        root.style.setProperty("--text-color",  "white");
        logo_black.forEach(Element=>{
    
            Element.hidden = true
        })
        logo_white.forEach(Element=>{
    
            Element.hidden = false
        })        
    }

    root.style.setProperty("--dark-color",  colors[picked_color].dark);
    root.style.setProperty("--soft-color", colors[picked_color].soft);
    root.style.setProperty("--border-color", colors[picked_color].border_color);
    root.style.setProperty("--card-color", colors[picked_color].card_color);
    root.style.setProperty("--film-color", colors[picked_color].film_color);
  

}

setColor()

