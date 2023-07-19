import { createStore, Store } from 'vuex';
import { AppState } from '../types/vuex';
export const key = Symbol('store');

interface ThemeColors {
  primaryColor: string;
  secondaryColor: string;
}

interface State {
  selectedTheme: string;
  themeColors: { [key: string]: ThemeColors };
}

const store = createStore<State>({
  state() {
    return {
      selectedTheme: 'default',
      themeColors: {
        rui: {
          primaryColor: '#DB4433',
          secondaryColor: '#3F8074',
        },
        shinobu: {
          primaryColor: '#545B7A',
          secondaryColor: '#73677B',
        },
        zenitsu: {
          primaryColor: "#F8D754",
          secondaryColor: "#B98843"
        }
      },
    };
  },
  mutations: {
    setTheme(state, theme) {
      state.selectedTheme = theme;
    },
    setThemeColors(state, colors) {
      state.themeColors[state.selectedTheme] = colors;
    },
  },
});

export default store;