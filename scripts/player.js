
//Animacio mort, victoria i correr.
class Player {

  constructor(p,strjugador) {
    this.name=
    this.points =0;
    if( strjugador === "Jugador1"){
      this.spritePlayer = p.createSprite(100,300);
      this.spritePlayer.addAnimation('pum','sprites/noia/Walk1.png','sprites/noia/Walk20.png');
      this.spritePlayer.changeAnimation('pum');
      this.spritePlayer.immovable = true;
    }
    else if ( strjugador === "Jugador2")
    {
      this.spritePlayer = p.createSprite(1000,300);
      this.spritePlayer.addAnimation('pam','sprites/dino/Walk1.png','sprites/dino/Walk10.png');
      this.spritePlayer.changeAnimation('pam');
      this.spritePlayer.immovable = true;
      this.spritePlayer.mirrorX(-1);
    }
  }

  posicioInicial(strjugador)
  {

    if( strjugador === "Jugador1"){
      this.spritePlayer.position.x =100;
      this.spritePlayer.position.y =300;
    }
    else if ( strjugador === "Jugador2")
    {
      this.spritePlayer.position.x =900;
      this.spritePlayer.position.y =300;
    }



  }
  moveUp()
  {
      this.spritePlayer.position.y = this.spritePlayer.position.y-5;
  }

  moveDown()
  {

      this.spritePlayer.position.y = this.spritePlayer.position.y+5;
  }


}
