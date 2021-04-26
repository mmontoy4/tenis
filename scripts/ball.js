

const BALLSIZE = 64;
const MAX_SPEED=20;
class Ball {

  constructor(p){
    this.ballSprite = p.createSprite(p.width/2,p.hight/2,BALLSIZE, BALLSIZE);
      this.speed = 5;
      this.ballSprite.addAnimation('run','sprites/pilota/bola1.png','sprites/pilota/bola10.png');
      this.ballSprite.changeAnimation('run');
      this.ballSprite.maxSpeed = MAX_SPEED;
    }

  saqueInicial(p)
  {
    this.ballSprite.position.x = p.width/2;
    this.ballSprite.position.y = p.height/2;
    this.ballSprite.setSpeed(this.speed,45);
  }
}
