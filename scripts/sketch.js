var dino;
var noia;
var time;
const s = (p) => {
  var pilota;
  var fondo;
  var walltop;
  var wallbottom;
  var swing;
  p.preload = function() {

    fondo = p.loadImage("img/pissta.png");
    pilota = new Ball(p);


    noia = new Player(p,"Jugador1");
    dino = new Player(p,"Jugador2");
    time = 60;

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
    if (p.frameCount % 60 === 0 && time > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
      time--;
    }
    if(time !== 0){
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
      if(pilota.ballSprite.bounce(noia.spritePlayer)) {
        swing = (pilota.ballSprite.position.y-noia.spritePlayer.position.y)/3;
        pilota.ballSprite.setSpeed(pilota.speed * 1.10, pilota.ballSprite.getDirection()+swing);
        pilota.speed = pilota.speed * 1.10;
      }

      if(pilota.ballSprite.bounce(dino.spritePlayer)) {
        swing = (pilota.ballSprite.position.y-dino.spritePlayer.position.y)/3;
        pilota.ballSprite.setSpeed(pilota.speed * 1.10, pilota.ballSprite.getDirection()-swing);
        pilota.speed = pilota.speed * 1.10;
      }

      if(pilota.ballSprite.position.x<0) {
        pilota.ballSprite.position.x = p.width/2;
        pilota.ballSprite.position.y = p.height/2;
        pilota.ballSprite.setSpeed(pilota.speed * 1.10, 0);
        pilota.speed = pilota.speed * 1.10;
        dino.points = dino.points + 1;
        console.log(dino.points);
        console.log(dino.points);
      }

      if(pilota.ballSprite.position.x> p.width) {
        pilota.ballSprite.position.x = p.width/2;
        pilota.ballSprite.position.y = p.height/2;
        pilota.ballSprite.setSpeed(pilota.speed * 1.10, 180);
        pilota.speed = pilota.speed * 1.10;
        noia.points = noia.points + 1;
      }
    }
  }
}
let myp5 = new p5(s, 'myContainer');