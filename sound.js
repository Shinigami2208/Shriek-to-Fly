var sound = function(game){

    this.game = game;
    this.context = null;
    this.volume = 0;

    var self = this;
    




    this.init = function(){
        

        this.getMicrophoneAccess();
    }

    this.onStream = function(stream){
        this.context = new (window.AudioContext || window.webkitAudioContext)();
        var audioStream = this.context.createMediaStreamSource(stream);
        var analyzer = this.context.createAnalyser();
        audioStream.connect(analyzer);
        analyzer.fftSize = 512;
        var dataArray = new Uint8Array(analyzer.frequencyBinCount);

        setInterval(() => {
            analyzer.getByteFrequencyData(dataArray);
            var sum = 0;
            for(var i = 0; i < 256; i++){
                sum = sum + dataArray[i];
            }

            self.volume = sum/256;
        }, 0.000000000000000000000000000000000001);
        
    }

    this.getMicrophoneAccess = function(){
        navigator.mediaDevices.getUserMedia({audio: true, video: false})
        .then(this.onStream);
    }
}