// var tl = gsap.timeline()
tl.from(".heading h1", {
  duration:1,
   opacity:0,
 delay:.7
 
 })
tl.from("#nav ul li a", {
  // color: "white",
  opacity:0,
  stagger:.2,
  duration: 1,
  y: -100,

})


tl.to(".scrolldown", {
  delay: .5,
  y: -50,
  duration: .7,
  yoyo: true,
  repeat: 3,
  opacity: 1
})
