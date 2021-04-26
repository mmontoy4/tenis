const s = (p) => {
  var pilota;
  var noia;
  var dino;
  var fondo;
  var walltop;
  var wallbottom;

  p.preload = function() {

    fondo = p.loadImage("img/pissta.png");
    pilota = new Ball(p);


    noia = new Player(p,"Jugador1");
    dino = new Player(p,"Jugador2");

  }

  p.setup = function() {
    p.createCanvas(1100, 700);
    p.walltop = p.createSprite(p.width/2, -30/2, p.width, 30);
    p.walltop.immovable = true;

    p.wallbottom = p.createSprite(p.width/2, p.height+30/2, p.width, 30);
    p.wallbottom.immovable = true;
    pilota.saqueInicial(p);

  }

  p.draw = function() {
    p.background(fondo);
    pilota.ballSprite.bounce(p.walltop);
    pilota.ballSprite.bounce(p.wallbottom);
  //  dino.mirrorX(-1);
    p.drawSprites();

    if(p.keyIsDown(p.UP_ARROW)){
      dino.moveUp();
      //dino.position.y = dino.position.y-5;
    }
    if(p.keyIsDown(p.DOWN_ARROW)){
      dino.moveDown();
      //dino.position.y = dino.position.y+5;
    }

    if(p.keyDown('w')){
       noia.moveUp();
       //noia.position.y = noia.position.y-5;
     }
     if(p.keyDown('s')){
       noia.moveDown();
       //noia.position.y = noia.position.y+5;
     }

  }
}
let myp5 = new p5(s, 'myContainer');
