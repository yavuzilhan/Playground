function getLocation() {
    var location = document.getElementById("object").getBoundingClientRect();
    var leftLocation = Math.round(location.left);
    var topLocation = Math.round(location.top);
    var locations = [leftLocation,topLocation];
    return locations;
}

function getWindowSize() {
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var windowSize = [windowWidth,windowHeight];
    return windowSize;
}

function setLocation() {
    var locations = getLocation();
    var leftLocation = locations[0];
    var topLocation = locations[1];
    var windowSize = getWindowSize();
    var windowWidth = windowSize[0];
    var windowHeight = windowSize[1];
    var object = document.getElementById("object");

    if (leftLocation == 10 && topLocation == 10) {
        object.style.left = windowWidth - 85 + "px";
        object.innerHTML = "B";
    }
    else if (leftLocation > 10 && topLocation == 10) {
        object.style.left = "10px"; 
        object.style.top = (windowHeight - 85) + "px";
        object.innerHTML = "C";
    }
    else if (leftLocation == 10 && topLocation > 10) {
        object.style.left = (windowWidth - 85) + "px"; 
        object.style.top = (windowHeight - 85) + "px";
        object.innerHTML = "D";
    }
    else {
        object.style.left = "10px"; 
        object.style.top = "10px";
        object.innerHTML = "A";
    }
}

var locationTimer
function setLocationTimer() {
    locationTimer = setInterval(setLocation, 600);
    var stopLocationTimer = setInterval(stopLocation, 10000);
}

function stopLocation() {
    clearInterval(locationTimer);
}

