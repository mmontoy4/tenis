const s = (p) => {
  var pilota;
  var noia;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(1500, 800);
    pilota=p.createSprite(800,300);
    pilota.addAnimation('run','sprites/pilota/bola1.png','sprites/pilota/bola10.png');
    pilota.changeAnimation('run');
    //Noia
    noia=p.createSprite(100,200);
    noia.addAnimation('run','sprites/noia/Walk (1).png','sprites/noia/Walk (16).png');
    noia.changeAnimation('run');

  }

  p.draw = function() {
    p.background(155);
    p.drawSprites();
  }
}
let myp5 = new p5(s, 'myContainer');
