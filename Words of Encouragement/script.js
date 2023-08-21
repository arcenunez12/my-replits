// This is what I did.
function getVolume() {
    let currentVolume = document.getElementById("volume").value;
    // console.log(currentVolume);
    return currentVolume;
  }
  
  // console.log(getVolume());
  
  /* This function "renders" some bit of text as audio to the user. */
  function renderTTS(text) {
    var synthesis = window.speechSynthesis;
  
    console.log("Available Voices:");
    var voice = synthesis.getVoices().filter(function (voice) {
      console.log(voice.name + " " + voice.lang);
      return voice.name === 'Google UK English Female';
    })[0];
  
    // Create an utterance object
    var utterance = new SpeechSynthesisUtterance(text);
  
    // Set utterance properties
    utterance.voice = voice;
    utterance.pitch = 1;
    utterance.rate = 1;
    // utterance.volume = 1; - origianl code
    // LEVEL UP! This is how I adjusted the volume. 
    // Once the slider is changed, the volume is adjusted.
    // I did try to figure out to make the volume continusoly change
    // if the user were to continue sliding the volume, but 
    // was not able to figure that out.
    utterance.volume = getVolume();
  
    // Speak the utterance
    synthesis.speak(utterance);
  }
  
  // Our code
  function encourage() {
    // Get the name and words of the encouragement
    let name = document.getElementById("name").value;
    let encourgement = document.getElementById("encouragement").value;
    let postScript = document.getElementById("post-script").value;
  
    // Combine into some text - interpolate
    let message = `Hello ${name}, I have something I would like to tell you. ${encourgement}. PS, ${postScript}. Have a nice day!`;
  
    // Render it to the user
    renderTTS(message);
  }
  
  
  