const geluid1 = document.getElementById("geluid1");
const geluid2 = document.getElementById("geluid2");
const geluid3 = document.getElementById("geluid3");
const geluid4 = document.getElementById("geluid4");

let activeSound = null;

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "a":
            if (activeSound) {
                activeSound.pause();
            }
            activeSound = geluid1;
            geluid1.currentTime = 0;
            geluid1.play();
            break;
        case "s":
            if (activeSound) {
                activeSound.pause();
            }
            activeSound = geluid2;
            geluid2.currentTime = 0;
            geluid2.play();
            break;
        case "d":
            if (activeSound) {
                activeSound.pause();
            }
            activeSound = geluid3;
            geluid3.currentTime = 0;
            geluid3.play();
            break;
        case "f":
            if (activeSound) {
                activeSound.pause();
            }
            activeSound = geluid4;
            geluid4.currentTime = 0;
            geluid4.play();
            break;
    }
});