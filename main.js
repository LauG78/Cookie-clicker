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




