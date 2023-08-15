let xspacing = 303; // How far apart should each horizontal position be spaced

let xspacing2 = 65; // How far apart should each horizontal position be spaced

let w; // Width of entire wave
let maxwaves = 0.8; // total # of waves to add together
let maxwaves2 = 8; // total # of waves to add together


var lines, markov;

let theta = 0;
let amplitude = []; // Height of wave
let dx = []; // Value for incrementing X, to be calculated as a function of period and xspacing
let yvalues = 200; // Using an array to store height values for the wave (not entirely necessary)


var font,
    fontsize = 22;

var contador = 1;
var contando = 1;

let hue = 0;

// drift

var tamango = 20;
var dato = 1;



function setup() {
    createCanvas(windowWidth, windowHeight);

    w = width;

    textFont("Work Sans");

    for (let i = 0; i < maxwaves; i++) {
        amplitude[i] = 102;
        let period = 240; // How many pixels before the wave repeats
        dx[i] = (TWO_PI / period) * xspacing;
    }

    yvalues = [];
}

function draw() {

    contando++;

    calcWave();


    if (contando <= 1000) {
        //canto();
        push();
        clear();
        mundo();
        fruto();
        pop();

    }

    if (contando >= 1000 && contando <= 2000) {

        push();
        clear();
        arbol();
        pop();
        push();
        el_rio();
        pop();
    }


    if (contando >= 2000 && contando <= 3000) {

        push();
        clear();
        canto();
        pop();
        push();
        loqueseapaga();
        pop();

    }


    if (contando >= 3000 && contando <= 4000) {


        push();
        clear();
        poco();
        pop();
        push();
        apoco();
        pop();
    }

    if (contando >= 4000 && contando <= 5000) {

        push();
        clear();
        abuelas();
        pop();
    }

    if (contando >= 5000 && contando <= 6000) {

        push();
        clear();
        extingue();
        belleza();
        pop();
    }

    if (contando >= 6000 && contando <= 7000) {

        push();
        clear();
        consuelo();
        pop();
        push();
        lengua();
        pop();
    }

    if (contando >= 7000 && contando <= 9000) {

        push();
        fix();
        pop();
        push();
        it();
        pop();
        push();
        drift();
        pop();
    }

    if (contando >= 9000 && contando <= 10000) {

        push();
        clear();
        capullo();
        pop();
        push();
        tierra();
        pop();
    }

    if (contando >= 10000 && contando <= 11000) {

        push();
        clear();
        amanha();
        pop();
        push();
        enmienda();
        pop();
    }

    if (contando >= 11000) {
        contando = 0;
        //window.location.reload();

    }

}