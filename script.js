//Header toggler

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing effect
let typed = new Typed(`.auto-input`,{
    strings: [`Full-Stack Developer`, `Java Programmer`,`UI/UX Designer`],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop: true,

})

//Active Link State on scroll

//Get All links
let navLinks = document.querySelectorAll('nav ul li a')
//get All Actions
 let sections= document.querySelectorAll('section')


 window.addEventListener('scroll',function(){
    const scrollPos = window.scrollY + 20
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id')=== link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
 });