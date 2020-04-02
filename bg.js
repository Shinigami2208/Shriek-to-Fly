var bg = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;

    this.x = 0;

    var self = this;


    this.init = function(){
        this.loadImg();
    }

    this.loadImg = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
        }

        this.image.src = 'images/bg1.png';
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        this.x -= 2;
        if(this.x == -288){
            this.x = 0;
        }
    }

    this.draw = function(){
        if(this.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, this.x, 0);
        self.game.context.drawImage(self.image, this.x + 288, 0);
    }
}