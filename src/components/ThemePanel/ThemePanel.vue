<template>
    <aside>
        <ThemeOptions @click="changeTheme('rui')" theme-cover="../../../public/img/Rui.png"
            theme-alt="Rui Lower Moon Five - Theme" />
        <ThemeOptions @click="changeTheme('shinobu')" theme-cover="../../../public/img/Shinobu.png"
            theme-alt="Shinobu Kochō - Theme" />
        <ThemeOptions @click="changeTheme('zenitsu')" theme-cover="../../../public/img/Zenitsu.png"
            theme-alt="Zenitsu Agatsuma - Theme" />
    </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Controles do painel de temas
import ThemeOptions from './ThemesControl/ThemeOptions.vue';

export default defineComponent({
    name: "ThemePanel",
    components: {
        ThemeOptions
    },
    methods: {
        changeTheme(theme: string) {
            this.$emit('themeChanged', theme); // Emitir o evento com o tema selecionado
            this.$store.commit('setTheme', theme); // Aciona o Vuex e aplica o tema selecionado
        },
    }
})
</script>