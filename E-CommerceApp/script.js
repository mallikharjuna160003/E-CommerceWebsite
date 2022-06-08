const bar = document.getElementById("bar")
const close = document.getElementById('close')
const nav = document.getElementById("navbar")

if( bar ){
    bar.addEventListener('click',()=>{
        nav.classList.add('active')
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active')
    })
}

// var img = document.getElementById("img");
// img[0].onclick  = function(){
//     MainImg.src = img[0].src;
// }
// img[1].onclick  = function(){
//     MainImg.src = img[1].src;
// }
// img[2].onclick  = function(){
//     MainImg.src = img[2].src;
// }
// img[3].onclick  = function(){
//     MainImg.src = img[3].src;
}