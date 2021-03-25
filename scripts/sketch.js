const s = (p) => {
  var pilota;
  var noia;
  var dino;

  p.preload = function() {

  }

  p.setup = function() {
    p.createCanvas(1500, 900);
    pilota=p.createSprite(500,500);
    pilota.addAnimation('run','sprites/pilota/bola1.png','sprites/pilota/bola10.png');
    pilota.changeAnimation('run');
    //Noia
    noia=p.createSprite(300,300);
    noia.addAnimation('pum','sprites/noia/Walk1.png','sprites/noia/Walk20.png');
    noia.changeAnimation('pum');

    dino=p.createSprite(900,300);
    dino.addAnimation('pam','sprites/dino/Walk1.png','sprites/dino/Walk10.png');
    dino.changeAnimation('pam');

  }

  p.draw = function() {
    p.background(155);
    dino.mirrorX(-1);
    p.drawSprites();

    //Moviment del personatge noia sobre l'eix X de dreta - esquerra.

    if(p.keyIsDown(p.RIGHT_ARROW)){
      noia.mirrorX(+1);
      noia.position.x = noia.position.x+5;
    }
    if(p.keyIsDown(p.LEFT_ARROW)){
      noia.mirrorX(-1);
      noia.position.x = noia.position.x-5;
    }

    //Moviment del personatge dino sobre l'eix X de esquerra - dreta.

  /*  if(p.keyIsDown(p.RIGHT_ARROW)){
      dino.mirrorX(-1);
      dino.position.x = dino.position.x-5;
    }
    if(p.keyIsDown(p.LEFT_ARROW)){
      dino.mirrorX(-1);
      dino.position.x = dino.position.x+5;
    }*/

  }
}
let myp5 = new p5(s, 'myContainer');
