import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
	theme: {
		// dark: true,
		options: { customProperties: true },
		themes: {
			light: {
				anchor: '#ff5c93',
				primary: '#536dfe',
				secondary: '#ff5c93',
				accent: '#82b1ff',
				error: '#ff4081',
				info: '#9013fe',
				success: '#3cd4a0',
				postText: '#757575',
				surface: '#ffffff',
				background: '#f6f7ff',
				likeColor: '#ff5c93',
			},
			dark: {
				anchor: '#3E94C2',
				primary: '#36465D',
				secondary: '#3E94C2',
				accent: '#6F9D4D',
				error: '#5CA2C7',
				background: '#36465D',
				postText: '#abb2b9',
				surface: '#ffffff',
				likeColor: '#ff492f',
			},
		},
		icons: {
			iconfont: 'fa4',
		},
	},
});
