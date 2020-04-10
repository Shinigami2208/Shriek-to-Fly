var game = function(){
    this.canvas = null;
    this.context = null;
    this.width = 288;
    this.height = 512;
    this.bird = null;
    this.bg = null;
    this.base = null;
    this.pipe = null;
    this.gameOverBg = null;
    this.playAgain = null;
    this.sound = null;

    // game status
    this.gameOver = false;

    var self = this;

    this.init = function(){
        // create canvas
        this.canvas = document.createElement('canvas');
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.canvas.x = 0;
        this.canvas.y = 0;
        this.canvas.setAttribute("id", "gameID")
        document.body.appendChild(this.canvas);
        // create bird
        this.bird = new bird(this);
        this.bird.init();

        // create bg
        this.bg = new bg(this);
        this.bg.init();
        
        // create base
        this.base = new base(this);
        this.base.init();

        // create pipe
        this.pipe = new pipe(this);
        this.pipe.init();

        // create gameOverBg
        // this.gameOverBg = new gameOverBg(this);
        // this.gameOverBg.init();

        // create playAgain
        this.playAgain = new playAgain(this);
        this.playAgain.init();

        // listen mouse event
        // this.listenMouse();

        // Create Sound
        this.sound = new sound(this);
        this.sound.init();

        // check firt turn
        if(this.gameOver == true){
            this.firstTurn = false;
            this.gameOver = false;
        }

        this.loop();
    }

    // this.listenMouse = function(){
    //     this.canvas.addEventListener('click', function(){
    //         self.bird.flap()
    //     });
    // }

    this.loop = function(){
        self.update();
        self.draw();
        setTimeout(self.loop, 33);
    }

    this.update = function(){
        this.bg.update();
        this.bird.update();
        this.base.update();
        this.pipe.update();
        if(this.gameOver == true){
            this.gameOver == false;
            this.playAgain.update();
        }
    }

    this.draw = function(){
        this.bg.draw();
        this.pipe.draw();
        this.base.draw();
        this.bird.draw();
        if(self.gameOver == true){
            // self.gameOverBg.draw();
            self.playAgain.draw();
        }
        
    }
    // this.destroyGame = function(){
    //     var child = document.getElementById("gameID");
    //     document.body.removeChild(child);
    // }
}

var g = new game();
g.init();