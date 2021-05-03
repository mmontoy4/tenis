const e = (a) => {
    a.setup = function() {
        a.createCanvas(150, 200);

    }

    a.draw = function(){
        let score1 =  "Score dino: " + dino.points;
        let score2 =  "Score noia: " + noia.points;
        let timer = "Temps restant: " + time;
        let win = "Ha guanyat ";
        a.background('rgba(0,255,0, 0.25)');
        a.text(score1, a.width * 0.1, a.height * 0.5);
        a.text(score2, a.width * 0.1, a.height * 0.6);
        a.text(timer, a.width * 0.1, a.height * 0.7);
        if(noia.points === 10){
            a.text(win + "noia", a.width * 0.1, a.height * 0.8);
        }else if( dino.points === 10){
            a.text(win + "dino", a.width * 0.1, a.height * 0.8);
        }


    }

}
let myp52 = new p5(e, 'myContainer');