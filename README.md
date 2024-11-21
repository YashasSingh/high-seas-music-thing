# high-seas-music-thing


# Text-to-Beatbox Web App 🎤

This is a fun and interactive web application that converts text into beatboxing sounds. Users can type in beatboxing patterns, adjust the playback speed (BPM), control volume, and listen to their custom beats!

## Features
- **Real-Time Beatboxing**: Converts text into beatboxing sounds using predefined mappings.
- **Adjustable BPM**: Change the speed of the beat (60–180 BPM).
- **Volume Control**: Fine-tune playback volume.
- **Playback Options**: Play, pause, and stop functionality.
- **Responsive Design**: Works seamlessly across devices.
- **Tooltips**: Provides guidance on using the app.

## How It Works
1. Enter text in the input box (e.g., `boom psh ka`).
2. Adjust the BPM slider to set the playback speed.
3. Use the volume slider to set the playback volume.
4. Click "Play" to hear your beat!

## Technologies Used
- **HTML**: Structure of the application.
- **CSS**: Styling and layout.
- **JavaScript**: Logic for audio playback and user interaction.
- **Web Audio API**: Handles sound generation and playback.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/text-to-beatbox.git
   cd text-to-beatbox
   ```

2. Place audio files in the project directory:
   - `punch-or-kick-sound-effect-1-239696.mp3`
   - `hi-hat-loop-8-100-bpm-65463.mp3`
   - `tr808-snare-drum-241403.mp3`
   - `hi-hat-6-231041.mp3`
   - `tr808-clap-241405.mp3`

3. Open `index.html` in your browser to run the app.

## Usage
### Text-to-Sound Mapping
| Text   | Sound                     |
|--------|---------------------------|
| `boom` | Kick Drum                 |
| `psh`  | Hi-Hat                    |
| `ka`   | Snare Drum                |
| `chk`  | Hi-Hat Alternate          |
| `clap` | Clap                      |

### Controls
- **BPM Slider**: Adjust the beats per minute.
- **Volume Slider**: Adjust the playback volume.
- **Buttons**:
  - `Play`: Start the beat.
  - `Pause`: Pause playback.
  - `Stop`: Stop playback and clear input.
  - `Reset`: Reset all settings to default.

## Project Structure
```
project-directory/
│
├── index.html       # Main HTML file
├── styles.css       # CSS for styling
├── script.js        # JavaScript for functionality
├── README.md        # Project documentation
└── audio/           # Folder for sound files
    ├── punch-or-kick-sound-effect-1-239696.mp3
    ├── hi-hat-loop-8-100-bpm-65463.mp3
    ├── tr808-snare-drum-241403.mp3
    ├── hi-hat-6-231041.mp3
    └── tr808-clap-241405.mp3
```

## Troubleshooting
- **No Sound?**
  - Ensure your browser supports the Web Audio API.
  - Verify the paths to the audio files are correct.
- **Play Button Not Working?**
  - Check for JavaScript console errors in the browser developer tools.
  - Ensure audio files are properly loaded.

## Future Enhancements
- Add support for custom sound uploads.
- Implement a beat visualizer for dynamic animations.
- Extend text-to-sound mapping for more complex beats.

## License
This project is licensed under the MIT License.

---

Enjoy making beats! 🎶

