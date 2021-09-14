index = 0;

function update(){
    var imagesList = ["1.JPG", "2.JPG", "3.JPG", "4.JPG", "5.JPG"];
    var namesList = ["Diesel", "Diesel" ,"My family", "My first day of middle school", "Me outside in formals"];

    document.getElementById("book").src = imagesList[index];
    document.getElementById("caption").innerHTML = namesList[index];

    index = index + 1;

    if(index == 5){
        index = 0;
    }
}