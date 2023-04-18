
// request access to the user's microphone
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
      var averageFrequency = sum / frequencyData.length;
      console.log(averageFrequency);

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