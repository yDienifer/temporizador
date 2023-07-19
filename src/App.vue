<template>
  <main>
    <video class="background" :src="getBackgroundVideoUrl(selectedTheme).mp4" muted autoplay loop>
      <source :src="getBackgroundVideoUrl(selectedTheme).mp4" type="video/mp4">
      <source :src="getBackgroundVideoUrl(selectedTheme).ogv" type="video/ogg">
      <source :src="getBackgroundVideoUrl(selectedTheme).webm" type="video/webm">
      O seu navegador não suporta o vídeo de fundo. Tente novamente ou troque de navegador.
    </video>
    <div class="timer-container">
      <div class="timer-header">
        <h1 :style="{ color: themeColors.secondaryColor }">NeonChrono</h1>
        <div class="quotes-container">
          <Quote :quote="firstQuote.quote" :quoteCharacter="firstQuote.quoteCharacter" />
        </div>
        <div class="quote-change-button-container">
          <QuoteControlButton @exchangeQuote="changeTheQuote" />
        </div>
      </div>
    </div>
    <div class="counter-container">
      <MadCounter />
    </div>
    <div class="themes-container">
      <ThemePanel @themeChanged="onThemeChanged" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import MadCounter from './components/MadCounter/MadCounter.vue';
import Quote from './components/Quotes/Quote.vue';
import QuoteControlButton from './components/Quotes/QuoteControlButton/QuoteControlButton.vue';
import ThemePanel from './components/ThemePanel/ThemePanel.vue';

// importando json com as citações para o componente quote
import quotesJson from './quotes';

type quoteObject = {
  id: string,
  quote: string,
  quoteCharacter: string
};

export default defineComponent({
  name: "App",
  components: {
    MadCounter,
    Quote,
    QuoteControlButton,
    ThemePanel
  },
  setup() {
    const quotes: quoteObject[] = reactive(quotesJson.quotes);
    const firstQuote = ref(quotes[0]);

    const selectedTheme = ref('rui'); // Estado para armazenar o tema selecionado

    return {
      quotes,
      firstQuote,
      selectedTheme
    };
  },
  methods: {
    changeTheQuote(): void {
      // Pega todos os index e depois sorteia
      const RANDOM_INDEX = Math.floor(Math.random() * this.quotes.length);
      const QUOTE_DRAWN = this.quotes[RANDOM_INDEX]; // Index sorteado
      this.firstQuote = QUOTE_DRAWN; // firstQuote atribuido com o index sorteado
    },

    /* Retornando vídeos de fundos diferentes e seus respectivos formatos, de acordo 
    com o tema escolhido pelo usuário. */
    getBackgroundVideoUrl(theme: string) {
      if (theme === 'rui') {
        return {
          mp4: '../public/video/RuiLowerMoonFiveLiveBackground/rui-kimetsu-no-yaiba-moewalls-com.mp4',
          ogv: '../public/video/RuiLowerMoonFiveLiveBackground/rui-kimetsu-no-yaiba-moewalls-com.ogv',
          webm: '../public/video/RuiLowerMoonFiveLiveBackground/rui-kimetsu-no-yaiba-moewalls-com.webm'
        };
      } else if (theme === 'shinobu') {
        return {
          mp4: '../public/video/ShinobuKochouLiveBackground/shinobu-kochou-kimetsu-no-yaiba-moewalls-com.mp4',
          ogv: '../public/video/ShinobuKochouLiveBackground/shinobu-kochou-kimetsu-no-yaiba-moewalls-com.ogv',
          webm: '../public/video/ShinobuKochouLiveBackground/shinobu-kochou-kimetsu-no-yaiba-moewalls-com.webm'
        };
      } else if (theme === 'zenitsu') {
        return {
          mp4: '../public/video/ZenitsuLiveBackground/zenitsu-kimetsu-no-yaiba-moewalls-com.mp4',
          ogv: '../public/video/ZenitsuLiveBackground/zenitsu-kimetsu-no-yaiba-moewalls-com.ogv',
          webm: '../public/video/ZenitsuLiveBackground/zenitsu-kimetsu-no-yaiba-moewalls-com.webm'
        };
      }
    },

    onThemeChanged(theme: string) {
      this.selectedTheme = theme; // Atualizar o estado do tema selecionado
    }
  },
  computed: {
    selectedTheme() {
      return this.$store.state.selectedTheme; // Acessar o tema selecionado a partir do estado global
    },
    themeColors() {
      const theme = this.$store.state.themeColors[this.selectedTheme];
      return theme ? theme : {}; // Verificar se o tema selecionado possui as cores personalizadas definidas
    },
  },
});
</script>

<style scoped>
@media (max-width: 425px) {
  main .background {
    left: -420px;
  }

  .themes-container {
    padding: 15px;
    position: absolute;
    top: 85%;
  }
}

@media (max-width: 768px) {
  main .background {
    width: 1100px;
  }
}

main {
  height: 100vh;
  position: relative;
  width: 100vw;
}

main .background {
  opacity: 0.2;
  position: absolute;
  width: 100%;
  z-index: -1;
}

main .counter-container {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

main .quote-change-button-container {
  bottom: 10px;
  left: 50%;
  position: absolute;
  transform: translateX(-50%);
}

main .quotes-container {
  margin-top: 6px;
}

main .timer-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  width: 100%;
}

main .timer-container h1 {
  color: #3F8074;
  font-family: "Demon-Slayer", 'Kanit', sans-serif;
  font-size: 2.5em;
  text-transform: uppercase;
}

main .timer-header h1 {
  text-align: center;
  width: 100%;
}

.themes-container {
  padding: 15px;
  position: absolute;
  right: 80%;
  top: 50%;
  transform: translateY(-50%);
}
</style>