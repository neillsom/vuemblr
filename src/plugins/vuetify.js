import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
		options: { customProperties: true },
		themes: {
			light: {
        primary: '#36465D',
				secondary: '#2E4B65',
				accent: '#6F9D4D',
				error: '#5CA2C7',
			},
			dark: {
        primary: '#36465D',
				secondary: '#2E4B65',
				accent: '#6F9D4D',
				error: '#5CA2C7',
			},
    },
    icons: {
      iconfont: 'fa4', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },
	},
});
