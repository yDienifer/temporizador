<template>
    <div class="timer-wrapper">
        <div class="timer-minute">
            <span :style="{ color: themeColors.primaryColor, textShadow: '0px 0px 9px ' + themeColors.primaryColor }"
                id="count-timer">{{ timerTime }}</span>
            <!-- :style definido com as cores especificadas no Vuex. Elas são alteradas conforme o tema escolhido pelo usuário-->
        </div>
        <div class="timer-controls">
            <RestartButton @restart="restartTheTimer" /> <!-- Renderizado sempre -->
            <PlayButton @start="startTheTimer" v-if="!timerOn" /> <!-- Renderizado apenas quando o timer estiver parado -->
            <StopButton @stop="stopTheTimer" v-if="timerOn" /> <!-- Renderizado apenas quando o timer estiver rodando -->
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

// Importando componentes de controle do temporizador
import RestartButton from './Controls/RestartButton.vue';
import PlayButton from './Controls/PlayButton.vue';
import StopButton from './Controls/StopButton.vue';

export default defineComponent({
    name: "MadCounter",
    components: {
        PlayButton,
        RestartButton,
        StopButton
    },
    data() {
        return {
            timerTime: "00:00:00", // Formato inicial da minutagem.
            timerOn: false, // Minutagem inicialmente desligada.
            intervalId: 0 // Armazena o identificador de intervalo criado pelo `setInterval`.
        };
    },
    methods: {
        startTheTimer(): void {
            this.timerOn = true;

            // Definindo a opacidade como "1" quando a função `startTimer()` for acionada.
            const COUNT_TIMER = document.getElementById("count-timer") as HTMLElement;
            COUNT_TIMER.style.opacity = "1";

            // Definindo o intervalo de tempo da contagem.
            this.intervalId = setInterval(() => {
                this.timerTime = this.formatTime(this.timerTime);
            }, 1000);
        },

        stopTheTimer(): void {
            this.timerOn = false;

            // Definindo a opacidade como "1" quando a função `startTimer()` for acionada.
            const COUNT_TIMER = document.getElementById("count-timer") as HTMLElement;
            COUNT_TIMER.style.opacity = "0.4";

            // Pausando a contagem baseado no identificador armazenado no `intervalId`.
            clearInterval(this.intervalId);
        },

        restartTheTimer(): void {
            // Definindo a minutagem novamente como "00:00:00".
            this.timerTime = "00:00:00"
        },

        formatTime(time: string) {
            // Definindo os minutos e segundos
            let [hours, minutes, seconds] = time.split(':');
            /* Separando os minutos dos segundos com o split como ":", ou seja, se for 02:30, o 02 
            irá para os minutos, e 30 para os segundos. */

            // Passando os valores de Strings para Numbers.
            let hoursConvertedToInteger = parseInt(hours);
            let minutesConvertedToInteger = parseInt(minutes);
            let secondsConvertedToInteger = parseInt(seconds);

            // Quando chegar em 60 segundos, será adicionado 1 minuto.
            if (secondsConvertedToInteger === 59) {
                secondsConvertedToInteger = 0;
                minutesConvertedToInteger++;
            } else if (secondsConvertedToInteger < 59) { // Caso não for igual a 60, continuará adicionando os segundos
                secondsConvertedToInteger++;
            }

            // Definindo a lógica das horas
            if (minutesConvertedToInteger >= 60) {
                secondsConvertedToInteger = 0;
                minutesConvertedToInteger = 0;
                hoursConvertedToInteger++;
            }

            // Dizendo como a minutagem deve ser formatada
            let formattedTime =
                (hoursConvertedToInteger < 10 ? `0${hoursConvertedToInteger}` : hoursConvertedToInteger) +
                ":" +
                (minutesConvertedToInteger < 10 ? `0${minutesConvertedToInteger}` : minutesConvertedToInteger) +
                ":" +
                (secondsConvertedToInteger < 10 ? `0${secondsConvertedToInteger}` : secondsConvertedToInteger);

            return formattedTime;
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
});
</script>


<style>
.container-timer-button-controls .control-button {
    cursor: pointer;
}

.container-timer-button-controls .control-button-icon {
    color: #ffffff9a;
    font-size: clamp(14px, 4vw, 18px);
    padding: 0 15px 0 5px;
}

.container-timer-button-controls .control-button-text {
    color: #ffffff9a;
    font-size: clamp(16px, 4vw, 26px);
}

.main .quote-container #quote-author {
    color: white;
    font-weight: bold;
    width: 100%;
}

.timer-controls {
    align-items: center;
    border: 1px solid #ffffff9a;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 10px 3px;
    width: 100%;
}

.timer-minute #count-timer {
    color: #DB4433;
    filter: brightness(1.4);
    font-family: "Demon-Slayer", 'Kanit', sans-serif;
    font-size: clamp(70px, 20vw, 140px);
    letter-spacing: 10px;
    opacity: 0.4;
    text-shadow: 0px 0px 9px #DB4433;
    text-transform: uppercase;
}
</style>