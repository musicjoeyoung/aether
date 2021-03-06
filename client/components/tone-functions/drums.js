import * as Tone from "tone";

//percussion
export default [
  function playKickDrumToneJS() {
    const kickDrum = new Tone.MembraneSynth({
      volume: 6,
    }).toDestination();
    kickDrum.triggerAttackRelease();
  },
  function playSnareWav() {
    const snare = new Audio("./sounds/drums/snare.wav");
    snare.play();
  },
  function playClosedHatWav() {
    const snare = new Audio("./sounds/drums/closed-hat.wav");
    snare.play();
  },
  function playKickWav() {
    const snare = new Audio("./sounds/drums/kick.wav");
    snare.play();
  },
  function playClapWav() {
    const snare = new Audio("./sounds/drums/clap.wav");
    snare.play();
  },
  function playToneHanddrum() {
    const player = new Tone.Player(
      "https://tonejs.github.io/audio/drum-samples/handdrum-loop.mp3"
    );
    player.autostart = true;
    const filter = new Tone.AutoFilter(4).start();
    const distortion = new Tone.Distortion(0.5);
    // connect the player to the filter, distortion and then to the master output
    player.chain(filter, distortion, Tone.Destination);
  },
  function playDrumsC1() {
    const note = new Audio("./sounds/drums/C1.mp3");
    note.play();
  },
  function playDrumsC2() {
    const note = new Audio("./sounds/drums/C2.mp3");
    note.play();
  },
  function playDrumsC3() {
    const note = new Audio("./sounds/drums/C3.mp3");
    note.play();
  },
  function playDrumsC4() {
    const note = new Audio("./sounds/drums/C4.mp3");
    note.play();
  },
  function playDrumsC5() {
    const note = new Audio("./sounds/drums/C5.mp3");
    note.play();
  },
  function playDrumsC6() {
    const note = new Audio("./sounds/drums/C6.mp3");
    note.play();
  },
  function playDrumsC7() {
    const note = new Audio("./sounds/drums/C7.mp3");
    note.play();
  },
  function playDrumsC8() {
    const note = new Audio("./sounds/drums/C8.mp3");
    note.play();
  },
];
