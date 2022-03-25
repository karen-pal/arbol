let pix = () => osc(1,2,.2).mask(circles().scale(.2).kaleid(2)).scale([1.1,1.5]).diff(o0).pixelate(30).color(1,0,0)
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

//s0.initScreen() //consola
//s1.initScreen() //pantalla
//s2.initScreen() //arbol
src(s0)
.scrollX(-.5)
  .scale(2)
.scrollY(0,.1)
.contrast(2)
//  .modulate(circles(),.01)
.modulate(src(s2).kaleid(2),[-.1,.5,.2,.0])

  .out()

speed=1

