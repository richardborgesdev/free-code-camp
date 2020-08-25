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
    <div id="display">
      <!--
        User Story #3: Within #drum-machine I can see 9 clickable 
        drum pad elements, each with a class name of drum-pad, a unique 
        id that describes the audio clip the drum pad will be set up 
        to trigger, and an inner text that corresponds to one 
        of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. 
        The drum pads MUST be in this order.
      -->
      <button class="drum-pad" id="pad1" @click="play('Q')">
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
      <button class="drum-pad" id="pad2" @click="play('W')">
        <span>W</span>
        <audio
          id="W"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/14[kb]80s-COWBELL1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad3" @click="play('E')">
        <span>E</span>
        <audio
          id="E"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/83[kb]80s-CRASH1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad4" @click="play('A')">
        <span>A</span>
        <audio
          id="A"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/7[kb]80s-HHCLOSE1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad5" @click="play('S')">
        <span>S</span>
        <audio
          id="S"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-SNARE1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad6" @click="play('D')">
        <span>D</span>
        <audio
          id="D"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/20[kb]80s-TAMB1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad7" @click="play('Z')">
        <span>Z</span>
        <audio
          id="Z"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM1.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad8" @click="play('X')">
        <span>X</span>
        <audio
          id="X"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/22[kb]80s-TOM3.aif.mp3"
        />
      </button>
      <button class="drum-pad" id="pad9" @click="play('C')">
        <span>C</span>
        <audio
          id="C"
          class="clip"
          src="https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/DRUM%20MACHINES/80s%20Drum%20Machine/15[kb]80s-TOM5.aif.mp3"
        />
      </button>
    </div>
    <!--
      User Story #5: When I click on a .drum-pad element, 
      the audio clip contained in its child audio element should
      be triggered.

      User Story #6: When I press the trigger key associated with 
      each .drum-pad, the audio clip contained in its child audio 
      element should be triggered (e.g. pressing the Q key should 
      trigger the drum pad which contains the string "Q", pressing
       the W key should trigger the drum pad which contains the 
       string "W", etc.).

      User Story #7: When a .drum-pad is triggered, a string describing
      the associated audio clip is displayed as the inner text of 
      the #display element (each string must be unique).
    -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    play(pad) {
      document.getElementById(pad).play();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>