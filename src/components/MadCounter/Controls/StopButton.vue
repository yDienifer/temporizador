<template>
    <div class="container-timer-button-controls">
        <span class="control-button" @click="stopTheTimer">
            <span class="control-button-text">Stop</span>
            <i class="control-button-icon">
                <font-awesome-icon :icon="['fas', 'stop']" />
            </i>
        </span>
    </div>
</template>
    
<script lang="ts">
import { defineComponent } from 'vue';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faStop } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faStop);

export default defineComponent({
    name: "StopButton",
    components: {
        FontAwesomeIcon
    },
    methods: {
        stopTheTimer() {
            this.$emit('stop');
        }
    }
})
</script>