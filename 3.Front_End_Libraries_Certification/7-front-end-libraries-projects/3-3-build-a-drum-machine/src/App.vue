<template>
  <div id="app">
    <drum-machine msg="Hello Vue in CodeSandbox!"/>
  </div>
</template>

<script>
import DrumMachine from "./components/DrumMachine";

export default {
  name: "App",
  components: {
    DrumMachine
  },
  mounted() {
    let externalScript = document.createElement("script");
    externalScript.setAttribute(
      "src",
      "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
    );
    document.head.appendChild(externalScript);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
