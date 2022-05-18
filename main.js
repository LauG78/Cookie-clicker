let cookie = document.getElementById("cookie-clicker");
let cookieScore = document.getElementById("display-counter");
let score = document.getElementById("cookieScore.innerHTML");
let counter = 1;
cookie.addEventListener("click", () => {
    score += counter;
    cookieScore.textContent = score;
    console.log(score);
})
let multibtn = document.getElementById("btn-multiplier");
let multiplierCookies = document.getElementById("multiplier-cookie");
let multiplierPrice = parseInt(multiplierCookies.innerHTML);
multibtn.addEventListener("click", () => {
    if (score >= multiplierPrice) {
        score -= multiplierPrice;
        cookieScore.innerHTML = score;
        counter *= 2;
        multiplierPrice *= 2;
        multiplierCookies.innerHTML = multiplierPrice + " Cookies";
    } else {
        alert("Bake more cookies");
    }
})
function update_total_clicks() {   
    var updating = document.getElementById("cookie-clicker");
    updating.innerHTML = clicks;
}
let autobtn = document.getElementById("btn-autoclick");
let autoClickCookies = document.getElementById("autoclick-cookie");
let autoClickPrice = parseInt(autoClickCookies.innerHTML);
autobtn.addEventListener("click", () => {
    if (score >= autoClickPrice) {
        score -= autoClickPrice;
        autoClickPrice *= 2;
        autoClickCookies.innerHTML = autoClickPrice + " Cookies";
        cookieScore.innerHTML = score;
        setInterval(() => {
            score += 1;
            cookieScore.innerHTML = score;
            console.log(score);
        }, 1000)

    } else {
        alert("Bake more cookies");
    }
})
let bonusbtn = document.getElementById("btn-bonus");
let bonusCookie = document.getElementById("bonus-cookie");

let bonusPrice = parseInt(bonusCookie.innerHTML);
let bonusTime = document.getElementById("bonus-time");
let bonusTimer = parseInt(bonusTime.innerHTML);
bonusbtn.addEventListener("click", () => {
    if (score >= bonusPrice) {
        score -= bonusPrice;
        cookieScore.innerHTML = score;
        bonusPrice *= 2;
        bonusCookie.innerHTML = bonusPrice + " Cookies";
        counter *= 2;
        console.log(counter)
        let bonusCounter = setInterval(timer, 1000);
        console.log(bonusCounter);

        function timer() {
            if (bonusTimer > 0) {
                bonusTimer -= 1;
                bonusTime.innerHTML = bonusTimer;
            } else {
                clearInterval(bonusCounter);
                bonusTimer = "30";
                bonusTime.innerHTML = bonusTimer;
                counter /= 2;
            }
        }
    } else {
        alert("Bake more cookies");
    }
})




