class Particle {
  constructor(x, y, size) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.size = size;
    // this.color = color(random(63, 191), random(127, 255), random(191, 255), 127);
    
        // this.color = color(random(0, 40), random(0, 40), random(0, 40), 200);
    this.color = color(0,0,0);
  }
  
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
    if (y < height/4) {
    // dark green
    this.color = color(2,115+sin(frameCount*0.03)*20,115,100);
  } else if (y > height/4 && y < height/2) {
    // green3, 140, 127
    this.color = color(3,140+sin(frameCount*0.03)*20,127,100);
  } else if (y > height/2 && y < height/4*3) {
    //light green 169, 217, 208
    this.color = color(169,217+sin(frameCount*0.03)*20,208,100);
  }else if(y > height/4*3 && y > 0) {
    // 2mibai42, 231, 220
    this.color = color(242,231+sin(frameCount*0.03)*10,220,100);
  }
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



class Petal {
  constructor(angle,radius,color,size,index) {
    this.angle = angle;
    this.radius = radius;    
    this.x = width/2 + cos(radians(this.angle)) * radius;
    this.y = height/2 + sin(radians(this.angle)) * radius;
    this.color = color;
    this.s = size;
    this.floating = true;
    this.speedX = random(2, 5);
    this.speedY = random(1, 2);
    this.shapeType = "circle";
    this.index = index
    this.isDone = false;
  }
  
   display1() {
    if (this.shapeType === "circle") {
      ellipse(this.x, this.y, 50, 50);
    } else {
      rect(this.x, this.y, 50, 50);
    }
  }
  
