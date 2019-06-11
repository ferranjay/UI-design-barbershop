// om de gsap effecten op tijd te laden en soepel in beeld te brengen
// gebruik gemaakt van een addEventListener

// alles wat in deze functie zit laad de code die we willen laten zien
document.addEventListener("DOMContentLoaded", function(event){

    //
    window.addEventListener("load", function(e) {

    document.body.style.display = "block";

    var tl = new TimelineMax();

    tl.staggerFrom('section', 2,{
        opacity: 0,
        scale: .5,
        ease: Power3.easeOut
    }, 0.8)
    
    tl.staggerFrom('h1, h2', .5, {
        opacity: 0,
        y: -40,
        ease: Power3.easeInOut
    }, 0.1, "-=1")
    
    tl.staggerFrom('.anim-panel', 1, {
        opacity: 0,
        y: -40,
        ease: Power3.easeInOut
    }, 0.2, "-=1.5")
    
    }, false);

})

