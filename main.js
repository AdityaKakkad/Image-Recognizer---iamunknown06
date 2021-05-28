Webcam.set({
    width:310,
    height:300,
    image_format:'png',
    png_quality:120,

    constraints:{
        facingMode:"environment"
    }
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'">';  
    });
}

console.log("ml5 version:-",ml5.version);

classifier = ml5.imageClassifier('MobileNet',modelLoaded);

function modelLoaded(){
    console.log("Oh My God!!!");
    console.log("Mission Successful....");
    console.log("Model Loaded !!!");
    console.log("YaY!");
    console.log("Good Work Soldiers!!!");
    console.log("Silent Pat-Back Noises");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    console.log("Yay!!!");
    console.log("You Have A Working Computer & Webcam!!!");
    console.log("IAmUnknown06 sends his Regards.");
    document.getElementById("object_name").innerHTML = results[0].label;
}
}