  display() {
    push();
    translate(this.x-tx, this.y + ty - height/2);
    // rotate(radians(this.angle-90));
    rotate(radians(this.angle-90 + 2*sin(frameCount / (swayLevel + noise(this.index)))));
    stroke(this.color);
    fill(this.color)
    // replace this by nice petal
    // line(0, 0, 10, 0);
    ellipse((-3+3)/this.s,(24+10)/this.s,6/3,6/this.s);

  bezier((1+3)/this.s,(31+10)/this.s,(-8+3)/this.s,(-26+10)/this.s,(15+3)/this.s,(200+10)/this.s,(1+3)/this.s,(31+10)/this.s);
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((-22+3)/this.s,(102+10)/this.s);
  curveVertex((-47+3)/this.s,(119+10)/this.s);
  curveVertex((-47+3)/this.s,(119+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  
//   curveVertex((mouseX-200+x)/s,(mouseY+y)/s);
  
  curveVertex((171-185+3)/this.s,(325-219+10)/this.s);
  
  // curveVertex((mouseX-250+x)/s,(mouseY-200+y)/s);
  // curveVertex((mouseX-250+x)/s,(mouseY-200+y)/s);
  curveVertex((161-185+3)/this.s,(335-219+10)/this.s);
  curveVertex((161-185+3)/this.s,(335-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((171-185+3)/this.s,(325-219+10)/this.s);
  curveVertex((158-185+3)/this.s,(339-219+10)/this.s);
  curveVertex((158-185+3)/this.s,(339-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((180-185+3)/this.s,(328-219+10)/this.s);
  curveVertex((178-185+3)/this.s,(338-219+10)/this.s);
  curveVertex((178-185+3)/this.s,(338-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((196-185+3)/this.s,(328-219+10)/this.s);
  curveVertex((196-185+3)/this.s,(339-219+10)/this.s);
  curveVertex((196-185+3)/this.s,(339-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((202-185+3)/this.s,(328-219+10)/this.s);
  curveVertex((207-185+3)/this.s,(341-219+10)/this.s);
  curveVertex((207-185+3)/this.s,(341-219+10)/this.s);
  endShape();
  
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((213-185+3)/this.s,(326-219+10)/this.s);
  curveVertex((224-185+3)/this.s,(342-219+10)/this.s);
  curveVertex((224-185+3)/this.s,(342-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((175-185+3)/this.s,(329-219+10)/this.s);
  curveVertex((169-185+3)/this.s,(346-219+10)/this.s);
  curveVertex((169-185+3)/this.s,(346-219+10)/this.s);
  endShape();
  
  beginShape();
  noFill();
  strokeWeight(1.5)
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((6+3)/this.s,(96+10)/this.s);
  curveVertex((200-185+3)/this.s,(332-219+10)/this.s);
  curveVertex((201-185+3)/this.s,(349-219+10)/this.s);
  curveVertex((201-185+3)/this.s,(349-219+10)/this.s);
  endShape();  
    
  pop();
  }
  
  checkOutOfCanvas() {
    // horizontally
    if (this.x < 0 || this.x > width) {
      this.isDone = true;
    }
    // vertically
    if (this.y < 0 || this.y > height) {
      this.isDone = true;
    }
  }
  
 move(){
    this.x += this.speedX;
    this.y -= this.speedY;
 }
  
}




//petals
const circleInterval = 200;

let innerPetal = [];
let middlePetal = [];
let outerPetal = [];

let lastCircleTime = 0;
let curCircle = 0;

let counts = 0;
let soundDetected = false;

let hong, lu, lan;

//particle system
let ps = new ParticleSystem();

//phone
let mainText = document.getElementById("main-text");
let startButton = document.getElementById("startButton")
let a;
let b;
let g;
let xc;
let yc;
let intensity;

let x =0;
let y =0;
let sway =0;
let swayLevel =0;


 //stemmm
 var yCenter;  //y coordinate of center
 var yStick; 
 var xShift;
 var yShift;
 
 var phase;  //frames over time
 var period;
 var tx;
 var ty;


//check if the device is the phone
// from: https://stackoverflow.com/a/14301832
// window.mobileAndTabletcheck = function() {
//   var check = false;
//   (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
//   return check;
// };

// if(window.mobileAndTabletcheck()){
  mainText.innerHTML = "🌀";
  document.getElementById("getGyroAccess").style.display = "block";
  startButton.addEventListener("click", permission);
// }else{
//   mainText.innerHTML = "Please visit this page on a mobile phone";
// }


function setup() {
  createCanvas(350, 640);
    //stem 
    yStick = 356;
    yCenter = 660 - yStick;
    
    phase = 0;
    period = 360; //6s * 60frames/s
  
    

  hong = 255; //red
  lu = 255; //green
  lan = 255; //blue  
  for (let i = 0; i < 12 ; i++) {
    innerPetal.push(new Petal((360/12) * i, 30, color(0), 3, i));
    middlePetal.push(new Petal((360/12) * i + 10, 26, color(0), 2, i));
    outerPetal.push(new Petal((360/12) * i + 18, 22, color(0), 1.4, i));
  }
}

function draw() {
//swayyyy
  background(255);

  x = map(g, -80, 80, 0, width);
  y = map(b, -80, 80, 0, height);

  sway = map(intensity,0,100,10,15);

if (intensity < 1000){
  swayLevel = 1000
}else if(intensity > 1000){
  swayLevel = 8
}

//stem
push()
push();
phase = phase + 1.8;
if (phase >= period) {
 phase = 0;
}

if(g >= 50 && g >= 50){
xShift = 50*sin(2*PI*phase/period); //amplitude = 200pxs, 4s a round
yShift = 2*(1 + cos(4*PI*phase/period));  //imitate some up and down
}else if(g<-50){
 if(phase != 90){
   phase = phase + 2
 }if(phase>=90&&phase<=100){
   phase = 90
 }
 // console.log(phase)

xShift = 50*sin(2*PI*phase/period); //amplitude = 200pxs, 4s a round
yShift = 2*(1 + cos(4*PI*phase/period));  //imitate some up and down
 
}else if(g>50){
if(phase != 270){
   phase = phase + 2
 }if(phase >= 270 && phase <= 280){
   phase = 270
 }
 // console.log(phase)

xShift = 50*sin(2*PI*phase/period); //amplitude = 200pxs, 4s a round
yShift = 2*(1 + cos(4*PI*phase/period));  //imitate some up and down
 
}
// translate(width/2 - xShift, yCenter - yShift);

//draw stick
stroke(0);
noFill();
// bezier(0,0,0,0,xShift,yStick/10 + yShift, xShift, yStick + yShift); 

pop()


translate(width/2 - xShift, height/2 - yShift);

//draw stick
stroke(0);
noFill();
bezier(0,0,0,0,xShift,yStick/3 + yShift,xShift,yStick + yShift);
tx = bezierTangent(0,0,xShift,xShift,0.8);
ty = bezierTangent(0,0,yStick/3 + yShift,yStick + yShift,height*0.0007);

var angle = atan2(ty,tx);
angle -= PI/2;

rotate(angle);

fill(255,235,139);
stroke(0);
// ellipse(0,-45,90);
pop()

/////////

  ps.addParticle(x, y, random(11, 21));
  
  // Apply a force to all particles in the system based on the mouse position
  let mouseForce = createVector(x - width/2, y - height/2);
  mouseForce.mult(0.001);
  ps.applyForce(mouseForce);
  ps.run();
  
if (y < height/4) {
    // dark green
    hong = 2;
    lu = 115;
    lan = 115;
  } else if (y > height/4 && y < height/2) {
    // green3, 140, 127
    hong = 3;
    lu = 140;
    lan = 127;
  } else if (y > height/2 && y < height/4*3) {
    //light green 169, 217, 208
    hong = 169;
    lu = 217;
    lan = 208;
  }else if(y > height/4*3 && y>0) {
    // 2mibai42, 231, 220
    hong = 242;
    lu = 231;
    lan = 220;
  }
  noStroke();
  fill(hong,lu,lan);
  // ellipse(mouseX, mouseY, 30, 30);
  
 if (averageFrequency > -80) {
    if (!soundDetected) {
      counts++;
      soundDetected = true;
    }
  } else {
    soundDetected = false;
  }
  // console.log(counts)
  let currTime = millis();
  if (currTime - lastCircleTime > circleInterval) {
    //display
    innerPetal[curCircle].color = color(hong,lu+sin(frameCount*0.03)*20,lan);
    middlePetal[curCircle].color = color(hong+random(20),lu-random(50),lan+random(30));
    outerPetal[curCircle].color = color(hong-random(20),lu+random(50),lan-random(30));
     // outerPetal[curCircle].color = color(random(255), random(255), random(255));
    
    //display1
    // if(mouseIsPressed){
    // innerPetal[curCircle].shapeType = "circle";
    // }else{
    // innerPetal[curCircle].shapeType = "rectangle";
    // }
    
    curCircle = (curCircle+1) % 12;
    lastCircleTime = currTime;
  }
  for (let i = 0; i < innerPetal.length; i++) {
      innerPetal[i].checkOutOfCanvas();
    // if (i !== curCircle) {
      // circles[i].display1();
      innerPetal[i].display();
      middlePetal[i].display();
      outerPetal[i].display();
    // console.log(counts)
  
    
    if(counts == 3){
      innerPetal[i].move();
    }
    if(counts == 2){
       middlePetal[i].move();
    }
    if(counts == 1){
      outerPetal[i].move();
    }   
    // } 
  }
  
    for (let i = innerPetal.length - 1; i >= 0; i--) {
    let inner = innerPetal[i];
    if (inner.isDone == true) {
      //splice
      innerPetal[i].x = width/2 + cos(radians(360/12) *i) * 30;
      innerPetal[i].y = height/2 + sin(radians(360/12) *i) * 30;
      
      middlePetal[i].x = width/2 + cos(radians(360/12) *i ) * 26;
      middlePetal[i].y = height/2 + sin(radians(360/12) *i ) * 26;
      
      outerPetal[i].x = width/2 + cos(radians(360/12) *i ) * 22;
      outerPetal[i].y = height/2 + sin(radians(360/12) *i ) * 22;
      
      
//     innerPetal.push(new Petal((360/12) * i, 30, color(0), 3, i));
//     middlePetal.push(new Petal((360/12) * i + 10, 26, color(0), 2, i));
//     outerPetal.push(new Petal((360/12) * i + 18, 22, color(0), 1.4, i));
      // innerPetal.splice(i, 1); 
      // inner.isDone = false;
      // innerPetal.push(new Petal((360/12) * i, 30, color(0), 3, i));
      // innerPetal.
      console.log(innerPetal.length)
    
      
      //append new 12 petals to innerPetal and display
      
      
//       innerPetal[i].x = width/2 + cos(radians(360/12) *i) * 30;
//       innerPetal[i].y = height/2 + sin(radians(360/12) *i) * 30;
    }
      // console.log(innerPetal.length)
  }
  
  
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

                    // intensity = Math.pow(a, 2) + Math.pow(b, 2) + Math.pow(g, 2);

                    document.getElementById("alpha").innerHTML = a;
                    document.getElementById("beta").innerHTML = b;
                    document.getElementById("gamma").innerHTML = g;
                    // document.getElementById("intensity").innerHTML = intensity;
                });
                window.addEventListener('devicemotion', (event) => {
                    document.getElementById("acc_x").innerHTML = event.acceleration.x;
                    document.getElementById("acc_y").innerHTML = event.acceleration.y;
                    intensity = (event.acceleration.x*event.acceleration.x + event.acceleration.y*event.acceleration.y)*1000000;
                    document.getElementById("intensity").innerHTML = intensity;
                });
            }
        })
            .catch( console.error )
    } else {
        document.getElementById("gyro-text").innerHTML = "Cannot access your phone's gyroscope.";
    }
}






//MICROPHONEEEEE PART from ChatGPT

// request access to the user's microphone
var averageFrequency;
navigator.mediaDevices.getUserMedia({audio: true})
  .then(function(stream) {
    // create a new AudioContext
    var audioContext = new AudioContext();

    // create a new MediaStreamAudioSourceNode using the microphone stream
    var sourceNode = audioContext.createMediaStreamSource(stream);

    // create a new AnalyserNode to analyze the audio data
    var analyserNode = audioContext.createAnalyser();

    // connect the sourceNode to the analyserNode
    sourceNode.connect(analyserNode);

    // set the FFT size to 2048
    analyserNode.fftSize = 2048;

    // create a new Float32Array to hold the frequency data
    var frequencyData = new Float32Array(analyserNode.frequencyBinCount);

    // define a function to update the frequency data
    function updateFrequencyData() {
      // copy the frequency data from the analyserNode to the frequencyData array
      analyserNode.getFloatFrequencyData(frequencyData);

      // calculate the average frequency of the data
      var sum = 0;
      for (var i = 0; i < frequencyData.length; i++) {
        sum += frequencyData[i];
      }
      averageFrequency = sum / frequencyData.length;
      document.getElementById("mic").innerHTML = averageFrequency;

      // if the average frequency is above a certain threshold, assume the user is blowing
      if (averageFrequency > -70) {
        console.log("Blowing detected!");
      }

      // schedule the next update
      requestAnimationFrame(updateFrequencyData);
    }

    // start updating the frequency data
    updateFrequencyData();
  })
  .catch(function(error) {
    console.error("Error accessing microphone:", error);
  });
