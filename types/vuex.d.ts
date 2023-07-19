import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // Defina o InjectionKey do Vuex para o tipo Store<AppState>
  export interface ComponentCustomProperties {
    $store: Store<AppState>;
  }
}

// Defina os tipos para o estado e as mutações do Vuex
export interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
}

export interface AppState {
  selectedTheme: string;
  themeColors: { [key: string]: ThemeColors };
}