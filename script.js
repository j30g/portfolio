let scrollLinks=document.querySelectorAll('.nav__links i')
let sections=document.querySelectorAll('.content .sections')

// activate nav bar if meet the specific scroll Y value
window.addEventListener('scroll',()=>{
    if(window.scrollY<sections[1].offsetTop){
        scrollLinks.forEach(link=>{
            scrollLinks[0].classList.add('scrollActive')
            link.classList.remove('scrollActive')
        })
    }
    else if(window.scrollY>=sections[1].offsetTop-100){
        scrollLinks.forEach(link=>{
            scrollLinks[1].classList.add('scrollActive')
            link.classList.remove('scrollActive')
        })
    }
    if(window.scrollY>=sections[2].offsetTop-100){
        scrollLinks.forEach(link=>{
            scrollLinks[2].classList.add('scrollActive')
            link.classList.remove('scrollActive')
        })
    }
    if(window.scrollY>=sections[3].offsetTop-100){
        scrollLinks.forEach(link=>{
            scrollLinks[3].classList.add('scrollActive')
            link.classList.remove('scrollActive')
        })
    }
    if(window.scrollY>=sections[4].offsetTop-100){
        scrollLinks.forEach(link=>{
            link.classList.remove('scrollActive')
            scrollLinks[4].classList.add('scrollActive')
            
        })
    }

    //hide/show nav bar is meet the scroll Y value
    if(window.scrollY==0){
        nav_bar_check.checked=true
        nav_bar_links.classList.add('activate_bar')
     }else if(window.scrollY>0){
        nav_bar_check.checked=false
        nav_bar_links.classList.remove('activate_bar')
     }

});


//smooth scroll uppon click
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 600, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });

  
let nav_bar_check=document.querySelector('#nav_bar');
let nav_bar_links=document.querySelector('.scroll_section ul');

function bar_check(){
    if(nav_bar_check.checked==true){
        nav_bar_links.classList.add('activate_bar')
    }else{
        
        nav_bar_links.classList.remove('activate_bar')
    }
};
    
  
let check_card=document.querySelector('#check_card');

let self_card=document.querySelector('.self_card');

function card_show(){
    if(check_card.checked==true){
        
        self_card.classList.add('activate_card')
        document.querySelector('.show_card label i').style.rotate='-180deg'

    }else{
        
        self_card.classList.remove('activate_card')
        document.querySelector('.show_card label i').style.rotate='0deg'    
    }
}

 