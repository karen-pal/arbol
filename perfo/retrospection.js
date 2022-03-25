let pix = () =>
  osc(1.278, 2, 0.2)
    .mask(circles().scale(0.2).kaleid(2))
    .scale([1.1, 1.5])
    .diff(o0)
    .pixelate(30)
    .color(1, 0, 0);
let scan = () =>
  src(o0).mask(
    shape(4, 2)
      .scale(0.5, 0.7)
      .scrollY(0.25)
      .scrollX(0, 0.2)
  );
// s0.initScreen() //video
// s1.initScreen() //pantalla
// s2.initScreen() //arbol
src(s1)
//.layer(src(s1).luma(.1))
  .scrollX(-0.5)
  .scale(2)
  .modulate(osc().pixelate(),.01)
 // .modulate(circles(), [0.01, 0.1].smooth())
  //.layer(src(s2).luma(.1).modulate(scan().scrollX(.1)))
  .modulateScale(src(s1),[-.4,.4].smooth())
//.modulate(eclipse().modulate(o0),()=>Math.tan(time))
//.modulate(outrun().scrollY(0,.1),.01)
.layer(scan().scrollX(.001).kaleid(2).kaleid(2))
.layer(src(s2).luma(.1))
//.contrast(2)
  .out();
// .scrollY(0,.1)
// .contrast(2)
// .modulate(circles(),.01)
// .modulate(eclipse().kaleid(2).kaleid(2),()=>Math.tan(time))
// .layer(src(s0).scale(.6).luma(.1))
// .modulate(src(s1).contrast(2),[-.1,.5,.2,.0].smooth())
// .mask(src(s2).invert())
speed = .4;

