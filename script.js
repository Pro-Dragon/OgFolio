const parallax = document.querySelectorAll(".cursor-effect");

let xvalue = 0, yvalue = 0, zvalue = 0;

window.addEventListener("mousemove", (ele) => {
    xvalue = ele.clientX - window.innerWidth / 2;
    yvalue = ele.clientY - window.innerHeight / 2;
    parallax.forEach((el, i) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        el.style.transform = `translateX(calc(${-xvalue * speedx}px)) translateY(calc(${yvalue * speedy}px))`;
    })
});