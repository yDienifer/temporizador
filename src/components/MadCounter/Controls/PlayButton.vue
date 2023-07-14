<template>
    <div class="container-timer-button-controls">
        <span class="control-button" @click="startTheTimer">
            <span class="control-button-text">Play</span>
            <i class="control-button-icon">
                <font-awesome-icon :icon="['fas', 'play']" />
            </i>
        </span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// icons 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faPlay);

export default defineComponent({
    name: "PlayButton",
    components: {
        FontAwesomeIcon
    },
    methods: { // Onde fica as lógicas de funções
        startTheTimer() { // Chamado quando o button é clicado
            this.$emit('start'); // Diz para o MadCounter que o button foi clicado
        }
    }
})
</script>
