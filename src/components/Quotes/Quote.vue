<template>
  <div class="quote-container">
    <p id="quote-text">{{ quote }}</p>
    <span id="quote-author">{{ quoteCharacter }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Quote",
  props: {
    quote: {
      type: String
    },
    quoteCharacter: {
      type: String
    }
  }
})
</script>

<style scoped>
main .quote-container {
  margin: 0 auto;
  text-align: center;
  width: 60%;
}

main .quote-container #quote-author {
  color: white;
  font-weight: bold;
  width: 100%;
}

main .quote-container #quote-text {
  color: rgba(255, 255, 255, 0.685);
  font-style: italic;
  margin-bottom: 5px;
  width: 100%;
}
</style>
