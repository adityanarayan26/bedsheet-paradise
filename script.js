var tl = gsap.timeline()
tl.from(".heading h1", {
  duration: 1,
  opacity: 0,
  delay: .7

})
tl.from("#nav ul li a", {
  // color: "white",
  opacity: 0,
  stagger: .2,
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
gsap.from(".pg2", {
 x:-50,
  duration: 1.5,
  opacity:0,
  scrollTrigger: {
      trigger: ".pg2 ",
      scroller: "body",
      start: "top 50%",
      end: " top 20%",
      markers: true,
      scrub:2
  }
})