var gameOverBg = function(game){
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

        this.image.src = 'images/gameOver.png';
    }

    this.update = function(){
        
    }

    this.draw = function(){
        if(this.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, 0, 100);
    }
}