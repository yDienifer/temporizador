<template>
    <div class="container-timer-button-controls">
        <span class="control-button" @click="restartTheTimer">
            <span class="control-button-text">Restart</span>
            <i class="control-button-icon">
                <font-awesome-icon :icon="['fas', 'arrow-rotate-left']" />
            </i>
        </span>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

// icons 
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faArrowRotateLeft);

export default defineComponent({
    name: "RestartButton",
    components: {
        FontAwesomeIcon
    },
    methods: {
        restartTheTimer() {
            this.$emit('restart')
        }
    }
})
</script>
