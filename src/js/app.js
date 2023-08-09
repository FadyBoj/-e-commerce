/*document.addEventListener('DOMContentLoaded',()=>{
const cartContainer = document.getElementsByClassName('cart')[0];
const header = document.getElementsByClassName('app--header')[0];
 
window.addEventListener('scroll',()=>{
    if(window.scrollY >= 800)
    {
        console.log(window.screenY)
        header.classList.add('temp')
        setTimeout(()=>{
            header.classList.remove('temp');
            header.classList.add('sticky');
        },50)
        if(cartContainer){cartContainer.style.cssText = 'top:140px'}
    }

})
      


    window.addEventListener('scroll',()=>{
        if (window.scrollY <= 1) {
            header.classList.remove('sticky');
            header.classList.remove('temp');
            if(cartContainer){cartContainer.style.cssText = 'top:0px'}

          }
    })

})
*/