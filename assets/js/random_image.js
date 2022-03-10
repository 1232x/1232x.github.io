window.onload = displayImage;

var imagesArray = [
    "1232.png"
];

function displayImage(){
    var num = Math.floor(Math.random() * (imagesArray.length));
    document.getElementById("main_image1").src = "assets/images/" + imagesArray[num];
}
