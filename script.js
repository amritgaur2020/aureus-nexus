// ==== Neon Cosmic Animated Background ====
const canvas = document.getElementById('cosmicBg');
const ctx = canvas.getContext('2d');
let w, h;
function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
}
resize();
window.addEventListener('resize', resize);

function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

const blobs = [];
for (let i = 0; i < 12; i++) {
    blobs.push({
        x: randFloat(0, w),
        y: randFloat(0, h),
        r: randFloat(33, 105),
        dx: randFloat(-0.25, 0.25),
        dy: randFloat(-0.25, 0.25),
        hue: randFloat(180, 295)
    });
}

function animateBg() {
    ctx.clearRect(0, 0, w, h);
    for (const b of blobs) {
        ctx.save();
        let grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `hsla(${b.hue},100%,70%,0.15)`);
        grad.addColorStop(0.6, `hsla(${b.hue},80%,60%,0.1)`);
        grad.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, 2 * Math.PI);
        ctx.fillStyle = grad;
        ctx.globalCompositeOperation = "lighter";
        ctx.filter = "blur(2.5px)";
        ctx.fill();
        ctx.restore();
        b.x += b.dx, b.y += b.dy;
        if (b.x < -100 || b.x > w + 100) b.dx *= -1;
        if (b.y < -100 || b.y > h + 100) b.dy *= -1;
    }
    requestAnimationFrame(animateBg);
}
animateBg();

// ==== Reveal Animations on Scroll ====
function revealOnScroll
