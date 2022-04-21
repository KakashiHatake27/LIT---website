function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {

        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
}

var floatingbtn = document.querySelector('.floatingbtn');

floatingbtn.addEventListener('click', function() {
    smoothScroll('.navbar', 1000);
});


//Footer and callout section

var WhatsappNum = document.getElementById("num");
var whatsappBtn = document.getElementById("whatsapp-btn");
var floatingbtn = document.querySelector('.floatingbtn');

whatsappBtn.addEventListener("click", function() {
    var msgBox = document.getElementById("callout");
    msgBox.style.display = "block";
});



document.getElementById('num').onclick = function() {
    navigator.clipboard.writeText(document.getElementById('num').innerText).then(function() {
        console.log('text has been copied');
        alert('Whatsapp number has been copied')
    })
}