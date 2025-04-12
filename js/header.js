let header = document.querySelector("header")
window.onscroll = function(){
    if(window.scrollY > 100){
        header.style.background = "rgb(32, 54, 54)"
        header.style.borderBottom = "solid wheat 1px"

    }
    else{
        header.style.background = "rgba(0, 0, 0, 0)"
        header.style.borderBottom = "none"

    }
}
