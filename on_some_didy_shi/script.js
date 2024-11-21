const sounds = {
    "boom": "punch-or-kick-sound-effect-1-239696.mp3",
    "psh": "hi-hat-loop-8-100-bpm-65463.mp3",
    "ka": "tr808-snare-drum-241403.mp3",
    "chk": "hi-hat-6-231041.mp3",
    "clap": "tr808-clap-241405.mp3"
};

let audioContext = new (window.AudioContext || window.webkitAudioContext)();
let volumeControl = audioContext.createGain();
volumeControl.connect(audioContext.destination);
volumeControl.gain.value = 0.5;  // Default volume at 50%
let isPlaying = false;
let beatboxInterval;

async function loadSound(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    return audioContext.decodeAudioData(arrayBuffer);
}

async function playSound(buffer) {
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(volumeControl);
    source.start(0);
}

async function playBeatbox() {
    if (isPlaying) return; // Prevent multiple playbacks
    isPlaying = true;
    const textInput = document.getElementById("textInput").value;
    const bpm = parseInt(document.getElementById("bpmInput").value) || 120;
    const words = textInput.toLowerCase().split(" ");
    const secondsPerBeat = 60 / bpm;

    let currentIndex = 0;
    beatboxInterval = setInterval(async () => {
        if (currentIndex >= words.length) {
            clearInterval(beatboxInterval);
            isPlaying = false;
        } else {
            const word = words[currentIndex++];
            if (sounds[word]) {
                const soundBuffer = await loadSound(sounds[word]);
                playSound(soundBuffer);
            }
        }
    }, secondsPerBeat * 1000);
}

function updateBpmDisplay() {
    const bpmInput = document.getElementById("bpmInput");
    document.getElementById("bpmDisplay").textContent = bpmInput.value;
}

function updateVolume() {
    const volumeInput = document.getElementById("volumeInput");
    volumeControl.gain.value = volumeInput.value;
    document.getElementById("volumeDisplay").textContent = `${Math.round(volumeInput.value * 100)}%`;
}

function pauseBeatbox() {
    clearInterval(beatboxInterval);
    isPlaying = false;
}

function stopBeatbox() {
    pauseBeatbox();
    document.getElementById("textInput").value = "";  // Clear text
    resetVisualizer();
}

function resetText() {
    document.getElementById("textInput").value = "";
    document.getElementById("bpmInput").value = 120;
    document.getElementById("volumeInput").value = 0.5;
    updateBpmDisplay();
    updateVolume();
}

function toggleHelp() {
    const helpText = document.getElementById("helpText");
    helpText.classList.toggle("hidden");
}

async function loadSound(url) {
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    return audioContext.decodeAudioData(arrayBuffer);
}

async function playSound(buffer) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.connect(audioContext.destination);
    source.start(0);
}

async function playBeatbox() {
    const textInput = document.getElementById("textInput").value;
    const bpm = parseInt(document.getElementById("bpmInput").value) || 120;
    const words = textInput.toLowerCase().split(" ");
    const secondsPerBeat = 60 / bpm;

    for (const word of words) {
        if (sounds[word]) {
            const soundBuffer = await loadSound(sounds[word]);
            playSound(soundBuffer);
            await new Promise(resolve => setTimeout(resolve, secondsPerBeat * 1000));
        }
    }
}

function updateBpmDisplay() {
    const bpmInput = document.getElementById("bpmInput");
    const bpmDisplay = document.getElementById("bpmDisplay");
    bpmDisplay.textContent = bpmInput.value;
}

function resetText() {
    document.getElementById("textInput").value = "";
    document.getElementById("bpmInput").value = 120;
    updateBpmDisplay();
}
