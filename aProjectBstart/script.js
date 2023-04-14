class Particle {
    constructor(x, y, size) {
      this.position = createVector(x, y);
      this.velocity = createVector(random(-1, 1), random(-1, 1));
      this.acceleration = createVector(0, 0);
      this.size = size;
      // this.color = color(random(63, 191), random(127, 255), random(191, 255), 127);
      
          // this.color = color(random(0, 40), random(0, 40), random(0, 40), 200);
              this.color = color(map( sin(frameCount * 0.03), -1, 1, 0, 200));
    }
    
    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);
    }
    
    applyForce(force) {
      this.acceleration.add(force);
    }
    
    display() {
      noStroke();
      fill(this.color);
      ellipse(this.position.x, this.position.y, this.size, this.size);
    }
  }
  
  class ParticleSystem {
    constructor() {
      this.particles = [];
    }
    
    addParticle(x, y, size) {
      let p = new Particle(x, y, size);
      this.particles.push(p);
    }
    
    applyForce(force) {
      for (let i = 0; i < this.particles.length; i++) {
        this.particles[i].applyForce(force);
      }
    }
    
    run() {
      for (let i = this.particles.length - 1; i >= 0; i--) {
        let p = this.particles[i];
        p.update();
        p.display();
        if (p.position.x < 0 || p.position.x > width || p.position.y < 0 || p.position.y > height) {
          this.particles.splice(i, 1);
        }
      }
    }
  }
  
  
  
  let ps = new ParticleSystem();


let mainText = document.getElementById("main-text");
let startButton = document.getElementById("startButton")
let newHertz;
let a;
let b;
let g;
let xc;
let yc;

let x;
let y;

//check if the device is the phone
// from: https://stackoverflow.com/a/14301832
window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
};

if(window.mobileAndTabletcheck()){
    mainText.innerHTML = "🌀";
    document.getElementById("getGyroAccess").style.display = "block";
    startButton.addEventListener("click", permission)

}else{
    mainText.innerHTML = "Please visit this page on a mobile phone";
}


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("canvasContainer");
  }
  
function draw() {
    background(255);
    fill(200,100,120);
    // circle(40,40,b);
    rect(200,200,20,40)
    // circle(x,y,30);

    x = map(g, -90, 90, 0, width);
    y = map(b, -90, 90, 0, height);



  
    // Add a new particle to the system every frame
    ps.addParticle(x, y, random(10, 20));
    
    // Apply a force to all particles in the system based on the mouse position
    let mouseForce = createVector(x - width/2, mouseY - y/2);
    mouseForce.mult(0.001);
    ps.applyForce(mouseForce);
    
    // Update and display all particles in the system
    ps.run();
  }

function map(value, x1, y1, x2, y2){
    return (value - x1) * (y2 - x2) / (y1 - x1) + x2;
  }


let showDebug = false;
let debugButton = document.getElementById("debugbutton");
let debugInfo = document.getElementById("debug");
debugButton.addEventListener("click", ()=>{
    showDebug = !showDebug;
    debugInfo.style.display = showDebug?"block":"none";
})



function permission() {
    document.getElementById("gyro-text").innerHTML = "getting access to gyroscope.";

    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {
                // document.getElementById("gyro-text").innerHTML = "Ready.";
                document.getElementById("getGyroAccess").style.display = "none";

                window.addEventListener('deviceorientation', (event) => {
                    a = event.alpha;
                    b = event.beta;
                    g = event.gamma;

                    document.getElementById("alpha").innerHTML = a;
                    document.getElementById("beta").innerHTML = b;
                    document.getElementById("gamma").innerHTML = g;
                });
                window.addEventListener('devicemotion', (event) => {
                    document.getElementById("acc_x").innerHTML = event.acceleration.x;
                    document.getElementById("acc_y").innerHTML = event.acceleration.y;
                });
            }
        })
            .catch( console.error )
    } else {
        document.getElementById("gyro-text").innerHTML = "Cannot access your phone's gyroscope.";
    }
}
