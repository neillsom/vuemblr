import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		dark: true,
		options: { customProperties: true },
		themes: {
			light: {
				anchor: '#0096c7',
				primary: '#0096c7',
				secondary: '#a0b9c8',
				accent: '#048ba8',
				error: '#ef476f',
				iconColor: '#ffffff',
				info: '#2196f3',
				success: '#06d6a0',
				warning: '#ffd166',
				surface: '#f2f5f8',
			},
			dark: {
				primary: '#36465D',
				secondary: '#3E94C2',
				accent: '#6F9D4D',
				error: '#5CA2C7',
				background: '#36465D',
				iconColor: '#ffffff',
				surface: '#ffffff',
			},
		},
		icons: {
			iconfont: 'fa4',
		},
	},
});
