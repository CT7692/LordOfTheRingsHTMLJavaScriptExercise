function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));

    var button = document.getElementById("positionButton");
    button.addEventListener("click", function(){
        image = document.getElementById(data);
        document.getElementById("position").innerHTML = 
        `X: ${image.offsetLeft} Y: ${image.offsetTop}` 
    });
}

