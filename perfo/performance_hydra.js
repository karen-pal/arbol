let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

src(s0)
.layer(scan().scrollX(.001))
//.scale(()=>mouse.x*.001)
.scale([.8,1.4].smooth())
  .diff(src(s0).scale(1.1))
.diff(src(s0).scale(.8))
 // .modulate(o0,.1)

  .out()


speed=.1


//reel
let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

let pix = ()=> src(o0).modulate(matrix(2).pixelate(),.3)
//s0.initScreen()
src(s0)
.layer(pix())
  .diff(src(s0).scale(1.1))
.diff(src(s0).scale(.8))
.mask(shape(2).rotate(Math.PI/2))
.modulate(osc().pixelate())
.kaleid(2).kaleid(2)
//.scale(()=>mouse.x*.001)
//.scale([.8,1.4].smooth())
 // .modulate(o0,.1)
.mask(src(s0).invert())
  .out()


speed=.1

//full madness
//let scan = () => src(o0).mask(shape(4,2).scale(0.5,0.7).scrollY(0.25).scrollX(0,.2))

let pix = ()=> src(o0).modulate(matrix(2).pixelate(),.3)
//s0.initScreen()
src(s0)
.layer(pix())
  .diff(src(s0).scale(1.1))
.diff(src(s0).scale(.8))
.modulate(osc().pixelate())
.kaleid(2).kaleid(2)
//.scale(()=>mouse.x*.001)
//.scale([.8,1.4].smooth())
 // .modulate(o0,.1)
.mask(src(s0).invert())
  .out()


speed=.1
