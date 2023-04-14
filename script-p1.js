let btn = document.getElementById("button")


function permission () {
    document.getElementById('doeSupported').innerText = 'asking';
    if ( typeof( DeviceMotionEvent ) !== "undefined" && typeof( DeviceMotionEvent.requestPermission ) === "function" ) {
        // (optional) Do something before API request prompt.
        DeviceMotionEvent.requestPermission()
            .then( response => {
            // (optional) Do something after API prompt dismissed.
            if ( response == "granted" ) {
                document.getElementById('doeSupported').innerText = 'Yes!!';

                window.addEventListener('deviceorientation', (event) => {
                    document.getElementById("alpha").innerHTML = event.alpha;
                    document.getElementById("beta").innerHTML = event.beta;
                    document.getElementById("gamma").innerHTML = event.gamma;
                });
                window.addEventListener('devicemotion', (event) => {
                    // console.log(`${event.acceleration.x} m/s2`);
                    document.getElementById("acc_x").innerHTML = event.acceleration.x;
                    document.getElementById("acc_y").innerHTML = event.acceleration.y;


                });
            }
        })
            .catch( console.error )
    } else {
        alert( "DeviceMotionEvent is not defined" );
        document.getElementById('doeSupported').innerText = 'still no';
    }
}
btn.addEventListener( "click", permission );