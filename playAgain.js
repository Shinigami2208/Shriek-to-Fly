var playAgain = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;

    this.x = 0;

    var self = this;


    this.init = function(){
        this.loadImg();
        // this.update();
        // this.listenmouse();
    }

    this.loadImg = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
        }

        this.image.src = 'images/playAgain.png';
    }

    this.update = function(){
        if(this.game.sound.volume > 90){
            this.game.init();
        }
    }

    // this.listenmouse = function(){
    //     this.addEventListener('click', function(){
    //         this.game.init();
    //     })
    // }

    this.draw = function(){
        if(this.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, 84, 300);
    }
}