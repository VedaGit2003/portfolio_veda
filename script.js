function valueSetters(){
    gsap.set("#nav a",{
        y:"-100%",
        opacity:0
    })
    gsap.set("#home span .child",{
        y:"100%"
    })
    gsap.set("#home .row #wa",{
        opacity:0
    })
    gsap.set("#home .arrow img",{
        opacity:0
    })
}
function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
       var parent = document.createElement("span")
       var child=document.createElement("span")
    
       parent.classList.add("parent")
       child.classList.add("child")
    
       child.innerHTML=elem.innerHTML
    
       parent.appendChild(child)
    
       elem.innerHTML=""
       elem.appendChild(parent)
    })
}
function loaderAnimation(){
    var t1=gsap.timeline()
// t1.to("")

t1
.from("#loader .child span",{
    x:100,
    duration:1.4,
    delay:1,
    stagger: .2,
    ease: Power3.easeInOut,

})
.to("#loader .parent .child",{
    y:"-100",
    ease: Circ.easeInOut,
    duration:1,
})
.to("#loader",{
    height:0,
    duration:1,
    ease:Circ.easeInOut
})
.to("#green",{
    height:"100%",
    top:0,
    duration:1,
    delay:-.5,
    ease:Circ.easeInOut
})
.to("#green",{
    height:"0%",
    duration:1,
    delay:-.3,
    ease:Circ.easeInOut,
    onComplete:function(){
        animateHomepage()
    }
})
}
function animateHomepage(){
var tl=gsap.timeline();
tl
.to("#nav a",{
    y:"0%",
    opacity:1,
    stagger: .05,
    duration:2,
    ease:Expo.easeInOut
})
.to("#home .parent .child",{
    y:0,
    stagger: .1,
    duration:1,
    ease:Expo.easeInOut
})
.to("#home .row #wa",{
    opacity:1,
    ease:Circ.easeInOut,
    duration:1
})
.to("#home .arrow img",{
    opacity:1,
    ease:Expo.easeInOut,
    // onComplete:function(){
    //     locoInitialize()
    // }
})
}
function locoInitialize(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main,#pr'),
        smooth: true
    });
}
function cardHoverEffect(){
    document.querySelectorAll(".cnt")
    .forEach(function(cnt){
        var showingImage;
        cnt.addEventListener("mousemove",function(dets){
         document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity=1;
         showingImage=dets.target
         document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px, ${dets.clientY+2660}px)`;
         showingImage.style.filter="grayscale(1)"
         document.querySelector("#work").style.backgroundColor="#"+dets.target.dataset.color
     
        })
        cnt.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity=0;
            // document.querySelector("#cursor").children[dets.target.dataset.index].style.transform=`translate(${dets.clientX}px, ${dets.clientY+2640}px)`;
           showingImage.style.filter="grayscale(0)" 
           document.querySelector("#work").style.backgroundColor="#fff" 
        })
    })
}
// Get the current year

revealToSpan()
valueSetters()
loaderAnimation()
locoInitialize()
cardHoverEffect()

