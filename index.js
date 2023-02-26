const ourItems=document.getElementsByClassName("item");
const openIcons=document.getElementsByClassName("icon_plus");
const closeIcons=document.getElementsByClassName("icon_minus");
for (let i=0;i<ourItems.length;i++){
    closeIcons[i].style.display="none";
    ourItems[i].addEventListener("click",()=>{
        ourItems[i].classList.toggle("active");
    })
}