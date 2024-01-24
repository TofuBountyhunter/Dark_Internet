///////////////////////////-image Loading in home page part-///////////////////////////////

let card_img =document.querySelectorAll(".card_image")
let loading_ani =document.querySelector(".load_animation")
card_img.forEach(element =>{
    function loaded(){
        element.classList.add("img_loaded");
        loading_ani.classList.remove("loading_img_ani");

    }
    let img = element.querySelector("img");
    if (img.complete){
        loaded();
    }
    else{
        img.addEventListener("load",loaded())
    }
})

///////////////////////////-image Loading in home page part-///////////////////////////////

///////////////////////////-User Agreement in home page part-///////////////////////////////
// let button= document.querySelector(".agree_button");
// let background_img= document.querySelector(".user_agreement");

// button.addEventListener("mouseover",()=>{
//     background_img.style.background =' url("Photos And Videos/creepy_project/5.jpg")';
//     background_img.style.backgroundRepeat ='no-repeat';
//     background_img.style.backgroundAttachment =' fixed';
//     background_img.style.backgroundPosition ='center';
//     background_img.style.backgroundSize =' cover';
//     background_img.style.transition =" all 5s linear 0s";


//     // background_img.classList.add("img");//transaction doesnt work on classlist
// })
// button.addEventListener("mouseleave",()=>{
//     background_img.style.background =' none';
//     background_img.style.backgroundRepeat ='no-repeat';
//     background_img.style.backgroundAttachment =' fixed';
//     background_img.style.backgroundPosition ='center';
//     background_img.style.backgroundSize =' cover';
//     background_img.style.transition =" all 5s linear 0s";




//     // background_img.classList.remove("img");})
// });
///////////////////////////-User Agreement in home page part-///////////////////////////////

///////////////////////////-Agree button to home page-///////////////////////////////
let agree_button =document.querySelector(".agree_button");
let home_main= document.querySelector("main");
let home_footer= document.querySelector("footer");
let agree_page=document.querySelector(".user_agreement");
let signin = true;
    if (!signin){
        agree_button.addEventListener("click",()=>{
            home_main.style.display="block";
            home_footer.style.display ="flex";
            agree_page.style.display="none"
        })
    }
    else{
        home_main.style.display="block";
        home_footer.style.display ="flex";
        agree_page.style.display="none"
    }




///////////////////////////-Agree button to home page-///////////////////////////////
