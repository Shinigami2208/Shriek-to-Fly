var playAgain = function(game){
    this.game = game;
    this.image = null;
    this.loaded = false;
    this.width = 120;
    this.height = 57;
    this.canvas = null;
    this.context = null;

    this.x = 0;

    var self = this;


    this.init = function(){
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.x = 50;
        this.canvas.y = 130;
        document.body.appendChild(this.canvas);
        this.loadImg();
        this.listenMouse();
    }

    this.loadImg = function(){
        this.image = new Image();
        this.image.onload = function(){
            self.loaded = true;
        }

        this.image.src = 'images/playAgain.png';
    }

    this.listenMouse = function(){
        this.addEventListener('click', function(){
            self.bird.flap()
        });
    }

    this.update = function(){
        
    }

    this.draw = function(){
        if(this.loaded == false){
            return;
        }
        self.game.context.drawImage(self.image, 0, 0);
    }
}