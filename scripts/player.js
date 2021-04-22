
//Animacio mort, victoria i correr.
class Player {

  constructor(strjugador) {
    if( strjugador === jugador1){
      this.spritePlayer = p.createSprite(300,300);
      this.spritePlayer.addAnimation('pum','sprites/noia/Walk1.png','sprites/noia/Walk20.png');
      this.spritePlayer.changeAnimation('pum');
    }
    else if ( strjugador === jugador2)
    {
      this.spritePlayer = p.createSprite(900,300);
      this.spritePlayer.addAnimation('pam','sprites/dino/Walk1.png','sprites/dino/Walk10.png');
      this.spritePlayer.changeAnimation('pam');
    }
  }

  posicioInicial
  moveLeft(p)
  moveRight


}
