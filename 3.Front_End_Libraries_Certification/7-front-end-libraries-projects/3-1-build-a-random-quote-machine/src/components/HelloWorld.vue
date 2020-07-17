<template>
  <!--
    User Story #1: I can see a wrapper element with a corresponding 
    id="quote-box".
  -->
  <div id="quote-box">
    <!--
      User Story #2: Within #quote-box, I can see an element 
      with a corresponding id="text".
    -->
    <p id="text">{{text}}</p>
    <!--
      User Story #3: Within #quote-box, I can see an element 
      with a corresponding id="author".
    -->
    <p id="author">{{author}}</p>
    <!--
      User Story #4: Within #quote-box, I can see a clickable 
      element with a corresponding id="new-quote".
    -->
    <button id="new-quote">new-quote</button>
    <!--
      User Story #5: Within #quote-box, I can see a clickable 
      a element with a corresponding id="tweet-quote".
    -->
    <a id="tweet-quote">tweet-quote</a>
    <!--

      User Story #6: On first load, my quote machine displays 
      a random quote in the element with id="text".

      User Story #7: On first load, my quote machine displays 
      the random quote's author in the element with id="author".

      User Story #8: When the #new-quote button is clicked, 
      my quote machine should fetch a new quote and display 
      it in the #text element.

      User Story #9: My quote machine should fetch the new 
      quote's author when the #new-quote button is clicked 
      and display it in the #author element.

      User Story #10: I can tweet the current quote 
      by clicking on the #tweet-quotea element. 
      This a element should include the "twitter.com/intent/tweet" 
      path in its href attribute to tweet the current quote.

      User Story #11: The #quote-box wrapper element should be 
      horizontally centered. Please run tests with browser's zoom 
      level at 100% and page maximized.
    -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    author: {
      default: "default author",
      type: String
    },
    text: {
      default: "default text",
      type: String
    },
    msg: String
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
