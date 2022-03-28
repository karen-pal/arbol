let pix = () =>
  osc(0.945, 2, 0.2)
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
// s0.initScreen() //consola
// s1.initScreen() //pantalla
// s2.initScreen() //arbol
// s3.initScreen()
src(s0)
  .scrollX(-0.3)
  .scale(1.6)
  .scrollY(0, 0.1)
  .layer(src(s0).contrast(1.2).luma(0.1))
  .modulate(circles().pixelate(), 0.01)
  .layer(scan().scrollX(-0.01).kaleid(2).kaleid(2))
.modulate(circles(),.01)
.modulate(o0,.01)
  .out();
// .modulate(o0, 0.01)
// .contrast(1.2)
// .modulate(eclipse(),[-.1,.1].smooth())
// .modulate(circles().pixelate().kaleid(2), 0.01)
// .layer(src(s1).luma(.1))
// .modulate(s1,[-.01,.5].smooth())
// .modulate(o0,.7)
// .modulate(circles().pixelate())
// .modulate(src(s2).kaleid(2),[-.1,.5,.2,.0])
// .invert([1,0].fast(12))
// .modulate(eclipse(),()=>Math.tan(time))
// .modulate(o0)
// hush()
speeda = 1;
// +-

