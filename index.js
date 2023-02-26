const ourItems=document.getElementsByClassName("item");
const openIcons=document.getElementsByClassName("icon_plus");
const closeIcons=document.getElementsByClassName("icon_minus");
for (let i=0;i<=ourItems.length;i++){
    closeIcons[i].style.display="none";
    ourItems[i].addEventListener("click",()=>{
        const result=ourItems[i].classList.toggle("active");
        if(result){
            closeIcons[i].style.display="block";
            openIcons[i].style.display="none";
        }else{
            closeIcons[i].style.display="none";
            openIcons[i].style.display="block";
        }
    })
}