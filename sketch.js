
// variables para el audio


var x_a;
var y_a;

var left = [];

var button;

let value = 0;
let allSoundsAreLoaded = false;
let playLeft;
let stopped = false;



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

    //background(0);
    noStroke();
    loadAllSounds();

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

x_a = windowWidth - 100;
y_a = 50;

    // Before all the sounds are loaded
if (!allSoundsAreLoaded) {
        fill(255);
        // agregar loading
        
        ellipse(x_a, y_a, Math.sin(frameCount * 0.1) * 20);
        fill(0, 0, 0);
        ellipse(x_a, y_a, Math.sin(frameCount * 0.1) * 10);
        fill(255);
        let loaded = true;
        for (let i = 0; i < left.length; i++) {
            if (left[i].isLoaded() == false) {
                loaded = false;
            }
        }
        
                // for (let i = 0; i < right.length; i++) {
        //     if (right[i].isLoaded() == false) {
        //         loaded = false;
        //     }

        if (loaded) {
            // console.log("EVERYTHING IS LOADED NOW");
            allSoundsAreLoaded = true;
            
            playLeft = function() {
               
                if (stopped == false) {
                 
                    let s = random(left);
                    s.play();
                    setTimeout(playLeft, (s.lenght()));

                
                }

            };

        
        }

        }


    // When all the sounds are loaded
    else {



            push();
        play();
        pop();

        push();
        stop();
        pop();

        // push();
        // paneando();
        // pop();

        // push();
        // knob();
        // pop();


        }


}

function loadAllSounds() {

    left.push(loadSound('left/de-madera.mp3'));
    left.push(loadSound('left/de-marea.mp3'));

    // left.push(loadSound('left/muchacha.mp3'));
    // left.push(loadSound('left/ana-no-duerme.mp3'));

}


// On window resize, update the canvas size

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}