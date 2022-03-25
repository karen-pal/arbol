//principio
//
//circles(.4).kaleid(2)
.modulate(o0,[-.1,.1].smooth())
.scale(1.2)
.modulate(o0,.01)
shape(4,.1,.4)
.diff(circles())
osc(3,-2,.2)//.color(()=>Math.sin(time),0,0)
A
//.layer(scan().scrollX(.001).kaleid(2).kaleid(2))
.modulate(o0,()=>mouse.x*.001)
.modulate(o0)
  .blend(solid(0))
//.kaleid(2)
  .out()

speed=.1

//scan
let pix = () => osc(1,2,.2).mask(circles().scale(.2).kaleid(2)).scale([1.1,1.5]).diff(o0).pixelate(30).color(1,0,0)
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

//s1.initScreen()
src(s1)//.contrast(2)//.layer(scan().scrollX(.01)).kaleid(2).kaleid(2)
//  .diff(o0)
.layer(scan().scrollX(.001).kaleid(2).kaleid(2))
.scale(.88888)
.scale(1.111)
.contrast(1.1)
//.modulate(osc().pixelate())
//.mask(eclipse())
//solid(0)
//osc()
//.blend(solid(0))
  .out()


//retrospection
let pix = () => osc(1,2,.2).mask(circles().scale(.2).kaleid(2)).scale([1.1,1.5]).diff(o0).pixelate(30).color(1,0,0)
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

//s1.initScreen()
src(s0)//.contrast(2)//.layer(scan().scrollX(.01)).kaleid(2).kaleid(2)
.diff(src(s1)  .scale(2))

//.scrollX(.1)
  .scrollY(0,.1)

.layer(scan().scrollX(.01).kaleid(2).kaleid(2))
  .modulate(circles().pixelate(),()=>mouse.x*.001)
//.diff(o0)
  .layer(src(s1).modulate(o0,[0,.1].smooth()).luma(.1))
//.contrast(1.2)
  .out()
speed=1
//11+1*--
//
//
////bola
let pix = () => osc(1,2,.2).mask(circles().scale(.2).kaleid(2)).scale([1.1,1.5]).diff(o0).pixelate(30).color(1,0,0)
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))
//s2 bola
//s1 arbol
//s2.initScreen()
//s1.initScreen()
src(s2)//.contrast(2)//.layer(scan().scrollX(.01)).kaleid(2).kaleid(2)
//.diff(src(s1)  .scale(2))
.scale(.8)
.modulate(eclipse(),()=>Math.tan(time))
//.scrollX(.1)
  //.scrollY(0,.1)

.layer(scan().scrollX(.01).kaleid(2).kaleid(2))
  //.modulate(circles().scale(2).pixelate(),()=>mouse.x*.01)
//.diff(o0)
  .layer(src(s1).modulate(o0,[0,.1].smooth()).luma(.1))
//.contrast(1.2)
  .out()
speed=1
//11+1*--*
//
//
//solo con arbol
let pix = () => osc(1,2,.2).mask(circles().scale(.2).kaleid(2)).scale([1.1,1.5]).diff(o0).pixelate(30).color(1,0,0)
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

//s2.initScreen()
//s1.initScreen()
src(s1)//.contrast(2)//.layer(scan().scrollX(.01)).kaleid(2).kaleid(2)
//.diff(src(s1)  .scale(2))
.scale(1.8)
.modulate(eclipse(),()=>Math.tan(time))
//.scrollX(.1)
  //.scrollY(0,.1)

.layer(scan().scrollX(-.001))
  //.modulate(circles().scale(2).pixelate(),()=>mouse.x*.01)
//.diff(o0)
  .layer(src(s1).modulate(o0,[0,.1].smooth()).luma(.1))
//.modulate(o0,.001)
//.contrast(1.2)
  .out()
speed=1
//11+1*--*2222
