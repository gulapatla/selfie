var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var content;
var synthesis =  window.speechSynthesis;
var content1;


function listen(){
    
    document.getElementById("whyme").innerHTML = "";
    recognition.start();

}
recognition.onresult = function why(event){
    console.log(event);
    console.log('whyisitworking');
    content = event.results[0][0].transcript;
    console.log(content);
    document.getElementById("whyme").value = content;
    content1 = content.toLowerCase();
    if(content1 == "take my selfie"){
        console.log("taking selfie");
        speak();
        

        content1= "";


    }

    }
    function say(){
        var s = content;
        var peak1 = new SpeechSynthesisUtterance(s);
        synthesis.speak(peak1);
        localStorage.setItem("peak", peak1);
        Webcam.attach(cam);



    } 
    Webcam.set({
        width: 380,
        height:380,
        image_format:'png',
        png_quality:100





    });
    var cam = document.getElementById("cam");
    function speak(){
        var s = "Taking you selfie in five seconds";
        var peak1 = new SpeechSynthesisUtterance(s);
        synthesis.speak(peak1);
        localStorage.setItem("peak", peak1);
        Webcam.attach(cam);
        setTimeout(function() {
            takeSelfie();
            save();
        }, 5000);

    }
    function takeSelfie(){
        Webcam.snap(function (data_uri){
            document.getElementById("soUgly").innerHTML = "<img id='selfie' src=" + data_uri  + ">";
            
        });

    }
    function save(){
         link = document.getElementById("link");
         img = document.getElementById("selfie").src;
        link.href=img;
        link.click();
        
    }