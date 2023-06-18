function sim(){
    alert (" voce aceitou namorar comigo :)")
    var audio = new Audio('Gemidao do zap.mp3');
    audio.play();

   }
   function desvia (t){
   var btn = t;
   btn.style.position = 'absolute';
   btn.style.button = geraPosicao (10, 90);
   btn.style.left = geraPosicao (10, 90);
   console.log ("opa, desviei....");
   }
     
   function geraPosicao (min, max){
       return (Math.random() * (max - min) + min) +"%";
   
   }

   
   



   