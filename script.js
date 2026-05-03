const radius = 125;
let angle = 0;

const particlegreen = document.getElementById('pathpoint');
const particlewhite = document.getElementById('diameterpoint');
const greentowhite = document.getElementById('connectgrtow')
const greentored = document.getElementById('connectgrtord');
const redtowhite = document.getElementById('connectrdtow')

function centerEl(el) {
    el.style.position = 'absolute';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.transform = 'translate(-50%, -50%)';
}

[particlegreen, particlewhite, greentowhite, greentored, redtowhite].forEach(centerEl);

function animate () {
    angle += 0.02;

    const gx = radius * Math.cos(angle);
    const gy = -radius * Math.sin(angle);

    const wx = gx;
    const wy = 0;

    particlegreen.style.transform = `translate(${gx - 6}px, ${gy - 6}px)`;
    particlewhite.style.transform = `translate(${gx - 6}px, -6px)`;

    const verticalLine = Math.abs(gy - wy);
    const vertStartY = Math.min(gy, wx);
    greentowhite.style.width = '2px';
    greentowhite.style.height = `${verticalLine}px`;
    greentowhite.style.transformOrigin ='left top';
    greentowhite.style.transform = `translate(${gx}px, ${vertStartY}px)`;

    const tiltedLen = Math.atan2(gy, gx);
    greentored.style.width = `${radius}px`;
    greentored.style.height = '2px';
    greentored.style.transformOrigin = 'left corner';
    greentored.style.transform = `translate(0px, 0px) rotate$(tiltedLen)rad`;

    const horizontalLine = Math.abs(wx);
    const horizStartX = Math.min(wx, 0);
    redtowhite.style.width = `${horizontalLine}px`;
    redtowhite.style.height = '3px';
    redtowhite.style.transformOrigin = 'left center';
    redtowhite.style.transform = `translate(${horizStartX}px, 0px)`;


    requestAnimationFrame(animate);
}
animate ();
