const radius = 125;
let angle = 0;

const particlegreen = document.getElementById('pathpoint');
const particlewhite = document.getElementById('diameterpoint');
const greentowhite = document.getElementById('connectgrtow')
const greentored = document.getElementById('connectgrtord');
const redtowhite = document.getElementById('connectrdtow')
const tanvelocity = document.getElementById('tangentialv')

function centerEl(el) {
    el.style.position = 'absolute';
    el.style.top = '50%';
    el.style.left = '50%';
    el.style.transform = 'translate(-50%, -50%)';
}

[particlegreen, particlewhite, greentowhite, greentored, redtowhite, tanvelocity].forEach(centerEl);

function animate () {
    angle += 0.02;

    const gx = radius * Math.cos(angle);
    const gy = -radius * Math.sin(angle);

    const wx = gx;
    const wy = 0;

    particlegreen.style.transform = `translate(${gx - 6}px, ${gy - 6}px)`;
    particlewhite.style.transform = `translate(${gx - 6}px, -6px)`;

    const verticalLine = Math.abs(gy - wy);
    const vertStartY = Math.min(gy, wy);
    greentowhite.style.width = '2px';
    greentowhite.style.height = `${verticalLine}px`;
    greentowhite.style.transformOrigin ='left top';
    greentowhite.style.transform = `translate(${gx}px, ${vertStartY}px)`;

    const tiltedAngle = Math.atan2(gy, gx);
    greentored.style.width = `${radius}px`;
    greentored.style.height = '2px';
    greentored.style.transformOrigin = 'left center';
    greentored.style.transform = `translate(0px, 0px) rotate(${tiltedAngle}rad)`;

    const horizontalLine = Math.abs(wx);
    const horizStartX = Math.min(wx, 0);
    redtowhite.style.width = `${horizontalLine}px`;
    redtowhite.style.height = '3px';
    redtowhite.style.transformOrigin = 'left center';
    redtowhite.style.transform = `translate(${horizStartX}px, 0px)`;

    const tangAngle = tiltedAngle - Math.PI / 2;
    tanvelocity.style.width = '50px';
    tanvelocity.style.height = '3px';
    tanvelocity.style.transformOrigin = 'left center';
    tanvelocity.style.transform = `translate(${gx}px, ${gy}px) rotate(${tangAngle}rad)`;

    requestAnimationFrame(animate);
}
animate ();
