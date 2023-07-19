<template>
    <div class="quotes-control-button-container" @click="changeTheQuote">
        <span :style="{ color: themeColors.primaryColor, textShadow: '0px 0px 9px ' + themeColors.primaryColor }"
            class="button-to-change-quote">
            <span class="quote-change-button-text">
                Get a random quote
            </span>
            <i :style="{ color: themeColors.primaryColor, textShadow: '0px 0px 9px ' + themeColors.primaryColor }"
                class="quote-change-button-icon">
                <font-awesome-icon :icon="['fas', 'wand-sparkles']" />
            </i>
        </span>
    </div>
</template>
      
<script lang="ts">
import { defineComponent } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWandSparkles } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faWandSparkles);

export default defineComponent({
    name: "QuoteControlButton",
    components: {
        FontAwesomeIcon
    },
    methods: {
        changeTheQuote(): void {
            this.$emit('exchangeQuote');
        }
    },
    computed: {
        selectedTheme(): void {
            return this.$store.state.selectedTheme; // Acessar o tema selecionado a partir do estado global
        },

        themeColors() {
            const theme = this.$store.state.themeColors[this.selectedTheme];
            return theme ? theme : {}; // Verificar se o tema selecionado possui as cores personalizadas definidas
        },
    },
})
</script>
  
<style scoped>
.quotes-control-button-container {
    cursor: pointer;
}

.button-to-change-quote {
    color: #DB4433;
    font-size: clamp(16px, 5vw, 26px);
    opacity: 0.3;
    transition: all 0.3s;
}

.quotes-control-button-container:hover .button-to-change-quote {
    text-shadow: 1px 1px 10px #DB4433;
    opacity: 1;
}

.quote-change-button-text {
    font-family: 'Demon-Slayer', 'Kanit', sans-serif;
    text-transform: uppercase;
    margin-right: 5px;
}
</style>
  