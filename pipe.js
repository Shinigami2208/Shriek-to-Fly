var pipe = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;

    this.x = 300;
    this.y = 320;

    var self = this;


    this.init = function(){
        this.loadImg();
    }

    this.loadImg = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
        }

        this.image.src = 'images/pipe.png';
    }

    this.update = function(){
        if(this.game.gameOver){
            return;
        }
        this.x -= 5;
        if(this.x == -45){
            this.x = 300;
            this.y = Math.floor((Math.random() * 200) + 150);
        }
    }

    this.draw = function(){
        if(this.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, this.x, this.y - 150 - 320);
        self.game.context.drawImage(self.image, this.x, this.y);
    }
}