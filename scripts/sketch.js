const s = (p) => {
  var pilota;
  var noia;
  var dino;
  var fondo;

  p.preload = function() {

    fondo = p.loadImage("img/pissta.png");
    pilota = new Ball(p);


    //noia = new Player("jugador1");
    //dino = new Player("jugador2");

  }

  p.setup = function() {
    p.createCanvas(1100, 700);
    //pilota=p.createSprite(500,500);
    //pilota.addAnimation('run','sprites/pilota/bola1.png','sprites/pilota/bola10.png');
    //pilota.changeAnimation('run');
    //Noia
    noia=p.createSprite(300,300);
    noia.addAnimation('pum','sprites/noia/Walk1.png','sprites/noia/Walk20.png');
    noia.changeAnimation('pum');

    dino=p.createSprite(900,300);
    dino.addAnimation('pam','sprites/dino/Walk1.png','sprites/dino/Walk10.png');
    dino.changeAnimation('pam');
    pilota.saqueInicial(p);

  }

  p.draw = function() {
    p.background(fondo);
    dino.mirrorX(-1);
    p.drawSprites();

    //Moviment pilota de tenis

    //La pilota rebota amb els limits de la pista

    //Moviment del personatge noia sobre l'eix X de dreta - esquerra.

    if(p.keyIsDown(p.RIGHT_ARROW)){
      noia.mirrorX(+1);
      noia.position.x = noia.position.x+5;
    }
    if(p.keyIsDown(p.LEFT_ARROW)){
      noia.mirrorX(-1);
      noia.position.x = noia.position.x-5;
    }

    //Moviment del personatge noia sobre l'eix Y de adalt - abaix.

    if(p.keyIsDown(p.UP_ARROW)){
      noia.position.y = noia.position.y-5;
    }
    if(p.keyIsDown(p.DOWN_ARROW)){
      noia.position.y = noia.position.y+5;
    }

    //Moviment del personatge dino sobre l'eix X de esquerra - dreta.

   if(p.keyDown('a')){
      dino.mirrorX(-1);
      dino.position.x = dino.position.x-5;
    }
    if(p.keyDown('d')){
      dino.mirrorX(+1);
      dino.position.x = dino.position.x+5;
    }

    //Moviment del personatge dino sobre l'eix Y de adalt - abaix.

    if(p.keyDown('w')){

       dino.position.y = dino.position.y-5;
     }
     if(p.keyDown('s')){

       dino.position.y = dino.position.y+5;
     }

  }
}
let myp5 = new p5(s, 'myContainer');
