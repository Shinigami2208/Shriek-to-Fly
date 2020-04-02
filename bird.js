var bird = function(game){
    this.game = game;
    this.images = [];
    this.img1Loaded = false;
    this.img2Loaded = false;
    this.img3Loaded = false;

    this.currentImage = null;

    this.currentFrame = 0;

    this.currentImageIndex = 0;

    var self = this;

    this.x = 70;
    this.y = 50;
    this.speedY = 0;
    this.acceleration = 1;

    this.init = function(){
        this.loadImages();
    }

    this.loadImages = function(){
        var img1 = new Image();
        var img2 = new Image();
        var img3 = new Image();

        img1.onload = function(){
            self.img1Loaded = true;
            self.images.push(img1);
            self.currentImage = self.images[0];
        }
        img2.onload = function(){
            self.img2Loaded = true;
            self.images.push(img2);
        }
        img3.onload = function(){
            self.img3Loaded = true;
            self.images.push(img3);
        }

        // load all image
        img1.src = 'images/b1.png';
        img2.src = 'images/b2.png';
        img3.src = 'images/b3.png';

    }

    this.update = function(){ 

        self.currentFrame++;
        if(self.currentFrame % 5 == 0){
            self.changeImage();
        }

        // Call flap
        if(this.game.sound.volume > 40){
            console.log(this.game.sound.volume);
            this.flap();
        }

        //forget all stuff above
        if(this.y <= 490){
            this.speedY += this.acceleration;
            this.y += this.speedY;
        }

        if(this.y > 490){
            this.y = 490;
        }

        // check gameOver
        if(this.y >= 490){
            this.game.gameOver = true;
        }

        // check hit pipe

        this.checkHitPipe();



    }

    this.flap = function(){
        if(this.game.gameOver){
            return;
        }
        this.speedY = -8;
    }

    this.checkHitPipe = function(){
        if
        (
            ((this.x + 26 > this.game.pipe.x) && (this.x < this.game.pipe.x + 47 ))
            &&
            ((this.y + 19 < this.game.pipe.y - 100) || (this.y + 19 > this.game.pipe.y))
        )
        {
            this.game.gameOver = true;
        }
    }

    this.changeImage = function(){
        if(this.game.GameOver){
            return;
        }
        if(this.currentImageIndex == 2){
            this.currentImageIndex = 0;
        }else{
            this.currentImageIndex++;
        }
        this.currentImage = this.images[this.currentImageIndex];
    }

    this.draw = function(){
        if(self.img1Loaded==false && self.img2Loaded == false && self.img3Loaded == false){
            return;
        }
        self.game.context.drawImage(self.currentImage, this.x, this.y);
    }

    
}