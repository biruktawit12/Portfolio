const navbar=document.querySelectorAll('.navbar-links')[0];
const nav=document.querySelector(".nav-bar");
const links=document.querySelectorAll('.link');
const humber=document.querySelectorAll('.humberger')[0];
const hum1=document.querySelector('.hum1');
const hum2=document.querySelector('.hum2');
const hum3=document.querySelector('.hum3');


humber.addEventListener('click',()=>{
        navbar.classList.toggle('active');
        nav.classList.toggle('navigation');
        // links.forEach(link=> link.classList.toggle('visiblelink'));
        hum1.classList.toggle('open1');
        hum2.classList.toggle('open2');
        hum3.classList.toggle('open3');
        
})


















/*  */

const project=document.getElementsByClassName('project');
const icons=document.getElementsByClassName('fa-brands');

const lan=document.querySelectorAll('languages');

const appearoptions={
        rootMargin: '0px 0px -50px 0px'
}


const observer=new IntersectionObserver(function(

        entries,appearOnScroll
    ){
     entries.forEach(entry =>{
        if(!entry.isIntersecting){
            return
        }else{
           entry.target.classList.toggle('show') ;
           appearOnScroll.unobserve(entry.target)
        }
     })
    },appearoptions)


    const projects=document.querySelectorAll('.project')    
    projects.forEach(project=> observer.observe(project))

    const h1s = document.querySelectorAll('h1');
    h1s.forEach(h1 => observer.observe(h1));


    const h4s = document.querySelectorAll('h4');
    h4s.forEach(h4 => observer.observe(h4)); 

    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => observer.observe(button));

    const h2s = document.querySelectorAll('h2');
    h2s.forEach(h2 => observer.observe(h2));

    const paras = document.querySelectorAll('p');
    paras.forEach(p => observer.observe(p));

    const h3s=document.querySelectorAll('h3');
    h3s.forEach(h3 => observer.observe(h3));

    const inputs=document.querySelectorAll('input');
    inputs.forEach(input => observer.observe(input));

    const message=document.querySelector('textarea');
    observer.observe(message);


    const is=document.querySelectorAll('i');
    is.forEach(i=> observer.observe(i));
