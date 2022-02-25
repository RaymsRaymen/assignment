// const boo =() =>{
// return(
// <box
// sx={{
//     height:{lg:"300px",md:"300px",sm:"260px",xs:"260p"},
//     width:{lg:"1239px",md:"935px",sm:"327px",xs:"327px"},
// flexDirection:"row",
// position:"relative",
// background:"red",
// display:"flex"
// }}
// >
//     <box>
//         sx={{
//             height:{lg:"300px",md:"300px",sm:"260px",xs:"260p"},
//             width:{lg:"1239px",md:"935px",sm:"327px",xs:"327px"},
//             flexDirection:"column",
//             position:"relative",
//             display:"flex",
//             background:"#FFFFFF"
//             }}
        
//     </box>

//             </box>
// )
// }
const menu=document.querySelector('#mobile-menu')
const mentLinks = document.querySelector('.navbar__menu')
const navLogo=document.querySelector('#navbar__logo')

const mobileMenu =() =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click',mobileMenu);

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY

if(window.innerWidth > 960 && scrollPos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
} else if(window.innerWidth>960 && scrollPos<1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
} else if (window.innerWidth >960 && scrollPos <2345){
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
}
if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
    elem.classList.remove('highlight')
}
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click',highlight);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        menu,classList.toogle('is-active')
        menuLinks.classLIst.remove('active')
    }
}

menuLinks.addEventListener('click',hideMobileMenu);
navLogo.addEventListener('click',hideMobileMenu);