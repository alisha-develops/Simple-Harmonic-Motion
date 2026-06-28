const canvas = document.getElementById("wavecanvas");
const contex = canvas.getContext("2d");

const state = {
    amplitude:50,
    frequency:0.05,
    wavelength:150,
    direction:1,
    paused:false,
    time:0
};

const slider= document.getElementById("waveamplitude");
const freq = document.getElementById("wavefrequency");
const wvlength = document.getElementById("wavelength");
const amp = document.getElementById("ampval");
const freq2 = document.getElementById("freqval");
const wave= document.getElementById("waveval");
const way = document.getElementById("direction");
const stop = document.getElementById("pause");
const equation = document.getElementById("waveequation");

slider.addEventListener("input", function() {
    state.amplitude = Number(slider.value);
    amp.textContent = slider.value;
    showEquation();
});

freq.addEventListener("input", function() {
    state.frequency = Number(freq.value);
    freq2.textContent = freq.value;
    state.wavelength = Math.round(1 / state.frequency);
    wvlength.value = state.wavelength;
    wave.textContent = state.wavelength;
    showEquation();
})

wvlength.addEventListener("input", function(){
    state.wavelength = Number(wvlength.value);
    wave.textContent = wvlength.value;
    state.frequency = Number((1 / state.wavelength).toFixed(4));
    freq.value = state.frequency;
    freq2.textContent = state.frequency;
    showEquation();
});

way.addEventListener("click", function(){
    state.direction = state.direction * -1;
    if (state.direction === 1) {
        way.textContent = "direction: right";
    } else {
        way.textContent = "direction: left";
    }
});

stop.addEventListener("click", function(){ 
    state.paused = !state.paused;
    if (state.paused){
        stop.textContent = "resume";
    } else {
        stop.textContent = "pause";
        animateWave();
    }
});

function showEquation () {
    const v = (state.frequency * state.wavelength).toFixed(3);
    equation.textContent= "v = f x wavelength = " + state.frequency + " x " + state.wavelength + " = " + v + " units per second";
}

function drawWave () {
    const width = canvas.width;
    const height = canvas.height;
    const centerY = height / 2;
    const k = (2 * Math.PI) / state.wavelength;
    const omega = 2 * Math.PI * state.frequency;

    contex.clearRect(0, 0, width, height);
    contex.beginPath();
    contex.strokeStyle = "rgba(255, 255, 255, 0.15)";
    contex.lineWidth = 1;
    contex.setLineDash([5, 5]);
    contex.moveTo(0, centerY);
    contex.lineTo(width, centerY);
    contex.stroke();
    contex.setLineDash([]);

    contex.beginPath();
    contex.strokeStyle = "rgb(255, 217, 0)";
    contex.lineWidth = 2.5;

    let x = 0;
    while(x <= width) {
        const y = state.amplitude * Math.sin(k * x - state.direction * omega * state.time);
        const screenY = centerY - y;

        if (x===0) {
            contex.moveTo(x, screenY);
        } else {
            contex.lineTo(x, screenY);
        }
        x = x + 1;
    }
    contex.stroke();

    const dotX = 60;
    const dotY = centerY- state.amplitude * Math.sin(k * dotX - state.direction * omega * state.time);
    contex.beginPath();
    contex.arc(dotX, dotY, 6, 0, Math.PI * 2);
    contex.fillStyle = "green";
    contex.fill();

    contex.beginPath();
    contex.strokeStyle = "brown";
    contex.lineWidth = 2;
    contex.moveTo(dotX, centerY);
    contex.lineTo(dotX, dotY);
    contex.stroke();
}

function animateWave () {
    if (state.paused) {
        return;
    }
    state.time = state.time +1;
    drawWave();
    requestAnimationFrame(animateWave);
}

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

function animateSHM () {
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

    requestAnimationFrame(animateSHM);
}
showEquation();
animateWave();
animateSHM();

