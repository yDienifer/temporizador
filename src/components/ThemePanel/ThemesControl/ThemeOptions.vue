<template>
    <div>
        <img id="theme-cover" :src="themeCover" :alt="themeAlt" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ThemeOptions",
    props: {
        themeCover: {
            type: String,
            required: true
        },
        themeAlt: {
            type: String,
            required: true
        }
    }
})
</script>

<style scoped>
#theme-cover {
    width: 60%;
    opacity: 0.4;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 5px;
    transition: 0.8s all;
}

#theme-cover:hover {
    opacity: 1;
}

@media(max-width: 425px) {
    #theme-cover {
        width: 100%;
    }
}
</style>
