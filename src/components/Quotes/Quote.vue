<template>
  <div class="quote-container">
    <p class="quote-text">{{ quote }}</p>
    <span class="quote-author">{{ quoteCharacter }}</span>
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
.quote-container {
  margin: 0 auto;
  text-align: center;
  width: 80%;
}

.quote-text {
  color: rgba(255, 255, 255, 0.685);
  font-style: italic;
  font-size: clamp(12px, 3vw, 16px);
  margin-bottom: 5px;
}

.quote-author {
  color: white;
  font-size: clamp(12px, 3vw, 16px);
  font-weight: bold;
  margin-top: 10px;
}
</style>
