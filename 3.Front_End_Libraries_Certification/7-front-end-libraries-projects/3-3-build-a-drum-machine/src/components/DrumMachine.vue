<template>
  <!--
    User Story #1: I should be able to see an outer container with 
    a corresponding id="drum-machine" that contains all other elements.
  -->
  <div id="drum-machine">
    <!--
      User Story #2: Within #drum-machine I can see an element with 
      a corresponding id="display".
    -->
    <p id="display">{{padPlayed}}</p>
    <!--
        User Story #3: Within #drum-machine I can see 9 clickable 
        drum pad elements, each with a class name of drum-pad, a unique 
        id that describes the audio clip the drum pad will be set up 
        to trigger, and an inner text that corresponds to one 
        of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
        The drum pads MUST be in this order.

        User Story #5: When I click on a .drum-pad element, 
        the audio clip contained in its child audio element should
        be triggered.
    -->
    <button class="drum-pad" id="padQ" @click="play('Q')">
      <span>Q</span>
      <!--
          User Story #4: Within each .drum-pad, there should be an HTML5 
          audio element which has a src attribute pointing to an audio clip, 
          a class name of clip, and an id corresponding to the inner text
          of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
      -->
      <audio
        id="Q"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/8[kb]80s-Bdrum1.aif.mp3"
        type="audio/mpeg"
      />
    </button>
    <button class="drum-pad" id="padW" @click="play('W')">
      <span>W</span>
      <audio
        id="W"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padE" @click="play('E')">
      <span>E</span>
      <audio
        id="E"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padA" @click="play('A')">
      <span>A</span>
      <audio
        id="A"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/7[kb]80s-HHCLOSE1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padS" @click="play('S')">
      <span>S</span>
      <audio
        id="S"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-SNARE1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padD" @click="play('D')">
      <span>D</span>
      <audio
        id="D"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-TAMB1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padZ" @click="play('Z')">
      <span>Z</span>
      <audio
        id="Z"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM1.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padX" @click="play('X')">
      <span>X</span>
      <audio
        id="X"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/22[kb]80s-TOM3.aif.mp3"
      />
    </button>
    <button class="drum-pad" id="padC" @click="play('C')">
      <span>C</span>
      <audio
        id="C"
        class="clip"
        src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM5.aif.mp3"
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "DrumMachine",
  data() {
    return {
      padPlayed: ""
    };
  },
  mounted() {
    /*
      User Story #6: When I press the trigger key associated with 
      each .drum-pad, the audio clip contained in its child audio 
      element should be triggered (e.g. pressing the Q key should 
      trigger the drum pad which contains the string "Q", pressing
      the W key should trigger the drum pad which contains the 
      string "W", etc.).
    */
    window.addEventListener("keypress", e => {
      /*
        User Story #7: When a .drum-pad is triggered, a string describing
        the associated audio clip is displayed as the inner text of 
        the #display element (each string must be unique).
      */
      const padId = `pad${String.fromCharCode(e.keyCode).toUpperCase()}`;
      const pad = document.getElementById(padId);

      if (pad) {
        pad.click();
      }
    });
  },
  methods: {
    play(pad) {
      this.padPlayed = `${pad}`;
      document.getElementById(pad).play();
    }
  }
};
</script>