function track(message) {
    fetch("/.netlify/functions/track", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    }).catch(function(error) {
        console.log("Track error:", error);
    });
}

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesAgainBtn = document.getElementById("yesAgainBtn");
const dateBtn = document.getElementById("dateBtn");
const finalText = document.getElementById("finalText");
const instagramBtn = document.getElementById("instagramBtn");


function showScreen(screenId) {
    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {
        screen.classList.remove("active");
    });

    const nextScreen = document.getElementById(screenId);
    nextScreen.classList.add("active");
}

yesBtn.addEventListener("click", function() {
    track("🍒 Cherry clicked YES");
    showScreen("screenTwo");
});

yesAgainBtn.addEventListener("click", function() {
    track("🍒 Cherry clicked YES AGAIN");
    showScreen("screenDate");
});

dateBtn.addEventListener("click", function() {
    track("🍒 Cherry clicked SOUNDS FAIR");
    finalText.textContent = "Come say hi on Instagram";
    showScreen("screenFinal");
});
instagramBtn.addEventListener("click", function() {
    track("🍒 Cherry clicked INSTAGRAM");

    setTimeout(function() {
        window.open("https://www.instagram.com/sloy.567/", "_blank");
    }, 300);
});

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

function moveNoButton(event) {
    event.preventDefault();
    track("🍒 Cherry clicked NO");
    

    noBtn.innerHTML = '<img src="assets/img/cat-no.png" class="runaway-cat">';
noBtn.classList.add("kiss");

    const randomX = Math.floor(Math.random() * 120) - 60;
    const randomY = Math.floor(Math.random() * 80) - 40;

    noBtn.style.transform =
        "translate(" + randomX + "px, " + randomY + "px)";
}

const heartContainer = document.getElementById("heart-container");

for (let i = 0; i < 10; i++) {
    const heart = document.createElement("img");

    heart.src = "assets/img/heart1.png";
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "%";
    heart.style.width = 40 + Math.random() * 50 + "px";
    heart.style.animationDuration = 5 + Math.random() * 6 + "s";
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.opacity = 0.2 + Math.random() * 0.4;

    heartContainer.appendChild(heart);
}

track("🍒 Cherry opened site");